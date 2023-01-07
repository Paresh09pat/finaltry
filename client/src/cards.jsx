import React from 'react'
import "./App.css"

export default function AllCards() {
    return (
        <div id='outer'>
            <p className='cardhead'> TECH FOR TEENS - A RUBIXE INITIATIVE </p>

            <div className='numbers'>
                <div className='one'>1</div>
                <div className='two'>2</div>
                <div className='three'>3</div>
                <div className='four'>4</div>
                <div className='five'>5</div>
            </div>

            <div className='cardMain'>
                <div className='card'>
                    <img alt='' src='https://media.istockphoto.com/vectors/vector-illustration-of-old-crt-computer-monitor-isolated-on-white-vector-id527343865?k=6&m=527343865&s=170667a&w=0&h=l9rnumvgKubFK4Q5rLP0rNb48Nh4MuXmU3-oJXIuHrY=' />
                    <p style={{ textAlign: "center" }}>Introducing AI to the childrens for the next future to understand the latest technologies </p>
                </div>

                <div className='card' id='card2'>
                    <p style={{ textAlign: "center" }}>The technology goes beyond the imagination, now we sorting the issue of the future semicondoctor </p>
                    <img alt='' src='https://th.bing.com/th/id/OIP.YcuPpG4jo7Jg6nUQKY-cPAHaD5?w=344&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                </div>

                <div className='card'>
                    <img alt='' src='https://th.bing.com/th/id/OIP.DiUIZKYu-0ySaBIGVnMR3AAAAA?w=189&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                    <p style={{ textAlign: "center" }}>The Aquizition of the programming skills is more important is highly recommended .</p>
                </div>

                <div className='card' id='card4'>
                    <p style={{ textAlign: "center" }}> Equipments is more important to done all the require tasks and now we are doing all the tasks with that.</p>
                    <img alt='' src='https://th.bing.com/th/id/OIP.mnD5MPadlZ9H6Iu2CtT_VQHaIR?w=150&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                </div>

                <div className='card'>
                    <img alt='' src='https://th.bing.com/th/id/OIP.srewABA1TfuH-WMi-hBUoQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                    <p style={{ textAlign: "center" }}> This making our programming better and we learns more from the this</p>
                </div>
            </div>

        </div>
    )
}
