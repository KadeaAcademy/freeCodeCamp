/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';

import './sidebar.css';
import SideBarNavLinks from './components/side-bar-nav-links';

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
    return (
      <>
        <header className='side-bar'>
          <p
            className='big-subheading text-light side-bar-title'
            style={{ overflowWrap: 'break-word' }}
          >
            {'Dashboard'}
          </p>
          <p className='text-light'>Kadea Online</p>
          <hr />
          <SideBarNavLinks />
        </header>
      </>
    );
  }
}

SideBar.displayName = 'SideBar';

export default SideBar;
