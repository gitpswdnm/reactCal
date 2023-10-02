import classes from './Arrow.module.css'
import { DOWN, LEFT, RIGHT, UP } from '../../../utils/helpers/CONSTANTS.js'

const Arrow = ({ direction, changeDate }) => {
	return (
		<div className={classes.arrow} onClick={() => changeDate(direction)}>
			{direction === LEFT && <div> &#9668;</div>}
			{direction === RIGHT && <div> &#9658;</div>}
			{direction === UP && <div> &#9650;</div>}
			{direction === DOWN && <div> &#9660;</div>}
		</div>
	)
}

export default Arrow
