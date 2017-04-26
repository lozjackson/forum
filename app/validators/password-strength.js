/*
  Ensure string has at least:
    * one uppercase letter.
    * one special case letter.
    * one number.
    * more than one lowercase letter.
*/

const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/;

export default function validatePasswordStrength(/* options = {} */) {
  return (key, newValue/*, oldValue, changes, content */) => {

    if (newValue && regex.exec(newValue)) {
      return true;
    }
    return false;
  };
}
