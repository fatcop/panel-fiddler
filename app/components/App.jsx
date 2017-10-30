import React from 'react';
import Header from './Header';
import Panels from './Panels';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      panelId: 0,
      panels: [],
      selectedPanelId: 0
    }
    this.addPanelThin = () => this.addPanel('thin');
    this.addPanelFullWidth = () => this.addPanel('full-width');
    this.removePanel = (panel) => this._removePanel(panel);
    this.removeAllPanels = () => this._removeAllPanels();
    this.selectPanel = (panel) => this._selectPanel(panel);
    this.deselectPanel = (panel) => this._deselectPanel(panel);
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

  _selectPanel(panel) {
    console.log('Selecting', panel);
    this.setState({selectedPanelId: panel.id});
  }

  _deselectPanel(panel) {
    console.log('Deselecting', panel);
    this.setState({selectedPanelId: 0});
  }

  _removePanel(panel) {
    console.log('Removing', panel);
    const panels = this.state.panels.filter((p) => panel.id !== p.id);
    const selectedPanelId = this.state.selectedPanelId === panel.id ? 0 : this.state.selectedPanelId;
    this.setState({panels, selectedPanelId });
  }
  
  _removeAllPanels() {
    console.log('Remove all panels');
    this.state.panels && this.setState({panels: [], selectedPanelId: 0});
  }

  render() {
    const {addPanelThin, addPanelFullWidth, removePanel, 
          removeAllPanels, selectPanel, deselectPanel,
          state: {
            panels, selectedPanelId
          }} = this;
    const toolBarEnabled = selectedPanelId === 0;
    const panelCount = panels.length;
    return (
      <div className="page">
        <Header toolbar={{addPanelThin, addPanelFullWidth, 
          removeAllPanels, disabled: !toolBarEnabled, panelCount}}/>
        <div className="page__body">
          <Panels panels={panels} removePanel={removePanel} selectedId={selectedPanelId} 
            selectPanel={selectPanel} deselectPanel={deselectPanel}/>
        </div>
        <Footer />
      </div>
  );
  }
}
