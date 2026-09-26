import { workComparisons } from '../../data/work'
import WorkCard from './WorkCard'

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {workComparisons.map((comparison) => (
        <WorkCard key={comparison.id} comparison={comparison} />
      ))}
    </div>
  )
}
