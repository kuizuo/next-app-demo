import useSWR, { Fetcher } from 'swr'

type PostData = {
  id: string | number
  title: string
  content: string
}

const fetcher: Fetcher<PostData[]> = (url: string) => fetch(url).then((res) => res.json())

const Post = () => {
  const { data, error } = useSWR('/api/post', fetcher)

  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'

  return (
    <div>
      {data.map((post) => (
        <>
          <p>id:{post.id}</p>
          <p>title:{post.title} </p>
          <p>content:{post.content} </p>
        </>
      ))}
    </div>
  )
}

export default Post
