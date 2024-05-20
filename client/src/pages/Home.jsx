import {Hero} from "../components/Hero.jsx";
import {Contact} from "../components/Contact.jsx";
import {Category} from "../components/Category.jsx";
import {Order} from "../components/Order.jsx";
import {Testimonials} from "../components/Testimonials.jsx";

export const Home = () => {
    return (
        <>
            <Hero/>
            <Category/>
            <Order/>
            <Testimonials/>
            <Contact/>
        </>
    )
}