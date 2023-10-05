import { DAYS, LEFT, MONTHS, YEARS } from '../../../utils/helpers/index.js'
import classes from './ItemsWrapper.module.css'
import { SwipeWrapper, WeekdaysWrapper } from '../../index.js'
import { CSSTransition } from 'react-transition-group'

const ItemsWrapper = ({
	children,
	mode,
	locale,
	swipeHandler,
	isShow,
	direction
}) => {
	return (
		<SwipeWrapper swipeHandler={swipeHandler}>
			{mode === DAYS && (
				<>
					<WeekdaysWrapper locale={locale} mode={mode} />
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
						// onExited={setIsShow(false)}
					>
						<div className={classes.days}>{children}</div>
					</CSSTransition>
				</>
			)}
			{mode === MONTHS && <div className={classes.months}>{children}</div>}
			{mode === YEARS && (
				<>
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
						<div className={classes.months}>{children}</div>
					</CSSTransition>
				</>
			)}
		</SwipeWrapper>
	)
}

export default ItemsWrapper
