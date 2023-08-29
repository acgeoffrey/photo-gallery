import { useState } from 'react';
import usePhotoLoad from './usePhotoLoad';
import Photo from './Photo';

function App() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = usePhotoLoad(page);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {data.map((item) => (
        <Photo photo={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
