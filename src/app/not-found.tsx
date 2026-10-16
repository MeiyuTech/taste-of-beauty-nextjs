export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
        padding: 32,
        fontSize: 18,
        lineHeight: 1.6,
        color: "#302e29",
        fontFamily: "Georgia, serif",
      }}
    >
      <p>TASTE OF BEAUTY · 404</p>
      <h1>Let’s get you back to the table.</h1>
      <p>We couldn’t find that page.</p>
      <a href="/" style={{ color: "#90452f" }}>
        Back to home
      </a>
    </main>
  );
}
