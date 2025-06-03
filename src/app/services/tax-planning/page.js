import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Footer from "@/components/Footer.js";
import GetInTouch from "@/components/GetInTouch.js";

import photo from "../../../../public/DeannaT.webp";

export default function TaxPlanningPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Tax Planning" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Tax Planning</h2>
          <p className="text-lg mb-4">
            Effective tax planning goes beyond filing returns—it’s about making
            informed financial decisions throughout the year that reduce
            liabilities and support long-term growth. Our tax planning services
            are tailored to help individuals and businesses take control of
            their tax obligations by identifying opportunities for savings,
            deferrals, and compliance with evolving tax laws. With proactive
            guidance, we help you avoid surprises and maximize every dollar.
          </p>
          <p className="text-lg mb-4">
            We work closely with clients to develop customized tax strategies
            based on their specific financial goals and life circumstances.
            Whether you’re navigating a major purchase, launching a new
            business, or planning for retirement, we analyze your situation and
            advise on the best course of action to minimize tax burdens while
            staying fully compliant. Our deep knowledge of federal, state, and
            local tax codes allows us to uncover deductions and credits that
            often go overlooked.
          </p>
          <p className="text-lg mb-4">
            With our support, tax planning becomes a year-round process—not just
            something you think about in April. We offer regular check-ins,
            forecasting tools, and timely advice to help you make smarter
            financial decisions and avoid costly mistakes. Our goal is to ensure
            that your business and personal finances are structured for
            resilience, efficiency, and long-term success!
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
