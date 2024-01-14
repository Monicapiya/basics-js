import React from "react";
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Navbar from "./Navbar";
import MyCal from "./Cal"

/*
const page = (
    <div>
       <img src="./react-logo.png" width={50} alt="React Logo"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

*/


function Page() {
  return (
    <div>
       <Navbar />
      <Header />
      <MainContent />
      <Footer />
      < MyCal />
    </div>
  );
}

export default Page;
