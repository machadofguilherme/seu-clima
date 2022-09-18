import React, { useState } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';

import GlobalStyle from './styles/global';
import { Main, Field, Logo, Button } from './styles/app';

import climaApi from './utils/api';
import Error from './components/Error';
import NotFound from './components/NotFound';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [input, setInput] = useState('');
    const [disable, setDisable] = useState(true);
    const [press, setPress] = useState(false);
    const [renderWeather, setRenderWeather] = useState(false);

    const handleChange = (e) => {
        const { target: { value } } = e;
        const keyCode = (e.keyCode ? e.keyCode : e.wich);

        value.length > 0 ? setDisable(false) : setDisable(true);

        if (keyCode > 47 && keyCode < 58) {
          e.preventDefault(value);
          setPress(true);
        } else {
          setPress(false);
        }

        const city = value.toLowerCase();
        setInput(city);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const city = await climaApi(input);
        const errorCode = city.cod;

        if (errorCode === '404') {
          setError(true);
          setRenderWeather(false);
        } else {
          setData(city)
          setRenderWeather(true);
          setError(false);
        } 
    };

    const handleBack = () => {
      setRenderWeather(false);
    }

    return (
      <>
          <Main>
          <GlobalStyle />
              {
                  renderWeather
                  ? <Weather data={ data } goBack={ handleBack } />
                  :
                    (
                      <>
                          <header>
                          <Logo>
                              <TiWeatherPartlySunny />
                          </Logo>
                          <h1>
                              Seu Clima
                          </h1>
                          </header>

                          <form>
                          <Field
                              type="text" onKeyUp={ handleChange }
                              placeholder="Digite o nome de uma cidade"
                              autoComplete="off"
                              required
                          />

                          <Button
                              type="click"
                              disabled={ disable }
                              onClick={ handleClick }
                          >
                              Pesquisar
                          </Button>
                          </form>
                          
                          { (press && <Error />) || (error && <NotFound />) }
                      </>
                  )
              }
          </Main>
          <Footer />
          </>
      );
}

export default App;
