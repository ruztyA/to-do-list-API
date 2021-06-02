const Category = require('../../../models/Category/index');
const { Op } = require('sequelize');

/**
 * Add New Category
 * @param {String} value
 * @returns
 */
const addNewCategory = async (value) => {
  const result = await Category.Create({ name: value });
  return result;
};

/**
 * Get all category
 * @returns {Object[]}
 */
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

/**
 * Get specific category based on Id
 * @param {String} categoryId
 * @returns {Object}
 */
const getCategory = async (categoryId) => {
  const category = await Category.findOne({
    where: { id: { [Op.eq]: categoryId } }
  });

  return category;
}

/**
 * Add update category
 * @param {String} id
 * @param {String} categoryName
 * @returns {Object}
 */
const updateCategory = async (id, categoryName) => {
  const category = await Category.update(
    { name: categoryName },
    { where: { id: { [Op.eq]: id } } }
  );
  return category;
};

/**
 * Delete specific category by Id
 * @param {String} id
 * @returns {Object}
 */
const deleteCategory = async (id) => {
  const deleteDateTime = new Date();

  const category = await Category.findOne({
    where: { id: { [Op.eq]: id } }
  });

  category.deletedAt = deleteDateTime;
  category.save();

  // const category = await Category.update(
  //     { deteledAt: deleteDateTime },
  //     { where: { id: { [Op.eq]: id }}}
  //     )
  return category;
}

module.exports = { addNewCategory, getCategories, getCategory, updateCategory, deleteCategory };
