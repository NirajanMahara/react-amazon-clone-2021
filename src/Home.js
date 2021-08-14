import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='0670921602'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
            price={20.64}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
          />
          <Product
            id='0984782869'
            title='Cracking the Coding Interview: 189 Programming Questions and Solutions - Gayle Laakmann McDowell'
            price={24.49}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='0123456789'
            title='Dell XPS 15 - 11th Generation Intel® Core™ i7-11800H - NVIDIA® GeForce RTX™ 3050 Ti 4GB GDDR6 - 16GB DDR4 - 512GB M.2 PCIe NVMe SSD'
            price={2099.99}
            rating={3}
            image='https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_9510/media-gallery/xs9510t_cnb_90000td110_bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=4000&hei=4000&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=4000,4000'
          />
          <Product
            id='1234567890'
            title='Apple iPad Pro 2021 (12.9-inch, Wi-Fi, 256GB) - Space Gray (M1 Processor)'
            price={1399}
            rating={2}
            image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'
          />
          <Product
            id='0987654321'
            title='Samsung Galaxy Note 10 Factory Unlocked Cell Phone with 12GB RAM & 256GB International Version - Aura Black Note10'
            price={1330}
            rating={1}
            image='https://images-na.ssl-images-amazon.com/images/I/51rkrZ8P1%2BL._AC_SL1080_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title='Samsung Odyssey G9 Curved Gaming Monitor, 49 Inch, 240hz, 1000R, 1ms, 1440p, Black White - Super Ultra Wide Dual DQHD 5120 x 1440p'
            price={2032.2}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81Q3qFp0SxL._AC_SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
