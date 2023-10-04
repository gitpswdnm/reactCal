export const getYearOfMonthsItems = (date) => {
	const monthsItemsList = []
	for (let i = 0; i < 12; i++) {
		monthsItemsList.push(date.startOf('year').plus({ months: i }))
	}
	return monthsItemsList
}

