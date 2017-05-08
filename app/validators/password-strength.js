/*
  Strong:
    Ensure string has at least:
      * one uppercase letter.
      * one special case letter.
      * one number.
      * more than one lowercase letter.

  Medium:
    Ensure string has at least:
      * one uppercase letter.
      * one special case letter.
      * one number.
      * one lowercase letter.

  Weak:
    Ensure string has at least:
      * one number or special case letter.
      * one lowercase letter.
*/

export const strong = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/;
export const medium = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;
export const weak = /^(?=.*[0-9|!@#$&*])(?=.*[a-z])/;

const strengths = {strong, medium, weak};

export default function validatePasswordStrength(options = {}) {
  const strength = options.strength || 'strong';
  return (key, newValue/*, oldValue, changes, content */) => {
    if (newValue && strengths[strength].exec(newValue)) {
      return true;
    }
    return "Password is not valid";
  };
}
