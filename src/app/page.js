import Image from "next/image";
import styles from "./page.module.css";
import path from "path";
import Link from "next/link";

const fs = require("fs");

function getSite() {
  const SITES_FILE = path.resolve("public", "sites-global.txt");

  var line = "";

  var data = fs.readFileSync(SITES_FILE, "utf-8");

  var lines = data.split("\n");

  // choose one of the lines...
  line = lines[Math.floor(Math.random() * lines.length)];

  return line;
}

export default function Home() {
  const site = getSite();

  return (
    <div className={styles.main}>
      <h1>Random Site</h1>
      <p className={styles.description}>
        Go to
        <a href={"https://" + site} className={styles.button} target="_blank">
          {site}
        </a>
      </p>
      <p className={styles.description}>
        <a
          className={styles.button + " " + styles.right}
          style={{ textDecoration: "none" }}
          href="/"
        >
          Refresh
        </a>
      </p>
    </div>
  );
}
