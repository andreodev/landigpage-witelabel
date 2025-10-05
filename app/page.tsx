import AboutProduct from "@/components/AboutProduct";
import Footer from "@/components/Footer";
import Contact from "@/components/FormContact";
import Gateway from "@/components/Gateway";
import Header from "@/components/Header";
import Integration from "@/components/Integration";
import Language from "@/components/Language";
import Navbar from "@/components/Navbar";
import OperationSection from "@/components/Operation";
import Parceiros from "@/components/Parceiros";
import Perguntas from "@/components/Perguntas";
import TheChoice from "@/components/TheChoice";
import UserExperience from "@/components/UserExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Parceiros />
      <Gateway />
      <AboutProduct />
      <Language />
      <UserExperience />
      <Integration />
      <OperationSection />
      <Contact />
      <TheChoice />
      <Perguntas />
      <Footer />
    </>
  );
}
