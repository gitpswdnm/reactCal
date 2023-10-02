import { DateTime } from 'luxon'
import classes from './Calendar.module.css'
import {
	DAYS,
	LEFT,
	RIGHT,
	getMonthOfDayItems,
	today,
	MONTHS
} from '../../utils/helpers/index.js'
import Arrow from '../UI/Arrow/Arrow.jsx'
import FormHeader from '../UI/FormHeader/FormHeader.jsx'
import FormBody from '../UI/FormBody/FormBody.jsx'
import ItemsWrapper from '../Wrappers/ItemWrapper/ItemsWrapper.jsx'
import DateCell from '../UI/DateCell/DateCell.jsx'
import { useMemo, useState } from 'react'
import DateWrapper from '../Wrappers/DateWrapper/DateWrapper.jsx'

const Calendar = () => {
	const [mode, setMode] = useState(DAYS)
	const [selectedDate, setSelectedDate] = useState(today)
	const dateItems = useMemo(() => {
		return getMonthOfDayItems(selectedDate)
	}, [selectedDate.month, selectedDate.year])

	const arrowDateHandler = (direction) => {
		const changeQty = direction === LEFT ? -1 : 1
		switch (mode) {
			case DAYS:
				setSelectedDate((prevState) => prevState.plus({ months: changeQty }))
				break
			case MONTHS:
				setSelectedDate((prevState) => prevState.plus({ years: changeQty }))
				break
		}
	}

	return (
		<div className={classes.container}>
			<FormHeader>
				<Arrow direction={LEFT} changeDate={arrowDateHandler} />
					{selectedDate.day} {selectedDate.monthLong} {selectedDate.year}
				<Arrow direction={RIGHT} changeDate={arrowDateHandler} />
			</FormHeader>
			<FormBody>
				<>
					<div></div>
					<ItemsWrapper mode={mode}>
						{dateItems.map((dayItem) => (
							<DateCell
								key={`${dayItem.day}/${dayItem.month}/${dayItem.year}`}
								dateItem={dayItem}
								mode={mode}
								selectedDate={selectedDate}
								setSelectedDate={setSelectedDate}
							/>
						))}
					</ItemsWrapper>
				</>
			</FormBody>
		</div>
	)
}

export default Calendar
