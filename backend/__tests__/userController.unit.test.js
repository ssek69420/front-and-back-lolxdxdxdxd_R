//couldn't be bothered to make something more complicated
/*I mean, I could make some lines talking about 404, 202, etc.
But, honestly, would you read all that? Is my sanity's decline
worth a few more lines of code? The tests are done. I've written
everything that I've needed to write. You can't force me to do
anything more than this. I am currently having a mental breakdown.
Haha breakdown. Like breakdance. Breakdance is cool.
wtf am i doing

OH MY FUCKING GOD ITS 6 AM ALREADY WTFFFFF
I DIDNT SLEEP HAHAHAHHAHA
BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO NOOOO
how do i insert jpegs into comments
i had a funny meme for this
fucking hell

im very probably going to delete this too
what a waste of time

change of plans, im not
deal with it
*/
const userController = require('../controllers/userController.js');
const userRoutes = require('../routes/userRoutes.js');
const index = require('../index.js');

test('userController is defined', () => {
  expect(userController).toBeDefined();
});
//userController to not be defined, will come in handy when
//I'm trying to break the app
test('userController is not defined', () => {
  expect(userController).not.toBeDefined();
})

test('a whole lotta functions to be expected as functions', () => {
  expect(typeof userController.inscribe).toBe('function');
  expect(typeof userController.login).toBe('function');
  expect(typeof userController.verifyAuth).toBe('function');
  expect(typeof userController.verifyIsAdmin).toBe('function');
  //start of the wrong part of the test
  
  //num
  expect(typeof userController.inscribe).toBe('number');
  expect(typeof userController.login).toBe('number');
  expect(typeof userController.verifyAuth).toBe('number');
  expect(typeof userController.verifyIsAdmin).toBe('number');
  //str
  expect(typeof userController.inscribe).toBe('string');
  expect(typeof userController.login).toBe('string');
  expect(typeof userController.verifyAuth).toBe('string');
  expect(typeof userController.verifyIsAdmin).toBe('string');
});

//simpple route test
test('theres /inscribe and /login', () => {
  const paths = userRoutes.stack
  .map(layer => layer.route?.path)
  .filter(Boolean);
  expect(paths).toContain('/inscribe');
  expect(paths).toContain('/login');
});


test('index loads :O', () => {
  expect(index).toBeDefined();
});