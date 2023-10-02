import classes from './AppWrapper.module.css'
const AppWrapper = ({children}) => {
	return (
		<div className={classes.app}>
			{children}
		</div>
	)
}

export default AppWrapper