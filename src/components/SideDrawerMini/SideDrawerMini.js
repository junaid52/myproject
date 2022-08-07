import classes from './SideDrawerMini.module.css';
const SideDrawerMini = () => {
    return (
        <div className={classes.sideDrawerMini}>
            <ul>
                <li>
                    <a href='#'>
                        <ion-icon name="home"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <ion-icon name="home"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <ion-icon name="document-text"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <ion-icon name="bulb"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SideDrawerMini;