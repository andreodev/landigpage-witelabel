import AboutProduct from "@/components/AboutProduct";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";
import Contact from "@/components/FormContact";
import Gateway from "@/components/Gateway";
import Header from "@/components/Header";
import Integration from "@/components/Integration";
import Language from "@/components/Language";
import Navbar from "@/components/Navbar";
import OperationSection from "@/components/Operation";
import Perguntas from "@/components/Perguntas";
import Steps from "@/components/Steps";
import Templates from "@/components/Templates";
import UserExperience from "@/components/UserExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Templates />
      <Gateway />
      <AboutProduct />
      <Language />
      <UserExperience />
      <Integration />
      <OperationSection />
      <AppSection />
      <Steps />
      <Contact />
      <Perguntas />
      <Footer />
    </>
  );
}
