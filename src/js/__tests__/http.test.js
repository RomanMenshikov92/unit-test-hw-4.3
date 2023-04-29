import fetchData from '../http';

test('http return Error', () => {
  const url = 'https://server/user/1';

  expect(() => { fetchData(url); }).toThrow(url);
});
