import { format, formatDistanceToNow } from "date-fns"

import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { Comment } from "./comment";
import { ptBR } from "date-fns/locale";
import { useState } from "react";



export function Post({author , publishedAt, content}) {
  const [comments, setComments] = useState([
    `post muito bacana heim`,
    
  ])

  const [newCommentText, setNewCommentText] = useState(``)



  const publishedDateFormatted = format( publishedAt, "d 'de' LLLL 'às' HH:mm ' h '" )

  const publishedDateRelativeNow = formatDistanceToNow (publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
setNewCommentText("")
   
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity(``)

    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity(`esse campo é obrigatório`)
  }


  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter( comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeleteOne)

  
  }

  const isNewCommentEmpy = newCommentText.length == 0


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{ author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      
      <div className={styles.content}>
        {content.map( line => {
          if (line.type == "paragraph") {
            return <p key={line.content} >{line.content}</p>;
          } else if (line.type == "link") {
            return <p key={line.content} ><a href="#">{line.content}</a></p>
          }

        })}
       
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
       
        <textarea 
        name="comment"
        placeholder="Deixe um comantario"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
        <button type="submit" disabled={isNewCommentEmpy} >Comantario</button>
        </footer>

      
      </form>
<div className={styles.commentList} >
{comments.map( comment => {
  return <Comment key={comment} content={comment} onDeleteComment={ deleteComment }/>
})}
</div>

    </article>
  );
}
