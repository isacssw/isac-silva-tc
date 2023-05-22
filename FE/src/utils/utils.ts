import { Asteroid } from '../../typings'

export function asteroidName(name: string): string {
  const asteroidName = name.replace(')', '').split(' ')

  return asteroidName[asteroidName.length - 1]
}

export function sortAsteroidsByName(asteroidsArray: Asteroid[]): Asteroid[] {
  return asteroidsArray.sort((a, b) =>
    asteroidName(a.name).localeCompare(asteroidName(b.name))
  )
}

export const generateStringDate = (valueToAdd: number): string => {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(date.getDate() + valueToAdd).padStart(2, '0')}`
}

export default { asteroidName, sortAsteroidsByName, generateStringDate }
