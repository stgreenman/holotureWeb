var catalogProducts = [
                {
                  id: 1,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false
                },
                {
                  id: 2,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false
                }
              ];

exports.getCatalog = function(req, res, next) {
  res.status(200).json(catalogProducts)
}
