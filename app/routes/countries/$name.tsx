import type {LoaderArgs} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useCatch, useLoaderData} from '@remix-run/react'
import invariant from 'tiny-invariant'
import {getCountry} from '~/models/country.server'

export async function loader({request, params}: LoaderArgs) {
  invariant(params.name, 'country name not found')
  const country = await getCountry({name: params.name})
  return json({country})
}

export default function PostPage() {
  const {country} = useLoaderData<typeof loader>()

  return (
    <>
      <h1>{country.name.common}</h1>
      <h2 style={{fontSize: '6em'}}>{country.flag}</h2>
      <p>Continent: {country.continents[0]}</p>
      <p>Capital: {country.capital[0]}</p>
    </>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error)

  return <div>An unexpected error occurred: {error.message}</div>
}

export function CatchBoundary() {
  const caught = useCatch()

  if (caught.status === 404) {
    return <div>Country not found</div>
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`)
}
