var strData = [
	'SELECT',
	'FROM',
	'*',
	'INSERT INTO',
	'VALUES',
	'UPDATE',
	'SET',
	'WHERE',
	'DELETE',
	'AND',
	'OR',
	'DISTINCT',
	'ORDER BY',
	'ASC',
	'DESC',
	'LENGTH',
	'REPLACE',
	'CURRENT_DATE',
	'SUM',
	'COUNT',
	'AS',
	'JOIN',
	'LEFT JOIN',
	'<a>',
	'<p>',
	'<body>',
	'<title>',
	'<head>',
	'<html>',
	'<li>',
	'<tbody>',
	'<tr>',
	'<td>',
	'<th>',
	'<table>',
	'<img>',
	'<style>',
	'<span>',
	'<form>',
	'<select>',
	'<input>',
	'<button>',
	'<textarea>',
	'<label>',
	'<script>',
	'<b>',
	'#include <stdio.h>',
	'int main(void)',
	'{',
	'printf("hello world\\n");',
	'return 0;',
	'}',
	'#include <stdio.h>',
	'int main(void)',
	'{',
	'int i, j;',
	'for (i=1; i<=5; i++){',
	'for (j=0; j<i; j++){',
	'printf("*");',
	'}',
	'printf("\\n");',
	'}',
	'return 0;',
	'}',
	'#include <stdio.h>',
	'#include <time.h>',
	'int sleep(unsigned long x)',
	'{',
	'clock_t c1=clock( c2;',
	'do{',
	'if((c2 = clock()) == (clock_t)-1)',
	'return 0;',
	'}while (1000.0 * (c2 - c1) / CLOCKS_PER_SEC < x);',
	'return 1;',
	'}',
	'int main(void)',
	'{',
	'int i;',
	'printf("ABCDEFG");',
	'for (i=0; i<7; i++){',
	'sleep(1000);',
	'printf("\b \b");',
	'fflush(stdout);',
	'}',
	'return 0;',
	'}',
	'#include <stdio.h>',
	'struct xydata {',
	'int x;',
	'int y;',
	'};',
	'void sikaku(struct xydata n)',
	'{',
	'printf("menseki = %d\\n", n.x * n.y);',
	'}',
	'int main(void)',
	'{',
	'struct xydata dt;',
	'dt.x = 10;',
	'dt.y = 25;',
	'sikaku(dt);',
	'return 0;',
	'}',
	'#include <stdio.h>',
	'double ave(double x, double y);',
	'int main(void)',
	'{',
	'double a, b, avdt;',
	'a = 11.11;',
	'b = 33.33;',
	'avdt = ave(a,b);',
	'printf("a=%f b=%f average=%f\\n", a, b, avdt);',
	'return 0;',
	'}',
	'double ave(double x, double y)',
	'{',
	'double wk;',
	'wk = (x + y) / 2.0;',
	'return wk;',
	'}'
];
