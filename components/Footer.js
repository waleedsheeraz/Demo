export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>© {year} Rob Hill</span>
      <span>Control Systems Engineer · Oughtershaw, England</span>
    </footer>
  );
}
