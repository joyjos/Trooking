import { useState } from 'react';

export const Like = () => {
  const [clicado, setClicado] = useState(false);

  const handleClick = () => {
    setClicado(!clicado);
  };

  const estiloLike = {
    color: clicado ? '#cc0000' : '#003B95',
    cursor: 'pointer',
  };

  return (
    <span style={estiloLike} onClick={handleClick} className='corazon'>
      &#10084;
    </span>
  );
};
