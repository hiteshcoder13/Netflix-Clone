import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link } from 'react-router-dom'
function Player() {
  return (
    <div className='player'>
     <Link to={'/Home'}> <img src={back_arrow_icon} alt="" srcset="" /></Link>
      <iframe src='https://www.youtube.com/embed/ePO5M5DE01I' frameborder="0" width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date:</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
