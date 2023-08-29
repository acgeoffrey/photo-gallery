import { useState } from 'react';

function Photo({ photo, setData }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <img
        src={photo.download_url}
        style={{ height: '10rem', width: '15rem' }}
      />
      <h3>Author:</h3>
      <p>{photo.author}</p>
      <div style={{ padding: '1rem' }}>
        <i
          className='fa-regular fa-thumbs-up'
          style={{
            color: 'blue',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginRight: '0.5rem',
          }}
          onClick={handleLikes}
        ></i>
        <span>{likes}</span>
      </div>
    </div>
  );
}

export default Photo;
