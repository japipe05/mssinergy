"use client";
import { CustomizerContext } from "@/app/context/customizerContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect } from "react";

export default function DarkModeToggle() {
  const { activeMode, setActiveMode } = useContext(CustomizerContext);

  // Restaurar modo desde localStorage al cargar
  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark" || storedMode === "light") {
      setActiveMode(storedMode);
      document.documentElement.setAttribute("class", storedMode);
    }
  }, [setActiveMode]);

  const toggleTheme = () => {
    const newMode = activeMode === "dark" ? "light" : "dark";
    setActiveMode(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.setAttribute("class", newMode);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="h-10 w-10 hover:text-primary dark:hover:text-primary text-darklink dark:text-darkmuted hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer"
        type="button"
      >
        {activeMode === "dark" ? (
          <Icon icon="solar:sun-bold-duotone" height={21} />
        ) : (
          <Icon icon="solar:moon-bold-duotone" height={21} />
        )}
      </button>
    </div>
  );
}
