import React, { useState } from 'react';
import User from './User';
import { useEffect } from 'react';

export default function Users({ users }) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsVisible]);

  return (
    <div>
      <p>Componente Users visibel por {secondsVisible} segundos</p>

      <ul>
        {users.map((user) => {
          return (
            <li key={user.login.uuid}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
