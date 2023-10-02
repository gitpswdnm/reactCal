import classes from './FormHeader.module.css'

const FormHeader = ({children}) => {
	return <div className={classes.header}>{children}</div>
}

export default FormHeader