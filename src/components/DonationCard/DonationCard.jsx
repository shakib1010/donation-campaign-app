import { Link } from 'react-router-dom'
import photo1 from '../../assets/Rectangle 4287-1.png'

function DonationCard({ data }) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="m-0">
          <img className="h-full" src={photo1} alt="Movie" />
        </figure>
        <div className="card-body">
          <div
            className="badge"
            style={{
              backgroundColor: data.category_bg,
              color: data.color_text,
            }}
          >
            {data.category}
          </div>
          <h2 className="card-title">{data.title}</h2>
          <p>{data.price}</p>
          <div>
            <Link to={`/donation/${data.id}`}>
              <button className="btn bg-purple-400 hover:bg-red-400 text-white">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DonationCard
