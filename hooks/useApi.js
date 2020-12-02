import { useEffect, useState } from 'react';

function useApi(id) {
  const [data, setData] = useState(null);
  useEffect(() => {
    callApi(id).then((result) => setData(result));
  }, []);
  return data;
}

export default useApi;
