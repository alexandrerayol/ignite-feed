import { Avatar } from '../Avatar/Avatar'
import styles from './styles.module.css'
import {Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment(){
    return(
        <div className={styles.wrapper}>
            <Avatar isComment={true}/>
            <div className={styles.content}>
                <div className={styles.comment}>
                    <header>
                        <div className={styles.authorAndDate}>
                            <strong>Alexandre Rayol <span>(você)</span></strong>
                            <span>Cerca de 2h atrás</span>
                        </div>

                        <button type='button' title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <div>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>
                </div>

                <div className={styles.like}>
                    <button type='button' title='aplaudir comentário'><ThumbsUp size={20} weight='bold'/>Aplaudir</button>
                    <span>06</span>
                </div>
            </div>
        </div>
    )
}