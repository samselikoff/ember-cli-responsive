import Ember from 'ember';
import 'ember-cli-responsive/responsive';
import { initialize } from 'dummy/initializers/responsive';

var container, application;

module('ResponsiveInitializer', {
  setup: function() {
    Ember.run(function() {
      container = new Ember.Container();
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function() {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  ok(true);
});

