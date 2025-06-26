export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", lineHeight: 1.6 }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>EcoPort</h1>
        <p style={{ fontSize: "1.2rem", color: "#2e7d32" }}>
          Bali's Gateway to Global Plastic Recycling
        </p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2>♻️ Our Mission</h2>
        <p>
          EcoPort is dedicated to cleaning up Bali by collecting, sorting, and exporting high-quality post-consumer HDPE plastic to buyers around the world. We're turning waste into opportunity, one container at a time.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>🌏 What We Do</h2>
        <ul>
          <li>Collect plastic waste from resorts, clubs, and local suppliers</li>
          <li>Clean and sort HDPE to export standards</li>
          <li>Bale and ship containers to vetted buyers globally</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>🚀 Why EcoPort?</h2>
        <ul>
          <li>On-the-ground operations in Bali</li>
          <li>Trusted by international buyers</li>
          <li>Transparent, scalable, and eco-driven</li>
        </ul>
      </section>

      <section style={{ background: "#f0f4f1", padding: "1.5rem", borderRadius: "8px" }}>
        <h2>📩 Get In Touch</h2>
        <p>Email: <a href="mailto:leahg.operations@ecoport.co.nz">leahg.operations@ecoport.co.nz</a></p>
        <p>We're currently onboarding buyers and partners. Reach out to learn more!</p>
      </section>
    </main>
  );
}
