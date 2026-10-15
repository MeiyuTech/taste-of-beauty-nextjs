export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
        padding: 32,
        color: "#302e29",
        fontFamily: "Georgia, serif",
      }}
    >
      <p>TASTE OF BEAUTY · 404</p>
      <h1>Let’s get you back to the table.</h1>
      <p>We couldn’t find that page. · 未找到此页面。</p>
      <a href="/" style={{ color: "#90452f" }}>
        Explore our menus · 返回首页 ↗
      </a>
    </main>
  );
}
