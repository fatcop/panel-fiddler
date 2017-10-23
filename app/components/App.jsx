import React from 'react';
import Header from './Header';
import Panels from './Panels';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      panelId: 0,
      panels: []
    }
    this.addPanelThin = () => this.addPanel('thin');
    this.addPanelFullWidth = () => this.addPanel('full-width');
    this.removePanel = (panel) => this._removePanel(panel);
    this.removeAllPanels = () => this._removeAllPanels();
  }

  addPanel(type) {
    const {panelId, panels} = this.state;
    const newPanelId = panelId + 1;
    const newPanels = panels.concat({
      id: newPanelId,
      type
    });
    this.setState({
      panelId: newPanelId,
      panels: newPanels
    });
  }

  _removePanel(panel) {
    const newPanels = this.state.panels.filter((p) => panel.id !== p.id);
    this.setState({panels: newPanels});
  }
  
  _removeAllPanels() {
    this.state.panels && this.setState({panels: []});
  }

  render() {
    const {addPanelThin, addPanelFullWidth, removePanel, removeAllPanels} = this;
    const {panels} = this.state;
    return (
      <div className="page">
        <Header toolbar={{addPanelThin, addPanelFullWidth, removeAllPanels}}/>
        <div className="page__body">
          <Panels panels={panels} removePanel={removePanel} />
        </div>
        <Footer />
      </div>
  );
  }
}
