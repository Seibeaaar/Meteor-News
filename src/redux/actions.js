export const setLoading = status => {
  return {
    type: 'SET_LOADING',
    payload: status,
  }
}

export const mainNewsRequest = () => {
  return {
    type: 'MAIN_NEWS_REQUEST',
  }
}

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

export const restoreCountry = country => {
  return {
    type: 'RESTORE_COUNTRY',
    payload: country,
  }
}

export const restoreCategory = category => {
  return {
    type: 'RESTORE_CATEGORY',
    payload: category,
  }
}

export const setKeyword = keyword => {
  return {
    type: 'SET_KEYWORD',
    payload: keyword,
  }
}