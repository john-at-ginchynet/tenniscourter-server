import React, { useEffect, useState } from 'react';

import R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import { attemptGetMatches } from '_store/thunks/matches';

import AddMatch from './AddMatch';
import MatchList from './MatchList';

export default function MatchPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      setLoading(true);

      dispatch(attemptGetMatches())
        .catch(R.identity)
        .finally(() => setLoading(false));
    }
  }, [dispatch, user]);

  return !loading && (
    <div className="match-page page">
      <Section className="match-section">
        <Title size="1" className="has-text-centered">
          Matches:
        </Title>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <AddMatch />
          </Column>
        </Columns>
        <Columns>
          <Column size="8" offset="2" className="has-text-left">
            <MatchList />
          </Column>
        </Columns>
      </Section>
    </div>
  );
}
