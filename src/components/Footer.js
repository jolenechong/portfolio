import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/JOLENE.png'
import './Footer.css'

export default function Footer() {
    return (
        <>
        <footer>
            <div className="footer">
            <div className="row">
                <div className="column" id="txtcolumn">
                    <img src={Logo} width="100"></img>
                    <p>Web Development Resources and Community that help you to become a Web Developer by working with Real-life projects and practices.</p>
                
                <Link className="fa fa-envelope fa-lg" mailto="mailto:jolenechong7@gmail.com"></Link>

                <Link
                  className="fa fa-instagram fa-lg"
                  href="https://www.instagram.com/joleneprojects.exe/"
                  target="_blank"
                />
                <Link
                  className="fa fa-github fa-lg"
                  href="https://github.com/jolenechong"
                  target="_blank"
                />

                </div>
                <div className="column">
                    <h3>Awards</h3>
                    <Link>GeekOut 2021</Link><br/>
                    <Link>LifeHack 2021</Link>
                </div>
                <div className="column">
                    <h3>Quick Links</h3>
                    <Link>Home</Link><br/>
                    <Link>Projects</Link>
                </div>
            </div>
            </div>
            <p id="footerTXT">© 2021 Jolene</p>
        </footer>
        </>
    )
}
