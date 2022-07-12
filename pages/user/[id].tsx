import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// const User = () => {
//   const router = useRouter()
//   const { id } = router.query

//   const [data, setData] = useState({
//     username: '',
//     email: '',
//   })

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data)
//       })
//       .catch((err) => {})
//   }, [id])

//   return (
//     <div>
//       <p>username:{data.username} </p>
//       <p>email:{data.email} </p>
//     </div>
//   )
// }

// export default User

const User = ({ data }: { data: any }) => {
  return (
    <div>
      <p>username:{data.username} </p>
      <p>email:{data.email} </p>
    </div>
  )
}

export default User

export const getStaticProps = async function (context: { params: { id: any } }) {
  const { id } = context.params

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: new Array(20).fill(0).map((a, i) => ({ params: { id: String(i + 1) } })),
    fallback: 'blocking',
  }
}
