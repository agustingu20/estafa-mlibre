import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const axiosFuntion = async () => {
    const { data } = await axios(url);
    setDataFetch({
      loading: false,
      data,
    });
  };
  useEffect(() => {
    axiosFuntion();
  }, [url]);
  return dataFetch;
};

export default useFetch;

/*
const [query, setQuery] = useState('vehiculos');
  const dato = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
  );
  const [id, setid] = useState('MLA1106534643');
  const date = useFetch(`https://api.mercadolibre.com/items/${id}`);
  const cambiar = () => {
    setid('MLA1106568408');
    setQuery('casa');
  };
*/
