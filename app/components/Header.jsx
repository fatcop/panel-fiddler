import React from 'react';
import Toolbar from './Toolbar';

export default ({toolbar}) => (
  <div className="page__header">
    <h1>Panel fiddler</h1>
    <Toolbar {...toolbar} />
  </div>
);