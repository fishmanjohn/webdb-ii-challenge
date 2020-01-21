
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>{
        tbl.increments();
        tbl.string('vin').notNullable().unique();
        tbl.string('make').notNullable()
        tbl.string('model').notNullable()
        tbl.integer('odometer milage').notNullable()
        tbl.string('transmission type')
        tbl.string('title status')
    } )
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
