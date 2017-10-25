import React from 'react';

export default (props) => (
  <div className="toolbar">
    <button type="button" onClick={props.addPanelThin} disabled={props.disabled}>
      Add Thin Panel
    </button>
    <button type="button" onClick={props.addPanelFullWidth} disabled={props.disabled}>
      Add Full Width Panel
    </button>
    <button type="button" onClick={props.removeAllPanels} disabled={props.disabled || props.panelCount == 0}>
      Remove All Panels
    </button>
  </div>    
);
