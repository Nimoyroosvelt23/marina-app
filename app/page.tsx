import styles from "./landingpage.module.css";
import img from "./icon/logo-kish-enjoy 1 (1).png";
import img_base from "./icon/6700291cf247dfdcdf3ae66be08f520e.jpg";
import Image from "next/image";
import icon1 from "./icon/Expand_down.svg";
import RootLayout from "./layout";
import Header from "@/components/heder/Header";
import Center from "@/components/home-page/Center";
export default function Landing() {
  return (
    <RootLayout>
    <div className={styles.container}>
      
      <Header/>
      <Center/>
    </div>
  </RootLayout>
  );
}
