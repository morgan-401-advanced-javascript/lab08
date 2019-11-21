'use strict';

const express = require('express');
let db = require('../lib/db.js');
const logger = require('../../logger.js');

let router = express.Router();

/**
 * Route to request a specific person
 * @group Teams 
 * @route GET '/teams'
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/', (req, res, next) => {
  let count = db.teams.length;
  let results = db.teams;
  res.json({ count, results });
});
/**
 * Route to request a specific person
 * @group Teams 
 * @route GET '/teams/:id'
 * @param {integer}  - teams id
 * @security basicAuth
 * @returns {object} 200 { record: {id: number, name: string, color: string}}
 * @returns {Error}  500 - Server error
 */
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.teams.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});
/**
 * Route to request a specific person
 * @group Teams 
 * @route DELETE '/teams/:id'
 * @param {integer}  - teams id
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.teams.filter(record => record.id === parseInt(id));
  let index = db.teams.indexOf(record);
  let results = db.teams;
  results.slice(index);
  let count = db.teams.length;
  res.json({ count, results });
    
});
/**
 * Route to request a specific person
 * @group Teams 
 * @route PUT '/teams/:id'
 * @param {integer}  - teams id
 * @security basicAuth
 * @returns {object} 200 { record: {id: number, name: string, color: string}}
 * @returns {Error}  500 - Server error
 */
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let updatedTeam = req.body;
  let updatedDb = [];
  // loop to replace old data with new data
  db.teams.forEach(team => {
    if (team.id === id) {
      updatedDb.push(updatedTeam);
    } else {
      updatedDb.push(team);
    }
  });
  db.teams = updatedDb;
  let record = db.teams.filter(record => record.id === parseInt(id));
    
  res.json(db.teams.id[0]);
});

module.exports = router;