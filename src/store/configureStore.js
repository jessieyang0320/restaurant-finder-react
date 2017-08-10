import { createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
	const store= createStore(rootReducer, initialState,
		// trigur redux-devtools 
		window.devToolsExtension ? window.devToolsExtension():undefined
		)
	return store
}