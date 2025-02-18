import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function AccountingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Accounting" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
