import {
  HelpBlock,
  FormControl,
  FormGroup,
  ControlLabel
} from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
// import validator from 'validator/';

import { TFunction, withTranslation } from 'react-i18next';
// import {
//   validGitHubLinkRE,
//   validLinkedInLinkRE,
//   validMyLinkdIn
// } from '../../utils';
import BlockSaveButton from '../helpers/form/block-save-button';

type FormValues = {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  website: string;
};

type InternetProps = {
  githubProfile: string;
  linkedin: string;
  twitter: string;
  website: string;
  t: TFunction;
  updateInternetSettings: (formValues: FormValues) => void;
};

type InternetState = {
  formValues: FormValues;
  originalValues: FormValues;
  formClicked: boolean;
  isValidLinkedin: boolean;
  isFocusLinkedin: boolean;
  isBlurLinkedin: boolean;
  isValidGithubProfile: boolean;
  isFocusGithub: boolean;
  isBlurGithub: boolean;
};

// const isValidGithubLink = (url: string): boolean => {
//   return validator.isURL(url) && validGitHubLinkRE.test(url);
// };
// const isValidLinkedinLink = (url: string): boolean => {
//   return validator.isURL(url) && validLinkedInLinkRE.test(url);
// };

const isValidGithubLink = (url: string): boolean => {
  const validGitHubLinkRegex =
    /^(((https:\/\/|http:\/\/|))(www.|)github.com\/)([\w-]{3,})/gi;
  const isValidGitHubLink = validGitHubLinkRegex.test(url);
  return isValidGitHubLink;
};
const isValidLinkedinLink = (url: string): boolean => {
  const validLinkedInLinkRegex =
    /^(((https:\/\/|http:\/\/|))(www.|)linkedin.com\/in\/)([\w-]{3,})/gi;
  const isValidLinkedin = validLinkedInLinkRegex.test(url);
  return isValidLinkedin;
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

    const values = {
      githubProfile,
      linkedin,
      twitter,
      website
    };

    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      isValidLinkedin: true,
      isFocusLinkedin: false,
      isBlurLinkedin: false,
      isValidGithubProfile: true,
      isFocusGithub: false,
      isBlurGithub: false
    };
  }

  componentDidUpdate() {
    const { githubProfile, linkedin, twitter, website } = this.props;
    const { formValues, formClicked } = this.state;

    if (
      formClicked &&
      githubProfile === formValues.githubProfile &&
      linkedin === formValues.linkedin &&
      twitter === formValues.twitter &&
      website === formValues.website
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        originalValues: { githubProfile, linkedin, twitter, website },
        formClicked: false
      });
    }
    return null;
  }

  isFormPristine = () => {
    const {
      formValues,
      originalValues,
      isValidLinkedin,
      isValidGithubProfile
    } = this.state;
    if (isValidLinkedin || isValidGithubProfile) {
      return (Object.keys(originalValues) as Array<keyof FormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool);
    }
    return true;
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { formValues, isValidLinkedin, isValidGithubProfile } = this.state;
    const isSocial = {
      isGithub: !!formValues.githubProfile,
      isLinkedIn: !!formValues.linkedin,
      isTwitter: !!formValues.twitter,
      isWebsite: !!formValues.website
    };
    const { updateInternetSettings } = this.props;
    if (isValidLinkedin && isValidGithubProfile) {
      return this.setState({ formClicked: true }, () =>
        updateInternetSettings({ ...isSocial, ...formValues })
      );
    }
  };

  createHandleChange =
    (key: keyof FormValues) => (e: React.FormEvent<HTMLInputElement>) => {
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

  focusHandlerLinkedin = () => {
    this.setState({
      isFocusLinkedin: true,
      isBlurLinkedin: false
    });
  };

  blurHandlerLinkedin = (e: React.FocusEvent<HTMLInputElement>) => {
    const url = (e.target as HTMLInputElement).value.slice(0);

    if (isValidLinkedinLink(url)) {
      this.setState({
        isValidLinkedin: true,
        isFocusLinkedin: false,
        isBlurLinkedin: true
      });
    } else {
      this.setState({
        isValidLinkedin: false,
        isFocusLinkedin: false,
        isBlurLinkedin: true
      });
    }
  };

  // ------------GithubProfile Handler------------

  focusHandlerGithubProfile = () => {
    this.setState({
      isFocusGithub: true,
      isBlurGithub: false
    });
  };

  blurHandlerGithubProfile = (e: React.FocusEvent<HTMLInputElement>) => {
    const url = (e.target as HTMLInputElement).value.slice(0);
    if (isValidGithubLink(url)) {
      this.setState({
        isValidGithubProfile: true,
        isFocusGithub: false,
        isBlurGithub: true
      });
    } else {
      this.setState({
        isValidGithubProfile: false,
        isFocusGithub: false,
        isBlurGithub: true
      });
    }
  };

  // ------------Render------------

  render() {
    const {
      formValues: { githubProfile, linkedin },
      isValidLinkedin,
      isFocusLinkedin,
      isBlurLinkedin,
      isValidGithubProfile,
      isFocusGithub,
      isBlurGithub
    } = this.state;

    return (
      <>
        <div>
          <form id='internet-presence' onSubmit={this.handleSubmit}>
            <FormGroup controlId='internet-linkedin'>
              <ControlLabel>LinkedIn</ControlLabel>
              <FormControl
                onFocus={this.focusHandlerLinkedin}
                onBlur={this.blurHandlerLinkedin}
                onChange={this.createHandleChange('linkedin')}
                placeholder='https://www.linkedin.com/in/john-doe'
                type='url'
                value={linkedin}
                className='standard-radius-5'
                name='linkedin'
              />
              {!isFocusLinkedin && !isBlurLinkedin && isValidLinkedin && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isFocusLinkedin && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isBlurLinkedin && !isValidLinkedin && (
                <>
                  {linkedin.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Lien LinkedIn invalide (exemple valide: https://www.linkedin.com/in/johndoe)`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
                  )}
                </>
              )}
              {isBlurLinkedin && isValidLinkedin && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>
            <FormGroup controlId='internet-github'>
              <ControlLabel>GitHub</ControlLabel>
              <FormControl
                onFocus={this.focusHandlerGithubProfile}
                onBlur={this.blurHandlerGithubProfile}
                onChange={this.createHandleChange('githubProfile')}
                placeholder='https://github.com/john-doe'
                type='url'
                value={githubProfile}
                className='standard-radius-5'
                name='githubProfile'
              />
              {!isFocusGithub && !isBlurGithub && isValidGithubProfile && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isFocusGithub && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isBlurGithub && !isValidGithubProfile && (
                <>
                  {githubProfile.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Lien GitHub invalide (exemple valide: https://github.com/user-name)`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
                  )}
                </>
              )}
              {isBlurGithub && isValidGithubProfile && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>
            <BlockSaveButton disabled={this.isFormPristine()} />
          </form>
        </div>
      </>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';

export default withTranslation()(InternetSettings);
