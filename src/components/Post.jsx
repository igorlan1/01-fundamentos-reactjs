import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https:www.github.com/igorlan1.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Igor Lima</strong>
            <span>Web Developor</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime="">
          {" "}
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        
          <p>Fala galeraa 👋 </p>
          
          <p>Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀</p>
          
          <p><a href=""> 👉 jane.design/doctorcare </a> </p>
           
         <p><a href="">  #novoprojeto </a> <a href=""> #nlw #rocketseat</a> </p>
         
       
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


    </article>
  );
}
