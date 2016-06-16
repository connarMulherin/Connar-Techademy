import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (!Ember.$.isPlainOblect(value)) {
    	return {};
    }else {
    	return value;
    }
  },
  serialize: function(deserialized) {
  		if (!Ember.$.isPlainObject(value)) {
  			return {};
  		}else {
  			return value;
  		}
  }
});
