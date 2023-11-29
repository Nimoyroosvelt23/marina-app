'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import RootLayout from '../layout';
import Header from '../blog/hederblog';
import Profile from './profile';
import LastReserv from './lastReserv';
import Favorite from './favrite';
import Transaction from './transaction';
import Question from './question';
import styles from '../blog/blog.module.css';
import styless from './divRight.module.css';

export default function Landing({}) {
  const [selectedComponent, setSelectedComponent] = useState('profile');
  const [selectedColor, setSelectedColor] = useState('#dd9800');
  const [selectedIcon, setSelectedIcon] = useState('Arrow_drop_left_yellow.svg');
  const [defaultIcon, setDefaultIcon] = useState('Arrow_drop_left.svg');


  const handleComponentChange = (component: React.SetStateAction<string>) => {
    setSelectedComponent(component);
  };
console.log(selectedIcon);
  return (
      <div className={styles.container}>
        <Header />
        <div className={styless.base}>
          <div className={styless.div_right}>
            <div className={styless.div_information1} onClick={() => handleComponentChange('profile')}>
              <span style={{ color: selectedComponent === 'profile' ? selectedColor : '#393939' }}>
                <p className={styless.p_div_right}>حساب کاربری</p>
              </span>
              <Image src={`/icon/${selectedComponent === 'profile' ? selectedIcon : defaultIcon}`} alt="" width={32} height={32} />
            </div>
            <div className={styless.div_information1} onClick={() => handleComponentChange('lastReserv')}>
              <span style={{ color: selectedComponent === 'lastReserv' ? selectedColor : '#393939' }}>
                <p className={styless.p_div_right}>رزروهای اخیر</p>
              </span>
              <Image src={`/icon/${selectedComponent === 'lastReserv' ? selectedIcon : defaultIcon}`} alt="" width={32} height={32} />
            </div>
            <div className={styless.div_information1} onClick={() => handleComponentChange('favorite')}>
              <span style={{ color: selectedComponent === 'favorite' ? selectedColor : '#393939' }}>
                <p className={styless.p_div_right}>علاقه مندی ها</p>
              </span>
              <Image src={`/icon/${selectedComponent === 'favorite' ? selectedIcon : defaultIcon}`} alt="" width={32} height={32} />
            </div>
            <div className={styless.div_information1} onClick={() => handleComponentChange('transaction')}>
              <span style={{ color: selectedComponent === 'transaction' ? selectedColor : '#393939' }}>
                <p className={styless.p_div_right}>تراکنش ها</p>
              </span>
              <Image src={`/icon/${selectedComponent === 'transaction' ? selectedIcon : defaultIcon}`} alt="" width={32} height={32} />
            </div>
            <div className={styless.div_information5} onClick={() => handleComponentChange('question')}>
              <span style={{ color: selectedComponent === 'question' ? selectedColor : '#393939' }}>
                <p className={styless.p_div_right}>درخواست پشتیبانی</p>
              </span>
              <span className={`${styless.icon} ${selectedComponent === 'question' && 'selected'}`}>
              <Image src={`/icon/${selectedComponent === 'question' ? selectedIcon : defaultIcon}`} alt="" width={32} height={32} />
  </span>
            </div>
          </div>
            {selectedComponent === 'profile' && <Profile />}
            {selectedComponent === 'lastReserv' && <LastReserv />}
            {selectedComponent === 'favorite' && <Favorite />}
            {selectedComponent === 'transaction' && <Transaction />}
            {selectedComponent === 'question' && <Question />}
        </div>
      </div>
  );
}
