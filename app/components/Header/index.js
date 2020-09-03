import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import KolorLogo from '../../images/kolorLogo.png';
import styles from './styles';
import KolorTitleHeader from './KolorTitleHeader';
import KolorTitle from './KolorTitle';

/**
 * Main header of the app. Contains the logo and navigation.
 */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <KolorTitleHeader>
            <div style={styles.kolorLogo}>
              <A href="/">
                <Img src={KolorLogo} style={styles.kolorLogo} />
              </A>
            </div>
            <KolorTitle>Kolor</KolorTitle>
          </KolorTitleHeader>
          <HeaderLink to="/features" activeStyle={styles.navbarActive}>
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/about" activeStyle={styles.navbarActive}>
            <FormattedMessage {...messages.about} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
