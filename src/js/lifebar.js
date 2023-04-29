export default function lifeBar(value) {
  if (!value || !value.health) {
    return 'Передано некорректное значение';
  }

  if (value.health > 50) {
    return 'healthy';
  }

  if (value.health <= 50 && value.health > 15) {
    return 'wounded';
  }

  if (value.health <= 15) {
    return 'critical';
  }

  return 'Значение health некорректное';
}
