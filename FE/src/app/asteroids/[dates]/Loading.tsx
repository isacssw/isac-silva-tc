import { Spinner } from '@/components/Spinner'

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="m-auto">
        <Spinner />
      </div>
    </div>
  )
}
