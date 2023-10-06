import classes from './Calendar.module.css'
// prettier-ignore
import {DAYS,LEFT,RIGHT,today,MONTHS,getMonthOfDayItems,getYearOfMonthsItems,YEARS} from '../../utils/helpers/index.js'
// prettier-ignore
import { Arrow, DateCell, DateWrapper, FormBody, FormHeader, ItemsWrapper, ModeSelector, MyButton } from '../index.js'
import { useMemo, useState } from 'react'
import { getYearsInterval } from '../../utils/helpers/index.js'

const Calendar = () => {
	const locale = 'ru-RU'
	const [mode, setMode] = useState(DAYS)
	const [selectedDate, setSelectedDate] = useState(today)
	const [pickedDay, setPickedDay] = useState(selectedDate)
	const [showDateChangeAnimation, setShowDateChangeAnimation] =
		useState(false)
	const [arrowDirection, setArrowDirection] = useState('')

	const dateItems = useMemo(() => {
		switch (mode) {
			case DAYS:
				return getMonthOfDayItems(selectedDate)
			case MONTHS:
				return getYearOfMonthsItems(selectedDate)
			case YEARS:
				return getYearsInterval(selectedDate)
			default:
				return getMonthOfDayItems(selectedDate)
		}
	}, [selectedDate, mode])

	const arrowDateHandler = (direction) => {
		const changeQty = direction === LEFT ? -1 : 1
		setArrowDirection(direction)
		setShowDateChangeAnimation((prevState) => !prevState)
		switch (mode) {
			case DAYS:
				setSelectedDate((prevState) => prevState.plus({ months: changeQty }))
				break
			case MONTHS:
				setSelectedDate((prevState) => prevState.plus({ years: changeQty }))
				break
			case YEARS:
				setSelectedDate((prevState) =>
					prevState.plus({ years: changeQty * 10 })
				)
				break
		}
	}

	return (
		<>
			<div className={classes.container}>
				<DateWrapper>
					<div className={classes.date}>
						picked {pickedDay.toLocaleString()}{' '}
					</div>
					<MyButton
						onClick={() => {
							setSelectedDate(today)
							setMode(DAYS)
						}}
						text={`TODAY ${today.toLocaleString()}`}
					/>
				</DateWrapper>
				<FormHeader>
					<Arrow direction={LEFT} changeDate={arrowDateHandler} />
					<ModeSelector
						mode={mode}
						selectedDate={selectedDate}
						setMode={setMode}
						dateItems={dateItems}
						isShow={showDateChangeAnimation}
						direction={arrowDirection}
					/>
					<Arrow direction={RIGHT} changeDate={arrowDateHandler} />
				</FormHeader>

				<FormBody>
					<ItemsWrapper
						mode={mode}
						locale={locale}
						swipeHandler={arrowDateHandler}
						isShow={showDateChangeAnimation}
						setIsShow={setShowDateChangeAnimation}
						direction={arrowDirection}
					>
						{dateItems.map((dateItem, itemIndex) => (
							<DateCell
								key={`${mode === DAYS ? dateItem.day + '/' : ''}${
									mode === DAYS || mode === MONTHS
										? dateItem.month + '/'
										: ''
								}${dateItem.year}`}
								itemIndex={itemIndex}
								dateItem={dateItem}
								mode={mode}
								setMode={setMode}
								selectedDate={selectedDate}
								setSelectedDate={setSelectedDate}
								setPickedDay={setPickedDay}
								pickedDay={pickedDay}
							/>
						))}
					</ItemsWrapper>
				</FormBody>
			</div>
		</>
	)
}

export default Calendar
