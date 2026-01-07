import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem", textAlign: "center" }}>
      <header style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--secondary-blue)" }}>
          Bienvenido a 21Solutions
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--foreground)", opacity: 0.9 }}>
          Soluciones digitales pensadas para ti.
        </p>
      </header>
      
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", width: "100%", maxWidth: "1200px" }}>
        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Innovación</h2>
          <p>Utilizamos las últimas tecnologías para llevar tu negocio al siguiente nivel.</p>
        </div>
        
        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Calidad</h2>
          <p>Comprometidos con la excelencia en cada línea de código.</p>
        </div>

        <div style={{ padding: "2rem", border: "1px solid #e0e0e0", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Diseño</h2>
          <p>Estética limpia y funcional, justo como lo pediste.</p>
        </div>
      </section>

      <footer style={{ marginTop: "5rem", fontSize: "0.9rem", opacity: 0.7 }}>
        <p>&copy; {new Date().getFullYear()} 21Solutions. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
