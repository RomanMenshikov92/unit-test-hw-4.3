import getLevel from '../getlevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel send', () => {
  fetchData.mockReturnValue({});

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel status ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '3' });

  const result = getLevel(3);
  expect(result).toBe('Ваш текущий уровень: 3');
});

test('getLevel status false', () => {
  fetchData.mockReturnValue({ status: 'false' });

  const result = getLevel(3);
  expect(result).toBe('Информация об уровне временно недоступна');
});
