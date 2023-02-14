import type {LoaderArgs} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import invariant from 'tiny-invariant'
import {getCountry} from '~/models/country.server'

export async function loader({request, params}: LoaderArgs) {
  invariant(params.name, 'name not found')
  const country = await getCountry({name: params.name})
  return json({country})
}

export default function PostPage() {
  const {country} = useLoaderData<typeof loader>()
  console.log(country)
  return (
    <>
      <h1>ciccio</h1>
    </>
  )
}
