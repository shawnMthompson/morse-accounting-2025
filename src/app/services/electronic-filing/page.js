import NavBar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Footer from "@/components/Footer.js";
import GetInTouch from "@/components/GetInTouch.js";

import photo from "../../../../public/DeannaT.webp";

export default function ElectronicFilingPage() {
  return (
    <div>
      <NavBar />
      <PageHeader previousPage="Home" currentPage="Electronic Filing" />
      <main className="md:p-12 p-5 flex flex-col md:flex-row md:space-x-12">
        <div id="col-1" className="basis-full md:basis-1/2 order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-4">Electronic Filing</h2>
          <p className="text-lg mb-4">
            Our electronic filing services make submitting your tax returns
            fast, secure, and stress-free. We handle the entire process on your
            behalf, using trusted e-file systems that ensure your documents are
            accurately prepared and promptly transmitted to the IRS and relevant
            state agencies. No more waiting on paper forms or dealing with
            mailing delays—just efficient, dependable filing that gets your
            taxes where they need to go.
          </p>
          <p className="text-lg mb-4">
            Speed isn’t the only advantage of e-filing, for it also reduces
            errors, provides immediate confirmation of receipt, and often leads
            to quicker refunds. We review each return carefully before
            submission, checking for accuracy, eligibility for deductions and
            credits, and compliance with current tax laws. You’ll also receive
            digital copies for your records and clear communication every step
            of the way.
          </p>
          <p className="text-lg mb-4">
            Whether you’re filing as an individual, a small business owner, or
            managing multiple returns, our electronic filing services offer
            peace of mind and convenience. We make it simple to stay on top of
            deadlines and requirements, so you can focus on what matters most.
            With our expert support, tax season doesn’t have to be a burden—it
            can be one less thing on your to-do list.
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
