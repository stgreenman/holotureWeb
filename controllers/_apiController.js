var sql = require('mssql');

// connection string "mssql://capstone:<PASSWORD>@holoture.database.windows.net/Holoture?encrypt=true";
var config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: 'holoture.database.windows.net',
  database: 'Holoture',
  options: {
    encrypt: true,
  }
}

var connection = new sql.Connection(config);
connection.connect();

exports.getCatalog = function(req, res, next) {
    new sql.Request(connection).query('SELECT * FROM Product').then(function(products) {
        res.status(200).json(products);
    }).catch(function(err) {
        res.status(500).json({"err": err});
    });
}

exports.getFolders = function(req, res, next) {
    new sql.Request(connection).query('SELECT * FROM Folder').then(function(folders) {
        res.status(200).json(folders);
    }).catch(function(err) {
        res.status(500).json({"err": err});
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
        new sql.Request(connection).input('name', sql.VarChar, post.name).query('INSERT INTO Folder (name) VALUES (@name)').then(function(folders) {
          res.status(200).json({"success": true});
        }).catch(function(err) {
            res.status(500).json({"err": err});
        });
    }
  });
}

exports.addProductToFolder = function(req, res, next) {
  var body = '';
  req.on('data', function (data) {
    body += data;

    if (body.length > 1e6)
      req.connection.destroy();
  });

  req.on('end', function() {
    var post = JSON.parse(body);
    if (post.name !== "") {
        new sql.Request(connection)
          .input('folderId', sql.Int, post.folderId)
          .input('productId', sql.Int, post.productId)
          .query('INSERT INTO FolderHasProduct (folderId, productId) VALUES (@folderId, @productId)')
          .then(function(folder) {
          res.status(200).json({"success": true});
        }).catch(function(err) {
            res.status(500).json({"err": err});
        });
    }
  });
};

exports.removeProductFromFolder = function(req, res, next) {
  var body = '';
  req.on('data', function (data) {
    body += data;

    if (body.length > 1e6)
      req.connection.destroy();
  });

  req.on('end', function() {
    var post = JSON.parse(body);
    if (post.name !== "") {
        new sql.Request(connection)
          .input('folderId', sql.Int, post.folderId)
          .input('productId', sql.Int, post.productId)
          .query('DELETE FROM FolderHasProduct WHERE folderId = @folderId AND productId = @productId')
          .then(function(folder) {
          res.status(200).json({"success": true});
        }).catch(function(err) {
            res.status(500).json({"err": err});
        });
    }
  });
};

exports.getFolderProducts = function(req, res, next) {
    new sql.Request(connection)
      .input('folderId', sql.Int, req.query.folderId)
      .query('SELECT Product.* FROM Product JOIN FolderHasProduct ON Product.id = FolderHasProduct.productId AND folderId = @folderId;')
      .then(function(products) {
        res.status(200).json(products);
    }).catch(function(err) {
        res.status(500).json({"err": err});
    });
};

exports.getCustomerRegistry = function(req, res, next) {
  new sql.Request(connection)
    .input('folderId', sql.Int, 1)
    .query('SELECT ProductHasMaterial.* FROM FolderHasProduct JOIN ProductHasMaterial ON FolderHasProduct.productId = ProductHasMaterial.productId WHERE FolderHasProduct.folderId = @folderId;')
    .then(function(products) {
      var response = {};
      response.customerList = {};
      response.customerList.CustomerName = "Logan";
      response.customerList.CustomerID = 1;
      response.customerList.furnPrefs = [];

      var furniture = [];
      products.forEach(function (val) {
        if (furniture[val.productId]) {
          furniture[val.productId].push(val.materialId);
        }
        else {
          furniture[val.productId] = [val.materialId];
        }
      });
      for (var k in furniture) {
        response.customerList.furnPrefs.push({
          "FurnitureID": k,
          "MaterialIDs": furniture[k],
        });
      }
      res.status(200).json(response);
  }).catch(function(err) {
      res.status(500).json({"err": err});
  });
}
