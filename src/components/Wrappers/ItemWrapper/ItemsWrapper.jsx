import { DAYS } from '../../../utils/helpers/index.js'
import classes from './ItemsWrapper.module.css'

const ItemsWrapper = ({ children, mode }) => {
	switch (mode) {
		case DAYS:
			return <div className={classes.days}>{children}</div>
	}
}

export default ItemsWrapper
