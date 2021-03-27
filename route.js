const router = require('express').Router();
const cat = require('./model');

router
  .route('/')
  .post(async (req, res) => {
    try {
      const post = await cat.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
      });
      res.send(`Cat ${post.name} created with id: ${post._id}`);
    } catch (e) {
      res.send(`Failed to create the cat ${e.message}`);
    }
  })
  .get(async (req, res) => {
    res.send(await cat.find({}).where('age').gt(0));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne(
      { _id: req.params.id },
      { name: req.body.name }
    );
    res.status(200).send(`updated sucessfully ${mod.nModified} cat`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat`);
  });

module.exports = router;
