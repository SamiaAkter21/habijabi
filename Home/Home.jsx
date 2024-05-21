import React from "react";
import "../Home/Home.css";
import CurlyBracket from "./asset/curly-bracket.png";

const Home = () => {
    return ( 
        <div className="container">
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="left">
                <h2>Welcome to Competitive Programming World</h2>
                <p className="description">Ultimate Beginner’s Roadmap to Competitive Programming and a Free Contest Hosting Platform</p>
            </div>
            <div className="mid"><img className="icon" src={CurlyBracket} alt="Curly Bracket" /></div>
            <div className="right">
                <ul>
                    <li>Roadmap to Mastery</li>
                    <li>Informative Blogs</li>
                    <li>Contest Platform</li>
                    <li>Contest Alert</li>
                </ul> 
            </div>
        </div>
    );
}
 
export default Home;