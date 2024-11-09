import React from 'react';

import R from 'ramda';
import { useSelector } from 'react-redux';

import Match from '../Match';
import { Columns } from 'react-bulma-companion';

export default function MatchList() {
  const matches = useSelector(state => state.matches);

  return (
    <div>
      <Columns activate="tablet" multiline className="match-list">
        {R.reverse(matches).map(match => <Match key={match.id} match={match} />)}
      </Columns>
    </div>
  );
}
