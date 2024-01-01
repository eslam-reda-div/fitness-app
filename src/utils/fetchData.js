export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63bc2d5092msh02eb856f66eeb79p1a1ff6jsnd061e167510d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '63bc2d5092msh02eb856f66eeb79p1a1ff6jsnd061e167510d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
