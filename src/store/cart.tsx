const INITIAL_STATE = {
  item: [],
}

type Action = {
  type: string,
  payload?: object
}

export default function cart(state : object = INITIAL_STATE, action : Action){
  switch(action.type){
    case 'ADD':
      return console.log(action)
    case 'SET_SHIPPING':
      return console.log('shipping');
    default:
      return state
  }
}