import React from 'react';

export const Button = () => {

  const btnClicked = () => {
    console.log('btn clicked');
  }

  return (
    <div className="button-container">
      <button className="button" onClick={btnClicked}>
        Click me       
      </button>
    </div>
  );
}

export default Button;

