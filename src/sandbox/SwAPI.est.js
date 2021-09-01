import SwAPI from './SwAPI';

let api;

beforeEach(() => {
  api = new SwAPI();
});

global.fetch = jest.fn(()=> Promise.resolve({
  json: () => Promise.resolve({result: "any result"})
})
);

//let api = new SwAPI();

test('getPerson returns non-null result', async () => {
  let result = await api.getPerson(1)
  
    expect(result).not.toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
});