import { Link } from 'react-router-dom';

const Currencies = () => {
  const currencies = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Litecoin', symbol: 'LTC' },
    { name: 'Ethereum', symbol: 'ETH' },
    { name: 'Ethereum Classic', symbol: 'ETC' },
    { name: 'Stellar Lumens', symbol: 'XLM' },
    { name: 'Dash', symbol: 'DASH' },
    { name: 'Ripple', symbol: 'XRP' },
    { name: 'Zcash', symbol: 'ZEC' },
  ];

  const currencyList = currencies.map((coin, i) => {
    return (
      <li key={i}>
        <Link to={`/price/${coin.symbol}`}>{coin.name}</Link>
      </li>
    );
  });

  return <ul>{currencyList}</ul>;
};

export default Currencies;
