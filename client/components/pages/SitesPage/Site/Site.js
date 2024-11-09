import React, {  } from 'react';

import { Container, Control, Field, Icon, Tag, Tags } from 'react-bulma-companion';
import { Link } from 'react-router-dom';

import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faRug } from '@fortawesome/free-solid-svg-icons/faRug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from 'react-bulma-companion/lib/Card';
import CardContent from 'react-bulma-companion/lib/Card/CardContent';
import CardFooter from 'react-bulma-companion/lib/Card/CardFooter';
import CardFooterItem from 'react-bulma-companion/lib/Card/CardFooterItem';
import CardHeader from 'react-bulma-companion/lib/Card/CardHeader';
import CardHeaderTitle from 'react-bulma-companion/lib/Card/CardHeaderTitle';
import Column from 'react-bulma-companion/lib/Column';
import IconText from 'react-bulma-companion/lib/Icon/IconText';

function AccessTag({ site }) {
  if (site.access === 'public') {
    return (
      <Control>
        <Tags addons>
          <Tag color="info">
            <Icon>
              <FontAwesomeIcon icon={faLockOpen} />
            </Icon>
          </Tag>
          <Tag>Public</Tag>
        </Tags>
      </Control>
    );
  }
  return (
    <Control>
      <Tags addons>
        <Tag color="info" light>
          <Icon>
            <FontAwesomeIcon icon={faLock} />
          </Icon>
        </Tag>
        <Tag>Private</Tag>
      </Tags>
    </Control>
  );
}

function CourtsTag({ site }) {
  return (
    <Control>
      <Tags addons>
        <Tag color="info" className="has-text-weight-bold">Courts</Tag>
        <Tag>{site.courts.countCourts}</Tag>
      </Tags>
    </Control>
  );
}

function LightsTag({ site }) {
  if (site.amenities.hasOutdoorLights) {
    return (
      <Control>
        <Tags addons>
          <Tag color="info">
            <Icon>
              <FontAwesomeIcon icon={faLightbulb} />
            </Icon>
          </Tag>
          <Tag>Lights</Tag>
        </Tags>
      </Control>
    );
  }
  return ('');
}

function WallsTag({ site }) {
  if (site.amenities.hasWall) {
    return (
      <Control>
        <Tags addons>
          <Tag color="info">
            <Icon>
              <FontAwesomeIcon icon={faRug} />
            </Icon>
          </Tag>
          <Tag>
            Hitting Wall
          </Tag>
        </Tags>
      </Control>
    );
  }
  return ('');
}

export default function Site({ site }) {
  return (
    <Column size="one-third">
      <Card className="site" component="div">
        <CardHeader backgroundColor="info-light">
          <CardHeaderTitle>
            {site.name}
          </CardHeaderTitle>
        </CardHeader>
        <CardContent>
          <IconText>
            <Icon color="grey-light">
              <FontAwesomeIcon icon={faLocationDot} />
            </Icon>
            <span>
              {site.address?.street1}
              <br />
              {site.address?.city}
              ,&nbsp;
              {site.address?.state}
              &nbsp;
              {site.address?.zipcode}
            </span>
          </IconText>
          <br />
          <IconText>
            <Icon color="grey-light">
              <FontAwesomeIcon icon={faPhone} />
            </Icon>
            <span><Link to={`tel:${site.phone}`} target="_blank">{site.phone}</Link></span>
          </IconText>
          <br />
          <IconText>
            <Icon color="grey-light">
              <FontAwesomeIcon icon={faGlobe} />
            </Icon>
            <span><Link to={site.website} target="_blank">Website</Link></span>
          </IconText>
        </CardContent>
        <CardFooter>
          <CardFooterItem className="is-left">
            <Container>
              <Field grouped multiline>
                {AccessTag({ site })}
                {CourtsTag({ site })}
                {LightsTag({ site })}
                {WallsTag({ site })}
              </Field>
            </Container>
          </CardFooterItem>
        </CardFooter>
      </Card>
    </Column>
  );
}
