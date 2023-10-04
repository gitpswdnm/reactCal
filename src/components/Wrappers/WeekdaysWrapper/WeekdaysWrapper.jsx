import classes from './WeekdaysWrapper.module.css'
import { DAYS, getWeekdaysNames } from '../../../utils/helpers/index.js'
import { useMemo } from 'react'

const WeekdaysWrapper = ({ locale, mode }) => {
	const weekDays = useMemo(() => getWeekdaysNames(locale), [locale])
	return (
		mode === DAYS && (
			<div className={classes.week}>
				{weekDays.map((weekday) => (
					<div key={weekday.day}>{weekday.shortDay}</div>
				))}
			</div>
		)
	)
}

export default WeekdaysWrapper