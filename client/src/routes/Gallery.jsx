import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GalleryImg from "../assets/Gallery_background.jpg"


function Gallery() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={GalleryImg}
                title="Gallery"
                btnClass="hide"
            />
        </>
    )
}


export default Gallery;