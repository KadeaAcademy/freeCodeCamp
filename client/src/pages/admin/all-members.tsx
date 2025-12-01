import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React, { Component, ErrorInfo, ReactNode } from 'react';

import ShowAllMembers from '../../client-only-routes/admin/show-all-members';
import ShowActifMembers from '../../client-only-routes/admin/show-actif-members';
import ShowProgressionByMember from '../../client-only-routes/admin/show-progression-by-member';
import ShowTotalMembers from '../../client-only-routes/admin/show-total-members';
import ShowTotalCourses from '../../client-only-routes/admin/show-total-courses';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error in AllMembers router:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px' }}>
          <h2>Erreur lors du chargement de la page</h2>
          <p>{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function AllMembers(): JSX.Element {
  // Utiliser avec et sans withPrefix pour assurer la compatibilité
  const basePath = '/admin/all-members';
  const prefixedPath = withPrefix(basePath);

  // Debug
  if (typeof window !== 'undefined') {
    console.log('AllMembers Router rendering', {
      basePath,
      prefixedPath,
      currentPath: window.location.pathname
    });
  }

  return (
    <ErrorBoundary>
      <Router>
        {/* Routes spécifiques en premier */}
        <ShowActifMembers
          path={withPrefix('/admin/all-members/actif-members')}
        />
        <ShowProgressionByMember
          path={withPrefix('/admin/all-members/progression-by-member')}
        />
        <ShowTotalMembers
          path={withPrefix('/admin/all-members/total-members')}
        />
        <ShowTotalCourses
          path={withPrefix('/admin/all-members/total-courses')}
        />
        {/* Route générale - essayer avec et sans prefix pour assurer la compatibilité */}
        {/* TEMPORAIRE : Désactiver RedirectHome pour forcer l'affichage */}
        <ShowAllMembers path={prefixedPath} />
        <ShowAllMembers path={basePath} />
        <ShowAllMembers path='/admin/all-members/' />
        {/* Route catch-all pour éviter RedirectHome */}
        <ShowAllMembers path='/*' />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {/* <RedirectHome default={true} /> */}
      </Router>
    </ErrorBoundary>
  );
}

AllMembers.displayName = 'AllMembers';

export default AllMembers;
