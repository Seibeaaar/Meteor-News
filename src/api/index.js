import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': '35e3344f2c744139b763fc724858c5b2',
  },
})

export const getNewsByParams = async (country = 'us', category = 'general') => {
  try {
    const { data } = await instance.get(`/top-headlines?country=${country}&category=${category}`);
    return data.articles;
  } catch (e) {
    throw new Error(e);
  }
}

export const getNewsByKeyword = async (keyword) => {
  try {
    const { data } = await instance.get(`/everything?q=${keyword}`);
    return data.articles;
  } catch (e) {
    throw new Error(e);
  }
}