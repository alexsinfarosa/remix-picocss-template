type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const posts = await res.json()

  return posts as Post[]
}

export async function getPost({id}: {id: string}): Promise<Post> {
  const res = await fetch(`${URL}/${id}`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const post = await res.json()

  return post as Post
}
