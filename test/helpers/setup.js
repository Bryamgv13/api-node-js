"use strict"
const chai = require('chai')
const chaisAsPromised = require('chai-as-promised')

chai.use(chaisAsPromised)

global.AssertionError = chai.AssertionError
global.exprect = chai.exprect