/*
calculatePoints.js

This file contains functions and objects that generate a point/rank for
the user's code

It is easily expandable and has support for both good and bad programming
practises

*/

function calculatePoints(code)
{
	/*
	This function takes in the code the user has written as
	a parameter, and uses rules set out in the pointStrings
	object to give the code a rank, which is then returned
	*/
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
	if (points > 100)
	{
		return 100;
	}
	else if (points < 0)
	{
		return 0;
	}
	else
	{
		return points;
	}
}

var pointStrings = {
	/*
	This object contains a list of rules that generate the user's points
	It contains a list of strings and the number of points that should
	be added to the users score if they include that string in their code
	*/
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
		10,
		5,
		7,
		5,
		-3,
		-4,
		-4,
		-5,
		-5,
		-1,
		-5,
		-5
	]
}