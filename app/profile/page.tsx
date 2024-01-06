"use client";

import React, { useState } from "react";
import Image from "next/image";
import RootLayout from "../layout";
import Header from "../blog/hederblog";
import Profile from "./profile";
import LastReserv from "./lastReserv";
import Favorite from "./favrite";
import Transaction from "./transaction";
import Question from "./question";
import styles from "../blog/blog.module.css";
import styless from "./divRight.module.css";
import stylesss from "/app/page.module.css";
import Footer from "@/components/home-page/footer";

export default function Landing({}) {
  const [selectedComponent, setSelectedComponent] = useState("profile");
  const [selectedColor, setSelectedColor] = useState("#dd9800");
  const [selectedIcon, setSelectedIcon] = useState(
    "Arrow_drop_left_yellow.svg"
  );
  const [defaultIcon, setDefaultIcon] = useState("Arrow_drop_left.svg");

  const handleComponentChange = (component: React.SetStateAction<string>) => {
    setSelectedComponent(component);
  };
  console.log(selectedIcon);
  return (
    <div className={stylesss.page_wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styless.base}>
          <div className={styless.div_right}>
            <div
              className={styless.div_information1}
              onClick={() => handleComponentChange("profile")}
            >
              <p
                className={styless.p_div_right}
                style={{
                  color:
                    selectedComponent === "profile" ? selectedColor : "#393939",
                }}
              >
                حساب کاربری
              </p>
              <Image
                src={`/icon/${
                  selectedComponent === "profile" ? selectedIcon : defaultIcon
                }`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div
              className={styless.div_information1}
              onClick={() => handleComponentChange("lastReserv")}
            >
              <p
                className={styless.p_div_right}
                style={{
                  color:
                    selectedComponent === "lastReserv"
                      ? selectedColor
                      : "#393939",
                }}
              >
                رزروهای اخیر
              </p>
              <Image
                src={`/icon/${
                  selectedComponent === "lastReserv"
                    ? selectedIcon
                    : defaultIcon
                }`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div
              className={styless.div_information1}
              onClick={() => handleComponentChange("favorite")}
            >
              <p
                className={styless.p_div_right}
                style={{
                  color:
                    selectedComponent === "favorite"
                      ? selectedColor
                      : "#393939",
                }}
              >
                علاقه مندی ها
              </p>
              <Image
                src={`/icon/${
                  selectedComponent === "favorite" ? selectedIcon : defaultIcon
                }`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div
              className={styless.div_information1}
              onClick={() => handleComponentChange("transaction")}
            >
              <p
                className={styless.p_div_right}
                style={{
                  color:
                    selectedComponent === "transaction"
                      ? selectedColor
                      : "#393939",
                }}
              >
                تراکنش ها
              </p>
              <Image
                src={`/icon/${
                  selectedComponent === "transaction"
                    ? selectedIcon
                    : defaultIcon
                }`}
                alt=""
                width={32}
                height={32}
              />
            </div>
            <div
              className={styless.div_information5}
              onClick={() => handleComponentChange("question")}
            >
              <p
                className={styless.p_div_right}
                style={{
                  color:
                    selectedComponent === "question"
                      ? selectedColor
                      : "#393939",
                }}
              >
                درخواست پشتیبانی
              </p>

              <Image
                src={`/icon/${
                  selectedComponent === "question" ? selectedIcon : defaultIcon
                }`}
                alt=""
                width={32}
                height={32}
                className={`${styless.icon} ${
                  selectedComponent === "question" && "selected"
                }`}
              />
            </div>
          </div>
          {selectedComponent === "profile" && <Profile />}
          {selectedComponent === "lastReserv" && <LastReserv />}
          {selectedComponent === "favorite" && <Favorite />}
          {selectedComponent === "transaction" && <Transaction />}
          {selectedComponent === "question" && <Question />}
        </div>
      <Footer/>
      </div>
    </div>
  );
}
