import React, { useState } from 'react';
import './style.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>;

const moviesDB = {
  Action: [
    { name: 'Baahubali 2 : The Conclusion', rating: '4/5' },
    { name: 'War', rating: '3.5/5' }
  ],

  Comedy: [
    {
      name: 'Phir Hera Pheri',
      rating: '5/5'
    },
    {
      name: 'Jati Ratnalu',
      rating: '5/5'
    }
  ],
  Thriller: [
    {
      name: 'Raees',
      rating: '4/5'
    },
    {
      name: 'Khuda Hafiz',
      rating: '4/5'
    }
  ],
  Fictional: [
    {
      name: 'Creature 3D',
      rating: '5/5'
    },
    {
      name: 'Robot',
      rating: '4/5'
    }
  ]
};

export default function App() {
  var [moviename, setmoviename] = useState('Action');

  var meaning = Object.keys(moviesDB);

  function genreselected(genre) {
    setmoviename(genre);
  }

  return (
    <div>
      <h1>Movies 🎥</h1>
      <p>Checkout my favorite movies, Select a genre to get started.👇</p>
      <div>
        {meaning.map(function(genre) {
          return <button onClick={() => genreselected(genre)}>{genre}</button>;
        })}
      </div>
      <hr />
      <div style={{ textAlign: 'left' }} className="data">
        <ul style={{ paddingInlineStart: '0' }}>
          {moviesDB[moviename].map(mname => (
            <li
              key={mname.name}
              style={{
                listStyle: 'none',
                padding: '1rem',
                width: '70%',
                margin: '1rem 10rem',
                borderRadius: '0.5rem'
              }}
            >
              {' '}
              <div style={{ fontSize: 'larger' }}> {mname.name} </div>
              <div style={{ fontSize: 'smaller' }}> {mname.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
