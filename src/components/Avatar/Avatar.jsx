import styles from './styles.module.css'

export function Avatar({isComment = false}){
    return(
        <div className={isComment ? styles.profileImgWrapperWithoutBorder : styles.profileImgWrapperWithBorder }>
            <img src="https://avatars.githubusercontent.com/u/122651034?v=4" />
        </div>
    )
}