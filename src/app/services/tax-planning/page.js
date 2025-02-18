import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function TaxPlanningPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Tax Planning" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
