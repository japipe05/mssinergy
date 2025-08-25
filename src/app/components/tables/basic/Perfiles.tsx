"use client";
import { Badge, Dropdown, Table, Button, Modal, Label, TextInput, Alert } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { DBUser } from '@/models/usuarioData';
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import { IconEdit, IconPlus } from "@tabler/icons-react";

const Perfiles = () => {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  //filtros
  const [filters, setFilters] = useState({
    usr_nombre: '',
    usr_correo: '',
    usr_celular: '',
    usr_ROL: '',
    usr_estado: '',
    usr_fecha_creacion: '',
  });
  // Columnas visibles
  type VisibleColumnKey = 'opciones' | 'usuario' | 'correo' | 'celular' | 'rol' | 'estado' | 'fecha' | 'id';

  const [visibleColumns, setVisibleColumns] = useState<Record<VisibleColumnKey, boolean>>({
    opciones: true,
    usuario: true,
    correo: true,
    celular: true,
    rol: true,
    estado: true,
    fecha: true,
    id: true,
  });

  //alertas

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [users, setUsers] = useState<DBUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<DBUser | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/auth/users");
      setUsers(res.data.users);
    } catch (err) {
      console.error("❌ Error al cargar usuarios", err);
    }
  };


  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const filteredUsers = users.filter((user) => {
    return (
      user.usr_nombre.toLowerCase().includes(filters.usr_nombre.toLowerCase()) &&
      user.usr_correo.toLowerCase().includes(filters.usr_correo.toLowerCase()) &&
      (`${user.usr_codigo_pais} ${user.usr_celular}`).includes(filters.usr_celular) &&
      user.usr_ROL.toLowerCase().includes(filters.usr_ROL.toLowerCase()) &&
      user.usr_estado.toLowerCase().includes(filters.usr_estado.toLowerCase()) &&
      user.usr_fecha_creacion.includes(filters.usr_fecha_creacion)
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage); // ✅ Ahora sí funciona

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );




  //Crear usuario
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    usr_nombre: '',
    usr_correo: '',
    usr_credencial: '',
    usr_codigo_pais: '+57',
    usr_celular: '',
    usr_estado: 'ACTIVO',
    usr_ROL: 'USER',
  });
  const [addFile, setAddFile] = useState<File | null>(null);
  const [previewAddImage, setPreviewAddImage] = useState('');



  return (
    <>
      {/* Alertas de éxito y error */}
      {successMessage && (
        <div className="mb-4">
          <Alert color="success" onDismiss={() => setSuccessMessage(null)} className="rounded-md">
            <span className="font-medium">{successMessage}</span>
          </Alert>
        </div>
      )}
      {errorMessage && (
        <div className="mb-4">
          <Alert color="failure" onDismiss={() => setErrorMessage(null)} className="rounded-md">
            ❌ <span className="font-medium">{errorMessage}</span>
          </Alert>
        </div>
      )}



      <div className="flex justify-end mb-4">
        <Button className="bg-primary text-white" onClick={() => setIsAddOpen(true)}>
          ➕ {t("Agregar Usuario")}
        </Button>
      </div>

      {/* Columnas visibles */}
      <div className="flex flex-wrap gap-3 mb-4">
        {/* Toggle All */}
        <label className="flex items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={Object.values(visibleColumns).every(Boolean)}
            onChange={(e) => {
              const checked = e.target.checked;
              setVisibleColumns({
                opciones: checked,
                usuario: checked,
                correo: checked,
                celular: checked,
                rol: checked,
                estado: checked,
                fecha: checked,
                id: checked,
              });
            }}
          />
          Toggle All
        </label>

        {/* Column checkboxes */}
        {Object.entries(visibleColumns).map(([key, val]) => (
          <label key={key} className="flex items-center gap-2 capitalize">
            <input
              type="checkbox"
              checked={val}
              onChange={() =>
                setVisibleColumns((prev) => ({
                  ...prev,
                  [key as VisibleColumnKey]: !prev[key as VisibleColumnKey],
                }))
              }
            />
            {key}
          </label>
        ))}
      </div>


      {/* Filtros */}
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
        <TextInput
          placeholder={t("Filtrar por celular")}
          value={filters.usr_celular}
          onChange={(e) => setFilters({ ...filters, usr_celular: e.target.value })}
        />
        <TextInput
          placeholder={t("Filtrar por rol")}
          value={filters.usr_ROL}
          onChange={(e) => setFilters({ ...filters, usr_ROL: e.target.value })}
        />
        <TextInput
          placeholder={t("Filtrar por estado")}
          value={filters.usr_estado}
          onChange={(e) => setFilters({ ...filters, usr_estado: e.target.value })}
        />
        <TextInput
          placeholder={t("Filtrar por fecha (YYYY-MM-DD)")}
          value={filters.usr_fecha_creacion}
          onChange={(e) => setFilters({ ...filters, usr_fecha_creacion: e.target.value })}
        />
      </div>


      <div className="border rounded-md border-border dark:border-darkborder overflow-x-auto">

        <Table>
          <Table.Head>
            {visibleColumns.opciones && <Table.HeadCell>{t("Opción")}</Table.HeadCell>}
            {visibleColumns.usuario && <Table.HeadCell>{t("Nombre")}</Table.HeadCell>}
            {visibleColumns.correo && <Table.HeadCell>{t("Correo electrónico")}</Table.HeadCell>}
            {visibleColumns.celular && <Table.HeadCell>{t("Celular")}</Table.HeadCell>}
            {visibleColumns.rol && <Table.HeadCell>{t("Rol")}</Table.HeadCell>}
            {visibleColumns.estado && <Table.HeadCell>{t("Estado")}</Table.HeadCell>}
            {visibleColumns.fecha && <Table.HeadCell>{t("Fecha de Creación")}</Table.HeadCell>}
            {visibleColumns.id && <Table.HeadCell>{t("ID")}</Table.HeadCell>}
          </Table.Head>

          <Table.Body>
            {paginatedUsers.map((user) => (
              <Table.Row key={user.usr_id}>
                {visibleColumns.opciones && (
                  <Table.Cell>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <IconDotsVertical size={22} />
                        </span>
                      )}
                    >
                      <Dropdown.Item
                        className="flex gap-3"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsEditOpen(true);
                        }}
                      >
                        <Icon icon="tabler:edit" height={18} />
                        <span>{t("Editar")}</span>
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="flex gap-3 text-red-600"
                        onClick={async () => {
                          if (confirm("¿Estás seguro de eliminar este usuario?")) {
                            try {
                              await axios.delete(`/api/auth/users/${user.usr_id}?foto=${encodeURIComponent(user.usr_fotografia)}`);
                              setSuccessMessage("Usuario eliminado correctamente.");
                              setTimeout(() => setSuccessMessage(null), 2000);
                              await fetchUsers();
                            } catch (err) {
                              console.error("❌ Error al eliminar usuario", err);
                              setErrorMessage("Error al eliminar el usuario. Inténtalo de nuevo.");
                              setTimeout(() => setErrorMessage(null), 2000);
                            }
                          }
                        }}
                      >
                        <Icon icon="tabler:trash" height={18} />
                        <span>{t("Eliminar")}</span>
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                )}


                {visibleColumns.usuario && (
                  <Table.Cell>
                    <div className="flex gap-3 items-center">
                      <Image
                        src={user.usr_fotografia}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <h6 className="text-base">{user.usr_nombre}</h6>
                    </div>
                  </Table.Cell>
                )}

                {visibleColumns.correo && <Table.Cell>{user.usr_correo}</Table.Cell>}
                {visibleColumns.celular && (
                  <Table.Cell>{user.usr_codigo_pais} {user.usr_celular}</Table.Cell>
                )}
                {visibleColumns.rol && <Table.Cell>{user.usr_ROL}</Table.Cell>}
                {visibleColumns.estado && (
                  <Table.Cell>
                    <Badge color={user.usr_estado === "ACTIVO" ? "lightsuccess" : "lighterror"}>
                      {user.usr_estado}
                    </Badge>
                  </Table.Cell>
                )}
                {visibleColumns.fecha && (
                  <Table.Cell>
                    {new Date(user.usr_fecha_creacion).toISOString().replace("T", " ").slice(0, 16)}
                  </Table.Cell>
                )}
                {visibleColumns.id && <Table.Cell>{user.usr_id}</Table.Cell>}
              </Table.Row>

            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2 gap-3">
        {/* Texto */}
        <div className="text-sm text-gray-600">
          {t("Mostrando")} {paginatedUsers.length} {t("de")} {users.length} {t("registros")}
        </div>

        {/* Paginador */}
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


      {/* Modal para editar usuario */}
      {selectedUser && (
        <Modal
          show={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          size="xl"
          position="center"
        >
          <Modal.Header>Editar Usuario</Modal.Header>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const { usr_nombre, usr_correo, usr_celular } = selectedUser;
              try {
                const formData = new FormData();
                formData.append("usr_nombre", usr_nombre);
                formData.append("usr_correo", usr_correo);
                formData.append("usr_codigo_pais", selectedUser.usr_codigo_pais);
                formData.append("usr_celular", usr_celular);
                formData.append("usr_estado", selectedUser.usr_estado);
                formData.append("usr_ROL", selectedUser.usr_ROL);
                if (selectedFile) {
                  formData.append("file", selectedFile);
                } else {
                  formData.append("usr_fotografia", selectedUser.usr_fotografia);
                }

                await axios.put(`/api/auth/users/${selectedUser.usr_id}`, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                });

                setAlert({ type: "success", message: "✅ Usuario actualizado exitosamente." });
                setIsEditOpen(false);
                setSuccessMessage("Usuario actualizado correctamente.");
                setTimeout(() => setSuccessMessage(null), 2000);
                await fetchUsers();
                setLoading(false);
              } catch (err) {
                console.error("❌ Error al editar usuario", err);
                setLoading(false);
                setAlert({ type: "error", message: "❌ Ocurrió un error al actualizar el usuario." });
              }
            }}
          >
            {/* Cuerpo scrollable */}
            <Modal.Body>
              <div className="space-y-4 overflow-y-auto max-h-[calc(70vh-64px)] px-1 sm:px-4 pb-24">
                {/* Imagen */}
                <div>
                  <Label htmlFor="usr_fotografia" value={t("Cargar Imagen")} />
                  <input
                    id="usr_fotografia"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setSelectedFile(file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          if (typeof reader.result === "string") {
                            setSelectedUser({ ...selectedUser, usr_fotografia: reader.result });
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>

                {selectedUser.usr_fotografia && (
                  <div className="flex justify-center">
                    <img
                      src={selectedUser.usr_fotografia}
                      alt="Vista previa"
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </div>
                )}

                {/* Nombre */}
                <div>
                  <Label htmlFor="usr_nombre">{t("Nombre")}</Label>
                  <TextInput
                    id="usr_nombre"
                    value={selectedUser.usr_nombre}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, usr_nombre: e.target.value })
                    }
                    minLength={3}
                    maxLength={200}
                    required
                    placeholder="Nombre completo"
                    className="w-full"
                  />
                </div>

                {/* Correo */}
                <div>
                  <Label htmlFor="usr_correo">{t("Correo electrónico")}</Label>
                  <TextInput
                    id="usr_correo"
                    type="email"
                    value={selectedUser.usr_correo}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, usr_correo: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </div>

                {/* Celular */}
                <div>
                  <Label htmlFor="usr_codigo_pais">{t("Celular")}</Label>
                  <div className="flex gap-2">
                    <select
                      id="usr_codigo_pais"
                      value={selectedUser.usr_codigo_pais}
                      onChange={(e) =>
                        setSelectedUser({ ...selectedUser, usr_codigo_pais: e.target.value })
                      }
                      className="border border-gray-300 rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white"
                      required
                    >
                      <option value="+57">🇨🇴 +57</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+54">🇦🇷 +54</option>
                    </select>
                    <TextInput
                      id="usr_celular"
                      type="tel"
                      value={selectedUser.usr_celular}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d{0,10}$/.test(val)) {
                          setSelectedUser({ ...selectedUser, usr_celular: val });
                        }
                      }}
                      placeholder="3214567890"
                      required
                      maxLength={10}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Estado */}
                <div>
                  <Label htmlFor="usr_estado">{t("Estado")}</Label>
                  <select
                    id="usr_estado"
                    value={selectedUser.usr_estado}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, usr_estado: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white w-full"
                  >
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="INACTIVO">INACTIVO</option>
                  </select>
                </div>

                {/* Rol */}
                <div>
                  <Label htmlFor="usr_ROL">{t("Rol")}</Label>
                  <select
                    id="usr_ROL"
                    value={selectedUser.usr_ROL}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, usr_ROL: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white w-full"
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="AUDITOR">AUDITOR</option>
                    <option value="GUEST">GUEST</option>
                    <option value="SUPPORT">SUPPORT</option>
                  </select>
                </div>



                {/* Botones */}
                <div>
                  <div className="flex justify-end gap-3 px-4 py-3">
                    <Button
                      onClick={() => setIsEditOpen(false)}
                      className="min-w-[110px] rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 
                 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 
                 transition-colors py-1.5 px-4 text-sm"
                      aria-label={t("Cancelar")}
                    >
                      {t("Cancelar")}
                    </Button>

                    <Button
                      type="submit"
                      className="min-w-[130px] rounded-lg bg-primary text-white hover:bg-primary/90 
                 transition-colors flex items-center justify-center gap-2 
                 py-1.5 px-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={loading}
                      aria-busy={loading}
                      aria-label={loading ? t("Cargando...") : t("Actualizar perfil")}
                    >
                      {loading ? (
                        <span className="animate-pulse">{t("Cargando...")}</span>
                      ) : (
                        <>
                          <IconEdit size={14} /> {t("Actualizar perfil")}
                        </>
                      )}
                    </Button>
                  </div>
                </div>




              </div>
            </Modal.Body>


          </form>
        </Modal>
      )}



      {/* Modal para agregar usuario */}
      <Modal
        show={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        size="xl"
        position="center"
      >
        {errorMessage && (
          <Alert color="failure" className="rounded-md">
            ❌ <span className="font-medium">{errorMessage}</span>
          </Alert>
        )}
        <Modal.Header>{t("Agregar Usuario")}</Modal.Header>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              const formData = new FormData();
              Object.entries(addForm).forEach(([key, val]) =>
                formData.append(key, val)
              );
              if (addFile) formData.append("file", addFile);
              setLoading(true);
              await axios.post("/api/auth/register/internal", formData);

              setSuccessMessage("Usuario creado correctamente.");
              setTimeout(() => setSuccessMessage(null), 2000);

              setIsAddOpen(false);
              setAddForm({
                usr_nombre: "",
                usr_correo: "",
                usr_credencial: "",
                usr_codigo_pais: "+57",
                usr_celular: "",
                usr_estado: "ACTIVO",
                usr_ROL: "USER",
              });
              setAddFile(null);
              setPreviewAddImage("");
              await fetchUsers();
              setLoading(false);
            } catch (err: any) {


              // ✅ Si viene del backend y contiene mensaje
              if (err.response?.status === 500 && err.response?.data?.error) {
                setErrorMessage(err.response.data.error); // <-- Mostramos mensaje exacto
              } else {
                setErrorMessage("Error al registrar usuario.");
              }
              setLoading(false);
              setTimeout(() => setErrorMessage(null), 3000);
            }
          }}
        >
          <Modal.Body>
            <div className="space-y-4 overflow-y-auto max-h-[calc(70vh-64px)] px-1 sm:px-4 pb-24">
              
              {/* Imagen */}
              <div>
                <Label htmlFor="image" value={t("Cargar Imagen")} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setAddFile(file);
                      setPreviewAddImage(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
                {previewAddImage && (
                  <div className="mt-2 flex justify-center">
                    <img
                      src={previewAddImage}
                      alt="preview"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Nombre */}
              <div>
                <Label htmlFor="usr_nombre" value={t("Nombre")} />
                <TextInput
                  id="usr_nombre"
                  value={addForm.usr_nombre}
                  required
                  placeholder={t("Nombre completo")}
                  minLength={3}
                  maxLength={200}
                  onChange={(e) =>
                    setAddForm({ ...addForm, usr_nombre: e.target.value })
                  }
                />
              </div>

              {/* Correo */}
              <div>
                <Label htmlFor="usr_correo" value={t("Correo electrónico")} />
                <TextInput
                  id="usr_correo"
                  type="email"
                  value={addForm.usr_correo}
                  required
                  placeholder="@mssinergy.com"
                  onChange={(e) =>
                    setAddForm({ ...addForm, usr_correo: e.target.value })
                  }
                />
              </div>

              {/* Contraseña */}
              <div>
                <Label htmlFor="usr_credencial" value={t("Contraseña")} />
                <TextInput
                  id="usr_credencial"
                  type="password"
                  value={addForm.usr_credencial}
                  required
                  minLength={5}
                  maxLength={100}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,100}$"
                  title="La contraseña debe tener al menos 5 caracteres, incluyendo mayúsculas, minúsculas y números."
                  onChange={(e) =>
                    setAddForm({ ...addForm, usr_credencial: e.target.value })
                  }
                />
              </div>

              {/* Celular */}
              <div>
                <Label htmlFor="usr_codigo_pais" value={t("Celular")} />
                <div className="flex gap-2">
                  <select
                    id="usr_codigo_pais"
                    value={addForm.usr_codigo_pais}
                    onChange={(e) =>
                      setAddForm({ ...addForm, usr_codigo_pais: e.target.value })
                    }
                    className="border border-gray-300 rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white"
                  >
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+54">🇦🇷 +54</option>
                  </select>
                  <TextInput
                    id="usr_celular"
                    value={addForm.usr_celular}
                    onChange={(e) =>
                      setAddForm({ ...addForm, usr_celular: e.target.value })
                    }
                    type="tel"
                    placeholder="3214567890"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              {/* Estado */}
              <div>
                <Label htmlFor="usr_estado" value={t("Estado")} />
                <select
                  id="usr_estado"
                  value={addForm.usr_estado}
                  onChange={(e) =>
                    setAddForm({ ...addForm, usr_estado: e.target.value })
                  }
                  className="w-full border rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white"
                >
                  <option value="ACTIVO">ACTIVO</option>
                  <option value="INACTIVO">INACTIVO</option>
                </select>
              </div>

              {/* Rol */}
              <div>
                <Label htmlFor="usr_ROL" value={t("Rol")} />
                <select
                  id="usr_ROL"
                  value={addForm.usr_ROL}
                  onChange={(e) =>
                    setAddForm({ ...addForm, usr_ROL: e.target.value })
                  }
                  className="w-full border rounded-md p-2 text-sm dark:bg-gray-800 dark:text-white"
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="AUDITOR">AUDITOR</option>
                  <option value="GUEST">GUEST</option>
                  <option value="SUPPORT">SUPPORT</option>
                </select>
              </div>


              {/* Botones */}
              <div>
                <div className="flex justify-end gap-3 px-4 py-3">
                  <Button
                    onClick={() => setIsAddOpen(false)}
                    className="min-w-[110px] rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 
                 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 
                 transition-colors py-1.5 px-4 text-sm"
                    aria-label={t("Cancelar")}
                  >
                    {t("Cancelar")}
                  </Button>

                  <Button
                    type="submit"
                    className="min-w-[130px] rounded-lg bg-primary text-white hover:bg-primary/90 
                 transition-colors flex items-center justify-center gap-2 
                 py-1.5 px-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={loading}
                    aria-busy={loading}
                    aria-label={loading ? t("Cargando...") : t("Crear")}
                  >
                    {loading ? (
                      <span className="animate-pulse">{t("Cargando...")}</span>
                    ) : (
                      <>
                        <IconPlus size={14} /> {t("Crear")}
                      </>
                    )}
                  </Button>
                </div>
              </div>


            </div>

          </Modal.Body>


        </form>
      </Modal>




    </>
  );
};

export default Perfiles;