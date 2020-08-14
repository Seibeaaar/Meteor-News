const initialState = {
  country: 'us',
  category: 'general',
  topNews: [],
  otherNews: [],
  error: null
};

const mainNewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RESET_DATA':
      return {...state, country: '', category: ''};
    case 'CHOOSE_COUNTRY':
      return {...state, country: payload};
    case 'CHOOSE_CATEGORY':
      return {...state, category: payload};
    case 'RESTORE_COUNTRY':
      return {...state, country: payload, category: 'general'};
    case 'RESTORE_CATEGORY':
      return {...state, category: payload, country: 'us'};
    case 'MAIN_NEWS_SUCCESS':
      return {...state, topNews: payload.slice(0, 3), otherNews: payload.slice(3)};
    case 'MAIN_NEWS_ERROR':
      return {...state, error: payload};
    default:
      return state;
  }
}

export default mainNewsReducer;