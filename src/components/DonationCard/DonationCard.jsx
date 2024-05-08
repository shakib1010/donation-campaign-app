import photo1 from '../../assets/Rectangle 4287-1.png'

function DonationCard() {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="m-0">
          <img className="h-full" src={photo1} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="badge bg-red-600 text-white">Badge</div>
          <h2 className="card-title">Clean water for children</h2>
          <p>$1234</p>
          <div>
            <button className="btn bg-purple-400 hover:bg-red-400 text-white">
              View details
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DonationCard
