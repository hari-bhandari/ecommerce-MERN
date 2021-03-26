const express = require('express');
const router = express.Router();
const advancedResults=require('../../middleware/advancedResults')

// Bring in Models & Helpers
const Category = require('../../models/category');
const {auth} = require('../../middleware/auth');
const role = require('../../middleware/role');

router.post('/', auth, role.checkRole(role.ROLES.Admin), (req, res) => {
  const {name,description,image,products}=req.body
  if (!description || !name) {
    return res
      .status(400)
      .json({ error: 'You must enter description & name.' });
  }

  const category = new Category({
    name,
    description,
    image,products
  });

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }

    res.status(200).json({
      success: true,
      message: `Category has been added successfully!`,
      category: data
    });
  });
});

// fetch all categories api
router.get('/', advancedResults(Category),(req, res) => {
  res.status(200).json(res.advancedResults)
});

// fetch category api
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    const categoryDoc = await Category.findOne({ _id: categoryId }).populate(
      'brand'
    );

    if (!categoryDoc) {
      return res.status(404).json({
        message: 'No Category found.'
      });
    }

    res.status(200).json({
      category: categoryDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.put('/:id', auth, role.checkRole(role.ROLES.Admin), async (req, res) => {
  try {
    const categoryId = req.params.id;
    const update = req.body;
    const query = { _id: categoryId };

    await Category.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true,
      message: 'Category has been updated successfully!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.delete(
  '/:id',
  auth,
  role.checkRole(role.ROLES.Admin),
  async (req, res) => {
    try {
      const product = await Category.deleteOne({ _id: req.params.id });

      res.status(200).json({
        success: true,
        message: `Category has been deleted successfully!`,
        product
      });
    } catch (error) {
      res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
  }
);
module.exports = router;
