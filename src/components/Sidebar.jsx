import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css"


export function Sidebar() {
    return(
        <aside className={styles.sidebar} >
            <img className={styles.cover} src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" />
            <div className={styles.profile} >
                <img className={styles.avatar} src="https:www.github.com/igorlan1.png" alt="" />

                <strong>igor lima</strong>
                <span>web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} /> 
                    Editar seu perfil
                </a>
            </footer>


        </aside>

    )
}