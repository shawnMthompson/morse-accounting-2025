import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function TaxPreparationPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Tax Preparation" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
