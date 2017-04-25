import SvgIconComponent from './svg-icon';

export default SvgIconComponent.extend({
  click() {
    window.history.back();
  }
});
