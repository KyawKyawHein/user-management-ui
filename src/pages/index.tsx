import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const index = () => {
  const router = useRouter()
  useEffect(()=>{
    router.push('/users')
  },[])
  return (
    <Layout title={'test'}>
      {/* <div className="flex justify-center ">
      <h1>mg mg</h1> */}
      <div className='text-white font-bold flex gap-3 bg-black p-3 rounded'>
          <h1 className='text-3xl'>hello</h1>
          <Link href={'/users'} className='bg-blue-500 p-2 rounded-full'>Go to User Management Page</Link>
      </div>
      {/* </div> */}
    </Layout>
  )
}

export default index
