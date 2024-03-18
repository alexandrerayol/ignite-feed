import { Avatar } from "../Avatar/Avatar";
import styles from "./styles.module.css";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { calcDateRelativeNow } from "../Post/Post";

export function Comment({ author, content, publishedAt }) {
  return (
    <div className={styles.wrapper}>
      <Avatar isComment={true} src={author.avatar} />
      <div className={styles.content}>
        <div className={styles.comment}>
          <header>
            <div className={styles.authorAndDate}>
              <strong>{author.name}</strong>
              <span>{calcDateRelativeNow(publishedAt)}</span>
            </div>

            <button type="button" title="deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <div>
            <p>{content}</p>
          </div>
        </div>

        <div className={styles.like}>
          <button type="button" title="aplaudir comentário">
            <ThumbsUp size={20} weight="bold" />
            Aplaudir
          </button>
          <span>06</span>
        </div>
      </div>
    </div>
  );
}
