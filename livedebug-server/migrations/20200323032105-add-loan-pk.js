'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return Promise.all([
      queryInterface.addConstraint('Loans', ['MemberId'], {
        type: 'foreign key',
        name: 'Loans_MemberId_fk',
        references: { //Required field
          table: 'Members',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('Loans', ['BookId'], {
        type: 'foreign key',
        name: 'Loans_BookId_fk',
        references: { //Required field
          table: 'Books',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
     ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return Promise.all([
       queryInterface.removeConstraint('Loans','Loans_MemberId_fk'),
       queryInterface.removeConstraint('Loans','Loans_BookId_fk')
     ]);
  }
};
