const express = require('express');
const router = express.Router();
const redis = require('redis');
const {get} = require('../redis/index');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const addedTodos = await get('added_todos')

  res.status(200).send({
    added_todos: Number(addedTodos || 0)
  })
})

module.exports = router;
