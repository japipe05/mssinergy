/**
 * Mapea una ruta pathname a un módulo (usr_modulo) para control de acceso.
 */
export function extractModuleFromPath(pathname: string): string | null {
  const map: Record<string, string> = {
    profile: "MI PERFIL",
    profiles: "PERFILES",
    accesos: "ACCESOS",
    crear: "BLOG_CREAR",
    post: "BLOG_POST",
    blog: "BLOG_POST", // Soporta rutas como /blog/12 y /blog/12/editar
  };

  const pathParts = pathname.split("/").filter(Boolean); // elimina vacíos

  // ✅ Detectar rutas como /blog/12 o /blog/12/editar
  const blogIndex = pathParts.findIndex((segment) => segment === "blog");
  if (blogIndex !== -1) {
    return map["blog"];
  }

  // Fallback: buscar el último segmento que coincida con el mapa
  const lastSegment = pathParts[pathParts.length - 1];
  return map[lastSegment] || null;
  //return  "*"; // <- "*" representa acceso universal
}

  

