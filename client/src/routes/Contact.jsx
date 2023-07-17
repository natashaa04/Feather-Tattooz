import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/Gallery_background.jpg"


function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={contactImg}
                title="Contact Us"
                btnClass="hide"
            />
        </>
    )
}


export default Contact;