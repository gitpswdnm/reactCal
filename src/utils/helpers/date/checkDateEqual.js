import { MONTHS, YEARS } from '../CONSTANTS.js'

export const checkDateEqual = (date1, date2, mode) => {
	if ((mode === MONTHS)) {
		return date1.year === date2.year && date1.month === date2.month
	}
	if ((mode === YEARS)) {
		return date1.year === date2.year
	}
	return (
		date1.year === date2.year &&
		date1.month === date2.month &&
		date1.day === date2.day
	)
}