import { useEffect, useState } from 'react';

const URL = 'https://picsum.photos/v2/list';

export default function usePhotoLoad(page) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      setError(false);

      fetch(`${URL}?page=${page}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setData((prevData) => [...prevData, data]);
        })
        .catch(() => setError(true));
    },
    [page]
  );

  return { data, isLoading, error };
}
