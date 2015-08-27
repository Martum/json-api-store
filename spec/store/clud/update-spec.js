var Store = require("../../../src/store");

describe("store", function () {

  var store;

  beforeEach(function () {
    store = new Store();
  });

  describe("without an adapter", function () {

    it("must throw an error if update is called when there isn't an adapter", function () {
      expect(function () {
        store.update();
      }).toThrowError("Adapter missing. Specify an adapter when creating the store: `var store = new Store(adapter);`");
    });

  });

});
