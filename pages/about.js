const { default: Link } = require("next/link");
import styles from "../styles/about.module.css"

function AboutPage() {
  return (
    <div className={styles.b}>
      <h1 className={styles.t}>About me <span>test</span></h1>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}

export default AboutPage;
