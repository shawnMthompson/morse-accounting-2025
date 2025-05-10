import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import photo from "../../../../public/DeannaT.webp";

export default function BookkeepingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Bookkeeping" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Bookkeeping</h2>
          <p className="text-lg mb-4">
            Accurate and organized financial records are the backbone of any
            successful business. Our bookkeeping services are designed to handle
            the day-to-day tracking of your income, expenses, and transactions
            so you can focus on running and growing your business. From
            categorizing expenses to managing invoices and reconciling bank
            statements, we ensure that every detail is recorded with precision
            and care.
          </p>
          <p className="text-lg mb-4">
            By keeping your books up to date, we help you avoid surprises at tax
            time and provide a clear picture of your business’s financial health
            throughout the year. Our streamlined approach means fewer errors,
            improved cash flow management, and better preparedness for audits or
            financial reviews. We use trusted accounting software to keep
            everything organized and accessible, whether you prefer monthly
            summaries or real-time reports.
          </p>
          <p className="text-lg mb-4">
            Every business is unique, which is why our bookkeeping services are
            tailored to fit your specific needs. Whether you&apos;re just
            starting out or have years of records that need tidying up, we’ll
            work with you to develop a system that makes sense and supports your
            goals. With our reliable support, you’ll always have confidence in
            your numbers—and more time to do what you do best!
          </p>
        </div>
        <div
          id="col-2"
          className="basis-full md:basis-1/2 flex justify-center items-start order-2 md:order-2"
        >
          <Image
            src={photo}
            alt="Photo"
            width={500}
            height={500}
            className="rounded md:block hidden"
          />
        </div>
      </main>
    </div>
  );
}
