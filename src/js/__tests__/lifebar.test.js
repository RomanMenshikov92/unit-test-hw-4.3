import lifeBar from '../lifebar';

test('lifeBar function return text value', () => {
  const healthy = lifeBar({ name: 'Маг', health: 90 });
  const wounded = lifeBar({ name: 'Маг', health: 40 });
  const critical = lifeBar({ name: 'Маг', health: 10 });
  const errorValue = lifeBar(undefined);
  const errorValueHealth = lifeBar({ name: 'Маг', health: '10o' });

  expect(healthy).toBe('healthy');
  expect(wounded).toBe('wounded');
  expect(critical).toBe('critical');
  expect(errorValue).toBe('Передано некорректное значение');
  expect(errorValueHealth).toBe('Значение health некорректное');
});
