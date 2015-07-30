function calculatePoints(code)
{
	var points = 50;
	for (var i = 0; i < pointStrings.strings.length; i++)
	{
		var startChar = 0;
		while (code.indexOf(pointStrings.strings[i], startChar) != -1)
		{
			points += pointStrings.points[i];
			startChar = code.indexOf(pointStrings.strings[i], startChar) + 1;
		}
	}
	return points;
}

var pointStrings = {
	strings: [
		'then\nswitch line to',
		'repeat',
		'while',
		'if',
		'end repeat\nrepeat',
		'forwards\nforwards',
		'backwards\nbackwards',
		'forwards\nbackwards',
		'backwards\nforwards',
		'\n',
		'repeat 1 time',
		'repeat 0 time'
	],
	points: [
		7,
		2,
		2,
		3,
		-3,
		-4,
		-4,
		-5,
		-5,
		-2,
		-5,
		-5
	]
}