import logo from '../../assets/santa-logo.png';
import classes from './Header.module.css';
import Button from '../Ui/Button';
const Header = (props) => {
    return (
        <header className={`${props.show ? `${classes.miniHeader} ${classes.header}` : classes.header}`}>
            <nav className={classes.navbar}>
                <div className={classes.leftContainer}>
                <button onClick={props.sideDrawerHandler} className={classes.toggleHandler}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                    <a  href="#">
                        
                        <img src={logo} alt='logo'></img>
                    </a>
                </div>
                
                <ul className={classes.rightContainer}>
                    <li>
                        <ion-icon class={classes.searchIcon} name="search-outline"></ion-icon>
                    </li>
                    <li>
                        <Button title='Sign up' />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;