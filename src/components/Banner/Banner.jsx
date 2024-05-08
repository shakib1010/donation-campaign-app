import NavBar from '../NavBar/NavBar'
import bannerImg from '../../assets/banner.png'
import Search from '../Search/Search'

function Banner() {
  return (
    <div>
      <div className="absolute w-full top-0 left-0">
        <NavBar />
      </div>
      <div
        className="hero min-h-[600px]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl font-bold text-black mb-6">
              I Grow By Helping People In Need
            </h1>
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
