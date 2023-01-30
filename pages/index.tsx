import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mr-auto ml-auto items-center lg:mt-[-400px] mt-[-450px]'> {/** logo*/}
                <img src='/logo.png' className='lg:h-[400px] lg:w-[400px] h-[200px]   '/>
            </div>
      <Navbar/>
      </div>
  )
}

export default Home
