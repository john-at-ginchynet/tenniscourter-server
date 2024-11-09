import React, { useCallback, useEffect, useState } from 'react';

import R from 'ramda';
import { Block } from 'react-bulma-companion';
import { useDispatch, useSelector } from 'react-redux';

import { faCakeCandles } from '@fortawesome/free-solid-svg-icons/faCakeCandles';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import Textarea from 'react-bulma-companion/lib/Textarea';
import Title from 'react-bulma-companion/lib/Title';

import { attemptGetUser, attemptUpdateUser } from '_store/thunks/user';

import { validateName } from '_utils/validation';

export default function GeneralProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [name, setName] = useState(user.name || '');
  const [bio, setBio] = useState(user.bio || '');
  const [profilePic, setProfilePic] = useState(user.profilePic || '');
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth || '');
  const [gender, setGender] = useState(user.gender || '');
  const [zipcode, setZipcode] = useState(user.zipcode || '');
  const [handedness, setHandedness] = useState(user.handedness || '');
  const [backhand, setBackhand] = useState(user.backhand || '');
  const [ntrp, setNtrp] = useState(user.ntrp || '');
  const [utr, setUtr] = useState(user.utr || '');
  const [wtn, setWtn] = useState(user.wtn || '');

  const [nameEdited, setNameEdited] = useState(false);
  const [bioEdited, setBioEdited] = useState(false);
  const [profilePicEdited, setProfilePicEdited] = useState(false);
  const [dateOfBirthEdited, setDateOfBirthEdited] = useState(false);
  const [genderEdited, setGenderEdited] = useState(false);
  const [zipcodeEdited, setZipcodeEdited] = useState(false);
  const [handednessEdited, setHandednessEdited] = useState(false);
  const [backhandEdited, setBackhandEdited] = useState(false);
  const [ntrpEdited, setNtrpEdited] = useState(false);
  const [utrEdited, setUtrEdited] = useState(false);
  const [wtnEdited, setWtnEdited] = useState(false);

  const resetState = useCallback(() => {
    setName(user.name || '');
    setBio(user.bio || '');
    setProfilePic(user.profilePic || '');
    setDateOfBirth(user.dateOfBirth || '');
    setGender(user.gender || '');
    setZipcode(user.zipcode || '');
    setHandedness(user.handedness || '');
    setBackhand(user.backhand || '');
    setNtrp(user.ntrp || '');
    setUtr(user.utr || '');
    setWtn(user.wtn || '');

    setNameEdited(false);
    setBioEdited(false);
    setProfilePicEdited(false);
    setDateOfBirthEdited(false);
    setGenderEdited(false);
    setZipcodeEdited(false);
    setHandednessEdited(false);
    setBackhandEdited(false);
    setNtrpEdited(false);
    setUtrEdited(false);
    setWtnEdited(false);
  }, [user]);

  useEffect(() => {
    resetState();
  }, [user, resetState]);

  const updateName = e => {
    if (validateName(e.target.value)) {
      setName(e.target.value);
      setNameEdited(true);
    }
  };

  const updateBio = e => {
    setBio(e.target.value);
    setBioEdited(true);
  };

  const updateProfilePic = e => {
    setProfilePic(e.target.value);
    setProfilePicEdited(true);
  };

  const updateDateOfBirth = e => {
    setDateOfBirth(e.target.value);
    setDateOfBirthEdited(true);
  };

  const updateGender = e => {
    setGender(e.target.value);
    setGenderEdited(true);
  };

  const updateZipcode = e => {
    setZipcode(e.target.value);
    setZipcodeEdited(true);
  };

  const updateHandedness = e => {
    setHandedness(e.target.value);
    setHandednessEdited(true);
  };

  const updateBackhand = e => {
    setBackhand(e.target.value);
    setBackhandEdited(true);
  };

  const updateNtrp = e => {
    setNtrp(e.target.value);
    setNtrpEdited(true);
  };

  const updateUtr = e => {
    setUtr(e.target.value);
    setUtrEdited(true);
  };

  const updateWtn = e => {
    setWtn(e.target.value);
    setWtnEdited(true);
  };

  const refresh = () => dispatch(attemptGetUser())
    .then(resetState)
    .catch(R.identity);

  const save = () => {
    const updatedUser = {};

    if (nameEdited) { updatedUser.name = name; }
    if (profilePicEdited) { updatedUser.profilePic = profilePic; }
    if (bioEdited) { updatedUser.bio = bio; }
    if (dateOfBirthEdited) { updatedUser.dateOfBirth = dateOfBirth; }
    if (genderEdited) { updatedUser.gender = gender; }
    if (zipcodeEdited) { updatedUser.zipcode = zipcode; }
    if (handednessEdited) { updatedUser.handedness = handedness; }
    if (backhandEdited) { updatedUser.backhand = backhand; }
    if (ntrpEdited) { updatedUser.ntrp = ntrp; }
    if (utrEdited) { updatedUser.utr = utr; }
    if (wtnEdited) { updatedUser.wtn = wtn; }

    if (!R.isEmpty(updatedUser)) {
      dispatch(attemptUpdateUser(updatedUser))
        .catch(R.identity);
    }
  };

  const charactersRemaining = 240 - bio.length;
  const edited = nameEdited || bioEdited || profilePicEdited || dateOfBirthEdited
                || genderEdited || zipcodeEdited || handednessEdited || backhandEdited
                || ntrpEdited || utrEdited || wtnEdited;

  return (
    <Box className="general-profile">
      <Icon size="medium" pull="right" onClick={refresh} onKeyPress={refresh}>
        <FontAwesomeIcon icon={faRotate} size="lg" />
      </Icon>
      <Title size="3">
        {user.usernameCase}
      </Title>
      <hr className="separator" />
      <Columns>
        <Column size="4">
          <Block>
            <Image>
              <Image.Content
                className="profile-img"
                src={profilePic || '/images/default-profile.png'}
                alt="Profile"
              />
            </Image>
            <Field>
              <Label htmlFor="profile-pic-url">
                Picture URL
              </Label>
              <Control>
                <Input
                  id="profile-pic-url"
                  placeholder="Picture URL"
                  value={profilePic}
                  onChange={updateProfilePic}
                />
              </Control>
            </Field>
          </Block>
          <Block>
            <Field>
              <Label htmlFor="bio">
                Bio
              </Label>
              <Control>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself."
                  value={bio}
                  maxLength={240}
                  onChange={updateBio}
                />
              </Control>
              <Help>
                {`Characters remaining: ${charactersRemaining}`}
              </Help>
            </Field>
          </Block>
        </Column>
        <Column size="8">
          <Field>
            <Title size="3">
              General
            </Title>
          </Field>
          <Columns>
            <Column size="12">
              <Field>
                <Label htmlFor="name" className="Label">
                  First Name
                </Label>
                <Control>
                  <Input
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={updateName}
                  />
                </Control>
              </Field>
            </Column>
          </Columns>
          <Columns>
            <Column size="6">
              <Field>
                <Label htmlFor="date-of-birth">
                  Date of Birth
                </Label>
                <Control iconsLeft>
                  <Input
                    id="date-of-birth"
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChange={updateDateOfBirth}
                  />
                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faCakeCandles} />
                  </Icon>
                </Control>
              </Field>
            </Column>
            <Column size="6">
              <Field>
                <Label htmlFor="zipcode">
                  ZIP Code
                </Label>
                <Control iconsLeft>
                  <Input
                    id="zipcode"
                    placeholder="ZIP Code"
                    value={zipcode}
                    onChange={updateZipcode}
                  />
                  <Icon size="small" align="left">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </Icon>
                </Control>
              </Field>
            </Column>
          </Columns>
          <Columns>
            <Column size="6">
              <Field>
                <Label>
                  Gender
                </Label>
                <Control>
                  <Radio>
                    <input
                      type="radio"
                      name="gender"
                      value="M"
                      checked={gender === 'M'}
                      onChange={updateGender}
                    />
                    <span> Male</span>
                  </Radio>
                  <br />
                  <Radio>
                    <input
                      type="radio"
                      name="gender"
                      value="F"
                      checked={gender === 'F'}
                      onChange={updateGender}
                    />
                    <span> Female</span>
                  </Radio>
                </Control>
              </Field>
            </Column>
          </Columns>

          <hr className="separator" />

          <Field>
            <Title size="3">
              Tennis Profile
            </Title>
          </Field>

          <Columns>
            <Column size="6">
              <Field>
                <Label>
                  Handedness
                </Label>
                <Control>
                  <Radio>
                    <input
                      type="radio"
                      name="handedness"
                      value="left"
                      checked={handedness === 'left'}
                      onChange={updateHandedness}
                    />
                    <span> Left</span>
                  </Radio>
                  <br />
                  <Radio>
                    <input
                      type="radio"
                      name="handedness"
                      value="right"
                      checked={handedness === 'right'}
                      onChange={updateHandedness}
                    />
                    <span> Right</span>
                  </Radio>
                </Control>
              </Field>
            </Column>
            <Column size="6">
              <Field>
                <Label>
                  Backhand
                </Label>
                <Control>
                  <Radio>
                    <input
                      type="radio"
                      name="backhand"
                      value="one-handed"
                      checked={backhand === 'one-handed'}
                      onChange={updateBackhand}
                    />
                    <span> One-handed</span>
                  </Radio>
                  <br />
                  <Radio>
                    <input
                      type="radio"
                      name="backhand"
                      value="two-handed"
                      checked={backhand === 'two-handed'}
                      onChange={updateBackhand}
                    />
                    <span> Two-handed</span>
                  </Radio>
                </Control>
              </Field>
            </Column>
          </Columns>

          <Block>
            <Field>
              <Title size="4">
                Ratings
              </Title>
            </Field>

            <Columns>
              <Column size="4">
                <Field>
                  <Label htmlFor="ntrp">
                    NTRP
                  </Label>
                  <Control>
                    <Input
                      id="ntrp"
                      placeholder="NTRP"
                      value={ntrp}
                      onChange={updateNtrp}
                    />
                  </Control>
                </Field>
              </Column>
              <Column size="4">
                <Field>
                  <Label htmlFor="utr">
                    UTR
                  </Label>
                  <Control>
                    <Input
                      id="utr"
                      placeholder="UTR"
                      value={utr}
                      onChange={updateUtr}
                    />
                  </Control>
                </Field>
              </Column>
              <Column size="4">
                <Field>
                  <Label htmlFor="wtn">
                    WTN
                  </Label>
                  <Control>
                    <Input
                      id="wtn"
                      placeholder="WTN"
                      value={wtn}
                      onChange={updateWtn}
                    />
                  </Control>
                </Field>
              </Column>
            </Columns>
          </Block>

        </Column>
      </Columns>
      <hr className="separator" />
      <Button color="success" onClick={save} disabled={!edited}>
        Save
      </Button>
    </Box>
  );
}
