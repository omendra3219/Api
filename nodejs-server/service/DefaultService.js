'use strict';


/**
 *
 * bIN String 
 * authorization String 
 * bIN String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. BIN Lookups = function(bIN,authorization,bIN,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bin" : "411111",
  "issuingBank" : "Bank Name",
  "country" : "USA",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "cardDetail" : "True credit (No PIN/Signature capability)",
  "debitNetwork" : "ACCEL FISERV – Pinned POS",
  "debitSignatureNetworkParticipant" : "",
  "fsa" : "No",
  "prepaidIndicator" : "No",
  "productID" : "Visa Classic",
  "regulatorIndicator" : "N",
  "cardClass" : "Consumer"
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
 * body Object 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Create a Charge = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "105.00",
  "authCode" : "A11111",
  "method" : "charge",
  "order" : {
    "shipFromPostalCode" : "99999-9999",
    "shippingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "state" : "NY",
      "country" : "US",
      "postalCode" : "11111-1111"
    },
    "items" : [ {
      "discountAmount" : "20.00",
      "unitCost" : "10.00",
      "unitOfMeasure" : "CS",
      "lineNumber" : "1",
      "description" : "DESCRIPTION-1",
      "taxAmount" : "5.00",
      "quantity" : "12",
      "upc" : "UPC-1",
      "lineTotal" : "105.00",
      "taxExempt" : false,
      "taxRate" : "0.05"
    } ]
  },
  "currency" : "USD",
  "ipAddress" : "192.168.0.1",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "statusDescription" : "Transaction capture success",
  "paymentType" : "credit_card",
  "paymentNetwork" : "Visa",
  "lastFour" : "1000",
  "statusCode" : "captured",
  "status" : "captured",
  "batch" : "BCH_01D8JSWWW3YQ1N8FCSKZ6Z8GDR",
  "surchargeFeeAmount" : "1.00",
  "tip" : "1.00",
  "accountType" : "Credit",
  "transactionDate" : "2020-02-24T19:43:12.730Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalCode" : "pass",
    "cvv" : "pass"
  },
  "updatedAt" : "2020-02-24T19:43:12.730Z",
  "createdAt" : "2020-02-24T19:43:12.730Z"
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
 * body Checkoutsessions_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Create a Checkout Session = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CHS_01DJNFZAA730Z5RM3YSKM2908V",
  "checkoutId" : "CHF_01CAQDPSAJ8H0BCAXVJFT87TQZ",
  "amount" : "105.00",
  "checkoutFields" : {
    "company" : "Ledner, Toy and Roob",
    "billing_name" : "Luella King",
    "billing_state" : "California",
    "billing_city" : "Sofiabury",
    "billing_address" : "626 Maggie Divide",
    "billing_address2" : "Apt. 441"
  },
  "meta" : {
    "customField" : "customValue"
  },
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. List Batches = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "BCH_01BPH7PHBE8EHYAJRGGMN94DD5",
    "autoBatchTime" : "10:00",
    "batchNumber" : "70195401736",
    "batchStatus" : "BATCH_OPEN",
    "merchantId" : "11111111",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. List Refunds = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "captured",
    "statusCode" : "captured",
    "statusDescription" : "Transaction capture success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * returns Object
 **/
exports. List Retrievals = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "RTL_01BBC61W87JS2JTF2A6SZWM33Y",
    "amount" : "105.00",
    "caseNumber" : "34643",
    "lastFour" : "6773",
    "merchantID" : "2142314234231412",
    "retrievalCode" : "6021",
    "retrievalDate" : "01/16/2017",
    "transactionDate" : "2020-02-24T19:43:12.730Z",
    "transactionID" : "004-463436346543643643",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * customer_id String 
 * authorization String 
 * customer_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Retrieve a Customer = function(customer_id,authorization,customer_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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
 * body Webhooksendpoints_webhook_endpoint_id_body 
 * webhook_endpoint_id String 
 * webhook_endpoint_id String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Update Webhook = function(body,webhook_endpoint_id,webhook_endpoint_id,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBH_01BBC61W87JS2JTF2A6SGTM50X",
  "endpointType" : "Account",
  "payloadUrl" : "https://www.example.com/webhook",
  "secret" : "50991311",
  "webhookSubscriptions" : [ {
    "id" : "WBS_01FFC61W87JS2JTF3A8SGTM70T",
    "event" : "created",
    "service" : "customers"
  } ],
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
 * body Object 
 * customer_id String 
 * updateCustomer String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Update a Customer = function(body,customer_id,updateCustomer,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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
 * body Refunds_transaction_id_body 
 * transaction_id String 
 * transaction_id String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Update a Refund = function(body,transaction_id,transaction_id,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "metadata" : {
    "customOption" : "example"
  },
  "ipAddress" : "192.168.0.1",
  "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "captured",
  "statusCode" : "captured",
  "statusDescription" : "Transaction capture success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-04T14:39:13Z",
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
 * body Object 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.close a Batch = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "transactions" : 1,
    "batches" : [ "BCH_01EHSX8WQP0KYJCCK9B80PX3M1" ]
  },
  "message" : "Produce transactions successfully!",
  "input" : {
    "batchId" : "BCH_01EHSX8WQP0KYJCCK9B80PX3M1",
    "env" : "live",
    "merchantId" : "MRT_01D6K7PCCH4YDAPENGVBRPK861"
  }
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
 * body Webhooksendpoints_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create Webhook = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBH_01BBC61W87JS2JTF2A6SGTM50X",
  "endpointType" : "Account",
  "payloadUrl" : "https://www.example.com/webhook",
  "secret" : "50991311",
  "webhookSubscriptions" : [ {
    "id" : "WBS_01FFC61W87JS2JTF3A8SGTM70T",
    "event" : "created",
    "service" : "customers"
  } ],
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
 * body Object 
 * accountNumberOrToken String 
 * accountNumber|token String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Credit = function(body,accountNumberOrToken,accountNumber|token,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "balance" : "200.00",
  "currency" : "USD",
  "giftCardStatus" : "active",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "paymentType" : "gift_card",
  "previousBalance" : "150.00",
  "status" : "settled",
  "statusDescription" : "Transaction settled",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-04T14:39:13Z",
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
 * body Customers_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Customer = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "name" : "Michael Smith",
  "email" : "hello@seamlesspay.com",
  "companyName" : "ABC Business",
  "description" : "ABC Business",
  "metadata" : {
    "customOption" : "example"
  },
  "phone" : "2125555000",
  "website" : "https://example.com",
  "address" : {
    "line1" : "400 Madison Ave",
    "line2" : "10th Fl",
    "city" : "New York",
    "country" : "US",
    "state" : "NY",
    "postalCode" : "10010"
  },
  "paymentMethods" : [ {
    "billingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "paymentType" : "credit_card"
  } ],
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
 * webhook_id String 
 * authorization String 
 * newHeader String 
 * webhook_id String 
 * returns Object
 **/
exports.gET_webhooksWebhook_id = function(webhook_id,authorization,newHeader,webhook_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBE_01C56BV08MX9ACFFN84GQEKEGH",
  "service" : "tickets",
  "event" : "created",
  "endpointID" : "WBH_01C569BBWRP1KSDDDN098Y3127",
  "status" : "200",
  "sentAttempts" : 1,
  "response" : {
    "success" : true
  },
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
 * list String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Charges = function(list,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "adjustments" : [ {
      "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
      "amount" : "105.00",
      "tip" : "1.00",
      "taxAmount" : "5.00",
      "surchargeFeeAmount" : "1.00"
    } ],
    "currency" : "USD",
    "fullyRefunded" : "true",
    "paymentType" : "credit_card",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "expDate" : "0125",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "order" : {
      "shipFromPostalCode" : "99999-9999",
      "shippingAddress" : {
        "line1" : "400 Madison Ave",
        "line2" : "10th Fl",
        "city" : "New York",
        "country" : "US",
        "state" : "NY",
        "postalCode" : "11111-1111"
      },
      "items" : [ {
        "discountAmount" : "9.00",
        "unitCost" : "2.00",
        "unitOfMeasure" : "CS",
        "lineNumber" : "1",
        "description" : "DESCRIPTION-1",
        "taxAmount" : "109.00",
        "quantity" : "1000",
        "upc" : "UPC-1",
        "lineTotal" : "2000.00",
        "taxExempt" : true,
        "taxRate" : "0.025"
      } ]
    },
    "refunds" : [ {
      "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
      "amount" : "1.00",
      "authCode" : "A11111",
      "currency" : "USD",
      "paymentNetwork" : "Visa",
      "accountType" : "Credit",
      "metadata" : {
        "customOption" : "example"
      },
      "ipAddress" : "192.168.0.1",
      "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
      "lastFour" : "1000",
      "method" : "refund",
      "status" : "captured",
      "statusCode" : "captured",
      "statusDescription" : "Transaction capture success",
      "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
      "transactionDate" : "2022-01-04T14:39:13Z",
      "updatedAt" : "2017-12-15T19:08:18.262Z",
      "createdAt" : "2017-12-15T19:08:18.262Z"
    } ],
    "status" : "authorized",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "1.00",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "verification" : {
      "addressLine1" : "pass",
      "addressPostalCode" : "pass",
      "cvv" : "pass"
    },
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * listCustomers String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Customers = function(listCustomers,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
    "name" : "Michael Smith",
    "email" : "hello@seamlesspay.com",
    "companyName" : "ABC Business",
    "description" : "ABC Business",
    "metadata" : {
      "customOption" : "example"
    },
    "phone" : "2125555000",
    "website" : "https://example.com",
    "address" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "US",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "paymentMethods" : [ {
      "billingAddress" : {
        "line1" : "400 Madison Ave",
        "line2" : "10th Fl",
        "city" : "New York",
        "country" : "USA",
        "state" : "NY",
        "postalCode" : "10010"
      },
      "phone" : "2125555000",
      "email" : "hello@seamlesspay.com",
      "lastFour" : "4242",
      "name" : "Michael Smith",
      "nickname" : "Visa card",
      "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
      "routingNumber" : "123456789",
      "paymentType" : "credit_card"
    } ],
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Disputes = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "CHK_01BBC61W87JS2JTF2A6SZWM11Y",
    "amount" : 211.15,
    "caseNumber" : "043 345 34534",
    "cbCode" : "430",
    "cbdetail" : [ ],
    "disputeDate" : "01/30/2017",
    "lastFour" : "7982",
    "merchantID" : "3425423542523523245424",
    "repeatCb" : "1",
    "transactionDate" : "2020-02-24T19:43:12.730Z",
    "transactionID" : "004-463436346543643643",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Domains = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "domains" : [ "test-domain.com", "test2.domain.io" ]
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
 * newHeader String 
 * returns Object
 **/
exports.list IRS Reporting = function(newHeader) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastChangeDate" : "03/02/2017",
  "irsMatch" : true
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list PCI Audit = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assessor" : "Trustwave",
  "companyName" : "ABC Business",
  "complianceProgram" : "SAQ_AND_SCAN",
  "customerID" : "3425324",
  "dateAdded" : "07/02/2014",
  "dateRegistered" : "08/27/2014",
  "firstCertDate" : "08/26/2014",
  "lastLoginDate" : "08/27/2014",
  "merchantStatus" : "ACTIVE",
  "merchantType" : "INET-PA",
  "mostRecentSaqDate" : "08/27/2014",
  "mostRecentScanDate" : "10/27/2016",
  "pciExpiry" : "08/26/2015",
  "pciLevel" : 4,
  "pciStatus" : "EXPIRED",
  "primaryMerchantID" : "3544325243543232",
  "primaryPocEmail" : "email@merchant.com",
  "primaryPocLastName" : "Gaon",
  "saqExpiry" : "08/26/2015",
  "saqStatus" : "EXPIRED",
  "saqType" : "SAQ_C",
  "scanExpiry" : "01/26/2017",
  "scanStatus" : "PASS"
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Payouts = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "DPT_01BBC61W87JS2JTF2A6SZWM77K",
    "amount" : "105.00",
    "payoutBankAccount" : "****152296",
    "merchantID" : "3463465436543653",
    "fundingDate" : "03/08/2017",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Statements = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "ST_01BBC61W87JS2JTF2A6SZWM99Y",
    "merchantID" : "5342543254235324",
    "month" : "04",
    "pdfBase64" : "JVBERi0xLjMKJ...",
    "year" : "2016",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * authorization String 
 * returns Object
 **/
exports.list Webhook Events = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "WBE_01C56BV08MX9ACFFN84GQEKEGH",
    "service" : "tickets",
    "event" : "created",
    "endpointID" : "WBH_01C569BBWRP1KSDDDN098Y3127",
    "status" : "200",
    "sentAttempts" : 1,
    "response" : {
      "success" : true
    },
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * batch_id String 
 * newHeader String 
 * batch_id String 
 * returns Object
 **/
exports.retrieve Batch's Transactions = function(batch_id,newHeader,batch_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "paymentType" : "credit_card",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "status" : "authorized",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "string",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "verification" : {
      "addressLine1" : "pass",
      "addressPostalCode" : "pass",
      "cvv" : "pass"
    },
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
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
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve a Charge = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "adjustments" : [ {
    "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
    "amount" : "105.00",
    "tip" : "1.00",
    "taxAmount" : "5.00",
    "surchargeFeeAmount" : "1.00"
  } ],
  "currency" : "USD",
  "fullyRefunded" : "true",
  "paymentType" : "credit_card",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "expDate" : "0125",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipFromPostalCode" : "99999-9999",
    "shippingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "US",
      "state" : "NY",
      "postalCode" : "11111-1111"
    },
    "items" : [ {
      "discountAmount" : "9.00",
      "unitCost" : "2.00",
      "unitOfMeasure" : "CS",
      "lineNumber" : "1",
      "description" : "DESCRIPTION-1",
      "taxAmount" : "109.00",
      "quantity" : "1000",
      "upc" : "UPC-1",
      "lineTotal" : "2000.00",
      "taxExempt" : true,
      "taxRate" : "0.025"
    } ]
  },
  "refunds" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "captured",
    "statusCode" : "captured",
    "statusDescription" : "Transaction capture success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "transactionDate" : "2022-01-04T14:39:13Z",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "status" : "authorized",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "transactionDate" : "2022-01-04T14:39:13Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalCode" : "pass",
    "cvv" : "pass"
  },
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
 * domain_name String 
 * authorization String 
 * domain_name String 
 * returns Object
 **/
exports.unregister Domain = function(domain_name,authorization,domain_name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "domains" : [ "test2.domain.io" ]
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
 * body Object 
 * transaction_id String 
 * updatecharge String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update a Charge = function(body,transaction_id,updatecharge,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "paymentType" : "credit_card",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "status" : "authorized",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "string",
  "transactionDate" : "2022-01-04T14:39:13Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalCode" : "pass",
    "cvv" : "pass"
  },
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
 * void_charge String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.void a Charge = function(void_charge,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "status" : "voided",
  "statusCode" : "voided",
  "statusDescription" : "Transaction void success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-04T14:39:13Z",
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

