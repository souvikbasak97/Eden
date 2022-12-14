import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import Scroll from '../components/Scroll'
import Welcome from '../components/Welcome'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Eden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <form className='flex flex-col items-center mt-10 sm: w-full'>
          <Logo/>
          <Scroll page="1"/>
          <Welcome/>
        </form>
      </main>

      
    </div>
  )
}
