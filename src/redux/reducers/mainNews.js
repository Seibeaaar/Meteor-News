const initialState = {
  country: 'us',
  category: 'general',
  topNews: [],
  otherNews: [],
  error: null
};

const mainNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHOOSE_COUNTRY':
      return {...state, country: payload};
    case 'CHOOSE_CATEGORY':
      return {...state, category: payload};
    case 'GET_MAIN_NEWS':
      return {...state, topNews: payload.slice(0, 3), otherNews: payload.slice(3)};
    case 'MAIN_NEWS_ERROR':
      return {...state, error: payload};
    default:
      return state;
  }
}

export default mainNewsReducer;