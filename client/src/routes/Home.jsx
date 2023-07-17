import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                title="FEATHER TATTOOZ"
                text="YOU DON'T HAVE TO BE STUCK WITH THE SKIN YOU'RE IN , LET US HELP YOU"
                buttonText="Contact Us"
                url="/"
                btnClass="show"
            />
        <Destination/>
        <Trip/>
        </>
    )
}


export default Home;