const Sequelize = require('sequelize');
const { isEmpty } = require('lodash');
const connection = require('../../postgresqlconnection');

const { Model, Op } = Sequelize;

/**
|-------------------------------------------------------------
| Category  Model.
|-------------------------------------------------------------
*/

const Category = Model;

Category.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
  deletedAt: {
    type: Sequelize.DATE,
    defaultValue: null,
    allowNull: true
  }
}, {
  sequelize: connection,
  modelName: 'Category',
  timestamps: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'category'
})

export default Category;