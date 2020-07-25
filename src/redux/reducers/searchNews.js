const initialState = {
  keyword: '',
  news: [],
  error: null,
}

const searchNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_KEYWORD':
      return {...state, keyword: payload};
    case 'GET_SEARCH_NEWS':
      return {...state, news: payload};
    case 'SEARCH_NEWS_ERROR':
      return {...state, error: payload};
    default:
      return state;
  }
}

export default searchNewsReducer;