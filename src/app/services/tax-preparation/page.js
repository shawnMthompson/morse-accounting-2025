import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Footer from "@/components/Footer.js";
import GetInTouch from "@/components/GetInTouch.js";

import photo from "../../../../public/DeannaT.webp";

export default function TaxPreparationPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Tax Preparation" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Tax Preparation</h2>
          <p className="text-lg mb-4">
            Filing your taxes doesn&apos;t have to be stressful. Our tax
            preparation services are designed to take the pressure off by
            providing accurate, thorough, and timely filing for individuals,
            families, and businesses. We handle every detail with care—from
            gathering the necessary documents to identifying applicable
            deductions—so you can file with confidence and peace of mind.
          </p>
          <p className="text-lg mb-4">
            We can help you stay up to date with the latest tax laws and filing
            requirements to ensure full compliance while uncovering
            opportunities to maximize your refund or minimize your liability.
            Whether your situation is straightforward or involves multiple
            income sources, self-employment, or investments, we bring the
            knowledge and precision needed to get it right the first time.
          </p>
          <p className="text-lg mb-4">
            We pride ourselves on clear communication and personalized service,
            walking you through the process and answering your questions every
            step of the way. From annual returns to amended filings, our goal is
            to simplify tax season and help you make the most out of every
            dollar. Let us handle the paperwork—so you can focus on what matters
            most!
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
      <GetInTouch />
      <Footer />
    </div>
  );
}
