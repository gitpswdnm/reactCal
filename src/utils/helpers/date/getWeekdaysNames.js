import { DateTime } from 'luxon'

export const getWeekdaysNames = (locale = 'ru-RU') => {
	const daysOfWeekNamesList = []
	for (let i = 0; i < 7; i++) {
		const date = DateTime.local()
			.setLocale(locale)
			.startOf('week')
			.plus({ days: i })
		daysOfWeekNamesList.push({
			day: date.weekdayLong,
			shortDay: date.weekdayShort,
			dayNumber: date.weekday
		})
	}
	return daysOfWeekNamesList
}

