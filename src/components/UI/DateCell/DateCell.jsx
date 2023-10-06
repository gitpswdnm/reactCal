import { DAYS, MONTHS, YEARS } from '../../../utils/helpers/index.js'
import Days from './Days/Days.jsx'
import MonthsYears from './MonthsYears/MonthsYears.jsx'

const DateCell = ({
	itemIndex,
	dateItem,
	mode,
	setMode,
	selectedDate,
	setSelectedDate,
	setPickedDay,
	pickedDay,
}) => {

	if (mode === DAYS) {
		return (
			<Days
				dateItem={dateItem}
				selectedDate={selectedDate}
				setPickedDay={setPickedDay}
				pickedDay={pickedDay}
			/>
		)
	}
	if (mode === MONTHS || mode === YEARS) {
		return (
			<MonthsYears
				mode={mode}
				setMode={setMode}
				dateItem={dateItem}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				pickedDay={pickedDay}
				itemIndex={itemIndex}
			/>
		)
	}
}

export default DateCell
