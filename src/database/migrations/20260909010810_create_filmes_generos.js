/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("filmes_generos", (table) => {
        table.increments("id").primary()     
 
  // Relações
    table.integer("filmes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("filmes")
        .onDelete("CASCADE")
    
    table.integer("genero_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("generos")
         .onDelete("CASCADE")

    table.timestamps(true, true)
})
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("filmes_generos")
  
};

exports.config = {
    transaction:false
}
