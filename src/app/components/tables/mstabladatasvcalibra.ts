import img1 from "/public/images/profile/user-11.jpg";
import img2 from "/public/images/profile/user-8.jpg";
import img3 from "/public/images/profile/user-3.jpg";
import img4 from "/public/images/profile/user-4.jpg";
import img5 from "/public/images/profile/user-5.jpg";
import img6 from "/public/images/profile/user-6.jpg";
import img7 from "/public/images/profile/user-7.jpg";
import img8 from "/public/images/profile/user-10.jpg";
import img9 from "/public/images/profile/user-12.jpg";
import authimg1 from "/public/images/blog/blog-img1.jpg";
import authimg2 from "/public/images/blog/blog-img2.jpg";
import authimg3 from "/public/images/blog/blog-img3.jpg";
import authimg4 from "/public/images/blog/blog-img4.jpg";
import authimg5 from "/public/images/blog/blog-img5.jpg";
import { IconArrowBackUp, IconCheck, IconX } from "@tabler/icons-react";

export interface TableType {
  item?: number;
  codigo?: string;
  magnitud?: string;
  sede?: string;
  intervalo?: string;
  instrumento?: string;
  incertidumbre?: string;
  utilizados?: string;
  documento?: string;
  metodo?: string;
  personal?: string;
  duracion?: string;
}

const pressureTableData: TableType[] =[
    {
      "item": 1,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "Carrera 7 Este 1A-32 Interior 1",
      "intervalo": "0 Pa ≤ p ≤ 996 Pa, 0 inH2O ≤ p ≤ 4 inH2O",
      "instrumento": "Manómetro de presión diferencial (digitales - analógicos - transmisores) clase de exactitud ≥ ± 0,5 % de escala completa",
      "incertidumbre": "1,0 Pa (0,0041 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Directriz DKD R-6-1 Calibración de Instrumentos Medidores de Presión Edición 03/2014 Revisión 3. Excepto Numeral 8.5",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:35:00"
    },
    {
      "item": 2,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "In situ",
      "intervalo": "0 Pa ≤ p ≤ 996 Pa, 0 inH2O ≤ p ≤ 4 inH2O",
      "instrumento": "Manómetro de presión diferencial (digitales - analógicos - transmisores) clase de exactitud ≥ ± 0,5 % de escala completa",
      "incertidumbre": "1,0 Pa (0,0041 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Directriz DKD R-6-1 Calibración de Instrumentos Medidores de Presión Edición 03/2014 Revisión 3. Excepto Numeral 8.5",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:35:00"
    },
    {
      "item": 3,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "Carrera 7 Este 1A-32 Interior 1",
      "intervalo": "0 Pa ≤ p ≤ 50 Pa, 0 inH2O ≤ p ≤ 0,2 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "1,1 Pa (0,0045 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
    {
      "item": 4,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "Carrera 7 Este 1A-32 Interior 2",
      "intervalo": "50 Pa < p ≤ 124 Pa, 0,2 inH2O < p ≤ 0,5 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "1,8 Pa (0,0072 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
    {
      "item": 5,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "Carrera 7 Este 1A-32 Interior 3",
      "intervalo": "124 Pa < p ≤ 747 Pa, 0,5 inH2O < p ≤ 3 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "3,0 Pa (0,012 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
    {
      "item": 6,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "In situ",
      "intervalo": "0 Pa ≤ p ≤ 50 Pa, 0 inH2O ≤ p ≤ 0,2 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "1,1 Pa (0,0046 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
    {
      "item": 7,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "In situ",
      "intervalo": "50 Pa < p ≤ 124 Pa, 0,2 inH2O < p ≤ 0,5 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "1,8 Pa (0,0073 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
    {
      "item": 8,
      "codigo": "DG8",
      "magnitud": "Presión",
      "sede": "In situ",
      "intervalo": "124 Pa < p ≤ 747 Pa, 0,5 inH2O < p ≤ 3 inH2O",
      "instrumento": "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
      "incertidumbre": "3,0 Pa (0,012 inH2O)",
      "utilizados": "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
      "documento": "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
      "metodo": "Comparación directa",
      "personal": "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
      "duracion": "00:50:00"
    },
  ];
  

export { pressureTableData };
