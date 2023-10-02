import classes from './FormBody.module.css'

const FormBody = ({children}) => {
	return (
		<div className={classes.body}>
			{children}
		</div>
	)
}

export default FormBody