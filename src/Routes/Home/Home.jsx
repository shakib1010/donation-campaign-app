import { useLoaderData } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

export default function Home() {
  const catagories = useLoaderData()

  return (
    <div>
      <div className="mb-24">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 mb-24">
        {catagories.map((category) => (
          <Card key={category.id} data={category} />
        ))}
      </div>
    </div>
  )
}

export async function Loader() {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}
