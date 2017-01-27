const express = require('express');
const _apiController = require('./controllers/_apiController');

module.exports = function(app) {
  const apiRoutes = express.Router();

  // routes go here
  app.use('/api', apiRoutes);
  apiRoutes.get('/getCatalog', _apiController.getCatalog);
  apiRoutes.get('/getFolder', _apiController.getFolder);
}
