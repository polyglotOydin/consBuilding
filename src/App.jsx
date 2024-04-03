
import Footer from "./components/Footer"
import Home from  "./pages/Home"
import Contact from "./pages/Contact"
import Information from "./pages/Information"
import About from "./pages/About"
import News from "./pages/News"
import FAQ from "./pages/FAQ"
import Navbar from "./components/Navbar"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import transEng from "./locales/en"
import transRu from "./locales/ru"
import transUz from "./locales/uz"
i18n.use(initReactI18next).init({
  resources: {
    en: {translation: transEng},
    ru: {translation: transRu},
    uz: {translation: transUz}

  },
  lng: "en",
  fallbackLng: "en"
})

function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value)
  }
  return (
    <>
     <Navbar changeLang={changeLang} />
    <Home  />
    <About/>
    <Information/>
   <News/>
      <FAQ/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
