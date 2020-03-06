
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_type: 'brand', company_name: 'google', country:'India', city: 'Banglore', contact_person: 'mohan', email:'msmohandg@gmail.com', mobile:'8861696163', image_url:'1.jpg', industry:'software', website:'google.com', description:'search engine'},
        {id: 2, user_type: 'user', company_name: 'google', country:'India', city: 'Banglore', contact_person: 'mohan', email:'msmohandg+1@gmail.com', mobile:'8861696163', image_url:'1.jpg', industry:'software', website:'google.com', description:'search engine'}
      ]);
    });
};
