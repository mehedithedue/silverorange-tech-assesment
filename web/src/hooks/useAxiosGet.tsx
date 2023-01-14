import { useEffect, useState } from 'react';
import client from '../utils/client';

const useAxiosGet = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    client
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoaded(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loaded };
};

export default useAxiosGet;
