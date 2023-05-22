import React from 'react'
import { render } from '@testing-library/react'
import { AsteroidCard } from '@/components/AsteroidCard'
import { mockAsteroids } from '../mocks/asteroidArrays'

describe('should Display a list of asteroids', () => {
  it('renders a list of asteroids', () => {
    const { getAllByTestId } = render(
      <>
        {mockAsteroids.map((asteroid, index) => (
          <AsteroidCard key={index} asteroidObject={asteroid} />
        ))}
      </>
    )

    const asteroidCards = getAllByTestId('asteroid-card')
    expect(asteroidCards.length).toBe(mockAsteroids.length)
  })
})
