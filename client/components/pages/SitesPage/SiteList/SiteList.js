import React from 'react';

import R from 'ramda';
import { useSelector } from 'react-redux';

import Site from '../Site';
import { Columns } from 'react-bulma-companion';

export default function SiteList() {
  const sites = useSelector(state => state.sites);

  return (
    <div>
      <Columns activate="tablet" multiline className="site-list">
        {R.reverse(sites).map(site => <Site key={site.id} site={site} />)}
      </Columns>
    </div>
  );
}
