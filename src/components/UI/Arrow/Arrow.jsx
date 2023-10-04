import classes from './Arrow.module.css'
import { DOWN, LEFT, RIGHT, UP } from '../../../utils/helpers/index.js'

const Arrow = ({ direction, changeDate }) => {
	return (
		<div className={classes.arrow} onClick={() => changeDate(direction)}>
			{direction === LEFT && <div className={classes.left}/>}
			{direction === RIGHT && <div className={classes.right}/>}
			{direction === UP && <div className={classes.up}/>}
			{direction === DOWN && <div className={classes.down}/>}
		</div>
	)
}

export default Arrow


