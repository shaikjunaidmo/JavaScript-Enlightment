var outer_object = {
  inner_object_1: {
    prop1: function() {
      return "Hello";
    },
    inner_inner_object_1: {
      prop3: function() {
        return "Ola";
      }
    }
  },
  inner_object_2: {
    prop2: function() {
      return "Hi";
    },
    inner_inner_object_2: {
      prop4: function() {
        return "Hey";
      }
    }
  }
};

module.exports.prop1 = outer_object.inner_object_1.prop1;
module.exports.prop2 = outer_object.inner_object_2.prop2;
module.exports.prop3 = outer_object.inner_object_1.inner_inner_object_1.prop3;
module.exports.prop4 = outer_object.inner_object_2.inner_inner_object_2.prop4;
