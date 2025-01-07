import Logo from '../assets/images/Logo.svg'
import XIcon from '../assets/images/x.svg'
import FacebookIcon from '../assets/images/facebook.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
import instaIcon from '../assets/images/insta.svg'

const Footer = () => {
  const media = [
    {
      title: 'X',
      icon: XIcon,
      link: '/'
    },
    {
      title: 'Instagram',
      icon: instaIcon,
      link: '/'
    },
    {
      title: 'Facebook',
      icon: FacebookIcon,
      link: '/'
    },
    {
      title: 'LinkedIn',
      icon: linkedinIcon,
      link: '/'
    },
  ]
  return (
    <div className="bg-regent-gray/5 p-5 text-center md:text-iheriet">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-5 mb-5">
          <div className='w-full md:w-auto'>
            <img src={Logo} className='max-w-40 mx-auto md:mx-0' alt='Recruito' title='Recruito' />
          </div>
          <div className='w-full md:w-auto'>
            <ul>
              {
                media.map((item, index) => 
                  <li key={index} className='inline-block mx-2 p-3'>
                    <a href={item.link}><img src={item.icon} alt={item.title} /></a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-5 mb-5">
          <div className='w-full md:w-auto'>
            <p className='text-sm font-medium'>© 2024 Recruito AI . All rights reserved.</p>
          </div>
          <div className='w-full md:w-auto'>
            <a href='/' className='text-sm font-medium p-3 mx-2'>Terms</a>
            <a href='/' className='text-sm font-medium p-3 mx-2'>privacy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer