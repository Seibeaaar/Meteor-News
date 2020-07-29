const initialState = {
  loading: true,
}

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING':
      return {...state, loading: payload};
    default: 
      return state;
  }
}

export default loadingReducer;