import getAsteroids from '@/API/services'
import { List } from '@/components/List'

type PageProps = {
  params: {
    dates: string
  }
}

export default async function DatePage({ params: { dates } }: PageProps) {
  const dateRange = dates.split('%26')

  const startDate = dateRange[0]
  const endDate = dateRange[1]

  const result = await getAsteroids(startDate, endDate)

  return (
    <div>
      {/*@ts-expect-error Async Server Component*/}
      <List array={result} />
    </div>
  )
}
