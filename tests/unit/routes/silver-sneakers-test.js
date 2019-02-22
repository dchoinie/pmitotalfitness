import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | silver-sneakers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:silver-sneakers');
    assert.ok(route);
  });
});
