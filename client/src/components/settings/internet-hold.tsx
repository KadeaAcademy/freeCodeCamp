import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HelpBlock,
  FormControl,
  FormGroup,
  ControlLabel
} from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import validator from 'validator/';

import { validGitHubLinkRE, validLinkedInLinkRE } from '../../utils';

import BlockSaveButton from '../helpers/form/block-save-button';

interface InternetFormValues {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  website: string;
}

interface InternetProps extends InternetFormValues {
  t: TFunction;
  updateInternetSettings: (formValues: InternetFormValues) => void;
}

type InternetState = {
  formValues: InternetFormValues;
  originalValues: InternetFormValues;
  isValidLinkedin: boolean;
  focusOnLinkedinField: boolean;
  focusOffLinkedinField: boolean;
  isValidGithubProfile: boolean;
  focusOnGithubField: boolean;
  focusOffGithubField: boolean;
};

const isValidGithubLink = (url: string): boolean => {
  return validator.isURL(url) && validGitHubLinkRE.test(url);
};
const isValidLinkedinLink = (url: string): boolean => {
  return validator.isURL(url) && validLinkedInLinkRE.test(url);
};

class InternetSettings extends Component<InternetProps, InternetState> {
  static displayName: string;
  constructor(props: InternetProps) {
    super(props);
    const {
      githubProfile = '',
      linkedin = '',
      twitter = '',
      website = ''
    } = props;

    this.state = {
      formValues: { githubProfile, linkedin, twitter, website },
      originalValues: { githubProfile, linkedin, twitter, website },
      isValidLinkedin: true,
      focusOnLinkedinField: false,
      focusOffLinkedinField: false,
      isValidGithubProfile: true,
      focusOnGithubField: false,
      focusOffGithubField: false
    };
  }

  componentDidUpdate() {
    const {
      githubProfile = '',
      linkedin = '',
      twitter = '',
      website = ''
    } = this.props;

    const { originalValues } = this.state;

    if (
      githubProfile !== originalValues.githubProfile ||
      linkedin !== originalValues.linkedin ||
      twitter !== originalValues.twitter ||
      website !== originalValues.website
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        originalValues: { githubProfile, linkedin, twitter, website }
      });
    }
    return null;
  }

  getValidationStateFor(url = '', inputName = '') {
    const { focusOffLinkedinField, focusOffGithubField } = this.state;

    if (
      inputName === 'linkedIn' &&
      focusOffLinkedinField &&
      !isValidLinkedinLink(url)
    ) {
      console.log('LinkdIn', isValidLinkedinLink(url));
      return {
        state: 'error',
        message:
          'Lien LinkedIn invalide (exemple valide: https://www.linkedin.com/in/johndoe)'
      };
    }
    if (
      inputName === 'githubProfile' &&
      focusOffGithubField &&
      !isValidGithubLink(url)
    ) {
      console.log('githubProfile', isValidGithubLink(url));
      return {
        state: 'error',
        message:
          'Lien GitHub invalide (exemple valide: https://github.com/user-name)'
      };
    }
    return {
      state: null,
      message: ''
    };
  }

  createHandleChange =
    (key: keyof InternetFormValues) =>
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      if (key === 'linkedin') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidLinkedin: isValidLinkedinLink(value)
        }));
      }
      if (key === 'githubProfile') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidGithubProfile: isValidGithubLink(value)
        }));
      }
    };

  // ------------Linkedin Handler------------

  focusHandlerLinkedin = (/*e: React.FocusEvent<HTMLInputElement>*/) => {
    // const url = (e.target as HTMLInputElement).value.slice(0);
    this.setState({
      // isValidLinkedin: isValidLinkedinLink(url),
      focusOnLinkedinField: true,
      focusOffLinkedinField: false
    });
  };

  blurHandlerLinkedin = (e: React.FocusEvent<HTMLInputElement>) => {
    const url = (e.target as HTMLInputElement).value.slice(0);
    this.setState({
      isValidLinkedin: isValidLinkedinLink(url),
      focusOnLinkedinField: false,
      focusOffLinkedinField: true
    });
  };

  // ------------GithubProfile Handler------------

  focusHandlerGithubProfile = (/*e: React.FocusEvent<HTMLInputElement>*/) => {
    // const value = (e.target as HTMLInputElement).value.slice(0);
    this.setState({
      // isValidGithubProfile: isValidGithubLink(value),
      focusOnGithubField: true,
      focusOffGithubField: false
    });
  };

  blurHandlerGithubProfile = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);
    this.setState({
      isValidGithubProfile: isValidGithubLink(value),
      focusOnGithubField: false,
      focusOffGithubField: true
    });
  };

  isFormPristine = () => {
    const {
      formValues,
      originalValues,
      isValidLinkedin,
      isValidGithubProfile
    } = this.state;
    if (isValidLinkedin === true || isValidGithubProfile === true) {
      return (Object.keys(originalValues) as Array<keyof InternetFormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool);
    }
    return true;
  };

  isFormValid = (): boolean => {
    const { formValues, originalValues } = this.state;
    const valueReducer = (obj: InternetFormValues) => {
      return Object.values(obj).reduce(
        (acc, cur): boolean => (acc ? acc : cur !== ''),
        false
      ) as boolean;
    };

    const formHasValues = valueReducer(formValues);
    const OriginalHasValues = valueReducer(originalValues);

    // check if user had values but wants to delete them all
    if (OriginalHasValues && !formHasValues) return true;

    return (Object.keys(formValues) as Array<keyof InternetFormValues>).reduce(
      (bool: boolean, key: keyof InternetFormValues): boolean => {
        const maybeUrl = formValues[key];
        return maybeUrl ? validator.isURL(maybeUrl) : bool;
      },
      false
    );
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.isFormPristine() && this.isFormValid()) {
      // // Only submit the form if is has changed, and if it is valid
      const { formValues } = this.state;
      const isSocial = {
        isGithub: !!formValues.githubProfile,
        isLinkedIn: !!formValues.linkedin,
        isTwitter: !!formValues.twitter,
        isWebsite: !!formValues.website
      };

      const { updateInternetSettings } = this.props;
      return updateInternetSettings({ ...isSocial, ...formValues });
    }
    return null;
  };

  renderHelpBlock = (validationMessage: string) =>
    validationMessage ? (
      <HelpBlock>{validationMessage}</HelpBlock>
    ) : (
      <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
    );

  renderCheck = (url: string, validation: string | null) =>
    url && validation === 'success' ? (
      <FormControl.Feedback>
        <span>
          <FontAwesomeIcon icon={faCheck} size='1x' />
        </span>
      </FormControl.Feedback>
    ) : null;

  render() {
    const {
      formValues: { githubProfile, linkedin }
    } = this.state;

    const {
      state: githubProfileValidation,
      message: githubProfileValidationMessage
    } = this.getValidationStateFor(githubProfile, 'githubProfile');

    const { state: linkedinValidation, message: linkedinValidationMessage } =
      this.getValidationStateFor(linkedin, 'linkedIn');

    return (
      <>
        <div>
          <form id='internet-presence' onSubmit={this.handleSubmit}>
            <FormGroup
              controlId='internet-linkedin'
              validationState={linkedinValidation}
            >
              <ControlLabel>LinkedIn</ControlLabel>
              <FormControl
                onFocus={this.focusHandlerLinkedin}
                onBlur={this.blurHandlerLinkedin}
                onChange={this.createHandleChange('linkedin')}
                placeholder='https://www.linkedin.com/in/john-doe'
                type='url'
                value={linkedin}
                className='standard-radius-5'
              />
              {this.renderHelpBlock(linkedinValidationMessage)}
            </FormGroup>
            <FormGroup
              controlId='internet-github'
              validationState={githubProfileValidation}
            >
              <ControlLabel>GitHub</ControlLabel>
              <FormControl
                onFocus={this.focusHandlerGithubProfile}
                onBlur={this.blurHandlerGithubProfile}
                onChange={this.createHandleChange('githubProfile')}
                placeholder='https://github.com/john-doe'
                type='url'
                value={githubProfile}
                className='standard-radius-5'
              />
              {this.renderHelpBlock(githubProfileValidationMessage)}
            </FormGroup>
            <BlockSaveButton
              disabled={this.isFormPristine() || !this.isFormValid()}
            />
          </form>
        </div>
      </>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';

export default withTranslation()(InternetSettings);
