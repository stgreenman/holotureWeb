var catalogProducts = [
                {
                  id: 1,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/WestElmCouch/westelm.png",
                  title: "Westelm Sofa",
                  description: "This couch is an excellent choice because it's just so darn comfortable!",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 2,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/LoveSeat/loveseat.png",
                  title: "Love seat",
                  description: "This love seat is a perfect choice as an accent chair.",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 3,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/AllureChair.JPG",
                  title: "Allure Chair",
                  description: "This chair is so very alluring.",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 4,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GliderRecliner.JPG",
                  title: "Glider Recliner",
                  description: "Glide in this recliner all day long.",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 5,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/GordonAccentChair.JPG",
                  title: "Gordon Accent Chair",
                  description: "This chair will be the perfect accent!",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 6,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/MotionSofa.JPG",
                  title: "Motion Sofa",
                  description: "Dont get motion sickness in this motion sofa!",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 7,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/SmallFullSleeper.JPG",
                  title: "Small Full Sleeper",
                  description: "This sleepr may be small but it is definitely full!",
                  selected: false,
                  categoryId: 1,
                },
                {
                  id: 8,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/PippaAccentChair.JPG",
                  title: "Pippa Accent Chair",
                  description: "A great accent chair for the living room!",
                  selected: false,
                  categoryId: 0,
                },
                {
                  id: 9,
                  imageSrc: "https://s3-us-west-2.amazonaws.com/holoture/OxfordRecliner.JPG",
                  title: "Oxford Recliner",
                  description: "High class recliner for the living room. So comfortable!",
                  selected: false,
                  categoryId: 0,
                },
              ];

exports.getCatalog = function(req, res, next) {
  res.status(200).json(catalogProducts)
}
