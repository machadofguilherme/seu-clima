const climaApi = async (city) => {
    try {
        const apiKeyClima = '663bd48e4aa36cbe6d593d1e449d0b86';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apiKeyClima}&units=metric`;
        const request = await fetch(url);
        const json = await request.json();
        return json;
    } catch (error) {
        return error.message;
    }
}

export default climaApi;
