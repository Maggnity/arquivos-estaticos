import { ReactComponent as Logo } from 'assets//img/logo.svg';
import styles from './Menu.module.scss';

function Menu() {
    return (
        <nav className={styles.menu}>
            <Logo />
        </nav>
    );
}

export default Menu;