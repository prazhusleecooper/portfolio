import React from "react";

// ? React Icons
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { BsMailbox } from 'react-icons/bs';

// ? SCSS
import '../Styling/Navbar.scss';
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {

	return (
		<>
			<div className='ruler-section' >
				<div className='white-ruler' />
			</div>

			<div className='nav-wrapper'>

				<div className='footer-link'>
					<button
						onClick={() => 
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							})
						}
					>

						<MdArrowUpward />
						
					</button>	
				</div>

				<div className='footer-name'>
					<span>
						<span className='first-letter'>P</span>RASHANTH <span className='first-letter last-name'>S</span><span className='last-name'>RINIVASAN</span>
					</span>			
				</div>


			</div>
			
		</>
	)

};

export default Footer;