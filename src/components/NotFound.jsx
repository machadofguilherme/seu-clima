import React from 'react';
import Message from '../styles/error';

function NotFound() {
  return (
    <Message>
        <strong>
            Não existe uma cidade com esse nome. 
                <br />
                Tente novamente.
            </strong>
    </Message>
  );
}

export default NotFound;
