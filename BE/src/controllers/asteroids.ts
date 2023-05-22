import { Request, Response, NextFunction } from 'express'
import axios, { AxiosResponse } from 'axios'
import Asteroid from '../model/Asteroid'

const getAsteroids = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let dates: string = req.params.dates
  const url = `${process.env.BASE_API_URL}?${dates}&api_key=${process.env.NASA_API_KEY}`

  let result: AxiosResponse = await axios.get(url)
  let asteroids = result.data

  let asteroidsArray: Asteroid[] = []

  Object.keys(asteroids.near_earth_objects || {}).forEach(
    (item) =>
      (asteroidsArray = asteroidsArray.concat(
        asteroids.near_earth_objects[item]
      ))
  )

  return res.status(200).json({
    message: asteroidsArray,
  })
}

export default { getAsteroids }
