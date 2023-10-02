import AppWrapper from './components/Wrappers/AppWrapper/AppWrapper.jsx'
import DateWrapper from './components/Wrappers/DateWrapper/DateWrapper.jsx'
import Calendar from './components/Calendar/Calendar.jsx'

function App() {
	return (
		<AppWrapper>
			<DateWrapper>
				<div>React</div>
			</DateWrapper>
			<Calendar/>
		</AppWrapper>
	)
}

export default App
