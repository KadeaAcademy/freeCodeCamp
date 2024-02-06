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
  fieldOfStudy: string;
  levelOfStudy: string;
};

type EducationProps = {
  fieldOfStudy: string;
  levelOfStudy: string;
  submitNewEducation: (formValues: FormValues) => void;
  t: TFunction;
};

type EducationState = {
  formValues: FormValues;
  originalValues: FormValues;
  formClicked: boolean;
  isValidFieldOfStudy: boolean;
  isFocusFieldOfStudy: boolean;
  isBlurFieldOfStudy: boolean;
  isValidLevelOfStudy: boolean;
};

class EducationSettings extends Component<EducationProps, EducationState> {
  static displayName: string;
  constructor(props: EducationProps) {
    super(props);
    const { fieldOfStudy = '', levelOfStudy = '' } = props;
    const values = {
      fieldOfStudy,
      levelOfStudy
    };
    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      isValidFieldOfStudy: true,
      isFocusFieldOfStudy: false,
      isBlurFieldOfStudy: false,
      isValidLevelOfStudy: true
    };
  }

  componentDidUpdate() {
    const { fieldOfStudy, levelOfStudy } = this.props;
    const { formValues, formClicked } = this.state;
    if (
      formClicked &&
      fieldOfStudy === formValues.fieldOfStudy &&
      levelOfStudy === formValues.levelOfStudy
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      return this.setState({
        originalValues: {
          fieldOfStudy,
          levelOfStudy
        },
        formClicked: false
      });
    }
    return null;
  }

  isFormPristine = () => {
    const { formValues, originalValues, isValidFieldOfStudy } = this.state;
    if (isValidFieldOfStudy === true && formValues.fieldOfStudy.length >= 5) {
      return (Object.keys(originalValues) as Array<keyof FormValues>)
        .map(key => originalValues[key] === formValues[key])
        .every(bool => bool);
    }
    return true;
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { formValues } = this.state;
    const { submitNewEducation } = this.props;
    return this.setState(
      {
        formClicked: true
      },
      () => submitNewEducation(formValues)
    );
  };

  createHandleChange =
    (key: keyof FormValues) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value.slice(0);
      if (key === 'fieldOfStudy') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidFieldOfStudy:
            validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
            validator.isLength(value, { min: 5, max: 255 })
        }));
      }
      if (key === 'levelOfStudy') {
        return this.setState(state => ({
          formValues: {
            ...state.formValues,
            [key]: value
          },
          isValidLevelOfStudy:
            validator.equals(value, `Diplomé d'état`) ||
            validator.equals(value, `Gradué`) ||
            validator.equals(value, `Licencié`) ||
            validator.equals(value, ``)
        }));
      }
    };

  // ------------FieldOfStudy Handler------------

  focusHandlerFieldOfStudy = () => {
    this.setState({
      isFocusFieldOfStudy: true,
      isBlurFieldOfStudy: false
    });
  };

  blurHandlerFieldOfStudy = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.slice(0);

    if (
      validator.isAlpha(value, 'fr-FR', { ignore: ' -' }) &&
      validator.isLength(value, { min: 5, max: 255 })
    ) {
      this.setState({
        isValidFieldOfStudy: true,
        isFocusFieldOfStudy: false,
        isBlurFieldOfStudy: true
      });
    } else {
      this.setState({
        isValidFieldOfStudy: false,
        isFocusFieldOfStudy: false,
        isBlurFieldOfStudy: true
      });
    }
  };

  // ------------Render------------

  render() {
    const {
      formValues: { fieldOfStudy, levelOfStudy },
      isValidFieldOfStudy,
      isFocusFieldOfStudy,
      isBlurFieldOfStudy
    } = this.state;
    return (
      <div className='about-settings'>
        <div>
          <form id='camper-education' onSubmit={this.handleSubmit}>
            <FormGroup controlId='education-fieldOfStudy'>
              <ControlLabel>
                <strong>
                  {"Domaine d'études"}
                  <span className='text-love-light'>*</span>
                </strong>
              </ControlLabel>
              <FormControl
                onFocus={this.focusHandlerFieldOfStudy}
                onBlur={this.blurHandlerFieldOfStudy}
                onChange={this.createHandleChange('fieldOfStudy')}
                type='text'
                value={fieldOfStudy}
                className='standard-radius-5'
              />
              {!isFocusFieldOfStudy &&
                !isBlurFieldOfStudy &&
                isValidFieldOfStudy && (
                  <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
                )}

              {isFocusFieldOfStudy && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
              {isBlurFieldOfStudy && !isValidFieldOfStudy && (
                <>
                  {fieldOfStudy.length > 0 ? (
                    <HelpBlock className='text-danger'>
                      {`Le domaine d'études que vous avez entré n'est pas valide.`}
                    </HelpBlock>
                  ) : (
                    <HelpBlock className='text-danger'>
                      {'Ce champ est requis'}
                    </HelpBlock>
                  )}
                </>
              )}
              {isBlurFieldOfStudy && isValidFieldOfStudy && (
                <HelpBlock className='none-help-block'>{'none'}</HelpBlock>
              )}
            </FormGroup>

            <FormGroup controlId='education-levelOfStudy'>
              <ControlLabel>
                <strong>{"Niveau d'études"}</strong>
              </ControlLabel>
              <FormControl
                componentClass='select'
                onChange={this.createHandleChange('levelOfStudy')}
                value={levelOfStudy.length === 0 ? '' : levelOfStudy}
                className='standard-radius-5'
              >
                <option value=''></option>
                <option value={`Diplomé d'état`}>{`Diplomé d'état`}</option>
                <option value={`Gradué`}>{`Gradué`}</option>
                <option value={`Licencié`}>{`Licencié`}</option>
              </FormControl>
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

EducationSettings.displayName = 'EducationSettings';

export default withTranslation()(EducationSettings);
