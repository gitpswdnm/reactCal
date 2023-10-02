import { DateTime } from 'luxon'
import { checkDateEqual } from './checkDateEqual.js'

export const checkIsCurrentDate = (date, mode) => {
	const today = DateTime.local()
	return checkDateEqual(today, date, mode)
}
