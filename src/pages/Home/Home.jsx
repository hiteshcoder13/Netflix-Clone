import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../../public/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
const Home = () => {
 
  // const handleSearch = (query) => {
  //     setSearchQuery(query);
  // };

  
  return (
    <>
    <div className="home"> <Navbar />
    <div className="hero"><img src={hero_banner} alt="" srcset="" className='banner-img' />
    <div className="hero-caption">
        <img src={hero_title} alt="" srcset="" className='caption-img' />
        <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to sava the city from the immortal enemy </p>
        <div className="hero-btns">
            <button className='btn'> <img src={play_icon} alt="" srcset="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" srcset="" />More Info</button>
        </div>
        <TitleCards/>
    </div>
    </div>
    <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} query={"Tiger"}/>
      <TitleCards title={"Hindi Movie"} query={"Hindi"}/>
      <TitleCards title={"Horror"} query={"Horror"}/>
      <TitleCards title={"Fight"} query={"Fight"}/>

    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home
