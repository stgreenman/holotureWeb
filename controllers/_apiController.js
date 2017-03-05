var sql = require('mssql');

const customerRegistry = {
  customerList:[
    {
      CustomerName:"Jim",
      CustomerID:0,
      furnPrefs:[
        {
          FurnitureID:1,
          MaterialIDs:[1,2,2,2,2,2,2,2,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        },
        {
          FurnitureID:2,
          MaterialIDs:[1,2]
        }
      ]
    }
  ]
};

exports.getCatalog = function(req, res, next) {
  sql.connect("mssql://capstone:<PASSWORD_HERE>@holoture.database.windows.net/Holoture?encrypt=true").then(function() {
      // Query
      new sql.Request().query('SELECT * FROM Product').then(function(products) {
          res.status(200).json(products);
      }).catch(function(err) {
          res.status(500).json({"err": err});
      });
  }).catch(function(err) {
      // ... connect error checks
      res.status(500).json({"connected": false, "err": err});
  });
}

exports.getFolders = function(req, res, next) {
  sql.connect("mssql://capstone:<PASSWORD_HERE>@holoture.database.windows.net/Holoture?encrypt=true").then(function() {
      // Query
      new sql.Request().query('SELECT * FROM Folder').then(function(folders) {
          res.status(200).json(folders);
      }).catch(function(err) {
          res.status(500).json({"err": err});
      });
  }).catch(function(err) {
      // ... connect error checks
      res.status(500).json({"connected": false, "err": err});
  });
}

exports.createFolder = function(req, res, next) {
  var body = '';
  req.on('data', function (data) {
    body += data;

    if (body.length > 1e6)
      req.connection.destroy();
  });

  req.on('end', function() {
    var post = JSON.parse(body);
    if (post.name !== "") {
      sql.connect("mssql://capstone:<PASSWORD_HERE>@holoture.database.windows.net/Holoture?encrypt=true").then(function() {
          // Query
          new sql.Request().input('name', sql.VarChar, post.name).query('INSERT INTO Folder (name) VALUES (@name)').then(function(folders) {
            res.status(200).json({"success": true});
          }).catch(function(err) {
              res.status(500).json({"err": err});
          });
      }).catch(function(err) {
          // ... connect error checks
          console.log(err);
          res.status(500).json({"connected": false, "err": err});
      });
    }
  });
}

exports.getCustomerRegistry = function(req, res, next) {
  res.status(200).json(customerRegistry);
}
