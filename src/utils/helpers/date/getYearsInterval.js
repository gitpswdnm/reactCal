import { DateTime } from 'luxon'

export const getYearsInterval = (date) => {
	const intervalStart = Math.floor(date.year / 10) * 10 - 1
	const intervalList = []
	for (let i = 0; i < 12; i++) {
		intervalList.push(DateTime.fromObject({ year: intervalStart + i }))
	}
	return intervalList
}

