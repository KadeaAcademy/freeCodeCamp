import React from 'react';

import {
  CertificationLayout,
  DefaultLayout,
  AdminDefaultLayout
} from '../../src/components/layouts';
import FourOhFourPage from '../../src/pages/404';
import { isChallenge } from '../../src/utils/path-parsers';

interface LayoutSelectorProps {
  element: JSX.Element;
  props: { location: { pathname: string } };
}
export default function layoutSelector({
  element,
  props
}: LayoutSelectorProps): JSX.Element {
  const {
    location: { pathname }
  } = props;

  if (
    pathname === '/admin/admin-home' ||
    pathname === '/admin/all-members' ||
    pathname === '/admin/all-members/' ||
    pathname === '/admin/all-groups' ||
    pathname === '/admin/all-groups/' ||
    pathname === '/admin/all-roles' ||
    pathname === '/admin/all-roles/'
  ) {
    return (
      <AdminDefaultLayout pathname={pathname} showFooter={false}>
        {element}
      </AdminDefaultLayout>
    );
  } else if (element.type === FourOhFourPage) {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  } else if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  } else if (isChallenge(pathname)) {
    return (
      <DefaultLayout pathname={pathname} showFooter={false}>
        {element}
      </DefaultLayout>
    );
  } else {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  }
}
