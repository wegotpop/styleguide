import * as React from 'react';
import ReactDOM from 'react-dom';

import { Sidebar } from './pages/components/Sidebar';
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
import Navigation from './pages/Navigation';
import Animation from './pages/Animation';
import CaseHeaders from './pages/CaseHeaders';
import Notifications from './pages/Notifications';
import ContentContainers from './pages/ContentContainers';
import FormElements from './pages/FormElements';
import BannerSVG from './pages/assets/banner.svg';

const PAGES = {
  home: () => (
    <div>
      <h1>We Got POP - Style guide</h1>
      <em>Work in progress</em>
    </div>
  ),
  '/colours': Colours,
  '/typography': Typography,
  '/tables': Tables,
  '/language': Language,
  '/buttons': Buttons,
  '/theme': ThemeBuilder,
  '/icons_and_media': IconsAndMedia,
  '/navigation': Navigation,
  '/animation': Animation,
  '/case_headers': CaseHeaders,
  '/notifications': Notifications,
  '/content_containers': ContentContainers,
  '/forms': FormElements,
  unknown: () => <div>Page could not be found</div>
};

const Banner = () => (
  <div id={styles.banner}>
    <BannerSVG />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    loadCSSFromTheme();

    let path = window.location.pathname;

    if (window.location.search && window.location.search !== '') {
      path = location.search.replace('?p=', '');
    }

    this.state = { path };
    this.handleClick = this.handleClick.bind(this);

    window.onpopstate = e => {
      if (e.state) {
        this.setState({ path: e.state.path });
      }
    };
  }

  renderResetWarning() {
    return (
      <div className={notificationStyle.warning}>
        <button onClick={resetTheme}>Reset</button> There are theme
        customisations active
      </div>
    );
  }
  handleClick(path) {
    this.setState({ path });
    const url = window.location.href.replace(/\/[^\/]*$/, path);
    window.history.pushState({}, '', url);
  }

  render() {
    const { path } = this.state;
    let page = 'unknown';
    if (['/', '', 'index.html', '/styleguide/'].includes(path) || !path) {
      page = 'home';
    } else if (Object.keys(PAGES).includes(path)) {
      page = path;
    }
    const Page = PAGES[page];

    return (
      <React.Fragment>
        {themeActive() ? this.renderResetWarning() : null}
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Sidebar onClick={this.handleClick} />
          </div>
          <div className={styles.content}>
            <Banner />
            <Page />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
