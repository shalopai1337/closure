<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Сортируем массивы </title>
</head>
<body>
    <script>
        'use strict';
        let users = [
            { name: "Иван", age: 20, surname: "Иванов" },
            { name: "Пётр", age: 18, surname: "Петров" },
            { name: "Анна", age: 19, surname: "Каренина" }
        ];

        function byField(field) {
            function f(a, b) {
                return a[field] > b[field] ? 1 : a[field] === b[field] ? 0 : -1;
            }
            return f;
        }

        users.sort(byField('name')); // сортировка по имени
        users.sort(byField('age'));  // сортировка по возрасту
    </script>
</body>
</html>