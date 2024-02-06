import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import validator from 'validator/';

import { TFunction, withTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import BlockSaveButton from '../helpers/form/block-save-button';
import { postExternalResource } from '../../utils/ajax';
import envData from '../../../../config/env.json';
const { lemlistUrl, lemlistToken } = envData;

type FormValues = {
  name: string;
  location: string;
  gender: string;
  phone: string;
  whatsapp: string;
  codeTime: string;
  about: string;
};

type AboutProps = {
  about: string;
  location: string;
  name: string;
  gender: string;
  phone: string;
  whatsapp: string;
  codeTime: string;
  points: number;
  submitNewAbout: (formValues: FormValues) => void;
  t: TFunction;
  username: string;
  email: string;
};

type AboutState = {
  formValues: FormValues;
  originalValues: FormValues;
  formClicked: boolean;
  isValidName: boolean;
  isFocusName: boolean;
  isBlurName: boolean;
  isValidLocation: boolean;
  isFocusLocation: boolean;
  isBlurLocation: boolean;
  isValidGender: boolean;
  isValidCodeTime: boolean;
  isValidAbout: boolean;
  isFocusAbout: boolean;
  isBlurAbout: boolean;
  isValidPhone: boolean;
  isFocusPhone: boolean;
  isBlurPhone: boolean;
  isValidWhatsapp: boolean;
};
interface DataLemlist {
  email: string;
  firstName: string;
  // Other data properties
}

class AboutSettings extends Component<AboutProps, AboutState> {
  validationImage: HTMLImageElement;
  static displayName: string;
  constructor(props: AboutProps) {
    super(props);
    this.validationImage = new Image();
    const {
      name = '',
      location = '',
      gender = '',
      phone = '',
      whatsapp = '',
      codeTime = '',
      about = '',
      username = '',
      email = ''
    } = props;

    const values = {
      name,
      location,
      gender,
      phone,
      whatsapp,
      codeTime,
      about,
      username,
      email
    };

    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      isValidName: true,
      isFocusName: false,
      isBlurName: false,
      isValidLocation: true,
      isFocusLocation: false,
      isBlurLocation: false,
      isValidGender: true,
      isValidCodeTime: true,
      isValidAbout: true,
      isFocusAbout: false,
      isBlurAbout: false,
      isValidPhone: true,
      isFocusPhone: false,
      isBlurPhone: false,
      isValidWhatsapp: true
    };

    // this.focusHandlerName = this.focusHandlerName.bind(this);
    // this.blurHandlerName = this.blurHandlerName.bind(this);
  }

  lemlistSubmit = async (data: DataLemlist) => {
    const url = `${lemlistUrl}/leads/${data.email}?access_token=${lemlistToken}`;

    return await postExternalResource(url, data);
  };

  componentDidUpdate() {
    const { name, location, gender, codeTime, about, phone, whatsapp } =
      this.props;
    const { formValues, formClicked } = this.state;
    if (
      formClicked &&
      name === formValues.name &&
      location === formValues.location &&
      gender === formValues.gender &&
      phone === formValues.phone &&
      whatsapp === formValues.whatsapp &&
      codeTime === formValues.codeTime &&
      about === formValues.about
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        originalValues: {
          name,
          location,
          gender,
          phone,
          whatsapp,
          codeTime,
          about
        },
        formClicked: false
      });
    }
    return null;
  }

  isFormPristine = () => {
    const {
      formValues,
      originalValues,
      isValidName,
      isValidPhone,
      isValidWhatsapp,
      isValidLocation
    } = this.state;
    if (
      isValidName === true &&
      formValues.name.length >= 5 &&
      formValues.phone.length >= 10 &&
      isValidPhone &&
      isValidWhatsapp &&
      isValidLocation
    ) {
      return (Object.keys(originalValues) as Array<keyof FormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool);
    }
    return true;
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { formValues } = this.state;
    const { submitNewAbout } = this.props;
    const data = {
      email: this.props.email,
      firstName: this.props.name
    };
    void this.lemlistSubmit(data);
    return this.setState({ formClicked: true }, () =>
      submitNewAbout(formValues)
    );
  };

  createHandleChange =
    (key: keyof FormValues) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      const phoneReg = /^(243|\+243|0|00243)([0-9]{9})$/;
      if (key === 'name') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidName:
            validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
            validator.isLength(value, { min: 5, max: 255 })
        }));
      }
      if (key === 'location') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidLocation:
            value === 'Kinshasa' || value === 'Goma' || value === 'Lubumbashi'
              ? true
              : false
        }));
      }
      if (key === 'phone') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidPhone: phoneReg.test(value)
        }));
      }
      if (key === 'whatsapp') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidWhatsapp: phoneReg.test(value)
        }));
      }
      if (key === 'gender') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidGender:
            validator.equals(value, 'Homme') ||
            validator.equals(value, 'Femme') ||
            validator.equals(value, '')
        }));
      }
      if (key === 'codeTime') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidCodeTime: validator.isDate(value, {
            format: 'YYYY-MM-DD',
            strictMode: true
          })
        }));
      }
      if (key === 'about') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidAbout: validator.isLength(value, { max: 300 })
        }));
      }
    };

  // ------------Name Handler------------

  focusHandlerName = () => {
    this.setState({
      isFocusName: true,
      isBlurName: false
    });
  };

  blurHandlerName = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0).trim();

    if (
      validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
      validator.isLength(value, { min: 5, max: 255 })
    ) {
      this.setState({
        isValidName: true,
        isFocusName: false,
        isBlurName: true
      });
    } else {
      this.setState({
        isValidName: false,
        isFocusName: false,
        isBlurName: true
      });
    }
  };

  focusHandelerPhone = () => {
    this.setState({
      isFocusPhone: true,
      isBlurPhone: false
    });
  };

  blurHandlerPhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0).trim();

    if (!validator.isEmpty(value)) {
      this.setState({
        isValidName: true,
        isFocusName: false,
        isBlurName: true
      });
    } else {
      this.setState({
        isValidName: false,
        isFocusName: false,
        isBlurName: true
      });
    }
  };

  // ------------Location Handler------------

  focusHandlerLocation = () => {
    this.setState({
      isFocusLocation: true,
      isBlurLocation: false
    });
  };

  blurHandlerLocation = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);

    if (!validator.isEmpty(value)) {
      this.setState({
        isValidLocation: true,
        isFocusLocation: false,
        isBlurLocation: true
      });
    } else {
      this.setState({
        isValidLocation: false,
        isFocusLocation: false,
        isBlurLocation: true
      });
    }
  };

  // ------------About Handler------------

  focusHandlerAbout = () => {
    this.setState({
      isFocusAbout: true,
      isBlurAbout: false
    });
  };

  blurHandlerAbout = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);

    if (validator.isLength(value, { max: 300 })) {
      this.setState({
        isValidAbout: true,
        isFocusAbout: false,
        isBlurAbout: true
      });
    } else {
      this.setState({
        isValidAbout: false,
        isFocusAbout: false,
        isBlurAbout: true
      });
    }
  };

  // ------------Render------------

  render() {
    const {
      formValues: { name, location, gender, codeTime, phone, whatsapp, about },
      isValidName,
      isValidPhone,
      isValidWhatsapp,
      isFocusName,
      isBlurName
    } = this.state;

    return (
      <div className='about-settings'>
        <div>
          <form id='camper-identity' onSubmit={this.handleSubmit}>
            <FormGroup controlId='about-name'>
              <ControlLabel>
                <strong>
                  {'Nom complet'}
                  <span className='text-love-light'>*</span>
                </strong>
              </ControlLabel>
              <FormControl
                onFocus={this.focusHandlerName}
                onBlur={this.blurHandlerName}
                onChange={this.createHandleChange('name')}
                type='text'
                value={name}
                placeholder='John Doe'
                className='standard-radius-5'
              />

              {!isFocusName && !isBlurName && isValidName && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}

              {isFocusName && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isBlurName && !isValidName && (
                <>
                  {name.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Le nom que vous avez entré n'est pas valide.`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='text-danger'>
                      {'Ce champ est requis'}
                    </HelpBlock>
                  )}
                </>
              )}
              {isBlurName && isValidName && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>

            <FormGroup controlId='about-location'>
              <ControlLabel>
                <strong>{'Ville'}</strong>
                <span className='text-love-light'>*</span>
              </ControlLabel>
              <FormControl
                onFocus={this.focusHandlerLocation}
                onBlur={this.blurHandlerLocation}
                componentClass='select'
                onChange={this.createHandleChange('location')}
                value={
                  location === 'Kinshasa' ||
                  location === 'Goma' ||
                  location === 'Lubumbashi'
                    ? location
                    : ''
                }
                className='standard-radius-5'
              >
                {' '}
                <option value=''></option>
                <option value='Kinshasa'>Kinshasa</option>
                <option value='Goma'>Goma</option>
                <option value='Lubumbashi'>Lubumbashi</option>
              </FormControl>

              <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
            </FormGroup>

            <FormGroup controlId='about-genre'>
              <ControlLabel>
                <strong>{'Genre'}</strong>
              </ControlLabel>
              <FormControl
                componentClass='select'
                onChange={this.createHandleChange('gender')}
                value={gender.length === 0 ? '' : gender}
                className='standard-radius-5'
              >
                <option value=''></option>
                <option value='Femme'>Femme</option>
                <option value='Homme'>Homme</option>
              </FormControl>
              <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
            </FormGroup>

            <FormGroup controlId='about-phone'>
              <ControlLabel>
                <strong>{'Numéro de téléphone'}</strong>
                <span className='text-love-light'>*</span>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('phone')}
                placeholder='+243899991122'
                type='text'
                value={phone}
                className='standard-radius-5'
              ></FormControl>
              {isValidPhone ? (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              ) : (
                <HelpBlock className='text-danger'>
                  {`Le numéro que vous avez entré n'est pas valide.`}
                </HelpBlock>
              )}
            </FormGroup>

            <FormGroup controlId='about-whatsapp'>
              <ControlLabel>
                <strong>{'Numéro Whatsapp'}</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('whatsapp')}
                placeholder='+243899991122'
                type='text'
                value={whatsapp}
              ></FormControl>
              {isValidWhatsapp ? (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              ) : (
                <HelpBlock className='text-danger'>
                  {`Le numéro que vous avez entré n'est pas valide.`}
                </HelpBlock>
              )}
            </FormGroup>

            <FormGroup controlId='about-code'>
              <ControlLabel>
                <strong>{'Depuis quand codez-vous?'}</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('codeTime')}
                type='date'
                value={codeTime}
                className='standard-radius-5'
              />
              <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
            </FormGroup>

            <FormGroup controlId='about-about'>
              <ControlLabel>
                <strong>{'A propos'}</strong>
              </ControlLabel>
              <FormControl
                componentClass='textarea'
                onFocus={this.focusHandlerAbout}
                onBlur={this.blurHandlerAbout}
                onChange={this.createHandleChange('about')}
                value={about}
                className='standard-radius-5'
              />
              <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
            </FormGroup>
            <BlockSaveButton disabled={this.isFormPristine()} />
          </form>
        </div>
        <Spacer />
      </div>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';

export default withTranslation()(AboutSettings);
