import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function NotaryPublicFinancialsPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Notary Public Financials" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
