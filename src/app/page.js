import Navbar from "@/components/Navbar.js";
import HomeHeader from "@/components/HomeHeader.js";
import AboutDeanna from "@/components/AboutDeanna.js";
import AboutBusiness from "@/components/AboutBusiness.js";
import Footer from "@/components/Footer.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <AboutDeanna />
      <AboutBusiness />
      <Footer />
    </>
  );
}
