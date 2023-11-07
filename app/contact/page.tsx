import styles from "../blog/blog.module.css";
import Image from "next/image";
import Header from "../blog/hederblog"
import RootLayout from "../layout";
import ContectUs from "./contectUs";
export default function Landing() {
  return (
    <RootLayout>
      <div className={styles.container}>
        <Header/>
        <ContectUs/>
      </div>
    </RootLayout>
  );
}