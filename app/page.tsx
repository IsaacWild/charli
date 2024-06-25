import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Charli-fy your pics</h1>
        <div className={styles.description}>
          <p>
            You can upload your pics and then add in your background and labels
          </p>
        </div>
      </div>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src="/example.png"
            width={300}
            height={300}
            alt="example of a brat cover"
          ></Image>
          <button>Upload Image</button>
          <form action='' method="get" className={styles.form}>
            <label>Tag Text</label>
            <input type="text" id="tag-text"></input>
          </form>
        </div>
      </div>
    </main>
  );
}
