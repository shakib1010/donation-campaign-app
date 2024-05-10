import NavBar from '../../components/NavBar/NavBar'
import DonationCard from '../../components/DonationCard/DonationCard'
import { getDonations } from '../../donation'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
/*
 ** if donation is grater than 4 this display only 4 data and see more button
 ** if "see more" button clicked display all data.
 */
export default function Donation() {
  const donations = useLoaderData()
  const [displayDonations, setDisplayDonations] = useState([])

  useEffect(() => {
    donations.length > 4
      ? setDisplayDonations(donations.slice(0, 4))
      : setDisplayDonations(donations)
  }, [donations])

  function handleSeeMore() {
    setDisplayDonations(donations)
  }

  return (
    <div>
      <div className="mb-24">
        <NavBar />
      </div>
      <div className="grid grid-cols-2 gap-5 max-w-7xl mx-auto mb-9">
        {donations &&
          displayDonations.map((donation) => (
            <DonationCard key={donation.id} data={donation} />
          ))}
      </div>
      <div className="text-center">
        {displayDonations.length < 5 ? (
          <button className="btn" onClick={handleSeeMore}>
            See More
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export async function Loader() {
  const donations = await getDonations()
  return donations
}
