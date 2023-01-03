const KEY = '56731b7c335c41d498e234827220708';

const fetchData = async (City) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${City}&aqi=no`;
  const fetchResponse = await fetch(URL);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
