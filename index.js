import * as React from 'react';
import ReactDOM from 'react-dom';

import { Sidebar } from './components/Sidebar';
import Colours from './pages/Colors';
import Typography from './pages/Typography';
import Tables from './pages/Tables';
import Language from './pages/Language';
import Buttons from './pages/ButtonsAndLinks';
import ThemeBuilder from './pages/ThemeBuilder';
import './css/global.css';
import styles from './index.css';
import notificationStyle from './css/notifications.css';
import { loadCSSFromTheme, themeActive, resetTheme } from './themeManager';
import IconsAndMedia from './pages/IconsAndMedia';

const PAGES = {
  home: () => <div>Home</div>,
  '/colours': Colours,
  '/typography': Typography,
  '/tables': Tables,
  '/language': Language,
  '/buttons': Buttons,
  '/theme': ThemeBuilder,
  '/icons_and_media': IconsAndMedia,
  unknown: () => <div>Page could not be found</div>,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    loadCSSFromTheme();
    const path = window.location.pathname;
    let page = 'unknown';
    if (path == '/' || path === '' || !path) {
      page = 'home';
    } else if (Object.keys(PAGES).includes(path)) {
      page = path;
    }
    this.state = { error: null, page };
  }

  renderResetWarning() {
    return (
      <div className={notificationStyle.warning}>
        <button onClick={resetTheme}>Reset</button> There are theme
        customisations active
      </div>
    );
  }
  render() {
    const Page = PAGES[this.state.page];

    return (
      <React.Fragment>
        {themeActive() ? this.renderResetWarning() : null}
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Page />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
