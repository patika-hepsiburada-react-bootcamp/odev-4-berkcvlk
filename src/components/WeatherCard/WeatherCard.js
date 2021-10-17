import { useState } from "react";
import { useQuery } from "@apollo/client";

import { Select } from "components";
import { cities } from "constants/cities";
import { WEATHER_QUERY } from "./queries";
import * as S from "./styles";
import { getWeatherImage } from "utils/getWeatherImage";

const WeatherCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(59);
  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: {
      id: cities[selectedIndex].id,
    },
  });

  const handleSelectedIndexChange = (index) => {
    setSelectedIndex(index);
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  // Destruct the weather data
  const [city] = data.getCityById;

  return (
    <S.Card>
      <Select
        options={cities}
        selectedIndex={selectedIndex}
        onChange={handleSelectedIndexChange}
      />
      <S.OverflowedContent>
        <S.WeatherImage
          src={`assets/images/${getWeatherImage(
            city.weather.summary.description
          )}.png`}
          alt={city.weather.summary.title}
        />
      </S.OverflowedContent>
      <S.Margin />
      <S.City>{city.name}</S.City>
      <S.Temperature>{city.weather.temperature.actual}</S.Temperature>
      <S.Detail>
        <S.DetailTitle>Wind</S.DetailTitle>
        <S.DetailDesc>{city.weather.wind.speed}</S.DetailDesc>
      </S.Detail>
      <S.Detail>
        <S.DetailTitle>Clouds</S.DetailTitle>
        <S.DetailDesc>{city.weather.clouds.all}</S.DetailDesc>
      </S.Detail>
    </S.Card>
  );
};

export default WeatherCard;
