import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="About" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
