import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function ElectronicFilingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Electronic Filing" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
