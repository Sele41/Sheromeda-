import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { Collapse } from 'bootstrap'

export default function Navbar() {
    const [Collapse, setCollapse] = useState("")
    const [Show, setShow] = useState("")
    const [Expanded, setExpanded] = useState(false)
    const [Togglestatus, setToggelestatus] = useState(false)


    const Toggle = () => {
        if (!Togglestatus) {
            setCollapse("collapsed")
            setShow("show")
            setExpanded(true)

        } else {
            setCollapse("")
            setShow("")
            setExpanded(false)

        }
        setToggelestatus(!Togglestatus)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand logo" to="/"><img src='Sherocopy.svg' className='img' /></NavLink>
                    <button className={"navbar-toggler " + Collapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={Expanded} aria-label="Toggle navigation" onClick={Toggle}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div class={"collapse navbar-collapse navitem " + Show} id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item  ">
                                <NavLink className="nav-link " aria-current="page" to="/store">Store</NavLink>
                            </li>
                            <li className="nav-item  ">
                                <NavLink className="nav-link" aria-current="page" to="/chat">Chat</NavLink>
                            </li>
                            <li className="nav-item  ">
                                <NavLink className="nav-link " aria-current="page" to="/Profile">Profile</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
