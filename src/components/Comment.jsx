import { Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount(likeCount + 2)
        setLikeCount(likeCount + 3)
        setLikeCount(likeCount + 4)

    }



    function handleDeleteComment() {
        console.log("delete")

        onDeleteComment(content)
    }


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

<button onClick={handleDeleteComment} title="deletar comentarios" >
    <Trash size={24}/>
</button>

</header>

<p>{content}</p>
</div>

     <footer>
           <button onClick={handleLikeComment} >
            <ThumbsUp/> Aplaudir <span>{likeCount}</span>
           </button>
        </footer>
        </div>
        
        </div>
    )
}