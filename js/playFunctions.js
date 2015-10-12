/*

playFunctions.js

This file contains all the functions required to run the "play"
mode of main.php. This includes the functions required to generate
the random start and end stations, the function that resets the
train back to the start of the current play activity, and also
the function that creates a new challenge on the server.

*/

function generateStartStation()
{
	/*
	This function returns a randomly chosen station and the line
	that this randomly chosen station is on
	*/
	var startStation = "";
	var theLine = "";
	while( startStation == "" && closedStationList.indexOf(startStation) == -1 )
	{
		theLine = Math.floor((Math.random() * currentActivity.lines.length));
		var theIndex = currentActivity.lines[theLine].locations;
		while( theIndex.length != 1 )
		{
			theIndex = theIndex[Math.floor((Math.random() * theIndex.length))];
		}
		if( theIndex == 0 || theIndex == [0] || theIndex[0] == 0 )
		{
			theLine = Math.floor((Math.random() * currentActivity.lines.length));
			theIndex = currentActivity.lines[theLine];
		}
		else
		{
			startStation = theIndex[0].name;
		}
	}
	return [startStation, theLine];
}

function generateEndStation( startStation, lineNumber )
{
	/*
	The end station, unlike the start station, cannot be randomly chosen
	due to the possibility that this randomly chosen station could be
	inaccessable from the start station because maintence works / other
	problems on the physical london underground cause stations in RailCode
	to  become closed.

	Therefore this function rapidly simulates the train, begining at the start
	station and randomly moving it around, switching lines and changing
	headings in order to find an end station that seems random to the end user
	*/
	var prevCurrentStationName = currentStationName;
	var prevCurrentLine = currentLine;
	
	var nextStation;
	var prevStation;
	
	currentLine = lineNumber;
	currentStationName = startStation;
	var currentDirection = Math.floor((Math.random()*2));
	if( ( currentDirection == 0 && ! canmoveforwards() ) || ( currentDirection == 1 && ! canmovebackwards() ) )
	{
		currentDirection = ! currentDirection;
	}
	while( 1 )
	{
		if( hasForwardBranch() && currentDirection == 0 )
		{
			indexToPick = Math.floor((Math.random()*2));
			nextStation = getNextStation();
			if( canmoveforwards() )
			{
				if( closedStationList.indexOf(nextStation) == -1 )
				{
					currentStationName = nextStation;
				}
			}
			else
			{
				if( switchlines().length != 1 )
				{
					var possibleLines = [];
					for( x = 0; x < switchlines().length; x++ )
					{
						if( ! switchlines()[x] == currentActivity.lines[currentLine].name )
						{
							possibleLines.push( switchlines()[x] );
						}
					}
					var lineToSwitchTo = possibleLines[Math.floor((Math.random()*possibleLines.length))];
					if( ( lineToSwitchTo != undefined ) || ( lineToSwitchTo == undefined && switchlines().length == 2 ) )
					{
						currentLine = lineToSwitchTo;
						switchLine(lineToSwitchTo);
						currentDirection = Math.floor((Math.random()*2));
						if( ( currentDirection == 0 && ! canmoveforwards() ) || ( currentDirection == 1 && ! canmovebackwards() ) )
						{
							currentDirection = ! currentDirection;
						}
					}
				}
				else
				{
					var newCurrentStationName = currentStationName;
					var newCurrentLine = currentLine;
					currentStationName = prevCurrentStationName;
					currentLine = prevCurrentLine;
					return [newCurrentStationName, newCurrentLine];
				}
			}
		}
		else if( hasBackwardBranch() && currentDirection == 1 )
		{
			indexToPick = Math.floor((Math.random()*2));
			prevStation = getPrevStation();
			if( canmovebackwards() )
			{
				if( closedStationList.indexOf(prevStation) == -1 )
				{
					currentStationName = prevStation;
				}
			}
			else
			{
				if( switchlines().length != 1 )
				{
					var possibleLines = [];
					for( x = 0; x < switchlines().length; x++ )
					{
						if( ! switchlines()[x] == currentActivity.lines[currentLine].name )
						{
							possibleLines.push( switchlines()[x] );
						}
					}
					var lineToSwitchTo = possibleLines[Math.floor((Math.random()*possibleLines.length))];
					if( ( lineToSwitchTo != undefined ) || ( lineToSwitchTo == undefined && switchlines().length == 2 ) )
					{
						currentLine = lineToSwitchTo;
						switchLine(lineToSwitchTo);
						currentDirection = Math.floor((Math.random()*2));
						if( ( currentDirection == 0 && ! canmoveforwards() ) || ( currentDirection == 1 && ! canmovebackwards() ) )
						{
							currentDirection = ! currentDirection;
						}
					}
				}
				else
				{
					var newCurrentStationName = currentStationName;
					var newCurrentLine = currentLine;
					currentStationName = prevCurrentStationName;
					currentLine = prevCurrentLine;
					return [newCurrentStationName, newCurrentLine];
				}
			}
		}
		else
		{
			nextStation = getNextStation();
			if( canmoveforwards() && currentDirection == 0 )
			{
				if( closedStationList.indexOf(getNextStation()) == -1 )
				{
					currentStationName = getNextStation();
				}
			}
			else if( canmovebackwards() && currentDirection == 1 )
			{
				if( closedStationList.indexOf(getPrevStation()) == -1 )
				{
					currentStationName = getPrevStation();
				}
			}
			else if( switchlines().length != 1 )
			{
				var possibleLines = [];
				for( x = 0; x < switchlines().length; x++ )
				{
					if( switchlines()[x] != currentActivity.lines[currentLine].name )
					{
						possibleLines.push( switchlines()[x] );
					}
				}
				var lineToSwitchTo = possibleLines[Math.floor((Math.random()*possibleLines.length))];
				if( ( lineToSwitchTo != undefined ) || ( lineToSwitchTo == undefined && switchlines().length == 2 ) )
				{
					currentLine = lineToSwitchTo;
					switchLine(lineToSwitchTo);
					currentDirection = Math.floor((Math.random()*2));
					if( ( currentDirection == 0 && ! canmoveforwards() ) || ( currentDirection == 1 && ! canmovebackwards() ) )
					{
						currentDirection = ! currentDirection;
					}
				}
			}
			else
			{
				var newCurrentStationName = currentStationName;
				var newCurrentLine = currentLine;
				currentStationName = prevCurrentStationName;
				currentLine = prevCurrentLine;
				return [newCurrentStationName, newCurrentLine];
			}
		}
		if( Math.floor((Math.random()*6)) == 2 && currentStationName != startStation )
		{
			if( switchlines().length != 1 )
			{
				var possibleLines = [];
				for( x = 0; x < switchlines().length; x++ )
				{
					if( ! switchlines()[x] == currentActivity.lines[currentLine].name )
					{
						possibleLines.push( switchlines()[x] );
					}
				}
				var lineToSwitchTo = possibleLines[Math.floor((Math.random()*possibleLines.length))];
				if( ( lineToSwitchTo != undefined ) || ( lineToSwitchTo == undefined && switchlines().length == 2 ) )
				{
					switchLine(lineToSwitchTo);
					currentDirection = Math.floor((Math.random()*2));
					if( ( currentDirection == 0 && ! canmoveforwards() ) || ( currentDirection == 1 && ! canmovebackwards() ) )
					{
						currentDirection = ! currentDirection;
					}
				}
			}
		}
		if( Math.floor((Math.random()*20)) == 4 && currentStationName != startStation )
		{
			if( currentLine == lineNumber && switchlines.length != 1 )
			{
				possibleLines = [];
				for( x = 0; x < switchlines().length; x++ )
				{
					if( ! switchlines()[x] == currentActivity.lines[currentLine].name )
				{
						possibleLines.push( switchlines()[x] );
					}
				}
				var lineToSwitchTo = possibleLines[Math.floor((Math.random()*possibleLines.length))];
				if( ( lineToSwitchTo != undefined ) || ( lineToSwitchTo == undefined && switchlines().length == 2 ) )
				{
					currentLine = lineToSwitchTo;
					switchLine(lineToSwitchTo);
					currentDirection = Math.floor((Math.random()*2));
				}
			}
			var newCurrentStationName = currentStationName;
			var newCurrentLine = currentLine;
			currentStationName = prevCurrentStationName;
			currentLine = prevCurrentLine;
			return [newCurrentStationName, newCurrentLine];
		}
	}
	currentStationName = prevCurrentStationName;
	currentLine = prevCurrentLine;
}

function generatePlayValues( callback )
{
	/*
	Links into the generateStartStation and generateEndStation functions
	in order to set up a new play-mode task
	*/
	var mapsToChoose = [bakerloo, hammersmith, district, districtPiccadilly, districtPiccadillyCircle, multiple, multiple2];
	currentActivity = mapsToChoose[Math.floor((Math.random()*mapsToChoose.length))];
	
	document.getElementById("mapImg").src = currentActivity.image;
	document.getElementById("mapImg").onload = function()
	{
		currentLine = Math.floor((Math.random()*currentActivity.lines.length));
		getClosedStations( function() {
			var startStation = generateStartStation();
			playStartLine = startStation[1];
			playStartStation = startStation[0];
			endPlayStation = generateEndStation( playStartStation, playStartLine );
			endLine = endPlayStation[1];
			endPlayStation = endPlayStation[0];
			playFinishedStation = endPlayStation;
			document.getElementById("trainInfoPanel").innerHTML = "<h4>Try and get your tube from <b>" + toTitleCase(playStartStation) + "</b> to <b>" + toTitleCase(endPlayStation) + "</b></h4>";
			callback();
		});
	};
}

function challengeInit( activity, sLine, sStation, eStation, callback )
{
	console.log("INITING CHALLENGE");
	currentActivity = activity;
	console.log("SETTING IMAGE");
	console.log(currentActivity.image);
	document.getElementById("mapImg").src = currentActivity.image;
	document.getElementById("mapImg").onload = function ()
	{
		currentLine = sLine;
		playStartLine = sLine;
		playStartStation = sStation;
		playFinishedStation = eStation;
		if( callback )
		{
			callback();
		}
	};
}

function challengeSetup()
{
	document.getElementById("trainInfoPanel").innerHTML = "<h4>Try and get your tube from <b>" + toTitleCase(playStartStation) + "</b> to <b>" + toTitleCase(playFinishedStation) + "</b></h4>";
	currentLine = playStartLine;
	currentStationName = playStartStation;
	console.log("MOVING TRAIN");
	console.log(currentStationName);
	moveTrainToStation( currentStationName );
}

function playSetup()
{
	/*
	Initialises the play-mode task using values set by the generatePlayValues
	function above
	
	It moves the train to the starting station and sets the starting line
	*/
	currentLine = playStartLine;
	currentStationName = playStartStation;
	challengeSetup();
}

function startChallenge( usersPoints, callback )
{
	/*
	Sends off a request to the server for a new challenge to be created
	and sends the creaing users name and code as the first enrty for
	the challenge
	*/
	var challengeNameToSend = prompt("Please enter a descriptive name for your challenge");
	if( ! challengeNameToSend )
	{
		alert("Whoops!\nI didn't like the name you typed in.");
		return false;
	}
	challengeNameToSend = encode64(challengeNameToSend);
	// Challenge specific stuff
	var openDataToSave = encodeURIComponent( JSON.stringify(closedStationList).toString() );
	var activityToSave = encodeURIComponent( encode64(JSON.stringify(currentActivity).toString()) );
	var startLineToSave = encode64( playStartLine.toString() );
	var startStationToSave = encode64( playStartStation );
	var endStationToSave = encode64( playFinishedStation );
	// Solution specific stuff
	var codeToSave = (encodeURIComponent(encode64(document.getElementById("railcodeCode").value)));
	var pointsToSave = usersPoints;
	// Send off the request
	var getRequest = new XMLHttpRequest();
	getRequest.open('POST', '/ui/process.php?action=addChallenge&openData=' + openDataToSave + '&activity=' + activityToSave + '&startLine=' + startLineToSave + '&startStation=' + startStationToSave + '&endStation=' + endStationToSave + "&challengeName=" + challengeNameToSend, true);
	getRequest.onreadystatechange=function()
	{
		if (getRequest.readyState==4 && getRequest.status==200)
		{
			if( getRequest.responseText.indexOf("-1") == -1 )
			{
				var challengeIdToSend = getRequest.responseText;
				var getRequest2 = new XMLHttpRequest();
				getRequest2.open('POST', '/ui/process.php?action=addSolution&code=' + codeToSave + "&points=" + pointsToSave + "&challengeId=" + challengeIdToSend, true);
				getRequest2.onreadystatechange=function()
				{
					if(getRequest2.readyState==4 && getRequest2.status==200)
					{
						if( getRequest2.responseText == "1" )
						{
							alert("Yay!\nThe challenge and your code has been uploaded onto the challenges database.");
						}
						else
						{
							alert("Woops!\nThere was an error submitting your code to the server. The challenge should have been uploaded, but your submission didn't go through. Sorry.");
						}
					}
				};
				getRequest2.send();
			}
			else
			{
				alert("Woops!\nThere was an error submitting your challenge to the server.");
			}
		}
	};
	getRequest.send();
}

function submitSolution( usersPoints, callback )
{
	/*
	Sends off a request to the server for a new challenge to be created
	and sends the creaing users name and code as the first enrty for
	the challenge
	*/
	// Solution specific stuff
	var challengeIdToSend = theChallengeId;
	var codeToSave = encode64(document.getElementById("railcodeCode").value);
	var pointsToSave = usersPoints;
	// Send off the request
	var getRequest2 = new XMLHttpRequest();
	getRequest2.open('POST', '/ui/process.php?action=addSolution&code=' + codeToSave + "&points=" + pointsToSave + "&challengeId=" + challengeIdToSend, true);
	getRequest2.onreadystatechange=function()
	{
		if(getRequest2.readyState==4 && getRequest2.status==200)
		{
			if( getRequest2.responseText == "1" )
			{
				alert("Yay!\nYour code has been uploaded onto the challenges database.");
				if( callback )
				{
					callback(true);
				}
			}
			else
			{
				alert("Woops!\nThere was an error submitting your code to the server. Sorry.");
				callback(false);
			}
		}
	};
	getRequest2.send();
}

function showOtherCodeList( )
{
	/*
	Sends off a request to the server for a new challenge to be created
	and sends the creaing users name and code as the first enrty for
	the challenge
	*/
	// Solution specific stuff
	var challengeIdToSend = theChallengeId;
	// Send off the request
	var getRequest2 = new XMLHttpRequest();
	getRequest2.open('POST', '/ui/process.php?action=getUserList&challengeId=' + challengeIdToSend, true);
	getRequest2.onreadystatechange=function()
	{
		if(getRequest2.readyState==4 && getRequest2.status==200)
		{
			document.getElementById("railcodeCode").style.display = "none";
			var listElements = getRequest2.responseText;
			var codeList = document.createElement("div");
			codeList.style.overflowY = "scroll";
			codeList.style.height = "100%";
			codeList.innerHTML = listElements;
			document.getElementById("codeBoxHeader").innerHTML = "Other users' solutions:";
			document.getElementById("codePanel").style.backgroundColor = "white";
			document.getElementById("codeBoxHeader").style.color = "black";
			document.getElementById("codePanel").style.borderLeft = "1px solid black";
			document.getElementById("codePanel").style.borderBottom = "1px solid black";
			document.getElementById("codePanel").style.borderTop = "1px solid black";
			document.getElementById("codePanel").style.borderRight = "1px solid black";
			document.getElementById("railcodeCode").parentElement.appendChild(codeList);
		}
	};
	getRequest2.send();
}

function showUserCode( solutionId )
{
	/*
	Sends off a request to the server for a new challenge to be created
	and sends the creaing users name and code as the first enrty for
	the challenge
	*/
	// Solution specific stuff
	var challengeIdToSend = theChallengeId;
	// Send off the request
	var getRequest2 = new XMLHttpRequest();
	getRequest2.open('POST', '/ui/process.php?action=getUserList&challengeId=' + challengeIdToSend, true);
	getRequest2.onreadystatechange=function()
	{
		if(getRequest2.readyState==4 && getRequest2.status==200)
		{
			document.getElementById("railcodeCode").parentElement.innerHTML = getRequest2.responseText;
		}
	};
	getRequest2.send();
}