import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Messages = ({ match }) => (
  <div>
    <ul>
    {
        [...Array(5).keys()].map(n => {
          console.log(n, `messages/${n+1}`)
            return <li key={n}>
                    <Link key={n} to={`message/${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    }
    </ul>
  </div>
);
export default Messages;
