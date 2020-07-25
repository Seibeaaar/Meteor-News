export const chooseCategory = category => {
  return {
    type: 'CHOOSE_CATEGORY',
    payload: category,
  }
}

export const chooseCountry = country => {
  return {
    type: 'CHOOSE_COUNTRY',
    payload: country,
  }
}

export const setKeyword = keyword => {
  return {
    type: 'SET_KEYWORD',
    payload: keyword,
  }
}