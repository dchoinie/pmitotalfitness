import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | membership-options', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:membership-options');
    assert.ok(route);
  });
});
