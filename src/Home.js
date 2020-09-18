import React from 'react'
import './Home.css'
import Product from './Product'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
function Home() {
    const slides = [
        { src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"},
        { src:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/XCM_Manual_ORIGIN_1262629_1338382_IN_1_3354545_1500x600_1X_en_IN._CB405622018_.jpg"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_1500x600._CB406191253_.jpg"},

      ];
    return (
        <div className="home">
            <div    className="home__container">
                <div className="home__slider">
            <Slider>
                {slides.map((slide, index) => <div key={index}>
                <img className="home__image" src={slide.src}/>
                </div>)}
                </Slider>
                </div>
              
               
               <div className="product__row">
                   
                    <Product name="Smart Watch"
                    price={2239} 
                    image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SL1500_.jpg"
                    rating={4}
                    />
                    <Product name="Amazon Brand - Solimo Damask Dreams 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green"
                    price={799}
                    image="https://images-na.ssl-images-amazon.com/images/I/914TqzaiO7L._SL1500_.jpg"
                    rating={3}/>
               </div>
               <div className="product__row">
                    <Product name="Desidiya 12 Stars 138 LED Curtain String Lights, Window Curtain Lights with 8 Flashing Modes"
                    price={699}
                    image="https://images-na.ssl-images-amazon.com/images/I/41znJTtu7GL.jpg"
                    rating={4}/>
                    <Product name="Secrets of the Oceans- Wow Encyclopedia in Augmented Reality- Age 6+"
                    price={219}
                    image="https://images-na.ssl-images-amazon.com/images/I/61SgHkz+8oL._SX487_BO1,204,203,200_.jpg"
                    rating={5}/>
                    <Product name="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                    price={9,749}
                    image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                    rating={4}/>
                </div>
                <div className="product__row">
                    <Product name="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)-Super Ultra Wide WQHD 5120x1440"
                    price={63,999}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg"
                    rating={4}/>
                </div>
                
            </div> {/*homeContainer*/}
        </div>   //home
    )
}

export default Home
