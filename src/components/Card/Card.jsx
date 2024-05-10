import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import img from '../../assets/education.png'

export default function Card({ data }) {
  return (
    <Link to={`donation/${data.id}`}>
      <div
        className={`card card-compact shadow-xl`}
        style={{ backgroundColor: data.card_bg }}
      >
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div
            className={`badge font-bold`}
            style={{
              backgroundColor: data.category_bg,
              color: data.color_text,
            }}
          >
            {data.category}
          </div>
          <p className="text-2xl font-bold" style={{ color: data.color_text }}>
            {data.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  data: PropTypes.object,
}
