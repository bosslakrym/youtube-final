import React from 'react'
import '../styles/Sidebar.css';
import music from "../assets/youtube-music.svg"
import explore from "../assets/explore.svg"
import library from "../assets/library.svg"
import originals from "../assets/originals.svg"
import home from "../assets/home.svg"
import subscription from "../assets/subscriptions.svg"

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
            <div className="sidebarInside">
                <img className='sidebarIcons' src={home} />
                <div>Home</div>
                <img className='sidebarIcons' src={explore} />
                <div>Explore</div>
                <img className='sidebarIcons' src={subscription} />
                <div>Subscriptions</div>
                <img className='sidebarIcons' src={originals} />
                <div>Originals</div>
                <img className='sidebarIcons' src={music} />
                <div>YouTube Music</div>
                <img className='sidebarIcons' src={library} />
                <div>Library</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar