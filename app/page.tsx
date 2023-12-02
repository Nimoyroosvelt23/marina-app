import styles from "./page.module.css";
import RootLayout from "./layout";
import Header from "@/components/heder/Header";
import Image from "next/image";
import Center from "@/components/home-page/Center";
export default function Landing() {
  return (
    <RootLayout>
      <div className={styles.page_wrapper}>
        <div className={styles.container}>
          <Header />
          <Center />
        </div>
      </div>
    </RootLayout>
  );
}
