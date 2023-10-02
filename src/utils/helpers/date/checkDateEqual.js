export const checkDateEqual = (date1, date2, mode) => {
	if ((mode === 'month')) {
		return date1.year === date2.year && date1.month === date2.month
	}
	return (
		date1.year === date2.year &&
		date1.month === date2.month &&
		date1.day === date2.day
	)
}