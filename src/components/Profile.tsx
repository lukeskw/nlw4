import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/lukeskw.png" alt="profile-logo" />
            <div>
                <strong>Luke Skywalker</strong>
                <p>
                    <img src="icons/level.svg" alt="icon-level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}