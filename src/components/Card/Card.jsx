import img from '../../assets/education.png'

function Card() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="badge bg-red-600 text-white">Badge</div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default Card
