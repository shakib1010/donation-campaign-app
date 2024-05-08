import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

export const Home = () => {
  return (
    <div>
      <div className="mb-24">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 mb-24">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
