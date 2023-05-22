import { Asteroid } from '../../typings'
import { sortAsteroidsByName } from '../utils/utils'
import { AsteroidCard } from './AsteroidCard'

interface AsteroidArray {
  array: Asteroid[]
}

export async function List({ array: asteroidsArray }: AsteroidArray) {
  const sortedArray = sortAsteroidsByName(asteroidsArray)

  return (
    <div
      data-testid="asteroid-list"
      className="pb-10 bg-gray-100 w-full gap-8 flex-wrap flex justify-center"
    >
      {sortedArray.map((asteroid, index) => (
        <AsteroidCard key={index} asteroidObject={asteroid} />
      ))}
    </div>
  )
}
