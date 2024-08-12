const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');

router.get('/subcategories', subcategoryController.getAllSubCategories);
router.get('/subcategory/:id', subcategoryController.getSubCategoryById);
router.post('/subcategory', subcategoryController.createSubCategory);
router.put('/subcategory/:id', subcategoryController.updateSubCategory);
router.delete('/subcategory/:id', subcategoryController.deleteSubCategory);

module.exports = router;