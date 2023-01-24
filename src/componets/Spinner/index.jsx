
import styles from './Spinner.module.scss';

export const Spinner = () => {

    return (
        <div className='spinner-wrapper'>
            <div className={styles.spinner}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}