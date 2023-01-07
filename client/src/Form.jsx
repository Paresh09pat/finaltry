import React from "react";
import "./Form.css"

export default function Form() {
    return (
        <div className="main">
<div className="get">
    <h1>GET IN TOUCH </h1>
    <div>
        Please contact us to know about us and we will go forward towards new future.
    </div>
</div>

            <form>
                <label>Name</label> <br />
                <input type="text" placeholder="Enter Your Name "></input><br /><br />

                <label>Email</label> <br />
                <input type="email" placeholder="Enter Your Email"></input><br /><br />

                <label>Mobile Number</label> <br />
                <input type="tel" placeholder="Enter Your Mobile Number"></input><br /><br />

                <button type="submit">Register Now</button>
            </form>
        </div>
    )
}
