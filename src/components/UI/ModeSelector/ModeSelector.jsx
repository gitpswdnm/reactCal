import { DAYS, MONTHS, YEARS } from '../../../utils/helpers/index.js'
import classes from './ModeSelector.module.css'

const ModeSelector = ({ mode, selectedDate, setMode, dateItems }) => {
	switch (mode) {
		case DAYS:
			return (
				<div className={classes.mode} onClick={() => setMode(MONTHS)}>
					{selectedDate.monthLong} {selectedDate.year}
				</div>
			)
		case MONTHS:
			return (
				<div className={classes.mode} onClick={() => setMode(YEARS)}>
					{selectedDate.year}
				</div>
			)
		case YEARS:
			return (
				<div className={classes.mode} onClick={() => setMode(DAYS)}>{`${
					dateItems[0].year
				} - ${dateItems[dateItems.length - 1].year}`}</div>
			)
	}
}

export default ModeSelector
