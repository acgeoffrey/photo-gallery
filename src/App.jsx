import { useCallback, useRef, useState } from 'react';
import usePhotoLoad from './usePhotoLoad';
import Photo from './Photo';

function App() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isNext } = usePhotoLoad(page);

  const ref = useRef();
  const lastPhotoRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (ref.current) ref.current.disconnect();
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isNext) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) ref.current.observe(node);
    },
    [isLoading, isNext]
  );

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
          !error &&
          data.map((item, index) => {
            if (data.length === index + 1) {
              return (
                <div key={item.id} ref={lastPhotoRef}>
                  <Photo photo={item} />
                </div>
              );
            } else {
              return (
                <div key={item.id}>
                  <Photo photo={item} />
                </div>
              );
            }
          })}
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
