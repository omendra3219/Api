'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports. BIN Lookups = function  BIN Lookups (req, res, next, bIN, authorization, bIN, aPIVersion) {
  Default. BIN Lookups(bIN, authorization, bIN, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Create a Charge = function  Create a Charge (req, res, next, body, authorization, aPIVersion) {
  Default. Create a Charge(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Create a Checkout Session = function  Create a Checkout Session (req, res, next, body, authorization, aPIVersion) {
  Default. Create a Checkout Session(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. List Batches = function  List Batches (req, res, next, authorization, aPIVersion) {
  Default. List Batches(authorization, aPIVersion)
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

module.exports. List Retrievals = function  List Retrievals (req, res, next, authorization) {
  Default. List Retrievals(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Retrieve a Customer = function  Retrieve a Customer (req, res, next, customer_id, authorization, customer_id, aPIVersion) {
  Default. Retrieve a Customer(customer_id, authorization, customer_id, aPIVersion)
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

module.exports. Update a Customer = function  Update a Customer (req, res, next, body, customer_id, updateCustomer, authorization, aPIVersion) {
  Default. Update a Customer(body, customer_id, updateCustomer, authorization, aPIVersion)
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

module.exports.close a Batch = function close a Batch (req, res, next, body, authorization, aPIVersion) {
  Default.close a Batch(body, authorization, aPIVersion)
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

module.exports.create a Credit = function create a Credit (req, res, next, body, accountNumberOrToken, accountNumber|token, authorization, aPIVersion) {
  Default.create a Credit(body, accountNumberOrToken, accountNumber|token, authorization, aPIVersion)
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

module.exports.gET_webhooksWebhook_id = function gET_webhooksWebhook_id (req, res, next, webhook_id, authorization, newHeader, webhook_id) {
  Default.gET_webhooksWebhook_id(webhook_id, authorization, newHeader, webhook_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Charges = function list Charges (req, res, next, list, authorization, aPIVersion) {
  Default.list Charges(list, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Customers = function list Customers (req, res, next, listCustomers, authorization, aPIVersion) {
  Default.list Customers(listCustomers, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Disputes = function list Disputes (req, res, next, authorization, aPIVersion) {
  Default.list Disputes(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Domains = function list Domains (req, res, next, authorization, aPIVersion) {
  Default.list Domains(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list IRS Reporting = function list IRS Reporting (req, res, next, newHeader) {
  Default.list IRS Reporting(newHeader)
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

module.exports.list Payouts = function list Payouts (req, res, next, authorization, aPIVersion) {
  Default.list Payouts(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Statements = function list Statements (req, res, next, authorization, aPIVersion) {
  Default.list Statements(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Webhook Events = function list Webhook Events (req, res, next, authorization) {
  Default.list Webhook Events(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve Batch&#x27;s Transactions = function retrieve Batch&#x27;s Transactions (req, res, next, batch_id, newHeader, batch_id) {
  Default.retrieve Batch&#x27;s Transactions(batch_id, newHeader, batch_id)
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

module.exports.unregister Domain = function unregister Domain (req, res, next, domain_name, authorization, domain_name) {
  Default.unregister Domain(domain_name, authorization, domain_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Charge = function update a Charge (req, res, next, body, transaction_id, updatecharge, authorization, aPIVersion) {
  Default.update a Charge(body, transaction_id, updatecharge, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.void a Charge = function void a Charge (req, res, next, void_charge, authorization, transaction_id, aPIVersion) {
  Default.void a Charge(void_charge, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
