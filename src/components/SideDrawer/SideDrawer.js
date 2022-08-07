import classes from './SideDrawer.module.css';
const SideDrawer = () => {
    return (
        <div className={classes.sideDrawer}>
            <ul>
                <li>
                    <a href='#'>
                        <ion-icon name="home"></ion-icon>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <ion-icon name="home"></ion-icon>
                        Products
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <ion-icon name="document-text"></ion-icon>
                    Charts
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <ion-icon name="bulb"></ion-icon>
                    Support
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SideDrawer;