import bannerPattern from '../assets/bannerPattern.svg'
import PropTypes from 'prop-types'
const Banner = ({title}) => {

  
  return (
    <div className={`absolute top-0 center w-screen h-44 min-h-20 overflow-hidden`}>
      <div className='absolute top-0 left-0 w-full h-full bg-cover hue-rotate-90 opacity-25 overflow-hidden' style={{ backgroundImage: `url(${bannerPattern})` }}></div>
      <h1 className='text-xl sm:text-3xl md:text-6xl underline decoration-pink-500 underline-offset-8 z-50 text-white opacity-100 '>{title}</h1>
    </div>
  )
}
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default Banner