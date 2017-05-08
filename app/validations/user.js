import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';
import validatePasswordStrength from '../validators/password-strength';

export default {
  username: [
    validatePresence(true),
    validateLength({ min: 3 })
  ],
  email: validateFormat({ type: 'email' }),
  password: [
    validateLength({ min: 4 }),
    validatePasswordStrength({ strength: 'weak' })
  ],
  passwordConfirmation: validateConfirmation({ on: 'password' })
};
