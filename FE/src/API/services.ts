import { Asteroid } from '../../typings'

export default async function getAsteroids(
  startDate: string,
  endDate: string
): Promise<Asteroid[]> {
  const url = `${process.env.BASE_API_URL}start_date=${startDate}&end_date=${endDate}`
  const response = await fetch(url, {
    cache: 'no-store',
  })
  const asteroidsList = await response.json()

  return asteroidsList.message
}
