import React from 'react';
import Panel from './Panel';

export default (props) =>  props.panels && (
  <div className="panels">
    {props.panels.map((panel, idx) =>
      <Panel key={idx} id={panel.id} type={panel.type} closePanel={() => props.removePanel(panel)}></Panel>
    )}
  </div>
);