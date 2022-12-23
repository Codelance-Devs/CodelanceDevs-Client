import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing'
import PageLoader from '../components/PageLoader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codelance Devs</title>
      </Head>
      <PageLoader/>
      <Landing/>
    </div>
  )
}
