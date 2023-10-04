import classes from './Days.module.css'
import {
	checkDateEqual,
	checkIsCurrentDate,
	DAYS
} from '../../../../utils/helpers/index.js'

const Days = ({ dateItem, pickedDay, selectedDate, setPickedDay }) => {
	const isToday = checkIsCurrentDate(dateItem, DAYS)
	const isAdditionalDay = dateItem.month !== selectedDate.month
	const isPickedDate = checkDateEqual(dateItem, pickedDay)
	return (
		<div
			aria-hidden
			onClick={() => {
				setPickedDay(dateItem)
			}}
			className={[
				classes.day,
				isToday ? classes.today : '',
				isAdditionalDay ? classes.additional : '',
				isPickedDate ? classes.picked : ''
			].join(' ')}
		>
			{dateItem.day}
		</div>
	)
}

export default Days
