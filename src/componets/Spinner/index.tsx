
import styles from './Spinner.module.scss';

export const Spinner: React.FC = () => {

    return (
        <div className='spinner-wrapper'>
            <div className={styles.spinner}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}