import axios from 'axios';

//http://universities.hipolabs.com/search?country=United+States

export const getRequest = (
  endPoint: string,
  params?: object,
  qParams?: object,
) => {
  return new Promise((resolve, reject) => {
    const teken = '';
    axios
      .get(endPoint, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {},
        timeout: 200000,
      })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};
