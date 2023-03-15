import './globals.css'
import LayoutHead from "./components/LayoutHead";
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import styles from './page.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <LayoutHead
          title={"portfolio-lautaro"}
          description={"Software developer portfolio"}
          url={"http://lautaro-olmos-dev/"}
        />
      </head>
          <body>
            <Navigation/>
              <main className={styles.main}>
              {children}
              </main>
              <Footer />
          </body>
    </html>
  )
}
