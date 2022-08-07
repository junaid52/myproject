import classes from './Home.module.css';
import image1 from '../assets/background1.png';
import Button from '../components/Ui/Button';
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
const Home = (props) => {
    return (
        <div className={`${props.show ? `${classes.banner} ${classes.banner2}` : classes.banner}`}>
            <div className={`${classes.row} ${classes.rowSpacing}`}>
                <div className={classes.col6}>
                    <img className={classes.image1} src={image1} alt=""></img>
                    <p className={classes.posAbs}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                <div className={classes.col6}>
                    <div className={classes.contentContainer}>
                        <h2>
                            BUY AND SELL CRYPTO EASIERTHAN EVER
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div>
                            <Button title="Sign up" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className={`${classes.row} ${classes.rowSpacing2}`}>
                <div className={`${classes.col6}`}>
                    <img src={image2} alt=""></img>
                </div>
                <div className={`${classes.col6} ${classes.justifyContentEnd}`}>
                    <img src={image3} alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Home;