import React, {  } from 'react';

import Card from 'react-bulma-companion/lib/Card';
import CardFooter from 'react-bulma-companion/lib/Card/CardFooter';
import CardFooterItem from 'react-bulma-companion/lib/Card/CardFooterItem';
import CardHeader from 'react-bulma-companion/lib/Card/CardHeader';
import CardHeaderTitle from 'react-bulma-companion/lib/Card/CardHeaderTitle';
import Column from 'react-bulma-companion/lib/Column';

function Winner({
  winningSide, side1_player1, side2_player1, side1_player2, side2_player2
}) {
  if (winningSide === 0) {
    return 'TIED';
  } if (winningSide === 1) {
    return `${side1_player1.name}`;
  } if (winningSide === 2) {
    return `${side2_player1.name}`;
  }
  return 'Unknown outcome';
}

export default function Match({match}) {
  return (
    <Column size="half">
      <Card className="match" component="div">
        <CardHeader>
          <CardHeaderTitle>
            {match.side1_player1.name}
            {' vs '}
            {match.side2_player1.name}
          </CardHeaderTitle>
        </CardHeader>
        <CardFooter>
          <CardFooterItem>
            {match.score}
          </CardFooterItem>
          <CardFooterItem>
            {'Winner: '}
            <Winner
              winningSide={match.winningSide}
              side1_player1={match.side1_player1}
              side2_player1={match.side2_player1}
            />
          </CardFooterItem>
        </CardFooter>
        <CardFooter>
          <CardFooterItem>{(new Date(match.date)).toDateString()}</CardFooterItem>
          <CardFooterItem>
            @
            {match.location}
          </CardFooterItem>
        </CardFooter>
      </Card>
    </Column>
  );
}
