import React from 'react';

export default class Panel extends React.Component {
  render() {
    const {id, type, children, closePanel} = this.props;
    const panelClass=`panel panel--${type}`;
    return (
      <div className={panelClass}>
        <div className='panel__content'>
          <button type="button" className="panel__button--close" onClick={closePanel}>x</button>
          <h2>{type} panel {id}</h2>
          {children}
        </div>
      </div>
    )
  }
}