import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

import destination_1 from "../assets/destination_1.jpg"
import destination_2 from "../assets/destination_2.jpg"
import destination_3 from "../assets/destination_3.jpg"
import destination_4 from "../assets/destination_4.jpg"



export default function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className= "first-des"
                heading="Heading 1"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor iusto dignissimos ratione neque velit sapiente facilis perferendis reiciendis recusandae."
                img1={destination_1}
                img2={destination_2}
            />

            <DestinationData
            className= "first-des-reverse"
                heading="Heading 2"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor iusto dignissimos ratione neque velit sapiente facilis perferendis reiciendis recusandae."
                img1={destination_3}
                img2={destination_4}
            />

        </div>
    )
}