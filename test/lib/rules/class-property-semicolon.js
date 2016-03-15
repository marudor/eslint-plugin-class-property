/**
* @fileoverview
* @author
* @copyright 2016 . All rights reserved.
* See LICENSE file in root directory for full license.
*/
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib"),

RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parser: 'babel-eslint',
});
ruleTester.run("class-property/class-property-semicolon", rule, {

  valid: [
    "class foo { bar = '';}",
    "class foo { bar = ''; batz = 1; foobar() {}}"
  ],

  invalid: [
    {
      code: "class foo { bar = ''}",
      errors: [{
        message: 'Missing semicolon.',
      }]
    }, {
      code: "class foo { bar = ''; foobar() {} batz = 1 }",
      errors: [{
        message: 'Missing semicolon.',
      }]
    }
  ]
});
