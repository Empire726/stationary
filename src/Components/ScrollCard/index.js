import React from 'react'
import styles from "../../StyleSheet/Scroll/scroll.module.css";
import { Itemda } from './itemda';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>

            <div className={styles['card-container']}>
                {Itemda.map((item, index) => {
                    return (
                        <div className={styles['card']} key={index}>
                            <header className={styles['article-header']}>
                                
                                    <div className={styles['category-title']}>
                                        {item.title}
                                    </div>
                               
                                <div className={styles["img_section"]}>
                                <img src={item.img} alt="none" />
                                
                                </div>
                                <div className={styles["spaner"]}>
                                <span>RS {item.money}.00</span>
                                </div>
                            </header>
                           
                            <div className={styles['tags']}>
                                <div><Link to="/product">{item.name}</Link></div>
                                <div><Link to="/adder">MORE {">>"}</Link></div>
                            </div>
                        </div>

                             )
                })}

                {/* <!-- repeat the card here. --> */}
                {/* <div className={styles['card']}>
                </div> */}
            </div>

        </>
    )
};

export default Card;
