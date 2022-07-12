import useSWR, { Fetcher } from 'swr'
import { useRouter } from 'next/router'

type PostData = {
  id: string | number
  title: string
  content: string
}

const fetcher: Fetcher<PostData> = (url: string) => fetch(url).then((res) => res.json())

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/post/${id}`, fetcher)

  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'

  return (
    <div>
      <p>id:{data.id}</p>
      <p>title:{data.title} </p>
      <p>content:{data.content} </p>
    </div>
  )
}

export default Post
