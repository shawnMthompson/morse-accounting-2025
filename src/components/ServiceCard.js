import Image from "next/image";
import Link from "next/link";

import accountingImage from "../../public/accounting.jpg";

const services = [
  {
    title: "Accounting",
    link: "/services/accounting",
    image: accountingImage,
    description:
      "Expert financial guidance tailored to your business needs, ensuring clarity and compliance every step of the way.",
  },
  {
    title: "Bookkeeping",
    link: "/services/bookkeeping",
    image: accountingImage,
    description:
      "Streamlined bookkeeping solutions designed to keep your financial records accurate, organized, and effortlessly managed.",
  },
  {
    title: "Electronic Filing",
    link: "/services/electronic-filing",
    image: accountingImage,
    description:
      "Seamless electronic filing services for swift and efficient submission of your tax returns, saving you time and hassle.",
  },
  {
    title: "Notary Public",
    link: "/services/notary-public-financials",
    image: accountingImage,
    description:
      "Dependable notary and public financial services providing assurance and authenticity to your crucial documents and transactions.",
  },
  {
    title: "Tax Planning",
    link: "/services/tax-planning",
    image: accountingImage,
    description:
      "Strategic tax planning strategies crafted to optimize your financial position and minimize tax liabilities, ensuring a secure future for your business.",
  },
  {
    title: "Tax Preparation",
    link: "/services/tax-preparation",
    image: accountingImage,
    description:
      "Trustworthy tax preparation services to maximize your returns and minimize your stress, backed by meticulous attention to detail.",
  },
];

export default function ServiceCard() {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-700 max-h-72 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
          >
            <Link href={service.link}>
              <Image
                src={service.image}
                alt={service.title}
                width={512}
                height={512}
                className="w-full mb-4"
              />
              <h3 className="text-white text-xl font-semibold mb-2">
                {service.title}
              </h3>
            </Link>
            <p className="text-white">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
