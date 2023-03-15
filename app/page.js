import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Welcome to my website</h1>
      <p>Here you can find information about me and my work.</p>
      </>
  )
}
