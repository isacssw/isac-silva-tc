import getAsteroids from '@/API/services'

describe('Search by a range of dates', () => {
  const mockFetch = jest.fn()

  beforeEach(() => {
    global.fetch = mockFetch
    jest.resetAllMocks()
  })

  it('should fetch and return a list of asteroids', async () => {
    const startDate = '2023-05-20'
    const endDate = '2023-05-21'
    const mockAsteroids = {
      message: [{ name: 'Asteroid 1' }, { name: 'Asteroid 2' }],
    }
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockAsteroids),
    }

    mockFetch.mockResolvedValue(mockResponse)

    const result = await getAsteroids(startDate, endDate)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(
      `${process.env.BASE_API_URL}start_date=${startDate}&end_date=${endDate}`,
      {
        cache: 'no-store',
      }
    )
    expect(mockResponse.json).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockAsteroids.message)
  })
})
