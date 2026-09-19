import React from "react";

interface InfoCardProps {
  title: string;
  count: number | string;
  icon: React.ReactNode;
}

export default function InfoCard({ title, count, icon }: InfoCardProps) {
  return (
    <div className="info-card">
      {/* Detalle HUD Cyber (líneas superiores/inferiores) */}
      <div className="hud-line top-left" />
      <div className="hud-line bottom-right" />

      {/* Contenido principal */}
      <div className="info-card-left">
        <span className="accent-bar" />
        <span className="info-card-title">{title}</span>
      </div>

      <div className="info-card-right">
        <span className="info-card-count">{count}</span>
        <div className="icon-wrapper">{icon}</div>
      </div>
    </div>
  );
}