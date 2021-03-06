'use strict';


/**
 *
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Delete Gift Card = function(accountNumber|token,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastFour" : "0018",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body V1_giftcard_body 
 * aPIVersion String  (optional)
 * returns GiftCards
 **/
exports.create Gift Card = function(body,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "idempotencyKey" : "idempotencyKey",
  "accountNumber" : "accountNumber",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Gift Card = function(accountNumber|token,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "105.00",
  "lastFour" : "0018",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z",
  "currency" : "USD",
  "status" : "approved",
  "statusDescription" : "Approval"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Giftcard_accountNumbertoken_body 
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update Gift Card = function(body,accountNumber|token,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "105.00",
  "currency" : "USD",
  "status" : "SETTLED",
  "statusDescription" : "Transaction settled",
  "txnMethod" : "refund",
  "txnID" : "TXN_01BXA5RCMCMRES01JA2D6HE08H"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

