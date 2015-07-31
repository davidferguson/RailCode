/*

language.js

This file contains all the functions and commands used by the
RailCode programming language. When the user's code is sent to
/compiler/compiler.php, the returned value will be a JavaScript
translation of the code. For example, forwards -> forwards();
The functions and commands in this file are those used by the
RailCode language in order to move the train around the map, and
return values for functions like canMoveBackwards and switchLines.

*/

function forward()
{
	/*
	The JavaScript equivalent of "forwards" in RailCode. Essentially this function
	finds the name of the next station along the track, and adds it to a list, along
	with the number of the underground line we are currently on.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber + 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		trainStations.push("error");
		trainLines.push("error");
		errorToReturn = "Woops!\nThat's the end of the line. You can't go forwards any more.";
	}
	else
	{
		var oldTheStation;
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			oldTheStation = theStation;
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			if( theStation == undefined )
			{
				theStation = oldTheStation;
			}
		}
		if( theStation == undefined )
		{
			var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
		}
		var stationName = theStation.name;
		if( stationName == undefined )
		{
			theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
			if( theStation.length == 2 )
			{
				theStation = theStation[indexToPick][0];
				stationName = theStation.name;
			}
			else if( theStation.length == 1 && theStation[0] == 0 )
			{
				trainStations.push("error");
				trainLines.push("error");
				errorToReturn = "Woops!\nThat's the end of the line. You can't go forwards any more.";
			}
			else
			{
				trainStations.push("error");
				trainLines.push("error");
				alert("Woops! A branch can only have two options!");
			}
		}
		if( stationName != undefined )
		{
			//moveTrainToStation( stationName );
			currentStationName = stationName;
			trainStations.push(currentStationName);
			trainLines.push(currentLine);
		}
	}
}

function backward()
{
	/*
	The JavaScript equivalent of "backwards" in RailCode. Essentially this function
	finds the name of the previous station along the track, and adds it to a list,
	along with the number of the underground line we are currently on.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber - 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		trainStations.push("error");
		trainLines.push("error");
		errorToReturn = "Woops!\nThat's the end of the line. You can't go backwards any more.";
	}
	else
	{
		var oldTheStation;
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			oldTheStation = theStation;
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			if( theStation == undefined )
			{
				theStation = oldTheStation;
			}
		}
		if( theStation == undefined )
		{
			var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
		}
		var stationName = theStation.name;
		if( stationName == undefined )
		{
			theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
			if( theStation.length == 2 )
			{
				theStation = theStation[indexToPick][0];
				testStation = theStation;
				stationName = theStation.name;
			}
			else if( theStation.length == 1 && theStation[0] == 0 )
			{
				trainStations.push("error");
				trainLines.push("error");
				errorToReturn = "Woops!\nThat's the end of the line. You can't go backwards any more.";
			}
			else
			{
				trainStations.push("error");
				trainLines.push("error");
				alert("Woops! A branch can only have two options!");
			}
		}
		if( stationName != undefined )
		{
			//moveTrainToStation( stationName );
			currentStationName = stationName;
			trainStations.push(currentStationName);
			trainLines.push(currentLine);
		}
	}
}

function switchLine( toWhatLine )
{
	/*
	The JavaScript equivalent of "switch line [to] [the] <toWhatLine>" in RailCode.
	Essentially this function finds the name of the current station the train is on,
	and searches for other lines within the same activity that have the same station.
	If a destination line (toWhatLine) is defined, and the station is found on that
	line, the currentStation name will be appended to the trainStations array, and the
	new underground line number will be appended to the trainLines array. If a
	destination line is not defined, then this function will make sure that only one
	other line has the current station in it, and if it does, the current station and
	line number are appended to the appropriate arrays.
	*/
	var oldCurrentLine = currentLine;
	if( currentActivity.lines.length == 1 )
	{
		trainStations.push("error");
		trainLines.push("error");
		errorToReturn = "This activity only has 1 line. You can not switch line.";
	}
	else
	{
		if( toWhatLine )
		{
			toWhatLine = toWhatLine.toLowerCase();
			toWhatLine = toWhatLine.replace(" line", "");
			var foundLine = false;
			for( var x = 0; x < currentActivity.lines.length; x++ )
			{
				if( currentActivity.lines[x].name == toWhatLine )
				{
					foundLine = true;
					currentLine = x;
					var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
					if( stationAndBranchNumber )
					{
						//moveTrainToStation(currentStationName);
						trainStations.push(currentStationName);
						trainLines.push(currentLine);
					}
					else
					{
						trainStations.push("error");
						trainLines.push("error");
						errorToReturn = "Woops!\nI don't think you can switch to the '" + toWhatLine + "' line at this station.";
						currentLine = oldCurrentLine;
					}
				}
				else if( x == (currentActivity.lines.length-1) && foundLine == false )
				{
					trainStations.push("error");
					trainLines.push("error");
					errorToReturn = "Woops!\nI couldn't switch to the '" + toWhatLine + "' line.";
				}
			}
		}
		else
		{
			var stationLineStradles = 0;
			for( var x = 0; x < currentActivity.lines.length; x++ )
			{
				currentLine = x;
				var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
				if( stationAndBranchNumber )
				{
					stationLineStradles++;
				}
			}
			currentLine = oldCurrentLine;
			if( stationLineStradles == 2 )
			{
				var foundLine = false;
				for( var x = 0; x < currentActivity.lines.length; x++ )
				{
					if( x != currentLine )
					{
						if( ! foundLine )
						{
							currentLine = x;
							var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
							if( stationAndBranchNumber )
							{
								foundLine = true;
								trainStations.push(currentStationName);
								trainLines.push(currentLine);
								//moveTrainToStation(currentStationName);
							}
						}
					}
				}
			}
			else if( stationLineStradles == 1 )
			{
				trainStations.push("error");
				trainLines.push("error");
				errorToReturn = "Woops! The current station is only on one line, meaning that you can't switch lines.";
			}
			else
			{
				trainStations.push("error");
				trainLines.push("error");
				errorToReturn = "Woops! The current station has more than three lines crossing it, meaning that there is more than one possibility to switch onto. You'll need to specify which one you want.";
			}
		}
	}
}

function currentstation()
{
	/*
	Very simple function to return the name of the station the train is currently on
	*/
	return currentStationName;
}

function canmoveforwards()
{
	/*
	Very similar to forwards(), except instead of appending the name of the next
	station to an array, returns true if there is a station forwards and false if
	there is not.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber + 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		return false;
	}
	else
	{
		var oldTheStation;
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			oldTheStation = theStation;
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			if( theStation == undefined )
			{
				theStation = oldTheStation;
			}
		}
		if( theStation == undefined )
		{
			var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
		}
		var stationName = theStation.name;
		if( stationName == undefined )
		{
			theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
			if( theStation.length == 2 )
			{
				theStation = theStation[indexToPick][0];
				testStation = theStation;
				stationName = theStation.name;
			}
			else if( theStation.length == 1 && theStation[0] == 0 )
			{
				return false;
			}
			else
			{
				return false;
			}
		}
		if( stationName != undefined )
		{
			return true;
		}
	}
}

function canmovebackwards()
{
	/*
	Very similar to backwards(), except instead of appending the name of the prev
	station to an array, returns true if there is a station backwards and false if
	there is not.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber - 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		return false;
	}
	else
	{
		var oldTheStation;
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			oldTheStation = theStation;
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			if( theStation == undefined )
			{
				theStation = oldTheStation;
			}
		}
		if( theStation == undefined )
		{
			var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
		}
		var stationName = theStation.name;
		if( stationName == undefined )
		{
			theStation = currentActivity.lines[currentLine].locations[newStepNumber];
			for( var x = 0; x < stationAndBranchNumber.branchNumber.length-1; x++ )
			{
				theStation = theStation[stationAndBranchNumber.branchNumber[x]];
			}
			if( theStation.length == 2 )
			{
				theStation = theStation[indexToPick][0];
				testStation = theStation;
				stationName = theStation.name;
			}
			else if( theStation.length == 1 && theStation[0] == 0 )
			{
				return false;
			}
			else
			{
				return false;
			}
		}
		if( stationName != undefined )
		{
			return true;
		}
	}
}

function switchlines()
{
	/*
	Returns an array of the underground lines that can be switched to from the current
	station.
	*/
	var oldCurrentLine = currentLine;
	var stationLineStradles = [];
	for( var x = 0; x < currentActivity.lines.length; x++ )
	{
		currentLine = x;
		var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
		if( stationAndBranchNumber )
		{
			stationLineStradles.push(currentActivity.lines[x].name);
		}
	}
	currentLine = oldCurrentLine;
	return stationLineStradles;
}