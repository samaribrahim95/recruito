import Footer from "../../shared/footer"
import NavBar from "../../shared/navbar"
import Benefits from "./components/benefits"
import FAQs from "./components/faqs"
import Features from "./components/features"
import Header from "./components/header"
import Hiring from "./components/hiring"
import Organisations from "./components/organisations"
import PreviewVideo from "./components/previewVideo"
import Testimonials from "./components/testimonials"

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <PreviewVideo />
      <Organisations />
      <Features />
      <Benefits />
      <FAQs />
      <Testimonials />
      <Hiring />
      <Footer />
    </>
  )
}

export default Home