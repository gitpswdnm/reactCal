import classes from './MonthsYears.module.css'
import {
	checkDateEqual,
	checkIsCurrentDate,
	DAYS,
	MONTHS,
	YEARS
} from '../../../../utils/helpers/index.js'

const MonthsYears = ({
	itemIndex,
	dateItem,
	setSelectedDate,
	setMode,
	pickedDay,
	mode
}) => {
	const isCurrentDate = checkIsCurrentDate(dateItem, mode)
	const isPickedDate = checkDateEqual(dateItem, pickedDay, mode)
	const selectSetMode = () => (mode === MONTHS ? DAYS : MONTHS)
	const isAdditionalYear = () => {
		//hardcoding
		if (mode === YEARS) {
			return itemIndex === 0 || itemIndex === 11
		}
	}

	return (
		<div
			onClick={() => {
				setSelectedDate(dateItem)
				setMode(selectSetMode())
			}}
			className={[
				classes.date,
				isAdditionalYear() ? classes.additional : '',
				isCurrentDate ? classes.today : '',
				isPickedDate ? classes.picked : ''
			].join(' ')}
		>
			{mode === MONTHS && dateItem.monthLong}
			{mode === YEARS && dateItem.year}
		</div>
	)
}

export default MonthsYears
