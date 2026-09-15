import Link from "next/link";

export default function Home() {
  return (
    <main className="welcome-container">
      <h1>Bienvenido a Shizen</h1>
      <p className="welcome-subtitle">Centro de gestión modular personal</p>
      
      <div className="auth-actions">
        <Link href="/login" className="btn-secondary">
          Iniciar Sesión
        </Link>
        <Link href="/register" className="btn-primary">
          Registrarse
        </Link>
      </div>
    </main>
  );
}