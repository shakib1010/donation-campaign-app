import NavBar from '../../components/NavBar/NavBar'
import img from '../../assets/education.png'
import { useLoaderData } from 'react-router-dom'
import { createDonation } from '../../donation'
import { toast } from 'react-toastify'
import toastSetting from '../../toastSetting'

export default function DonationDetails() {
  const data = useLoaderData()

  async function handleDonation() {
    const donation = await createDonation(data)
    donation
      ? toast('Donation added', toastSetting)
      : toast('Donation already exist!', toastSetting)
  }

  return (
    <>
      {data && (
        <div>
          <div className="mb-24">
            <NavBar />
          </div>
          <div className="max-w-7xl mx-auto">
            <figure className="relative mb-6 rounded-xl overflow-hidden">
              <img className="w-full" src={img} alt="" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 py-3">
                <button
                  className="btn mx-3 text-white border-none"
                  style={{ backgroundColor: data.color_text }}
                  onClick={handleDonation}
                >
                  Donate: {data.price}$
                </button>
              </div>
            </figure>
            <h1 className="text-4xl font-medium mb-6">{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export async function Loader({ params }) {
  console.log('Params', params)
  const res = await fetch('/data.json')
  const data = await res.json()
  console.log(data)
  const donation = data.find((donation) => donation.id == params.id)
  return donation ? donation : null
}
