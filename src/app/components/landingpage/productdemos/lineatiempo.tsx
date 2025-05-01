import React from "react";

const Timeline = () => {
  const timelineData = [
    { year: "2020", description: "Inicio de actividades con calificaciones y ensayos" },
    { year: "2021", description: "Expansión de servicios en el territorio nacional" },
    { year: "2022", description: "Inicio de la calificación de vehículos de transporte en cadena de frío" },
    { year: "2023", description: "Calificación de equipos de producción" },
    { year: "2024", description: "Proyección de proceso de acreditación en calibración de equipos de diferencial de presión" },
    { year: "2025", description: "Proyección de proceso de acreditación en magnitud de temperatura y humedad relativa" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-dark py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Línea del Tiempo</h2>
        <div className="relative">
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
                }`}
              >
                <div className="timeline-bubble">
                  <span className="timeline-year">{item.year}</span>
                  <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .timeline {
          position: relative;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .timeline-item {
          position: relative;
          margin: 2rem 0;
        }
        .timeline-item-left {
          text-align: left;
          display: flex;
          justify-content: flex-start;
        }
        .timeline-item-right {
          text-align: right;
          display: flex;
          justify-content: flex-end;
        }
        .timeline-bubble {
          max-width: 300px;
          padding: 1.5rem;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          border-left: 5px solid var(--color-primary);
        }
        .timeline-year {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .timeline-description {
          font-size: 1rem;
          color: #333;
        }
        @media (max-width: 768px) {
          .timeline-item-left,
          .timeline-item-right {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
