import Navbar from "@/components/Navbar.js";
import HomeHeader from "@/components/HomeHeader.js";
import AboutDeanna from "@/components/AboutDeanna.js";
import AboutBusiness from "@/components/AboutBusiness.js";
import Footer from "@/components/Footer.js";
import Testimonial from "@/components/Testimonial.js";
import ServiceCard from "@/components/ServiceCard.js";
import GetInTouch from "@/components/GetInTouch.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <AboutDeanna />
      <AboutBusiness />
      <Testimonial />
      <ServiceCard />
      <GetInTouch />
      <Footer />
    </>
  );
}
