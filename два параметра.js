<!doctype html>
<html lang='ru'>
	<head>
		<meta charset='utf-8'>
	</head>
	<body>
		<script>
			'use strict';
			function sum(a) {
				function second(b) {
					return a + b;
				}
				return second;
			}

			let a = 2;
			let b = 3;
			console.log(sum(a)(b));
		</script>
	</body>
</html>