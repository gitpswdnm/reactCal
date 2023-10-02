import classes from './DateWrapper.module.css'

const DateWrapper = ({children}) => {
	return <div className={classes.date}>{children}</div>
}

export default DateWrapper