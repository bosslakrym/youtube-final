import React from 'react'
import '../styles/Header.css';
import logo from "../assets/youtube-logo.svg"
import hamburger from "../assets/hamburger-menu.svg"
import notifications from "../assets/notifications.svg"
import search from "../assets/search.svg"
import upload from "../assets/upload.svg"
import voice from "../assets/voice-search-icon.svg"
import apps from "../assets/youtube-apps.svg"

const Header = () => {
  return (
	<div>
		<div className='header'>
			<div className="left-column"> 
			<img className='hamburger' src={hamburger} />
			<img className='logo' src={logo} />
			</div>
			<div className="middle-column">
				<input className='search' type='text' placeholder='Search' />
				<button className='searchBG'>
					<img src={search} className='search-icon' />
				</button>
				<button className='voiceBG'>
					<img src={voice} className='voice-icon' />
				</button>
			</div>
			<div className="right-column">
				<img className='uploadIcon' src={upload} />
				<img className='ytApps' src={apps} />
				<img className='notify' src={notifications} />
				<img className='profilePic' src='https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/my-channel.jpeg' />
			</div>
		</div>
	</div>
  )
}

export default Header