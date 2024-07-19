import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Price = () => {
  const [coin, setCoin] = useState(null);
  const params = useParams();

  let key = import.meta.env.VITE_apiKey;
  let symbol = params.symbol;
  let url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${key}`;

  useEffect(() => {
    async function getCoin() {
      try {
        let res = await axios.get(url);

        setCoin(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    getCoin()
  }, []);

  //Loading Funcion
  const loading = () => {
    return <h2>Loading...</h2>
  }
  //Loaded Function
  const loaded = () =>{
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }

  return coin && coin.rate? loaded(): loading();

};

export default Price;
