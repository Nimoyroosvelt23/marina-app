"use client";
import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import HederBlog from "@/app/blog/hederblog";
import CenterBlog from "./centerblog";
import styless from "/app/page.module.css";
import Footer from "@/components/home-page/footer";
function page() {
  return (
    <div className={styless.page_wrapper}>
      <div className={styles.container}>
        <HederBlog />
        <CenterBlog />
        <Footer/>
      </div>
    </div>
  );
}

export default page;
