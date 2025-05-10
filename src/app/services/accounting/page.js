import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import photo from "../../../../public/DeannaT.webp";

export default function AccountingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Accounting" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Accounting</h2>
          <p className="text-lg mb-4">
            Our accounting services provide clear, dependable financial
            oversight tailored to meet the unique needs of individuals and small
            businesses. We take the stress out of managing your books by
            offering full-service support, including transaction recording,
            account reconciliation, and financial statement preparation. Whether
            you&apos;re a sole proprietor or managing a growing team, we help
            ensure your records are accurate, up-to-date, and fully compliant
            with current regulations.
          </p>
          <p className="text-lg mb-4">
            With a deep understanding of local and federal financial
            requirements, we go beyond basic number-crunching to deliver
            insights that support better decision-making. Our goal is to equip
            you with the tools and clarity needed to understand your cash flow,
            track your performance, and plan effectively for the future. Through
            detailed reports and personalized guidance, we make complex
            financial data approachable and actionable.
          </p>
          <p className="text-lg mb-4">
            We believe accounting is more than just compliance—it&apos;s a
            foundation for growth. That’s why we approach every client
            relationship with care and attention, taking the time to understand
            your goals and tailor our services accordingly. Whether you need
            ongoing bookkeeping, year-end reports, or help navigating financial
            challenges, we’re here to support your success every step of the
            way!
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
