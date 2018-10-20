import request from './request';

const endPoint = 'https://hacker-news.firebaseio.com/v0/';

export const toURL = path => `${endPoint}${path}`;

const api = {
  getNewestIDs: () => request(toURL('newstories.json')),
};

export default api;
