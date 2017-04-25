import Ember from 'ember';

const { computed: { alias }, Component } = Ember;

export default Component.extend({

  tagName: 'svg',
  attributeBindings: ['height', 'width', 'viewBox', 'fill'],
  viewBox: '0 0 24 24',
  size: 24,

  height: alias('size'),
  width: alias('size'),
});
