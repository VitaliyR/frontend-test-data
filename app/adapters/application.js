import DS from 'ember-data';
import config from 'frontend-test-data/config/environment';

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: config.apiURL,

  deleteRecord: function () {
    var response = this._super.apply(this, arguments);

    return response.then(function () {
      return null;
    });
  }
});

export default ApplicationAdapter;
