import SvgIconComponent from './svg-icon';

export default SvgIconComponent.extend({
  classNames: ['button', 'button-go-back'],
  click() {
    window.history.back();
  }
});
