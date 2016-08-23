/**
* @fileoverview Enforces semicolon after class properties
* @author marudor
* @copyright 2016 marudor. All rights reserved.
* See LICENSE file in root directory for full license.
*/
'use strict';

const classProperty = function(context) {
  function isSemicolon(token) {
    return (token.type === 'Punctuator' && token.value === ';');
  }

  function checkForSemicolon(node) {
    const lastToken = context.getLastToken(node);
    if (!isSemicolon(lastToken)) {
      context.report({
        node: lastToken,
        message: 'Missing semicolon.',
        fix(fixer) {
          return fixer.insertTextAfter(lastToken, ';');
        },
      });
    }
  }

  return {
    ClassProperty: checkForSemicolon,
  };
};
classProperty.schema = [];

// import all rules in lib/rules
module.exports = classProperty;
module.exports.rules = {
  'class-property-semicolon': classProperty,
};
