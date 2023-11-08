import styles from "./page.module.css";
import Header from "../blog/hederblog"
import Image from "next/image";
import RootLayout from "../layout";
export default function Landing() {
  return (
    <RootLayout>
      <div className={styles.container}>
        <Header/>
      </div>
    </RootLayout>
  );
}
