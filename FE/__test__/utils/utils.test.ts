import { Asteroid } from '../../typings'
import { asteroidName, sortAsteroidsByName } from '../../src/utils/utils'
import {
  asteroidsArray,
  duplicatedAsteroidsArray,
  duplicatedExpectedSortedArray,
  expectedSortedArray,
} from '../mocks/asteroidArrays'
import { describe } from 'node:test'

describe('should Sort the asteroids by name', () => {
  it('should sort an array of asteroids by name in alphabetical order', () => {
    const sortedArray = sortAsteroidsByName(asteroidsArray)

    expect(sortedArray).toEqual(expectedSortedArray)
  })

  it('should handle arrays with duplicate names', () => {
    const asteroidsArray: Asteroid[] = duplicatedAsteroidsArray
    const expectedSortedArray: Asteroid[] = duplicatedExpectedSortedArray

    const sortedArray = sortAsteroidsByName(asteroidsArray)
    expect(sortedArray).toEqual(expectedSortedArray)
  })
})

describe('should format asteroid name', () => {
  it('should return a formatted asteroid name', () => {
    const formattedName = asteroidName('491567 (2012 RG3)')
    expect(formattedName).toEqual('RG3')
  })
})
