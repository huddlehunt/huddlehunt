const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
// for more info, please look at https://github.com/Sly777/ran/blob/master/docs/Routing.md
//
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------

routes.add('details', '/details/:postId/:postTitle');
routes.add('create', '/create_post');
routes.add('signin', '/sign_in');
routes.add('signup', '/sign_up');
routes.add('user', '/user/:username');

// ------------ ROUTES ---------------
//
//

module.exports = routes;
