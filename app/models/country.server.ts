type Country = {
  name: string
  capital: string
  flag: string
  latLng: number[]
  region: string
  subregion: string
  languages: {[key: string]: string}
}

const URL = 'https://restcountries.com/v3.1/all'

export async function getCountries(): Promise<Country[]> {
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const countries = await res.json()

  return countries as Country[]
}

export async function getCountry({name}: {name: string}): Promise<Country> {
  const res = await fetch(`${URL}/${name}`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const country = await res.json()

  return country as Country
}
