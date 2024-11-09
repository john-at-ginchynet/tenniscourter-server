import React, { useEffect, useState } from 'react';

import R from 'ramda';
import { Box } from 'react-bulma-companion';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import { attemptGetSites } from '_store/thunks/sites';

import SiteList from './SiteList';

export default function MatchPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      setLoading(true);

      dispatch(attemptGetSites())
        .catch(R.identity)
        .finally(() => setLoading(false));
    }
  }, [dispatch, user]);

  return !loading && (
    <div className="sites-page page">
      <Section className="sites-section">
        <Title size="1" className="has-text-centered">
          Courts
        </Title>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <Box>
              Search Court Widget
            </Box>
          </Column>
        </Columns>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <SiteList />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
