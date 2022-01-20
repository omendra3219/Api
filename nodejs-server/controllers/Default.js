'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports. List Charges = function  List Charges (req, res, next, listCharges, authorization, aPIVersion) {
  Default. List Charges(listCharges, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update a Refund = function  Update a Refund (req, res, next, body, transaction_id, updateRefunds, authorization, aPIVersion) {
  Default. Update a Refund(body, transaction_id, updateRefunds, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Charge = function create a Charge (req, res, next, body, authorization, aPIVersion) {
  Default.create a Charge(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Refund = function create a Refund (req, res, next, body, authorization, aPIVersion) {
  Default.create a Refund(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Refunds = function list Refunds (req, res, next, listRefunds, authorization, aPIVersion) {
  Default.list Refunds(listRefunds, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Charge = function retrieve a Charge (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default.retrieve a Charge(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Refund = function retrieve a Refund (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default.retrieve a Refund(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
