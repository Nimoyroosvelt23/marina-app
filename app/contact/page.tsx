import styles from "../blog/blog.module.css";
import Image from "next/image";
import Header from "../blog/hederblog";
import RootLayout from "../layout";
import ContectUs from "./contectUs";
import styless from "/app/page.module.css";
import Footer from "@/components/home-page/footer";
export default function Landing() {
  return (
    <RootLayout>
      <div className={styless.page_wrapper}>
        <div className={styles.container}>
          <Header />
          <ContectUs />
          <Footer/>
        </div>
      </div>
    </RootLayout>
  );
}
