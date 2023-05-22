import { List } from '@/components/List'
import getAsteroids from '../API/services'
import { generateStringDate } from '../utils/utils'

export default async function Home() {
  const startDate = generateStringDate(0)
  const endDate = generateStringDate(2)

  const result = await getAsteroids(startDate, endDate)

  return (
    <div>
      {/*@ts-expect-error Async Server Component*/}
      <List array={result} />
    </div>
  )
}
