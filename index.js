import * as React from 'react';
import ReactDOM from 'react-dom';
import { Sidebar } from './components/Sidebar';
import Colours from './pages/Colors';
import Typography from './pages/Typography';
import Tables from './pages/Tables';
import Language from './pages/Language';
import Buttons from './pages/ButtonsAndLinks';
import './css/global.css';
import styles from './index.css';

const PAGES = {
  home: () => <div>Home</div>,
  '/colours': Colours,
  '/typography': Typography,
  '/tables': Tables,
  '/language': Language,
  '/buttons': Buttons,
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
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
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
