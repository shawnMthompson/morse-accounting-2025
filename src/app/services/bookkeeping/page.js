import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function BookkeepingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Bookkeeping" />
      <main className="p-4">{/* Add more content here */}</main>
    </div>
  );
}
