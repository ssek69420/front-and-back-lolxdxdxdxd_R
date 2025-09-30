const request = require('supertest');
const app = require('../src/app');

test('GET /hello returns Hello World', async () => {
  const res = await request(app).get('/hello');
  expect(res.status).toBe(200);
  expect(res.body.msg).toBe('Hello World');
});

test('POST /sum sum correctly', async () => {
  const res = await request(app)
    .post('/sum')
    .send({ a: 2, b: 3 });
  expect(res.status).toBe(200);
  expect(res.body.resultado).toBe(5);
});

//alright my will to live just ran out
//im done
//im tired
//goobye
//^^ lmao i wrote goobye
//im such a silly goober