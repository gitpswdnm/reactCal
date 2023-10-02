import classes from './DateCell.module.css'
import {
	checkDateEqual,
	checkIsCurrentDate,
	DAYS
} from '../../../utils/helpers/index.js'

const DateCell = ({ dateItem, mode, selectedDate, setSelectedDate }) => {
	if (mode === DAYS) {
		const isToday = checkIsCurrentDate(dateItem, mode)
		const isAdditionalDay = dateItem.month !== selectedDate.month
		const isSelectedDate = checkDateEqual(dateItem, selectedDate)
		return (
			<div
				aria-hidden
				onClick={()=>setSelectedDate(dateItem)}
				className={[
					classes.day,
					isToday ? classes.today : '',
					isAdditionalDay ? classes.additional : '',
					isSelectedDate ? classes.selected : ''
				].join(' ')}
			>
				{dateItem.day}
			</div>
		)
	}
}

export default DateCell
