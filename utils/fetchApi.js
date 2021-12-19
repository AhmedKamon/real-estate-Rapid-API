import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c5ff772f84msh5befd94e9a88ec7p1a9cb4jsn2278c71503d2',
    },
  });

  return data;
};
