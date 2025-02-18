import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Contact" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
