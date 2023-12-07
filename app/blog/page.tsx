"use client";
import React from "react";
import Image from "next/image";
import styles from "./blog.module.css";
import HederBlog from "@/app/blog/hederblog";
import CenterBlog from "./centerblog";
function page() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.container}>
        <HederBlog />
        <CenterBlog />
      </div>
    </div>
  );
}

export default page;
