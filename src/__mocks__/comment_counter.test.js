const axios = require('axios');
const counter = require('./comment_counter.js');
jest.mock('axios');

axios
  .get
  .mockResolvedValue({ data: { length: 2 } });

describe('comment counter tests', () => {
  test('comments length', async () => {
    const result = await counter.commentCounter();
    expect(result).toBe(2)
    
  })
  test('if api was called', async () => {
    const result = await counter.commentCounter();
    
    expect(axios.get).toHaveBeenCalled()
    
  })
  test('test if link is correct', async () => {
    const result = await counter.commentCounter();
    
    
    expect(axios.get).toHaveBeenCalledWith('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MYBVMigQRLz45iJjyYTt/comments?item_id=7')
  })
});

// describe('comment counter tests', () => {
//   test('comments', async () => {
//     const result = await counter.commentCounter();
//     expect(result).toBe(6)
//   })
// })
