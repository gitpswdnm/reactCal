import { DateTime } from 'luxon'

export const getMonthOfDayItems = (date) => {
	const dayItemsList = []
	for (let i = 0; i < 42; i++) {
		dayItemsList.push(
			date.startOf('month').startOf('week').plus({ days: i })
		)
	}
	return dayItemsList
}
