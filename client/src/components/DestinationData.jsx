import { Component } from "react";
import "./DestinationStyles.css"

import destination_1 from "../assets/destination_1.jpg"
import destination_2 from "../assets/destination_2.jpg"


class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="Image1" />
                    <img src={this.props.img2} alt="Image2" />
                </div>
            </div>
        )
    }
}


export default DestinationData;