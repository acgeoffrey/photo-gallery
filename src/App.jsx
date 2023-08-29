import { useState } from 'react';
import usePhotoLoad from './usePhotoLoad';
import Photo from './Photo';

function App() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, setData } = usePhotoLoad(page);

  return (
    <div style={{ padding: '2rem', width: '100vw' }}>
      <h1 style={{ textAlign: 'center' }}>Photo Gallery</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {data.length > 0 &&
          data.map((item) => {
            return <Photo photo={item} setData={setData} key={item.id} />;
          })}
      </div>
    </div>
  );
}

export default App;
