const axios = require('axios');
const counter = require('./counter.js');
jest.mock('axios');

axios
  .get
  .mockResolvedValue({ data: { length: 6 } });

describe('test the count', () => {
  test('should ', async () => {
    const result = await counter.showCount();
    expect(result).toBe(6);
  });
  // test('comments', async () => {
  //   const result = await counter.commentCounter();
  //   expect(result).toBe(6)
  // })
});

// describe('comment counter tests', () => {
//   test('comments', async () => {
//     const result = await counter.commentCounter();
//     expect(result).toBe(6)
//   })
// })
