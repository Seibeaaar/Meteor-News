import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': '35e3344f2c744139b763fc724858c5b2',
  },
})

export const getNewsByParams = async (country, category) => {
  try {
    const res = await instance.get(`/top-headlines?country=${country}&category=${category}`);
    return res;
  } catch (e) {
    throw new Error(e);
  }
}

export const getNewsByKeyword = async (keyword) => {
  try {
    const res = await instance.get(`/everythin?q=${keyword}`);
    return res;
  } catch (e) {
    throw new Error(e);
  }
}