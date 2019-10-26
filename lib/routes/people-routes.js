'use strict';

const express = require('express');
const router = express.Router(); // app
const logger = require('../../logger.js');

const People = require('../models/people.js');
let people = new People();

// GET with Promises
/**
 * Route to request a specific person
 * @group People 
 * @route GET '/people'
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/', (req, res, next) => {
  people.getFromField({}).then(data => {
    res.send(data);
  });
});

// GET :id with Async/Await
// people/Sarah
/**
 * Route to request a specific person
 * @group People 
 * @route GET '/people/:id'
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/:id', async (req, res, next) => {
  let data = await people.get(req.params.id);
  if (data && data._id) res.send(data);
  else next('route');
});

// GET :firstName with Async/Await
/**
 * Route to request a specific person
 * @group People 
 * @route GET '/people/:firstName-:lastName'
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/:firstName-:lastName', async (req, res, next) => {
  let data = await people.getFromField(req.params);
  res.send(data);
});

module.exports = router;
