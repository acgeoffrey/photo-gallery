import { useEffect, useState } from 'react';

const URL = 'https://picsum.photos/v2/list';

export default function usePhotoLoad(page) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      console.log('RENDERING');
      setIsLoading(true);
      setError(false);

      fetch(`${URL}?page=${page}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setData((prevData) => [...new Set([...prevData, ...data])]);
        })
        .catch(() => setError(true));
    },
    [page]
  );

  return { data, isLoading, error, setData };
}
