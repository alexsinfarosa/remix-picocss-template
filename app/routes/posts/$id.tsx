import type {LoaderArgs} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import invariant from 'tiny-invariant'
import {getPost} from '~/models/post.server'

export async function loader({request, params}: LoaderArgs) {
  invariant(params.id, 'id not found')
  const post = await getPost({id: params.id})
  return json({post})
}

export default function PostPage() {
  const {post} = useLoaderData<typeof loader>()

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
