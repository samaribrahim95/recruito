import Logo from '../assets/images/Logo.svg'
import PrimaryButton from './atoms/primary-button'
import ColorStart from '../assets/images/color-star.svg'
import MenuIcon from '../assets/images/menu.svg'
import CloseIcon from '../assets/images/close.svg'
import { useEffect, useState } from 'react';

type Route = {
	text: string;
	link: string;
	active?: boolean
}

const NavBar = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const routes:Route[] = [
		{
			text: 'Home',
			link: '/',
			active: true
		},
		{
			text: 'Features',
			link: '/'
		},
		{
			text: 'Pricing',
			link: '/'
		},
		{
			text: 'Resource',
			link: '/'
		}
	]

	useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

	const changeNavBg = () => {
		window.scrollY >= 200 ? setScrolled(true) : setScrolled(false);
	}

  return( 
		<div className={`fixed w-full z-[99] transition-all ${scrolled? 'bg-white mt-0 shadow-md' : 'bg-transparent mt-6'}`}>
			<div className={`container mx-auto relative z-[9] px-4`}>
				<div className="bg-white rounded-40 flex justify-between items-center py-3 px-4">
					<a href="/">
						<img src={Logo} className='max-w-40' alt='Recruito Logo' title='Recruito Logo' />
					</a>
					<ul className='md:flex hidden gap-3'>
						{
							routes.map((route, index) => 
								<li className={`text-sm leading-5 p-3 font-medium ${route.active ? 'gradient-text' : ''}`} key={index}>
									<a href={route.link} className='flex items-start gap-1'>
										<span>{route.text}</span>
										{route.active && <img src={ColorStart} alt="Star" />}
									</a>
								</li>
						)
						}
					</ul>
					<div className='md:flex hidden'>
						<PrimaryButton text='Contact Us' action={() => null} />
					</div>
					<button onClick={() => setOpenMenu(!openMenu)} className='md:hidden'>
						<img src={openMenu ? CloseIcon : MenuIcon} alt='Menu bar' className='max-w-4' />
					</button>
				</div>
			</div>
			<div className={`absolute h-screen w-full top-0 bg-white transition-all duration-500 ${openMenu ? 'left-0' : 'left-full'}`}>
				<div className="relative h-full">
					<div className='flex flex-col justify-between h-full py-20 px-5'>
						<ul>
							{
								routes.map((route, index) => 
									<li className={`text-sm leading-5 p-3 font-medium ${route.active ? 'gradient-text' : ''}`} key={index}>
										<a href={route.link} className='flex items-start gap-1'>
											<span>{route.text}</span>
											{route.active && <img src={ColorStart} alt="Star" />}
										</a>
									</li>
							)
							}
						</ul>
						<div>
							<PrimaryButton text='Contact Us' action={() => null} />
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default NavBar