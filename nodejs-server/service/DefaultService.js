'use strict';


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
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N1",
  "authCode" : "A11111",
  "method" : "charge",
  "order" : {
    "shipToZip" : "11111-1111",
    "shipFromZip" : "99999-9999",
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
  "avsMessage" : "street match, zip decline",
  "avsResult" : "SM, ZD",
  "currency" : "USD",
  "ipAddress" : "192.168.0.1",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "statusDescription" : "Transaction capture success",
  "cardBrand" : "Visa",
  "lastFour" : "1000",
  "statusCode" : "captured",
  "status" : "CAPTURED",
  "batch" : "BCH_01D8JSWWW3YQ1N8FCSKZ6Z8GDR",
  "surchargeFeeAmount" : "1.00",
  "tip" : "1.00",
  "cvvResult" : "M",
  "cardType" : "Credit",
  "txnDate" : "2020-02-24T19:43:12.730Z",
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
 * body V1_adjustment_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Create an Adjustment = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
  "amount" : "105.00",
  "tip" : "1.00",
  "taxAmount" : "5.00",
  "surchargeFeeAmount" : "1.00",
  "txnID" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX"
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
 * authorization String 
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Delete Gift Card = function(accountNumber|token,authorization,accountNumber|token,aPIVersion) {
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. List Captures = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "avsMessage" : "street match",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "order" : {
      "shipToZip" : "11111-1111",
      "shipFromZip" : "99999-9999",
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
    "status" : "CAPTURED",
    "statusCode" : "captured",
    "statusDescription" : "Transaction capture success",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "1.00",
    "txnDate" : "2022-01-06T09:22:31Z",
    "taxAmount" : "1.00",
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
exports. List Customers = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "website" : "https://example.com",
    "city" : "New York",
    "name" : "Michael Smith",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "zip" : "10010",
    "email" : "hello@seamlesspay.com",
    "state" : "NY",
    "country" : "USA",
    "address2" : "10th Fl",
    "paymentMethods" : [ {
      "name" : "Michael Smith",
      "billingCountry" : "USA",
      "routingNumber" : "123456789",
      "email" : "hello@seamlesspay.com",
      "billingAddress" : "400 Madison Ave",
      "txnType" : "CREDIT_CARD",
      "billingZip" : "10010",
      "billingCity" : "New York",
      "billingAddress2" : "10th Fl",
      "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
      "lastFour" : "4242",
      "billingState" : "NY",
      "phone" : "2125555000",
      "nickname" : "Visa card"
    } ],
    "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
    "companyName" : "ABC Business",
    "createdAt" : "2017-12-15T19:08:18.262Z",
    "address" : "400 Madison Ave",
    "metadata" : {
      "customOption" : "example"
    },
    "phone" : "2125555000"
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
exports. List Disputes = function(authorization,aPIVersion) {
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
    "txnDate" : "2020-02-24T19:43:12.730Z",
    "txnID" : "004-463436346543643643",
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
exports. List IRS Reporting = function(authorization,aPIVersion) {
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
exports. List Payouts = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "DPT_01BBC61W87JS2JTF2A6SZWM77K",
    "amount" : "105.00",
    "payoutDDA" : "****152296",
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
exports. List Refunds = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "REFUNDED",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "txnDate" : "2022-01-06T09:22:31Z",
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
exports. List Statements = function(authorization,aPIVersion) {
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
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. List SubMerchants = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "SMT_01C5KKZEAM92FB2ZM3XJTKDEPP",
    "subMID" : "54648651",
    "masterMID" : "32462476",
    "subMerchantEntityName" : "TEST",
    "masterDescriptor" : true,
    "splitProgramID" : "SP_01BBC61NYHG6AR5T35D5Q1ZBFC",
    "subMerchantEmail" : "test@test.com",
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
 * submerchant_id String 
 * authorization String 
 * submerchant_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Retrieve SubMerchant = function(submerchant_id,authorization,submerchant_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "SMT_01C5KKZEAM92FB2ZM3XJTKDEPP",
  "subMID" : "54648651",
  "masterMID" : "32462476",
  "subMerchantEntityName" : "TEST",
  "masterDescriptor" : true,
  "splitProgramID" : "SP_01BBC61NYHG6AR5T35D5Q1ZBFC",
  "subMerchantEmail" : "test@test.com",
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
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Retrieve a Refund = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "metadata" : {
    "customOption" : "example"
  },
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T09:22:31Z",
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
 * body Giftcard_accountNumbertoken _body 
 * accountNumber|token String 
 * accountNumber|token String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Update Gift Card = function(body,accountNumber|token,accountNumber|token,authorization,aPIVersion) {
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
  "endpointType" : "ACCOUNT",
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
 * body Refund_transaction_id _body 
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
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "metadata" : {
    "customOption" : "example"
  },
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T09:22:31Z",
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
 * bIN String 
 * authorization String 
 * bIN String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.bIN Lookup = function(bIN,authorization,bIN,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bin" : "411111",
  "issuingBank" : "Bank Name",
  "country" : "USA",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
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
 * body V1_closebatch_body 
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
 * body V1_giftcard_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create Gift Card = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "105.00",
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
 * body V1_submerchants_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create SubMerchant = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "SMT_01C5KKZEAM92FB2ZM3XJTKDEPP",
  "subMID" : "54648651",
  "masterMID" : "32462476",
  "subMerchantEntityName" : "TEST",
  "masterDescriptor" : true,
  "splitProgramID" : "SP_01BBC61NYHG6AR5T35D5Q1ZBFC",
  "subMerchantEmail" : "test@test.com",
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
 * body V1_webhooksendpoints_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create Webhook = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "WBH_01BBC61W87JS2JTF2A6SGTM50X",
  "endpointType" : "ACCOUNT",
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Batch = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "batchID" : "BCH_01BPH7PHBE8EHYAJRGGMN94DD5"
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
exports.create a Checkout Session = function(body,authorization,aPIVersion) {
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
 * body V1_customers_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Customer = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "address" : "400 Madison Ave",
  "address2" : "10th Fl",
  "companyName" : "ABC Business",
  "city" : "New York",
  "country" : "USA",
  "email" : "hello@seamlesspay.com",
  "metadata" : {
    "customOption" : "example"
  },
  "name" : "Michael Smith",
  "phone" : "2125555000",
  "paymentMethods" : [ {
    "billingAddress" : "400 Madison Ave",
    "billingAddress2" : "10th Fl",
    "billingCity" : "New York",
    "billingState" : "NY",
    "billingZip" : "10010",
    "billingCountry" : "USA",
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "txnType" : "CREDIT_CARD"
  } ],
  "state" : "NY",
  "zip" : "10010",
  "website" : "https://example.com",
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
 * body V1_refund_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Refund = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "metadata" : {
    "customOption" : "example"
  },
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "REFUNDED",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "txnDate" : "2022-01-06T09:22:31Z",
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
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Batches = function(authorization,aPIVersion) {
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
exports.list Charges = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "adjustments" : [ {
      "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
      "amount" : "105.00",
      "tip" : "1.00",
      "taxAmount" : "5.00",
      "surchargeFeeAmount" : "1.00"
    } ],
    "avsMessage" : "street match, zip decline",
    "avsResult" : "SM, ZD",
    "cvvResult" : "M",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "expDate" : "string",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "order" : {
      "shipToZip" : "11111-1111",
      "shipFromZip" : "99999-9999",
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
      "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
      "authCode" : "A11111",
      "currency" : "USD",
      "cardBrand" : "Visa",
      "cardType" : "Credit",
      "metadata" : {
        "customOption" : "example"
      },
      "ipAddress" : "192.168.0.1",
      "lastFour" : "1000",
      "method" : "refund",
      "status" : "REFUNDED",
      "statusCode" : "refunded",
      "statusDescription" : "Transaction refund success",
      "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
      "txnDate" : "2022-01-06T09:22:31Z",
      "updatedAt" : "2017-12-15T19:08:18.262Z",
      "createdAt" : "2017-12-15T19:08:18.262Z"
    } ],
    "status" : "AUTHORIZED",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "1.00",
    "txnDate" : "2022-01-06T09:22:31Z",
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
exports.list Retrievals = function(authorization,aPIVersion) {
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
    "txnDate" : "2020-02-24T19:43:12.730Z",
    "txnID" : "004-463436346543643643",
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
exports.list Webhook Events = function(authorization,aPIVersion) {
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
 * body V1_capture_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.pOST_v1Capture = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "avsMessage" : "street match",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipToZip" : "11111-1111",
    "shipFromZip" : "99999-9999",
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
  "status" : "CAPTURED",
  "statusCode" : "captured",
  "statusDescription" : "Transaction capture success",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "txnDate" : "2022-01-06T09:22:31Z",
  "taxAmount" : "1.00",
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
 * batch_id String 
 * authorization String 
 * batch_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Batch's Transactions = function(batch_id,authorization,batch_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "avsMessage" : "street match, zip decline",
    "avsResult" : "SM, ZD",
    "cvvResult" : "M",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "charge",
    "status" : "AUTHORIZED",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "string",
    "txnDate" : "2022-01-06T09:22:31Z",
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
 * accountNumber|token String 
 * authorization String 
 * accountNumber|token String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Gift Card = function(accountNumber|token,authorization,accountNumber|token,aPIVersion) {
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
 * webhook_id String 
 * authorization String 
 * webhook_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve Webhook = function(webhook_id,authorization,webhook_id,aPIVersion) {
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
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve a Capture = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "batch" : "BCH_01BJE0H947B53D3JRRSJ4W6R9T",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "avsMessage" : "street match",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipToZip" : "11111-1111",
    "shipFromZip" : "99999-9999",
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
  "status" : "CAPTURED",
  "statusCode" : "captured",
  "statusDescription" : "Transaction capture success",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "txnDate" : "2022-01-06T09:22:31Z",
  "taxAmount" : "1.00",
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
 * customer_id String 
 * authorization String 
 * customer_id String 
 * returns Object
 **/
exports.retrieve a Customer = function(customer_id,authorization,customer_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "address" : "400 Madison Ave",
  "address2" : "10th Fl",
  "companyName" : "ABC Business",
  "city" : "New York",
  "country" : "USA",
  "email" : "hello@seamlesspay.com",
  "metadata" : {
    "customOption" : "example"
  },
  "name" : "Michael Smith",
  "phone" : "2125555000",
  "paymentMethods" : [ {
    "billingAddress" : "400 Madison Ave",
    "billingAddress2" : "10th Fl",
    "billingCity" : "New York",
    "billingState" : "NY",
    "billingZip" : "10010",
    "billingCountry" : "USA",
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "txnType" : "CREDIT_CARD"
  } ],
  "state" : "NY",
  "zip" : "10010",
  "website" : "https://example.com",
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
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrive a Charge = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
  "authCode" : "A11111",
  "adjustments" : [ {
    "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
    "amount" : "105.00",
    "tip" : "1.00",
    "taxAmount" : "5.00",
    "surchargeFeeAmount" : "1.00"
  } ],
  "avsMessage" : "street match, zip decline",
  "avsResult" : "SM, ZD",
  "cvvResult" : "M",
  "currency" : "USD",
  "cardBrand" : "Visa",
  "cardType" : "Credit",
  "expDate" : "string",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "order" : {
    "shipToZip" : "11111-1111",
    "shipFromZip" : "99999-9999",
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
    "apiKey" : "sk_01C043F2241X7WM7MTZKB5822N",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "REFUNDED",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "txnDate" : "2022-01-06T09:22:31Z",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "status" : "AUTHORIZED",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "txnDate" : "2022-01-06T09:22:31Z",
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
 * body Customers_customer_id _body 
 * customer_id String 
 * customer_id String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update a Customer = function(body,customer_id,customer_id,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "CUS_01CR94R2JQR071FVF76XBGC3W4",
  "address" : "400 Madison Ave",
  "address2" : "10th Fl",
  "companyName" : "ABC Business",
  "city" : "New York",
  "country" : "USA",
  "email" : "hello@seamlesspay.com",
  "metadata" : {
    "customOption" : "example"
  },
  "name" : "Michael Smith",
  "phone" : "2125555000",
  "paymentMethods" : [ {
    "billingAddress" : "400 Madison Ave",
    "billingAddress2" : "10th Fl",
    "billingCity" : "New York",
    "billingState" : "NY",
    "billingZip" : "10010",
    "billingCountry" : "USA",
    "phone" : "2125555000",
    "email" : "hello@seamlesspay.com",
    "lastFour" : "4242",
    "name" : "Michael Smith",
    "nickname" : "Visa card",
    "token" : "TKN_01CBH0CKW6571SC337SWKSDCAE",
    "routingNumber" : "123456789",
    "txnType" : "CREDIT_CARD"
  } ],
  "state" : "NY",
  "zip" : "10010",
  "website" : "https://example.com",
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

