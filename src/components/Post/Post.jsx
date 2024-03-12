import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import styles from './styles.module.css'

export function Post() {
    return (
            <article className={styles.wrapper}>
                <header>
                    <div className={styles.author}>
                        <Avatar/>
                        <div className={styles.authorDetails}>
                            <strong>Alexandre Rayol</strong>
                            <span>Software Enginner</span>
                        </div>
                    </div>

                    <time title='Públicado em 11/03/2024 às 13h14' dateTime='11/03/2024 13:14:00'>Públicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>
                        <a href='#'>
                            jane.design/doctorcare
                        </a>
                    </p>
                    <p>
                        <a href='#'>#novoprojeto</a> {' '}
                        <a href='#'>#nlw</a> {' '}
                        <a href='#'>#rocketseat</a> {' '}
                    </p>
                </div>

                <form className={styles.form}>
                    <span>Deixe seu feedback</span>
                    <textarea placeholder='Escreva um comentário...'></textarea>
                    <div>
                        <button type='submit'>Publicar</button>
                    </div>
                </form>

                <Comment />
                <Comment />
            </article>
    )
}