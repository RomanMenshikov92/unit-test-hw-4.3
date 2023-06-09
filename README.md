# Домашнее задание к лекции «Unit-тестирование»

[![Build status](https://ci.appveyor.com/api/projects/status/x6s266h8q4fngwdm?svg=true)](https://ci.appveyor.com/project/RomanMenshikov92/unit-test-hw-4-3)

## Mocking (задача со звёздочкой)

Важно: данная задача не является обязательной

### Легенда

Вы написали функцию, которая взаимодействует с функцией fetchData (достаточно тяжёлой, т.к. взаимодействует с удалённым веб-сервером). Вы хотите протестировать свою функцию (в том числе на то, как она обрабатывает ошибки) и, чтобы «отвязаться» от этой тяжёлой зависимости, решили использовать механизм «mocking'а».

### Описание

Дан массив с информацией о героях, например:

```javascript
// Демо-реализация функции fetchData (модуль http):
export default function fetchData(url) {
  throw new Error("Mock this!");
}
```

```javascript
// Ваша функция:
import fetchData from "./http";

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === "ok") {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return `Информация об уровне временно недоступна`;
}
```

Сделайте моки для функции fetchData и напишите тесты таким образом, чтобы обеспечить 100% покрытие тестами функции getLevel по строкам.

Обратите внимание: тесты вам надо писать для функции getLevel
