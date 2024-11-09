import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Block from 'react-bulma-companion/lib/Block';
import Box from 'react-bulma-companion/lib/Box';
import Button from 'react-bulma-companion/lib/Button';
import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Control from 'react-bulma-companion/lib/Control';
import Field from 'react-bulma-companion/lib/Field';
import Help from 'react-bulma-companion/lib/Help';
import Icon from 'react-bulma-companion/lib/Icon';
import Image from 'react-bulma-companion/lib/Image';
import Input from 'react-bulma-companion/lib/Input';
import Label from 'react-bulma-companion/lib/Label';
import Radio from 'react-bulma-companion/lib/Radio';
import Select from 'react-bulma-companion/lib/Select';
import Textarea from 'react-bulma-companion/lib/Textarea';

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { attemptAddMatch } from '_store/thunks/matches';

import useKeyPress from '_hooks/useKeyPress';

export default function AddMatch() {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  const handleAddMatch = () => {
    if (data) {
      dispatch(attemptAddMatch(text));
      setText('');
    }
  };

  useKeyPress('Enter', handleAddMatch);

  const updateDate = e => setDate(e.target.value);

  return (
    <Box className="add-match">
      <Block>
        <Columns>
          <Column size="6">
            <Field>
              <Label htmlFor="date">
                Match Date
              </Label>
              <Control>
                <Input
                  id="date"
                  placeholder="Match Date"
                  value="{date}"
                />
              </Control>
            </Field>
          </Column>
          <Column size="6">
            <Field>
              <Label htmlFor="location">
                Location
              </Label>
              <Control>
                <Input
                  id="location"
                  placeholder="Location"
                  value="{location}"
                />
              </Control>
            </Field>
          </Column>
        </Columns>
      </Block>

      <Block>
        <Columns>
          <Column size="6">
            <Field>
              <Label htmlFor="type">
                Type
              </Label>
              <Control>
                <Radio>
                  <input
                    type="radio"
                    name="type"
                    value="singles"
                  />
                  <span>
                    &nbsp; Singles
                  </span>
                </Radio>
                <br />
                <Radio>
                  <input
                    type="radio"
                    name="type"
                    value="doubles"
                  />
                  <span>
                      &nbsp; Doubles
                  </span>
                </Radio>
              </Control>
            </Field>
          </Column>
          <Column size="6">
            <Field>
              <Label htmlFor="status">
                Status
              </Label>
              <Control>
                <Select
                  id="status"
                  placeholder="Status of Match"
                  value="{status}"
                  fullwidth
                >
                  <Select.Content>
                    <Select.Option value="abandoned">Abandoned</Select.Option>
                    <Select.Option value="bye">Bye</Select.Option>
                    <Select.Option value="completed">Completed</Select.Option>
                    <Select.Option value="defaulted">Defaulted</Select.Option>
                    <Select.Option value="double default">Double Default</Select.Option>
                    <Select.Option value="dead rubber">Dead Rubber</Select.Option>
                    <Select.Option value="in progress">In Progress</Select.Option>
                    <Select.Option value="retired">Retired</Select.Option>
                    <Select.Option value="suspended">Suspended</Select.Option>
                    <Select.Option value="walkover">Walkover</Select.Option>
                  </Select.Content>
                </Select>
              </Control>
            </Field>
          </Column>
        </Columns>
      </Block>

      <Block>
        <Columns>
          <Column size="6">
            <Field>
              <Label htmlFor="side1_player1" className="Label">
                Side 1 - Player 1
              </Label>
              <Control>
                <Input
                  id="side1_player1"
                  placeholder="Side 1 - Player 1"
                  value="{side1_player1}"
                />
              </Control>
            </Field>
          </Column>
          <Column size="6">
            <Field>
              <Label htmlFor="side2_player1" className="Label">
                Side 2 - Player 1
              </Label>
              <Control>
                <Input
                  id="side2_player1"
                  placeholder="Side 2 - Player 1"
                  value="{side2_player1}"
                />
              </Control>
            </Field>
          </Column>
        </Columns>
        <Columns>
          <Column size="6">
            <Field>
              <Label htmlFor="side1_player2" className="Label">
                Side 1 - Player 2
              </Label>
              <Control>
                <Input
                  id="side1_player2"
                  placeholder="Side 1 - Player 2"
                  value="{side1_player2}"
                />
              </Control>
            </Field>
          </Column>
          <Column size="6">
            <Field>
              <Label htmlFor="side2_player2" className="Label">
                Side 2 - Player 2
              </Label>
              <Control>
                <Input
                  id="side2_player2"
                  placeholder="Side 2 - Player 2"
                  value="{side2_player2}"
                />
              </Control>
            </Field>
          </Column>
        </Columns>
      </Block>
      <Block>
        <Columns>
          <Column size="4">
            <Field>
              <Label htmlFor="winningSide">
                Winning Side
              </Label>
              <Control>
                <Radio>
                  <input
                    type="radio"
                    name="winningSide"
                    value="0"
                  />
                  <span>
                      &nbsp; Tied
                  </span>
                </Radio>
                <br />
                <Radio>
                  <input
                    type="radio"
                    name="winningSide"
                    value="1"
                  />
                  <span>
                    &nbsp; Side 1
                  </span>
                </Radio>
                <br />
                <Radio>
                  <input
                    type="radio"
                    name="winningSide"
                    value="2"
                  />
                  <span>
                      &nbsp; Side 2
                  </span>
                </Radio>
              </Control>
            </Field>
          </Column>
          <Column size="8">
            <Field>
              <Label htmlFor="score" className="Label">
                Score
              </Label>
              <Control>
                <Input
                  id="score"
                  placeholder="Match score"
                  value="{score}"
                />
              </Control>
            </Field>
          </Column>
        </Columns>
      </Block>
      <Block>
        <Button color="success" onClick={handleAddMatch} fullwidth>
          Add
        </Button>
      </Block>
    </Box>

  );
}
