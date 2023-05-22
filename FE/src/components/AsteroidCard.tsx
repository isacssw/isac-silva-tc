'use client'

import { useState } from 'react'
import { Asteroid } from '../../typings'
import { Modal } from './Modal'
import { asteroidName } from '../utils/utils'

interface AsteroidObject {
  asteroidObject: Asteroid
}

export function AsteroidCard({ asteroidObject: asteroid }: AsteroidObject) {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div
        className="flex flex-col w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        onClick={handleClick}
        data-testid="asteroid-card"
      >
        <div className="p-2">
          <div className="flex">
            <h2 className="font-bold text-lg mb-2 text-blue-900">
              {asteroidName(asteroid.name)}
            </h2>
            <div>
              <span className="text-primary-700  font-medium rounded-md text-xs px-1 py-0.5 text-center ml-3 md:mr-0 bg-blue-50 border">
                ID: {asteroid.id}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Absolute Magnitude: {asteroid.absolute_magnitude_h.toFixed(2)}
          </p>
        </div>
      </div>
      <Modal
        stateChanger={setShowModal}
        isVisible={showModal}
        item={asteroid}
      />
    </>
  )
}
