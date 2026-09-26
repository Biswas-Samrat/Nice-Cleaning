import AreaCard from './AreaCard'
import { areas } from '../../data/areas'

export default function AreasList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {areas.map((area) => (
        <AreaCard key={area.id} area={area} />
      ))}
    </div>
  )
}
