import { Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Comment() {
    return (
        <div className={styles.comment} >
<Avatar hasBorder={false} src="https://github.com/igorlan1.png" alt="" />
        
        <div className={styles.commentBox} >
<div className={styles.commentContent}>
<header>
    <div className={styles.authorAndTime} >
        <strong>Igor Lima</strong>
        <time title="11 de maio às 08:13h" dateTime="2023-05-11">Publicado cerca de há 1h
        </time>
    </div>

<button title="deletar comentarios" >
    <Trash size={24}/>
</button>
</header>
<p>Muito bom devon, parabens</p>
</div>
     <footer>
           <button>
            <ThumbsUp/> Aplaudir <span>20</span>
           </button>
        </footer>
        </div>
        
        </div>
    )
}