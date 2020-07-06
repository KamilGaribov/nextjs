import Link from "next/link";
import Head from "next/head"
import unfetch from "isomorphic-unfetch";
import { async } from "q";
import styles from "../styles/index.module.css"

const test = () => {
  x = document.querySelector("#_next")
  console.log(x)
}


function HomePage({ character }) {
  return (
    <div className={styles.b}>
      <Head>
        <title>salam</title>
      </Head>
      <h1 className={styles.t}>Welcome to Next.js! <span onClick={test}>test</span></h1>
      <Link href="/about">
        <a>about</a>
      </Link>
      {character.results.map((i) => (
        <div>{i.name}</div>
      ))}
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const character = await data.json();
  return {
    props: {
      character,
    },
  };
}
