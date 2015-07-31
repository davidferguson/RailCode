/*

opendata.js

This file contains all the functions related to retrieving the
Transport for London open data from /data/getData.php about the
current status of the London Underground lines, and then using
that data to close off stations and lines where suitable.

*/

function getClosedStations( callback )
{
	/*
	This functions opens a connection to /data/getData.php and retrieves a JSON
	object of the start end end closed stations of the London Underground. It then
	reformats the data and attempts to use the getStationsBetweenTwoStations function
	to get a list of all the stations effected. The closeStation function is then
	called on on each of the stations. A callback is also included to continue running
	other commands in order.
	*/
	var prevCurrentLine = currentLine;
	var getRequest = new XMLHttpRequest();
	getRequest.open('POST', '/data/getData.php', true);
	getRequest.onload = function ()
	{
		if (getRequest.status === 200)
		{
			var closedStations = JSON.parse(getRequest.responseText);
			//var closedStations = {lines:["bakerloo"], from:["Paddington"], to:["Warwick Avenue"]}
			if( closedStations.lines )
			{
				for( var x = 0; x < closedStations.lines.length; x++ )
				{
					var currentStationFrom = closedStations.from[x].toLowerCase();
					var currentStationTo = closedStations.to[x].toLowerCase();
					var currentStationLine = closedStations.lines[x].toLowerCase();
					
					for( var y = 0; y < currentActivity.lines.length; y++ )
					{
						if( currentActivity.lines[y].name == currentStationLine )
						{
							currentLine = y;
							// We are using that line!
							var stationFromInfo = getStationNumberAndBranchNumberFromStationName( currentStationFrom );
							if( stationFromInfo )
							{
								var stationToInfo = getStationNumberAndBranchNumberFromStationName( currentStationTo );
								if( stationToInfo )
								{
									// Great! We have found both the from and the to station. Find all the stations in between them.
									closedStationList = getStationsBetweenTwoStations( currentStationFrom, currentStationTo, y );
									if( closedStationList != false )
									{
										for( var z = 0; z < closedStationList.length; z++ )
										{
											closeStation( closedStationList[z], y );
										}
									}
									else
									{
										// There was an issue getting the stations. This shouldn't happen, but lets put this code in place, just in case.
										closeStation( currentStationFrom, y );
										closeStation( currentStationTo, y );
									}
								}
								else
								{
									// We can only find the from station; the to one must be off the map. Just block the from station.
									closeStation( currentStationFrom, y );
								}
							}
							else
							{
								// Can't find that station, try the to one then.
								var stationToInfo = getStationNumberAndBranchNumberFromStationName( currentStationTo );
								if( stationToInfo )
								{
									// We can only find the to station; the from one must be off the map. Just block the to station.
									closeStation( currentStationTo, y );
								}
							}
						}
					}
				}
				currentLine = prevCurrentLine;
			}
		}
		if( callback )
		{
			callback();
		}
	};
	getRequest.send();
}

function closeStation( whatStation, stationLine )
{
	/*
	Called by getClosedStations to close and individual station on a line. This
	function places an X over the station in the colour of the line that is closed.
	*/
	whatStation = whatStation.toLowerCase();
	
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( whatStation );
	if( stationAndBranchNumber )
	{
		var theStation = currentActivity.lines[stationLine].locations[stationAndBranchNumber.stationNumber];
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
		}
		var stationX = theStation.x;
		var stationY = theStation.y;
		
		var newCoords = getImageCoords(stationX, stationY);
		
		var backgroundColour = "";
		switch( currentActivity.lines[stationLine].name )
		{
			case "bakerloo":
				backgroundColour = "#956438";
				break;
			case "central":
				backgroundColour = "#ED1C2F";
				break;
			case "circle":
				backgroundColour = "#FFDE00";
				break;
			case "district":
				backgroundColour = "#009B5A";
				break;
			case "hammersmith and city":
				backgroundColour = "#F3879E";
				break;
			case "jubilee":
				backgroundColour = "#8B8D90";
				break;
			case "metropolitan":
				backgroundColour = "#79014C";
				break;
			case "northern":
				backgroundColour = "#221E1F";
				break;
			case "piccadilly":
				backgroundColour = "#014FA3";
				break;
			case "victoria":
				backgroundColour = "#0095D7";
				break;
			case "waterloo and city":
				backgroundColour = "#79CBBE";
				break;
		}
		crossDiv = document.createElement("DIV");
		crossDiv.className = "stationCross";
		crossDiv.innerHTML = "X";
		crossDiv.style.color = backgroundColour;
		crossDiv.style.fontSize = "32px";
		crossDiv.style.fontWeight = 900;
		crossDiv.style.left = newCoords[0]-12;
		crossDiv.style.top = newCoords[1]-23;
		crossDiv.style.position = "absolute";
		document.getElementById("mapPanel").appendChild(crossDiv); 
		
		theStation.disabled = true;
	}
	else
	{
		alert("Woops! I couldn't find the station '" + whatStation + "'.");
	}
}

function getStationsBetweenTwoStations( startStation, endStation, lineNumber, reversed )
{
	/*
	Used by getClosedStations, this function attempts to get the entire list of
	closed stations between the known end and start ones. This can be problematic
	if either the start or the end station is not present in the Underground map
	clipping shown on the screen, and in this case, only the known station will be
	returned.
	A fix for this would be to also include the entire line in stationLocations.js,
	but then a few other functions would have to be rewritten in order to accomodate
	and not confilct with this change.
	*/
	var prevCurrentStationName = currentStationName;
	var prevCurrentLine = currentLine;
	
	var nextStation;
	var prevStation;
	var forwardBranches = [];
	var notFound = true;
	var reachedEndOfLine = false;
	
	stationList = [[]];
	
	currentLine = lineNumber;
	currentStationName = startStation;
	if( canmoveforwards() )
	{
		stationList[stationList.length-1].push(startStation);
		while( notFound == true )
		{
			if( hasForwardBranch() )
			{
				if( reachedEndOfLine == true )
				{
					reachedEndOfLine = false;
				}
				else
				{
					forwardBranches.push(0);
				}
				indexToPick = forwardBranches[forwardBranches.length-1];
				nextStation = getNextStation();
				stationList.push([]); // Create new array
				stationList[stationList.length-1].push(nextStation); // Append station to the array
				if( nextStation == endStation )
				{
					notFound = false;
					currentStationName = prevCurrentStationName;
					currentLine = prevCurrentLine;
					return formatListWhenFound( stationList );
				}
				else
				{
					if( canmoveforwards() )
					{
						currentStationName = nextStation;
					}
					else
					{
						stationList.splice((stationList.length-1),1);
						reachedEndOfLine = true;
						if( forwardBranches[forwardBranches.length-1] == 1 )
						{
							// We've been through both of the branches. Go back to the prev one.
							while( forwardBranches[forwardBranches.length-1] == 1 )
							{
								forwardBranches.splice((forwardBranches.length-1), 1);
								if( forwardBranches.length == 0 )
								{
									// That's us back at the beginning. Make sure we don't loop again.
									notFound = false;
									break;
								}
							}
						}
						else
						{
							forwardBranches[forwardBranches.length-1] = 1;
							currentStationName = stationList[stationList.length-1][stationList[stationList.length-1].length-1];
						}
					}
				}
			}
			else
			{
				nextStation = getNextStation();
				stationList[stationList.length-1].push(nextStation);
				if( nextStation == endStation )
				{
					notFound = false;
					currentStationName = prevCurrentStationName;
					currentLine = prevCurrentLine;
					return formatListWhenFound( stationList );
				}
				else
				{
					if( canmoveforwards() )
					{
						currentStationName = nextStation;
					}
					else
					{
						stationList.splice((stationList.length-1),1);
						reachedEndOfLine = true;
						if( forwardBranches.length != 0 )
						{
							if( forwardBranches[forwardBranches.length-1] == 1 )
							{
								// We've been through both of the branches. Go back to the prev one.
								while( forwardBranches[forwardBranches.length-1] == 1 )
								{
									forwardBranches.splice((forwardBranches.length-1), 1);
									if( forwardBranches.length == 0 )
									{
										// That's us back at the beginning. Make sure we don't loop again.
										notFound = false;
										break;
									}
								}
							}
							else
							{
								forwardBranches[forwardBranches.length-1] = 1;
								currentStationName = stationList[stationList.length-1][stationList[stationList.length-1].length-1];
							}
						}
						else
						{
							break;
						}
					}
				}
			}		
		}
	}
	if( ! reversed )
	{
		currentStationName = prevCurrentStationName;
		currentLine = prevCurrentLine;
		return getStationsBetweenTwoStations( endStation, startStation, lineNumber, 1 );
	}
	else
	{
		currentStationName = prevCurrentStationName;
		currentLine = prevCurrentLine;
		return false;
	}
}

function formatListWhenFound( listToFormat )
{
	/*
	A simple function that reformats the array generated by getStationsBetweenTwoStations
	into a format that getClosedStations can easily read.
	*/
	var totalList = [];
	if( listToFormat.length == 1 )
	{
		return listToFormat[0];
	}
	else
	{
		for( var x = 0; x < listToFormat.length; x++ )
		{
			for( var y = 0; y < listToFormat[x].length; y++ )
			{
				totalList.push(listToFormat[x][y]);
			}
		}
	}
	return totalList;
}