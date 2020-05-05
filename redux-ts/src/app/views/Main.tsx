import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Main = (props: Props) => {
  return (
    <Link to="/">
      <h1>Reduxagram</h1>
    </Link>
  );
};

export default Main;
