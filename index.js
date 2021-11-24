import * as React from 'react';
import ReactDOM from 'react-dom';

import { Sidebar } from './pages/components/Sidebar';
import Colours from './pages/Colors';
import ColourUse from './pages/ColorUse';
import ButtonColours from './pages/ButtonColours';
import Typography from './pages/Typography';
import Tables from './pages/Tables';
import Language from './pages/Language';
import { Buttons } from './pages/Buttons';
import ThemeBuilder from './pages/ThemeBuilder';
import * as styles from './index.css';
import { loadCSSFromTheme, themeActive, resetTheme } from './themeManager';
import IconsAndMedia from './pages/IconsAndMedia';
import Navigation from './pages/Navigation';
import Animation from './pages/Animation';
import CaseHeaders from './pages/CaseHeaders';
import Notifications from './pages/Notifications';
import ContentContainers from './pages/ContentContainers';
import FormElements from './pages/FormElements';
import BannerSVG from './pages/assets/banner.svg';
import { NavigationPage } from './pages/NavigationPages';
import { Links } from './pages/Links';
import { PageHeadings } from './pages/PageHeadings';
import { FastLinks } from './pages/FastLinks';
import { Microcopy } from './pages/Microcopy';
import { Badges } from './pages/Badges';
import { WidgetPages } from './pages/WidgetPages';
import { PageText } from './pages/PageText';
import { UXPrinciples } from './pages/UXPrinciples';
import { Breadcrumbs } from './pages/Breadcrumbs';
import { NavigationBar } from './pages/NavigationBar';
import { Tabs } from './pages/Tabs';
import { DeviceBreakpoints } from './pages/DeviceBreakpoints';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';

const PAGES = {
  home: HomePage,
  '/animation': Animation,
  '/badges': Badges,
  '/breadcrumbs': Breadcrumbs,
  '/buttons': Buttons,
  '/button-colours': ButtonColours,
  '/case-headers': CaseHeaders,
  '/colours': Colours,
  '/colour-use': ColourUse,
  '/content-containers': ContentContainers,
  '/device-breakpoints': DeviceBreakpoints,
  '/fast-links': FastLinks,
  '/forms': FormElements,
  '/icons_and_media': IconsAndMedia,
  '/language': Language,
  '/microcopy': Microcopy,
  '/navigation': Navigation,
  '/navigation-bar': NavigationBar,
  '/navigation-pages': NavigationPage,
  '/notifications': Notifications,
  '/page-headings': PageHeadings,
  '/page-text': PageText,
  '/tabs': Tabs,
  '/tables': Tables,
  '/typography': Typography,
  '/theme': ThemeBuilder,
  '/ux-principles': UXPrinciples,
  '/widget-pages': WidgetPages,
  '/links': Links,
  unknown: PageNotFound
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
      <div className="alert alert-warning">
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
            <Page onClick={this.handleClick} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
