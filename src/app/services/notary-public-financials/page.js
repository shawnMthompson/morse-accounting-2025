import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Footer from "@/components/Footer.js";
import GetInTouch from "@/components/GetInTouch.js";

import photo from "../../../../public/DeannaT.webp";

export default function NotaryPublicFinancialsPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Notary Public Financials" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Notary Public Financials</h2>
          <p className="text-lg mb-4">
            When it comes to important documents and transactions, trust and
            legitimacy are essential. Our notary services provide the assurance
            you need by offering legally recognized witnessing and
            authentication for a wide range of documents. Whether you&apos;re
            signing contracts, affidavits, power of attorney forms, or real
            estate papers, we ensure each notarization is conducted with
            precision, confidentiality, and adherence to legal standards.
          </p>
          <p className="text-lg mb-4">
            In addition to notarial services, we also offer support with public
            financial documents, helping individuals and businesses prepare
            clear, professional financial statements for public or regulatory
            use. These services are ideal for grant applications, court filings,
            loan approvals, and more—situations where transparency and accuracy
            are critical. We tailor our approach to match the requirements of
            your institution or agency, ensuring compliance every step of the
            way.
          </p>
          <p className="text-lg mb-4">
            Our goal is to provide peace of mind through reliable, accessible
            service. We understand that time-sensitive or high-stakes documents
            require special care, and we&apos;re here to deliver that with
            convenience and integrity. Whether you need a quick notarization or
            help compiling formal financial reports, you can count on us to
            handle your needs with professionalism and discretion.
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
