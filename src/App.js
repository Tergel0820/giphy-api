import React, { useEffect, useState } from "react";
import axios from "axios";
import GiphySearch from './components/search-giphy';
import Giphy from './components/giphy'
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
      axios
        .get("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "biC5WfOcRVwgK3LR6d1Fhk55GTrARJeR",
            q: search,
            limit: 10,
          },
        })
        .then((data) => {
          console.log(data);
          setData(data.data.data);
        });
  }, [search]);
 
  return <div>
    <div className="inputCon center">
      <GiphySearch search={search} setSearch={setSearch} />
    </div>
    <div className='giphyCon'>
      {data && data.map((el) => <Giphy key={el.id} img={el.images.fixed_height.url} />)}
    </div>
  </div>
};

export default App;