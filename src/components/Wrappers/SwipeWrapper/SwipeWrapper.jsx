import { useSwipeable } from 'react-swipeable'
import { LEFT, RIGHT } from '../../../utils/helpers/index.js'

const SwipeWrapper = ({swipeHandler, children}) => {
	const handlers = useSwipeable({
		onSwipedLeft: () => swipeHandler(RIGHT),
		onSwipedRight: () => swipeHandler(LEFT)
	})
	return (
		<div {...handlers}>
			{children}
		</div>
	)
}

export default SwipeWrapper

