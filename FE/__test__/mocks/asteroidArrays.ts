export const asteroidsArray = [
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/2491567?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
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
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3309832?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3309832',
    neo_reference_id: '3309832',
    name: '(2005 YO128)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3309832',
    absolute_magnitude_h: 24.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0319561887,
        estimated_diameter_max: 0.0714562102,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
]

export const expectedSortedArray = [
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/2491567?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
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
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3309832?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3309832',
    neo_reference_id: '3309832',
    name: '(2005 YO128)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3309832',
    absolute_magnitude_h: 24.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0319561887,
        estimated_diameter_max: 0.0714562102,
      },
    },
  },
]

export const duplicatedAsteroidsArray = [
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3309832?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3309832',
    neo_reference_id: '3309832',
    name: '(2005 YO128)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3309832',
    absolute_magnitude_h: 24.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0319561887,
        estimated_diameter_max: 0.0714562102,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
]

export const duplicatedExpectedSortedArray = [
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3404526?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
  {
    links: {
      self: 'http://api.nasa.gov/neo/rest/v1/neo/3309832?api_key=ohUFQZx9utDAuZNfkjURwmCtV5ejNvDA9Itz6EMG',
    },
    id: '3309832',
    neo_reference_id: '3309832',
    name: '(2005 YO128)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3309832',
    absolute_magnitude_h: 24.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0319561887,
        estimated_diameter_max: 0.0714562102,
      },
    },
  },
]

export const mockAsteroids = [
  {
    id: '3404526',
    neo_reference_id: '3404526',
    name: '(2008 EL)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3404526',
    absolute_magnitude_h: 22.2,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.096506147,
        estimated_diameter_max: 0.2157943048,
      },
    },
  },
  {
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
  },
  {
    id: '3309832',
    neo_reference_id: '3309832',
    name: '(2005 YO128)',
    nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3309832',
    absolute_magnitude_h: 24.6,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.0319561887,
        estimated_diameter_max: 0.0714562102,
      },
    },
  },
]

export default {
  asteroidsArray,
  expectedSortedArray,
  duplicatedAsteroidsArray,
  duplicatedExpectedSortedArray,
  mockAsteroids,
}
