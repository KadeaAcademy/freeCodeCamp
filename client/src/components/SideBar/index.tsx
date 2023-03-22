/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import Helmet from 'react-helmet';

// import UniversalNav from './components/universal-nav';

import './sidebar.css';

export interface SideBarProps {
  fetchState: { pending: boolean };
  user: Record<string, any>;
}
export class SideBar extends React.Component<
  SideBarProps,
  { displayMenu: boolean }
> {
  menuButtonRef: React.RefObject<any>;
  searchBarRef: React.RefObject<any>;
  static displayName: string;

  constructor(props: SideBarProps) {
    super(props);
    this.state = {
      displayMenu: false
    };
    this.menuButtonRef = React.createRef();
    this.searchBarRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event: globalThis.MouseEvent): void {
    if (
      this.state.displayMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target) &&
      // since the search bar is part of the menu on small screens, clicks on
      // the search bar should not toggle the menu
      this.searchBarRef.current &&
      !this.searchBarRef.current.contains(event.target) &&
      !(event.target instanceof HTMLSelectElement)
    ) {
      this.toggleDisplayMenu();
    }
  }

  toggleDisplayMenu(): void {
    this.setState(({ displayMenu }: { displayMenu: boolean }) => ({
      displayMenu: !displayMenu
    }));
  }
  render(): JSX.Element {
    // const { displayMenu } = this.state;
    // const { fetchState, user } = this.props;
    return (
      <>
        <Helmet>{/* <style>{':root{--header-height: 38px}'}</style> */}</Helmet>
        <header className='side-bar'>
          <h1>Hello</h1>
          {/*
          <UniversalNav
            displayMenu={displayMenu}
            fetchState={fetchState}
            toggleDisplayMenu={this.toggleDisplayMenu}
            user={user}
          /> */}
        </header>
      </>
    );
  }
}

SideBar.displayName = 'SideBar';

export default SideBar;
