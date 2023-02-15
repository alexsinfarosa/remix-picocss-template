import type {Country} from '~/types/Country'

const URL = 'https://restcountries.com/v3.1'

export async function getCountries(): Promise<Country[]> {
  const res = await fetch(`${URL}/all`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const countries: Country[] = await res.json()

  return countries
}

export async function getCountry({name}: {name: string}): Promise<Country> {
  const res = await fetch(`${URL}/name/${name}`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const country: Country[] = await res.json()

  return country[0]
}
