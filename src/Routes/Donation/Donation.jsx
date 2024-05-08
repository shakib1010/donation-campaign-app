import NavBar from '../../components/NavBar/NavBar'
import DonationCard from '../../components/DonationCard/DonationCard'

function Donation() {
  return (
    <div>
      <div className="mb-24">
        <NavBar />
      </div>
      <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto mb-9">
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
      <div className="text-center">
        <button className="btn">See More</button>
      </div>
    </div>
  )
}

export default Donation
