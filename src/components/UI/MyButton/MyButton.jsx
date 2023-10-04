import classes from './MyButton.module.css'

const MyButton = (props) => {
	return <button {...props} className={classes.button}  >{props.text}</button>
}

export default MyButton