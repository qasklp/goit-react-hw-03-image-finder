import { Audio } from 'react-loader-spinner';
import styles from "./Loader.module.css";

export const Loader = () => {
    return <div className={styles.loader}>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    </div>;
}