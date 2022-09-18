import React, { useState, useEffect } from 'react';
import { TiArrowBack } from 'react-icons/ti';

import {
    Button, City, Main, Icon,
    Temp, Description, Details, Extra
} from '../styles/weather';

function Weather(props) {
    const { data, goBack } = props;
    const [country, setCountry] = useState('');
    const [icon, setIcon] = useState('');

    const flagFetch = async () => {
        const { sys: { country } } = data;
        const flag = country.toLowerCase();

        const url = `https://countryflagsapi.com/svg/${flag}`;
        const request = await fetch(url);

        return setCountry(request.url);
    }

    useEffect(() => {
        const { weather, name } = data;

        const { icon } = weather[0];
        const climate = `https://openweathermap.org/img/wn/${icon}.png`;

        setIcon(climate);
        flagFetch();
    }, []);

  return (
    <main> 
        <Button onClick={ goBack }>
            <TiArrowBack />
        </Button>

        <section>
            <City>
                <h2>{ data.name }</h2>
                <img src={ country } alt="Bandeira do país." />
            </City>

            <Main>
                <div>
                    <Icon src={ icon } />
                </div>
                <div>
                    <Temp>{ data.main.temp }ºC</Temp>
                    <Description>{ data.weather[0].description }</Description>
                </div>
            </Main>

            <Details>
                <p>Umidade</p>
                <p>Temperatura máxima</p>
                <p>Temperatura mínima</p>
            </Details>

            <Extra>
                <p>{ `${data.main.humidity}%` }</p>
                <p>{ `${data.main.temp_max}ºC` }</p>
                <p>{ `${data.main.temp_min}ºC` }</p>
            </Extra>
        </section>
    </main>
  );
}

export default Weather;
