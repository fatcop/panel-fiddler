import React from 'react';
import Toolbar from './Toolbar';

export default ({toolbar: {addPanelThin, addPanelFullWidth, removeAllPanels, toolBarEnabled, panelCount}}) => (
  <div className="page__header">
    <h1>Panel fiddler</h1>
    <Toolbar addPanelThin={addPanelThin} addPanelFullWidth={addPanelFullWidth} removeAllPanels={removeAllPanels} disabled={!toolBarEnabled} panelCount={panelCount}/>
  </div>
);