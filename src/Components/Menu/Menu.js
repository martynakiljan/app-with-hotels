import React from 'react';
import styles from './Menu.module.css'

function Menu() {
    return(
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li> <a href="#" className={styles.menuItem}> home </a> </li>
            </ul>
        </div>
    )
}
export default Menu;