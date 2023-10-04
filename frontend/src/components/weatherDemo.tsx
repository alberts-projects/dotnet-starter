import { useEffect, useState } from 'react'
import axios from 'axios';

const WeatherDemo = (props) => {
    let {exampleProp} = props;
    const [weather, setWeather] = useState([]);

    useEffect(()=> {
      axios.get('http://localhost:5066/WeatherForecast')
      .then(resp => {
        console.log(resp)
        setWeather(resp.data)
      })
    }, [])

    return (
    <div>
        Weather demoooo {exampleProp}
    </div>
        )
}

export default WeatherDemo;