import React from 'react'
import thecosypawsIMG from '../images/theCosyPawsWebDev.png'
import { Link } from "react-router-dom";
import './Projects.css'


export default function Projects() {
    return (
        <>
        <div className="card-container">
            <div className="row">
                <div className="column">
                <div className="card">
                    <img src={thecosypawsIMG} width="100%"></img>
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                    <Link>Project Details</Link>
                </div>
                </div>
                <div className="column">
                <div className="card">
                    <img src={thecosypawsIMG} width="100%"></img>
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                    <Link>Project Details</Link>
                </div>

                </div>
                <div className="column">
                <div className="card">
                    <img src={thecosypawsIMG} width="100%"></img>
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                    <Link>Project Details</Link>
                </div>

                </div>
            </div>
        </div>
        </>
    )
}
