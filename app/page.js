import styles from "./page.module.css";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>
          Hello <span>I'am </span>
        </h3>
        <h1>Lautaro Olmos</h1>
        <h2> Software Developer </h2>
        <div style={{ paddingTop: 30, paddingBottom: 60 }}>
          <p>
            I'm a web and application developer experienced in designing and
            developing custom solutions for a variety of industries and clients.
            In my portfolio, you'll find a selection of projects that showcase
            my skills in web and application design and development, as well as
            my ability to collaborate with clients to meet their specific needs.
          </p>
        </div>
        
      </div>
      <div className={styles.box}>
        <p>Check out my: </p>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/lautaro-olmos-dev/">
                <BsLinkedin size={25} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/OlmosLautaroGaston"
              >
                <BsGithub size={25} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/lautaolmos/"
              >
                <BsInstagram size={25} />
              </Link>
            </li>
          </ul>
        </nav>
        </div>
    </div>
  );
}
