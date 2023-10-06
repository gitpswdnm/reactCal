import { DAYS, LEFT, MONTHS, YEARS } from '../../../utils/helpers/index.js'
import classes from './ModeSelector.module.css'
import { CSSTransition } from 'react-transition-group'

const ModeSelector = ({
	mode,
	selectedDate,
	setMode,
	dateItems,
	isShow,
	direction
}) => {
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
					<CSSTransition
						in={isShow}
						timeout={0}
						classNames={{
							enterActive:
								direction === LEFT ? classes.LeftEnter : classes.RightEnter,
							enterDone:
								direction === LEFT
									? classes.LeftEnterActive
									: classes.RightEnterActive,
							exitActive:
								direction === LEFT ? classes.LeftExit : classes.RightExit,
							exitDone:
								direction === LEFT
									? classes.LeftExitActive
									: classes.RightExitActive
						}}
					>
						<div>{selectedDate.year}</div>
					</CSSTransition>
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
