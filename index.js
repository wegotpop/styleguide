import * as React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar } from './components/Sidebar';
import Colours from './pages/Colors';
import Typography from './pages/Typography';
import Tables from './pages/Tables';
import Language from './pages/Language';

const PAGES = {
  home: () => <div>Home</div>,
  '/colours': Colours,
  '/typography': Typography,
  '/tables': Tables,
  '/language': Language,
  unknown: () => <div>Page could not be found</div>,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const path = window.location.pathname;
    let page = 'unknown';
    if (path == '/' || path === '' || !path) {
      page = 'home';
    } else if (Object.keys(PAGES).includes(path)) {
      page = path;
    }
    this.state = { error: null, page };
  }

  render() {
    const Page = PAGES[this.state.page];

    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: '80%' }}>
          <Page />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));

if (module.hot) {
  module.hot.accept();
}
