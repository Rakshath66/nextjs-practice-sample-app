import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
// import code from "../public/code.jpg"

export default function Home() {
  const session = useSession();

  console.log("Session", session);

  if(session.data === null) {
    return <button onClick={signIn}>Login</button>
  }

  return (
    <div className={styles.container}>
      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
