// 🔐 Tablaaccesos.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TextInput,
  Button,
  Label,
  Alert,
  Badge,
} from "flowbite-react";
import axios from "axios";
import { DBUser } from "@/models/usuarioData";
import { DBAccess } from "@/models/accesoData";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const Tablaaccesos = () => {
  const { t } = useTranslation();


  // Estados de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 👈 Cambia el número de filas por página

  const [users, setUsers] = useState<DBUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<DBUser | null>(null);
  const [accesos, setAccesos] = useState<DBAccess[]>([]);
  const [modulos, setModulos] = useState<{ mod_id: number; mod_nombre: string; mod_descripcion: string; mod_ruta: string }[]>([]);

  const totalPages = Math.ceil(accesos.length / itemsPerPage);

  // Calcular accesos paginados
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAccesos = accesos.slice(startIndex, endIndex);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (page: number) => setCurrentPage(page);

  const [newAccess, setNewAccess] = useState({
    usr_modulo: "",
    usr_descripcion: "",
    mod_ruta: "",
    usr_insertar: "S",
    usr_actualizar: "S",
    usr_eliminar: "S",
    usr_lectura: "S",
  });

  const [filters, setFilters] = useState({
    usr_nombre: "",
    usr_correo: "",
    usr_celular: "",
    usr_ROL: "",
    usr_estado: "",
    usr_fecha_creacion: "",
  });

  const [message, setMessage] = useState<{ text: string, type: 'success' | 'failure' } | null>(null);


  useEffect(() => {
    fetchUsers();
    fetchModulos();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/auth/users");
      setUsers(res.data.users);
    } catch (err) {
      setMessage({ text: "❌ Error al cargar usuarios", type: "failure" });
    }
  };

  const fetchModulos = async () => {
    try {
      const res = await axios.get("/api/modulos");
      setModulos(res.data.modulos);
    } catch (error) {
      setMessage({ text: "❌ Error al cargar módulos", type: "failure" });
    }
  };

  const fetchAccesos = async (usr_id: number) => {
    try {
      const res = await axios.get(`/api/access?usr_id=${usr_id}`);
      setAccesos(res.data.accesos);
    } catch (err) {
      setMessage({ text: "❌ Error al cargar accesos", type: "failure" });
    }
  };

  const handleUserSelect = (user: DBUser) => {
    setSelectedUser(user);
    if (user.usr_id !== undefined) {
      fetchAccesos(user.usr_id);
    }
  };

  const handleAddAccess = async () => {
    if (!selectedUser) return;

    if (!newAccess.usr_modulo.trim() || !newAccess.usr_descripcion.trim()) {
      setMessage({ text: "❌ Por favor completa Módulo y Descripción", type: "failure" });
      setTimeout(() => setMessage(null), 2000);
      return;
    }


    try {
      const payload = {
        ...newAccess,
        usr_id: selectedUser.usr_id,
        usr_usuario_aud: selectedUser.usr_nombre,
      };
      await axios.post("/api/access", payload);

      setMessage({ text: "✅ Acceso agregado exitosamente", type: "success" });
      setTimeout(() => setMessage(null), 2000);
      setNewAccess({
        usr_modulo: "",
        usr_descripcion: "",
        mod_ruta: "",
        usr_insertar: "S",
        usr_actualizar: "S",
        usr_eliminar: "S",
        usr_lectura: "S",
      });

      if (selectedUser.usr_id !== undefined) {
        fetchAccesos(selectedUser.usr_id);
      }
    } catch (err: any) {
      const msg = err.response?.data?.error;

      if (err.response?.status == 409 || msg?.includes("Duplicado")) {
        setMessage({ text: "❌ Ya existe acceso a este módulo para el usuario", type: "failure" });
        setTimeout(() => setMessage(null), 2000);
      } else {
        setMessage({ text: "❌ Error al agregar acceso 1", type: "failure" });
        setTimeout(() => setMessage(null), 2000);
      }

      setTimeout(() => setMessage(null), 2000);
      if (selectedUser.usr_id !== undefined) {
        fetchAccesos(selectedUser.usr_id);
      }
    }


  };

  const handleDeleteAccess = async (acc_id: number) => {
    try {
      await axios.delete(`/api/access?acc_id=${acc_id}`);
      if (selectedUser && selectedUser.usr_id !== undefined) {
        fetchAccesos(selectedUser.usr_id);
      }


      setMessage({ text: "❌ Borrado exitosamente", type: "success" });
      setTimeout(() => setMessage(null), 2000);

    } catch (err) {
      setMessage({ text: "❌ Error al eliminar acceso", type: "failure" });
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.usr_nombre.toLowerCase().includes(filters.usr_nombre.toLowerCase()) &&
      user.usr_correo.toLowerCase().includes(filters.usr_correo.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <TextInput
          placeholder={t("Filtrar por nombre")}
          value={filters.usr_nombre}
          onChange={(e) => setFilters({ ...filters, usr_nombre: e.target.value })}
        />
        <TextInput
          placeholder={t("Filtrar por correo")}
          value={filters.usr_correo}
          onChange={(e) => setFilters({ ...filters, usr_correo: e.target.value })}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="min-w-[700px] w-full">
          <Table.Head>
            <Table.HeadCell className="whitespace-nowrap">{t("Nombre")}</Table.HeadCell>
            <Table.HeadCell className="whitespace-nowrap">{t("Correo electrónico")}</Table.HeadCell>
            <Table.HeadCell className="whitespace-nowrap">{t("Rol")}</Table.HeadCell>
            <Table.HeadCell className="whitespace-nowrap">{t("Estado")}</Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {filteredUsers.slice(0, 1).map((user) => (
              <Table.Row
                key={user.usr_id}
                onClick={() => handleUserSelect(user)}
                className={`cursor-pointer hover:bg-green-100 dark:hover:bg-green-900 ${selectedUser?.usr_id === user.usr_id ? "bg-green-200 dark:bg-green-800" : ""
                  }`}
              >
                {/* Nombre */}
                <Table.Cell className="min-w-[180px]">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={user.usr_fotografia}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <h6 className="text-base truncate max-w-[120px]">
                      {user.usr_nombre}
                    </h6>
                  </div>
                </Table.Cell>

                {/* Correo */}
                <Table.Cell className="min-w-[220px]">
                  <span className="truncate max-w-[160px] block">
                    {user.usr_correo}
                  </span>
                </Table.Cell>

                {/* Rol */}
                <Table.Cell className="min-w-[140px]">
                  <span className="truncate max-w-[100px] block">
                    {user.usr_ROL}
                  </span>
                </Table.Cell>

                {/* Estado */}
                <Table.Cell className="min-w-[120px]">
                  <Badge
                    color={user.usr_estado === "ACTIVO" ? "lightsuccess" : "lighterror"}
                  >
                    {user.usr_estado}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>



      {selectedUser && (
        <div className="space-y-4 border-t pt-6 mt-4">
          <h3 className="text-lg font-bold">{t("Accesos")} {t("de")} {selectedUser.usr_nombre}</h3>

          {message && <Alert color={message.type}>{message.text}</Alert>}

          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <Label htmlFor="modulo">{t("Módulo")}</Label>
              <select
                id="modulo"
                value={newAccess.usr_modulo}
                onChange={(e) => {
                  const selectedMod = modulos.find((m) => m.mod_nombre === e.target.value);
                  setNewAccess({
                    ...newAccess,
                    usr_modulo: selectedMod?.mod_nombre || "",
                    usr_descripcion: selectedMod?.mod_descripcion || "",
                    mod_ruta: selectedMod?.mod_ruta || "",
                  });
                }}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                required
              >
                <option value="">-- Selecciona un módulo --</option>
                {modulos.map((mod) => (
                  <option key={mod.mod_id} value={mod.mod_nombre}>
                    {mod.mod_nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="descripcion">{t("Descripción")}</Label>
              <TextInput
                id="descripcion"
                value={newAccess.usr_descripcion}
                readOnly
                required
              />
            </div>
            <div>
              <Label htmlFor="mod_ruta">{t("Ruta")}</Label>
              <TextInput
                id="mod_ruta"
                value={newAccess.mod_ruta}
                readOnly
                required
              />
            </div>

            <div className="flex gap-2 items-center mt-6">
              <Label>{t("Permisos")}:</Label>
              {["insertar", "actualizar", "eliminar", "lectura"].map((perm) => {
                type PermKey = "usr_insertar" | "usr_actualizar" | "usr_eliminar" | "usr_lectura";
                const key = `usr_${perm}` as PermKey;
                return (
                  <label key={perm} className="text-xs">
                    <input
                      type="checkbox"
                      checked={newAccess[key] === "S"}
                      onChange={(e) =>
                        setNewAccess({
                          ...newAccess,
                          [key]: e.target.checked ? "S" : "N",
                        })
                      }
                      className="mr-1"
                    />
                    {perm.charAt(0).toUpperCase() + perm.slice(1)}
                  </label>
                );
              })}
            </div>
          </div>

          <Button className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-1 px-2 text-sm" onClick={handleAddAccess}>
            ➕ {t("Agregar Acceso")}
          </Button>
          <div className="w-full">
            {/* Tabla con scroll horizontal */}
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>{t("Opción")}</Table.HeadCell>
                  <Table.HeadCell>{t("Módulo")}</Table.HeadCell>
                  <Table.HeadCell>{t("Descripción")}</Table.HeadCell>
                  <Table.HeadCell>{t("Ruta")}</Table.HeadCell>
                  <Table.HeadCell>{t("Insertar")}</Table.HeadCell>
                  <Table.HeadCell>{t("Actualizar")}</Table.HeadCell>
                  <Table.HeadCell>{t("Eliminar")}</Table.HeadCell>
                  <Table.HeadCell>{t("Lectura")}</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {paginatedAccesos.map((acc) => (
                    <Table.Row key={acc.acc_id}>
                      <Table.Cell>
                        <Button
                          size="xs"
                          color="failure"
                          onClick={() => {
                            if (typeof acc.acc_id === "number") handleDeleteAccess(acc.acc_id);
                          }}
                          disabled={typeof acc.acc_id !== "number"}
                        >
                          {t("Eliminar")}
                        </Button>
                      </Table.Cell>
                      <Table.Cell>{acc.usr_modulo}</Table.Cell>
                      <Table.Cell>{acc.usr_descripcion}</Table.Cell>
                      <Table.Cell>{acc.mod_ruta}</Table.Cell>
                      <Table.Cell>
                        <Badge color={acc.usr_insertar === "S" ? "lightsuccess" : "lighterror"}>
                          {acc.usr_insertar}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color={acc.usr_actualizar === "S" ? "lightsuccess" : "lighterror"}>
                          {acc.usr_actualizar}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color={acc.usr_eliminar === "S" ? "lightsuccess" : "lighterror"}>
                          {acc.usr_eliminar}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color={acc.usr_lectura === "S" ? "lightsuccess" : "lighterror"}>
                          {acc.usr_lectura}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>

            {/* Controles de paginación */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2 gap-3">
              {/* Texto info */}
              <div className="text-sm text-gray-600">
                {t("Mostrando")} {paginatedAccesos.length} {t("de")} {accesos.length} {t("registros")}
              </div>

              {/* Botones de paginación */}
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <Button
                  size="xs"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-1"
                >
                  {t("Anterior")}
                </Button>

                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    size="xs"
                    onClick={() => handlePageClick(i + 1)}
                    color={currentPage === i + 1 ? "primary" : "gray"}
                  >
                    {i + 1}
                  </Button>
                ))}

                <Button
                  size="xs"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-1"
                >
                  {t("Siguiente")}
                </Button>
              </div>
            </div>
          </div>



        </div>
      )}
    </div>
  );
};

export default Tablaaccesos;