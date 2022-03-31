'use strict';


/**
 *
 * bIN String 
 * aPIVersion String  (optional)
 * returns BINLookup
 **/
exports.bIN Lookup = function(bIN,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

