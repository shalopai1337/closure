<!doctype html>
<html lang='ru'>
    <head>
        <meta charset='utf-8'>
        <title> Test code </title>
    </head>
    <body>
        <script>
            'use strict';
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let newArr = [];

        /*  function check(a, b) {

            Альтернативное решение с функцией check().
            Оставлено для демонстрации другого подхода.
            В финальной версии используется inBetween и inArray.

                let minElement = 0;
                let maxElement = 0;

                if (b > a) {
                    minElement = a;
                    maxElement = b;
                    return {min: minElement, max: maxElement};
                }

                if (b === a) {
                    throw new Error('Переменные не должны быть равны');
                }

                if (b < a) {
                    minElement = b;
                    maxElement = a;
                    return {min: minElement, max: maxElement};
                }
            }

            let result = check(a, b);
            let totalMin = result.min;
            let totalMax = result.max;
        */

            function inBetween(a, b) {
                function f(element) {
                    if (element <= b && element >= a) {
                        console.log(element);
                        return true;
                    }
                }    
                return f;
            }

            function inArray(arr) {
                function g(element) {
                    if (arr.includes(element)) {
                        console.log(element);
                        return true;
                    }
                }
                return g;    
            }

            console.log( arr.filter(inBetween(3, 6)) ); 
            console.log( arr.filter(inArray([1, 2])) ); 
        </script>
    </body>
</html>
