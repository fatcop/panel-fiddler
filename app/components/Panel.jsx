import React from 'react';

export default class Panel extends React.Component {
  render() {
    const {id, type, children, closePanel, selected,
       selectPanel, deselectPanel} = this.props;
    const selectedClass = selected ? ' selected' : '';
    const panelClass=`panel panel--${type}${selectedClass}`;
    const clickPanel = () => {
      selected ? deselectPanel() : selectPanel();
    }
    const clickClosePanel = (ev) => {
      ev.stopPropagation();
      closePanel();
    }
    return (
      <div className={panelClass} onClick={clickPanel}>
        <div className='panel__content'>
          <button type="button" className="panel__button--close" onClick={clickClosePanel}>x</button>
          <h2>{type} panel {id}</h2>
          {children}
        </div>
      </div>
    )
  }
}