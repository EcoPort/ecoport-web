export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/logo.png"
          alt="EcoPort Logo"
          style={{ width: "120px", marginBottom: "1rem" }}
        />
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>EcoPort</h1>
        <p style={{ fontSize: "1.2rem", color: "#2e7d32" }}>
          Bali's Gateway to Global Plastic Recycling
        </p>
      </header>
      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p>
          EcoPort is a plastic recycling and export business based in Bali. We collect, clean, and export high-quality post-consumer HDPE plastic to global buyers.
        </p>
        <p>
          Launching August 2025 — transforming waste into opportunity for a greener planet.
        </p>
        <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
          📩 Contact: <a href="mailto:leahg.operations@ecoport.co.nz">leahg.operations@ecoport.co.nz</a>
        </p>
      </main>
    </div>
  );
}
