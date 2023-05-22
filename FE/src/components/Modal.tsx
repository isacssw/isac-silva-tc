import { Asteroid } from '../../typings'
import { asteroidName } from '../utils/utils'

interface IModal {
  stateChanger: Function
  isVisible: boolean
  item: Asteroid
}

export function Modal({ stateChanger, isVisible, item }: IModal) {
  if (!isVisible) return null
  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="false"
      className="fixed bg-black bg-opacity-30 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal md:h-full flex justify-center items-center"
      data-testid="modal"
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-blue-900">
              Name: {asteroidName(item.name)}
            </h3>
            <button
              type="button"
              onClick={() => stateChanger(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="staticModal"
              data-testid="modal-close-button"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-start space-x-8">
              <div>
                <div>
                  <p className="text-base font-bold leading-relaxed text-gray-500">
                    Absolute Magnitude:
                  </p>
                  <p className="text-base leading-relaxed text-gray-500">
                    {item.absolute_magnitude_h.toFixed(2)}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-base font-bold leading-relaxed text-gray-500">
                    Reference ID:
                  </p>
                  <p className="text-base leading-relaxed text-gray-500">
                    {item.neo_reference_id}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-base font-bold leading-relaxed text-gray-500">
                    Estimated Diameter (min):
                  </p>
                  <p className="text-base leading-relaxed text-gray-500">
                    {item.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                      2
                    )}
                    Km
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-base font-bold leading-relaxed text-gray-500">
                    Estimated Diameter (max):
                  </p>
                  <p className="text-base leading-relaxed text-gray-500">
                    {item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                      2
                    )}
                    Km
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
