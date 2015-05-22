import Ember from 'ember';
import config from 'frontend-test-data/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
});
