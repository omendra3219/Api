'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports. Create a Charge = function  Create a Charge (req, res, next, body, authorization, aPIVersion) {
  Default. Create a Charge(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Create an Adjustment = function  Create an Adjustment (req, res, next, body, authorization, aPIVersion) {
  Default. Create an Adjustment(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Delete Gift Card = function  Delete Gift Card (req, res, next, accountNumber|token, authorization, accountNumber|token, aPIVersion) {
  Default. Delete Gift Card(accountNumber|token, authorization, accountNumber|token, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Captures = function  List Captures (req, res, next, authorization, aPIVersion) {
  Default. List Captures(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Customers = function  List Customers (req, res, next, authorization, aPIVersion) {
  Default. List Customers(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Disputes = function  List Disputes (req, res, next, authorization, aPIVersion) {
  Default. List Disputes(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List IRS Reporting = function  List IRS Reporting (req, res, next, authorization, aPIVersion) {
  Default. List IRS Reporting(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Payouts = function  List Payouts (req, res, next, authorization, aPIVersion) {
  Default. List Payouts(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Refunds = function  List Refunds (req, res, next, authorization, aPIVersion) {
  Default. List Refunds(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Statements = function  List Statements (req, res, next, authorization, aPIVersion) {
  Default. List Statements(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List SubMerchants = function  List SubMerchants (req, res, next, authorization, aPIVersion) {
  Default. List SubMerchants(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Retrieve SubMerchant = function  Retrieve SubMerchant (req, res, next, submerchant_id, authorization, submerchant_id, aPIVersion) {
  Default. Retrieve SubMerchant(submerchant_id, authorization, submerchant_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Retrieve a Refund = function  Retrieve a Refund (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default. Retrieve a Refund(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update Gift Card = function  Update Gift Card (req, res, next, body, accountNumber|token, accountNumber|token, authorization, aPIVersion) {
  Default. Update Gift Card(body, accountNumber|token, accountNumber|token, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update Webhook = function  Update Webhook (req, res, next, body, webhook_endpoint_id, webhook_endpoint_id, authorization, aPIVersion) {
  Default. Update Webhook(body, webhook_endpoint_id, webhook_endpoint_id, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update a Refund = function  Update a Refund (req, res, next, body, transaction_id, transaction_id, authorization, aPIVersion) {
  Default. Update a Refund(body, transaction_id, transaction_id, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bIN Lookup = function bIN Lookup (req, res, next, bIN, authorization, bIN, aPIVersion) {
  Default.bIN Lookup(bIN, authorization, bIN, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.close a Batch = function close a Batch (req, res, next, body, authorization, aPIVersion) {
  Default.close a Batch(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create Gift Card = function create Gift Card (req, res, next, body, authorization, aPIVersion) {
  Default.create Gift Card(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create SubMerchant = function create SubMerchant (req, res, next, body, authorization, aPIVersion) {
  Default.create SubMerchant(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create Webhook = function create Webhook (req, res, next, body, authorization, aPIVersion) {
  Default.create Webhook(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Batch = function create a Batch (req, res, next, authorization, aPIVersion) {
  Default.create a Batch(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Checkout Session = function create a Checkout Session (req, res, next, body, authorization, aPIVersion) {
  Default.create a Checkout Session(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Customer = function create a Customer (req, res, next, body, authorization, aPIVersion) {
  Default.create a Customer(body, authorization, aPIVersion)
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

module.exports.list Batches = function list Batches (req, res, next, authorization, aPIVersion) {
  Default.list Batches(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Charges = function list Charges (req, res, next, authorization, aPIVersion) {
  Default.list Charges(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list PCI Audit = function list PCI Audit (req, res, next, authorization, aPIVersion) {
  Default.list PCI Audit(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Retrievals = function list Retrievals (req, res, next, authorization, aPIVersion) {
  Default.list Retrievals(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Webhook Events = function list Webhook Events (req, res, next, authorization, aPIVersion) {
  Default.list Webhook Events(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pOST_v1Capture = function pOST_v1Capture (req, res, next, body, authorization, aPIVersion) {
  Default.pOST_v1Capture(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Batch&#x27;s Transactions = function retrieve Batch&#x27;s Transactions (req, res, next, batch_id, authorization, batch_id, aPIVersion) {
  Default.retrieve Batch&#x27;s Transactions(batch_id, authorization, batch_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Gift Card = function retrieve Gift Card (req, res, next, accountNumber|token, authorization, accountNumber|token, aPIVersion) {
  Default.retrieve Gift Card(accountNumber|token, authorization, accountNumber|token, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Webhook = function retrieve Webhook (req, res, next, webhook_id, authorization, webhook_id, aPIVersion) {
  Default.retrieve Webhook(webhook_id, authorization, webhook_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Capture = function retrieve a Capture (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default.retrieve a Capture(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Customer = function retrieve a Customer (req, res, next, customer_id, authorization, customer_id) {
  Default.retrieve a Customer(customer_id, authorization, customer_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrive a Charge = function retrive a Charge (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default.retrive a Charge(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Customer = function update a Customer (req, res, next, body, customer_id, customer_id, authorization, aPIVersion) {
  Default.update a Customer(body, customer_id, customer_id, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
