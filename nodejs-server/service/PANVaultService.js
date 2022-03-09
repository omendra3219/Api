'use strict';


/**
 *
 * body Object 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create Token = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "name" : "Michael Smith",
  "customer" : {
    "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
    "address" : "400 Madison Ave",
    "address2" : "10th Fl",
    "companyName" : "ABC Business",
    "city" : "New York",
    "country" : "USA",
    "email" : "hello@seamlesspay.com",
    "metadata" : "{\"customOption\":\"example\"}",
    "name" : "Michael Smith",
    "phone" : "2125555000",
    "state" : "NY",
    "zip" : "10010",
    "website" : "https://example.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  },
  "txnType" : "CREDIT_CARD",
  "lastfour" : "4242",
  "expDate" : "0125",
  "avsResult" : "SM,ZM",
  "cardBrand" : "Visa",
  "cvvResult" : "M",
  "verificationResult" : "verification_successful"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

