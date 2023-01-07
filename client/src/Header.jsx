import React from 'react'
import "./App.css"

export default function Header() {
    return (
        <div>
            <ul>
                <li style={{float:"left"}}><img className='logo' alt='' src='https://th.bing.com/th/id/OIP.5CI91lJ_GwJ0R4Q7eLH_AgHaIq?w=184&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7'/></li>
                <li className='headName' style={{float:"left"}}>Rubixe</li>
                <li><a  href="#Technology">Technology</a></li>
                <li><a  href="#Innovations">Innovations</a></li>
                <li><a  href="#About">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#home">Home</a></li>
            </ul>

        </div>
    )
}
