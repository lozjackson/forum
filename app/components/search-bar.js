import Ember from 'ember';
const { run: { debounce }, Component } = Ember;

export default Component.extend({
  classNames: ['search-bar'],
  searchDelay: 300,
	search: '',

  searchValueChanged() {
    const searchDelay = this.get('searchDelay') || 300;
    debounce(this, this.applySearch, searchDelay);
  },

  applySearch() {
		if ( !(this.get('isDestroyed') || this.get('isDestroying')) ) {
      this.set('value', this.get('search'));
		}
	},

  input() {
    this.searchValueChanged();
  }
});
