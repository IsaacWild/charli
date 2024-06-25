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
          <div className={styles.center}>
            <form>
              <div className={styles.form}>
                <label>Tag Text</label>
                <input type="text" id="tag-text"></input>
              </div>
              <h4>Tag Position</h4>
              <div className={styles.form}>
                <label htmlFor="tag-right">Right</label>
                <input
                  type="radio"
                  name="position"
                  id="tag-right"
                  value="right"
                ></input>

                <label htmlFor="tag-left">Left</label>
                <input
                  type="radio"
                  name="position"
                  id="tag-left"
                  value="left"
                ></input>
              </div>
              <div className={styles.formSub}>
                <input type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
