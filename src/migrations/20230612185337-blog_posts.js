'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id:
      {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: 1,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published:
      {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated:
      {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
