import {
  HelpBlock,
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';
import React, { Component } from 'react';
import validator from 'validator/';

import { TFunction, withTranslation } from 'react-i18next';
import { Spacer } from '../helpers';
import BlockSaveButton from '../helpers/form/block-save-button';

type FormValues = {
  employedWhere: string;
  sinceWhen: string;
  position: string;
};

type WorkExperienceProps = {
  employedWhere: string;
  sinceWhen: string;
  position: string;
  submitNewWorkExperience: (formValues: FormValues) => void;
  t: TFunction;
};

type WorkExperienceState = {
  formValues: FormValues;
  originalValues: FormValues;
  formClicked: boolean;
  isValidEmployedWhere: boolean;
  isFocusEmployedWhere: boolean;
  isBlurEmployedWhere: boolean;
  isValidSinceWhen: boolean;
  isValidPosition: boolean;
  isFocusPosition: boolean;
  isBlurPosition: boolean;
};

class WorkExperienceSettings extends Component<
  WorkExperienceProps,
  WorkExperienceState
> {
  static displayName: string;
  constructor(props: WorkExperienceProps) {
    super(props);
    const { employedWhere = '', sinceWhen = '', position = '' } = props;
    const values = {
      employedWhere,
      sinceWhen,
      position
    };
    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      isValidEmployedWhere: true,
      isFocusEmployedWhere: false,
      isBlurEmployedWhere: false,
      isValidSinceWhen: true,
      isValidPosition: true,
      isFocusPosition: false,
      isBlurPosition: false
    };
  }

  componentDidUpdate() {
    const { employedWhere, sinceWhen, position } = this.props;
    const { formValues, formClicked } = this.state;
    if (
      formClicked &&
      employedWhere === formValues.employedWhere &&
      sinceWhen === formValues.sinceWhen &&
      position === formValues.position
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        originalValues: {
          employedWhere,
          sinceWhen,
          position
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
      isValidEmployedWhere,
      // isValidSinceWhen,
      isValidPosition
    } = this.state;

    if (
      isValidEmployedWhere === true &&
      formValues.employedWhere.length >= 1 &&
      isValidPosition === true &&
      formValues.position.length >= 2
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
    const { submitNewWorkExperience } = this.props;
    return this.setState(
      {
        formClicked: true
      },
      () => submitNewWorkExperience(formValues)
    );
  };

  createHandleChange =
    (key: keyof FormValues) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      if (key === 'employedWhere') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidEmployedWhere:
            validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
            validator.isLength(value, { min: 1, max: 255 })
        }));
      }
      if (key === 'sinceWhen') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidSinceWhen: validator.isDate(value, {
            format: 'YYYY-MM-DD',
            strictMode: true
          })
        }));
      }
      if (key === 'position') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidPosition:
            validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
            validator.isLength(value, { min: 2, max: 255 })
        }));
      }
    };

  // ------------EmployedWhere Handler------------

  focusHandlerEmployedWhere = () => {
    this.setState({
      isFocusEmployedWhere: true,
      isBlurEmployedWhere: false
    });
  };

  blurHandlerEmployedWhere = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);

    if (
      validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
      validator.isLength(value, { min: 1, max: 255 })
    ) {
      this.setState({
        isValidEmployedWhere: true,
        isFocusEmployedWhere: false,
        isBlurEmployedWhere: true
      });
    } else {
      this.setState({
        isValidEmployedWhere: false,
        isFocusEmployedWhere: false,
        isBlurEmployedWhere: true
      });
    }
  };

  // ------------Position Handler------------

  focusHandlerPosition = () => {
    this.setState({
      isFocusPosition: true,
      isBlurPosition: false
    });
  };

  blurHandlerPosition = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);

    if (
      validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
      validator.isLength(value, { min: 2, max: 255 })
    ) {
      this.setState({
        isValidPosition: true,
        isFocusPosition: false,
        isBlurPosition: true
      });
    } else {
      this.setState({
        isValidPosition: false,
        isFocusPosition: false,
        isBlurPosition: true
      });
    }
  };

  // ------------Render------------

  render() {
    const {
      formValues: { employedWhere, sinceWhen, position },
      isValidEmployedWhere,
      isFocusEmployedWhere,
      isBlurEmployedWhere,
      isValidPosition,
      isFocusPosition,
      isBlurPosition
    } = this.state;
    return (
      <div className='about-settings'>
        <div>
          <form id='camper-work-experience' onSubmit={this.handleSubmit}>
            <FormGroup controlId='work-experience-employedWhere'>
              <ControlLabel>
                <strong>
                  {'Employé où'}
                  <span className='text-love-light'>*</span>
                </strong>
              </ControlLabel>
              <FormControl
                onFocus={this.focusHandlerEmployedWhere}
                onBlur={this.blurHandlerEmployedWhere}
                onChange={this.createHandleChange('employedWhere')}
                type='text'
                value={employedWhere}
                className='standard-radius-5'
              />

              {!isFocusEmployedWhere &&
                !isBlurEmployedWhere &&
                isValidEmployedWhere && (
                  <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
                )}

              {isFocusEmployedWhere && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}

              {isBlurEmployedWhere && !isValidEmployedWhere && (
                <>
                  {employedWhere.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Le nom de l'entreprise que vous avez entré n'est pas valide.`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='text-danger'>
                      {'Ce champ est requis'}
                    </HelpBlock>
                  )}
                </>
              )}

              {isBlurEmployedWhere && isValidEmployedWhere && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>

            <FormGroup controlId='work-experience-sinceWhen'>
              <ControlLabel>
                <strong>{'Depuis quand'}</strong>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleChange('sinceWhen')}
                type='date'
                value={sinceWhen}
                className='standard-radius-5'
              />
              <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
            </FormGroup>

            <FormGroup controlId='work-experience-position'>
              <ControlLabel>
                <strong>
                  {'Poste'}
                  <span className='text-love-light'>*</span>
                </strong>
              </ControlLabel>
              <FormControl
                onFocus={this.focusHandlerPosition}
                onBlur={this.blurHandlerPosition}
                onChange={this.createHandleChange('position')}
                type='text'
                value={position}
                className='standard-radius-5'
              />

              {!isFocusPosition && !isBlurPosition && isValidPosition && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}

              {isFocusPosition && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}

              {isBlurPosition && !isValidPosition && (
                <>
                  {position.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Le nom du poste que vous avez entré n'est pas valide.`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='text-danger'>
                      {'Ce champ est requis'}
                    </HelpBlock>
                  )}
                </>
              )}

              {isBlurPosition && isValidPosition && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>
            <BlockSaveButton disabled={this.isFormPristine()} />
          </form>
        </div>
        <Spacer />
      </div>
    );
  }
}

WorkExperienceSettings.displayName = 'WorkExperienceSettings';

export default withTranslation()(WorkExperienceSettings);
