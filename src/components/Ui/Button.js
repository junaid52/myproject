import classes from './Button.module.css';
const Button = (props) => {
    return (
        <a className={classes.button} href="#">{props.title}</a>
    )
}
export default Button;