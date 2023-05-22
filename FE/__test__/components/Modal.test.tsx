import React from 'react'
import { render, screen } from '@testing-library/react'
import { Modal } from '@/components/Modal'
import { Asteroid } from '../../typings'
import { asteroidName } from '../../src/utils/utils'

describe('See the detail of the asteroids by clicking on one of the items', () => {
  const asteroidInfo: Asteroid = {
    id: '2491567',
    neo_reference_id: '2491567',
    name: '491567 (2012 RG3)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2491567',
    absolute_magnitude_h: 18.06,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.6494638409,
        estimated_diameter_max: 1.4522452972,
      },
    },
  }

  const toggleModal = jest.fn()

  test('should show the modal and display the asteroid info', () => {
    const isVisible = true

    render(
      <Modal
        isVisible={isVisible}
        item={asteroidInfo}
        stateChanger={toggleModal}
      />
    )

    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeInTheDocument()

    expect(modalElement).toHaveTextContent(asteroidName(asteroidInfo.name))

    expect(modalElement).toHaveTextContent(asteroidInfo.neo_reference_id)

    expect(modalElement).toHaveTextContent(
      asteroidInfo.estimated_diameter.kilometers.estimated_diameter_min
        .toFixed(2)
        .toString()
    )

    expect(modalElement).toHaveTextContent(
      asteroidInfo.estimated_diameter.kilometers.estimated_diameter_max
        .toFixed(2)
        .toString()
    )
  })

  test('should hide the modal when the toggleModal function is called', () => {
    const isVisible = true

    render(
      <Modal
        isVisible={isVisible}
        item={asteroidInfo}
        stateChanger={toggleModal}
      />
    )

    const closeModalButton = screen.getByTestId('modal-close-button')
    closeModalButton.click()

    expect(toggleModal).toHaveBeenCalledTimes(1)
  })
})
