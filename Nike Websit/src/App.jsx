
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQulaity from "./sections/SuperQuality";
import  SpecialOffer from "./sections/SpecialOffer";
import Footer from "./sections/Footer";
import CustomerReviews from "./sections/CustomerReviews";
import  Suscribe  from "./sections/Suscribe";
import Nav from "./components/Nav";
import Services from "./sections/Services";


export default function App() {
  return (
   <main className="relative">
    <Nav/>  
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>   
      </section>

    <section className="padding">
     <PopularProducts/>
    </section>

    <section className="padding">
      <SuperQulaity/>
    </section>

    <section className="padding">
      <Services/>
    </section>

    <section className="padding-x py-10">
      <SpecialOffer/>   </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Suscribe/>
    </section>

    <section className=" bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
   </main>
  )
}