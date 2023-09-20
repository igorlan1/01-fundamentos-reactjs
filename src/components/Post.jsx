import { format, formatDistanceToNow } from "date-fns"

import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { Comment } from "./comment";
import { ptBR } from "date-fns/locale";




export function Post({author , publishedAt, content}) {

  const publishedDateFormatted = format( publishedAt, "d 'de' LLLL 'às' HH:mm ' h '" )

  const publishedDateRelativeNow = formatDistanceToNow (publishedAt, {locale: ptBR, addSuffix: true})

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
            return <p>{line.content}</p>;
          } else if (line.type == "link") {
            return <p><a href="#">{line.content}</a></p>
          }

        })}
       
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea 
        placeholder="Deixe um comantario"
        />
        <footer>
        <button type="submit" >Comantario</button>
        </footer>

      
      </form>
<div className={styles.commentList} >
  <Comment/>
</div>

    </article>
  );
}
