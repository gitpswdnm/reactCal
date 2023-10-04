import { DAYS, MONTHS, YEARS } from '../../../utils/helpers/index.js'
import classes from './ItemsWrapper.module.css'
import { WeekdaysWrapper } from '../../index.js'

const ItemsWrapper = ({ children, mode, locale }) => {
	switch (mode) {
		case DAYS:
			return (
				<>
					<WeekdaysWrapper locale={locale} mode={mode} />
					<div className={classes.days}>{children}</div>
				</>
			)
		case MONTHS:
			return (
				<>
					<div className={classes.months}>{children}</div>
				</>
			)
		case YEARS:
			return (
				<>
					<div className={classes.months}>{children}</div>
				</>
			)
	}
}

export default ItemsWrapper
