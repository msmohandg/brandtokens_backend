exports.up = function(knex, Promise) {
	knex.raw('create extension if not exists "uuid-ossp"');

	return knex.schema.createTable('users', table => {
        table.increments();
        table.text('user_type');
        table.text('company_name');
        table.text('country');
        table.text('city');
        table.text('contact_person');
        table
			.text('email')
			.unique()
            .notNullable();
        table.text('mobile');
        table.text('image_url');
        table.text('industry');
        table.text('website');
        table.text('description');
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at');
        table.boolean('is_active').defaultTo(true);
	});
};

exports.down = function(knex, Promise) {
	knex.raw('drop extension if exists "uuid-ossp"');
	return knex.schema.dropTableIfExists('users');
};