import React from "react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <img
          src="/logo_shizen.png"
          alt="Shizen Logo"
          className="topbar-logo"
        />
      </div>

      <div className="profile-capsule">
        {/* Avatar Circular Neón */}
        <div className="profile-avatar-container">
          <div className="avatar-frame">
            <img
              src="/profile.jpg"
              alt="LucasLR2 Avatar"
              className="avatar-img"
            />
          </div>
        </div>

        {/* Cuerpo de la Cápsula (Píldora Oscura con Borde Neón) */}
        <div className="profile-pill-body">
          <span className="user-name">LucasLR2</span>
          <svg
            className="dropdown-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
}