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

        function makeArmy() {
            let shooters = [];

            for (let i = 0; i < 10; i++) {
                let shooter = function() {
                    alert(i);
                }
                shooters.push(shooter);
            }
            return shooters;
        }
        
        let army = makeArmy();

        army[0]();
        army[1]();
        army[2]();
    </script>
</body>
</html>