import React from 'react';

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src='https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox'
        alt='가위 사진'
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
