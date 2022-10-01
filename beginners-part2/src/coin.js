import {useEffect, useState} from "react";

function App() {
  const [loading, setLoding] = useState(true)
  const [coins, setCoins] = useState([])
  const [money, setmoney] = useState(0)
  const [value, setValue] = useState(1)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((Response) => Response.json().then((json) => {
      setCoins(json)
      setLoding(false)
    }))
  },[])
  
  function GetValue(event) {
    setValue(event.target.value)
  }
  
  return <div>
    <h1>The Coin! ({loading ? null : coins.length})</h1>
    {loading ? "loading..." : 
    <select onChange={GetValue}>
      <option>select your coin</option>
      {coins.map((coin) => 
      <option key={coin.id} value={coin.quotes.USD.price}>
        {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
      </option>
      )}
    </select>}

    <input value={money} onChange={(event) => {
      setmoney(event.target.value)
    }} placeholder="dollor"></input>
    <hr />
    <div>You can get {money/value}, {console.log(value)}</div>
  </div>;
}

