import React from 'react';

export default (props) => (
  <div className="toolbar">
    <button type="button" onClick={props.addPanelThin}>Add Thin Panel</button>
    <button type="button" onClick={props.addPanelFullWidth}>Add Full Width Panel</button>
    <button type="button" onClick={props.removeAllPanels}>Remove All Panels</button>
  </div>    
);
