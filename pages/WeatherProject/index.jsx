import { useEffect, useState } from 'react';
import WeatherItem from '../../src/shared/components/WeatherItem';

const WeatherProject = () => {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [weather, setWeather] = useState('');

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=add06cc58c5cb5c6ab6c2e72bec9758b`)
      .then((res) => res.json())
      .then((res) => setLocation({ lat: res[0].lat, lon: res[0].lon }));
  }, []);

  useEffect(() => {
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&appid=add06cc58c5cb5c6ab6c2e72bec9758b`)
      .then((res) => res.json())
      .then((res) => setWeather(res));
  }, []);

  console.log('weather', location, weather);

  // const Dweather = [{}];
  return (
    <>
      <WeatherItem />
    </>
  );
};

export default WeatherProject;
