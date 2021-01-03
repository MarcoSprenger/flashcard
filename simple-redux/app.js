const redux = require('redux')
const logFactory = require('redux-logger')
const thunk = require('redux-thunk').default

// const initialState = { counter: 0, waiting: false }

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { ...state, counter: state.counter + 1 }
//     case 'counter/decremented':
//       return { ...state, counter: state.counter - 1 }
//     case 'waiting':
//         return { ...state, waiting: true } 
//     default:
//       return state
//   }
// }

function counterReducer(state = {value: 0}, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

function waitingReducer(state = {waiting: false}, action) {
    switch (action.type) {
      case 'waiting':
          return { waiting: true } 
      default:
        return state
    }
  }

function incrementAsync() {
	return (dispatch) => {
		dispatch({ type: 'waiting' })
		setTimeout(() => {
			dispatch({ type: 'counter/incremented' })
		}, 2000);
	}
}

const logger = logFactory.createLogger({
	colors: false
});

const reducers = redux.combineReducers({
	counter: counterReducer,
	waiting: waitingReducer
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = redux.createStore(reducers, redux.applyMiddleware(thunk, logger))

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log("The action state counter is " + store.getState().counter.value))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
store.dispatch(incrementAsync())