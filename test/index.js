/**
 * @copyright 2018-present, Charlike Mike Reagent (https://i.am.charlike.online)
 * @license Apache-2.0
 */

'use strict';

const test = require('asia');
const config = require('../src/index');

// TODO: add real tests.

test('config should have extends property', (t) => {
  t.deepEqual(config.extends, [
    'airbnb',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ]);
});

test('config should have plugins property', (t) => {
  t.deepEqual(config.plugins, [
    'promise',
    'unicorn',
    'flowtype',
    'node',
    'prettier',
  ]);
});
