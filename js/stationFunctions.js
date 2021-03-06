/*

stationFunctions.js

The heart of RailCode. This file contains the moveTrainToStation
function and the executeTrain function and all the helper functions,
including the getStationNumberAndBranchNumberFromStationName which
is used by nearly all the functions.

*/

var currentActivityNum = 0;
var indexToPick = 0;
var arrivedAtStationCallback = false;

var trainStations = [];
var trainLines = [];
var closedStationList = [];
var backupTrainStations = false;
var errorToReturn = "";

var playStartStation;
var playFinishedStation;
var playStartLine;

var currentStationName;
var currentLine;

// THESE FUNCTIONS ARE FOR THE COMPILER
function replaceAll(text, strA, strB)
{
	/*
	A simple function that replaces all occurances of a string without the need for
	regex
	*/
	while ( text.indexOf(strA) != -1)
	{
		text = text.replace(strA,strB);
	}
	return text;
}
function compileAndRun()
{
	/*
	This function sends a request to /compiler/compiler.php which returns the
	JavaScript translation of the code the user entered. The function then
	uses eval (sad but necessary) to run the code.
	*/
	//document.getElementById("railcodeCode").disabled = true;
	trainStations = [];
	trainLines = [];
	backupTrainStations = false;
	errorToReturn = "";
	indexToPick = 0;
	var codeToCompile = document.getElementById("railcodeCode").value;
	if( codeToCompile == "" )
	{
		checkResult( 1, [], currentLine, "", "", "" );
	}
	else
	{
		var compilerRequest = new XMLHttpRequest();
		compilerRequest.open('get', '/compiler/compiler.php?script=' + encode64( codeToCompile ), false);
		compilerRequest.onreadystatechange=function()
		{
			if( ( compilerRequest.readyState == 4 ) && ( compilerRequest.status == 200 ) )
			{
				var javascriptCode = replaceAll( compilerRequest.responseText, "\\\"", "\"" );
				eval(javascriptCode);
			}
		};
		compilerRequest.send( null );
	}
}
// END OF THE COMPILER FUNCTIONS

function getStationNumberAndBranchNumberFromStationName( stationName )
{
	/*
	The most important and badly written function in the whole of RailCode.
	If this function was ranked by our code ranker, we would get a very low
	score. Essentially it returns a way of finding the station in the array. At some
	point it will be converted to use loops, but for the moment, it works, so I'll
	work on implementing new features instead.
	*/
	stationName = stationName.toLowerCase();
	var stationOptions = currentActivity.lines[currentLine].locations.length;
	for( var x = 0; x < stationOptions; x++ )
	{
		var totalBranchOptions = [];
		var branchOptions1 = currentActivity.lines[currentLine].locations[x].length;
		if( branchOptions1 == 1 )
		{
			for( var i = 0; i < branchOptions1; i++ )
			{
				if( currentActivity.lines[currentLine].locations[x][i].name == stationName )
				{
					return {stationNumber: x, branchNumber: [i]};
				}
			}
		}
		else
		{
			for( var y = 0; y < branchOptions1; y++ )
			{
				var branchOptions2 = currentActivity.lines[currentLine].locations[x][y].length;
				if( branchOptions2 == 1 )
				{
					for( var i = 0; i < branchOptions2; i++ )
					{
						if( currentActivity.lines[currentLine].locations[x][y][i].name == stationName )
						{
							return {stationNumber: x, branchNumber: [y,i]};
						}
					}
				}
				else
				{
					for( var z = 0; z < branchOptions2; z++ )
					{
						var branchOptions3 = currentActivity.lines[currentLine].locations[x][y][z].length;
						if( branchOptions3 == 1 )
						{
							for( var i = 0; i < branchOptions3; i++ )
							{
								if( currentActivity.lines[currentLine].locations[x][y][z][i].name == stationName )
								{
									return {stationNumber: x, branchNumber: [y,z,i]};
								}
							}
						}
						else
						{
							for( var a = 0; a < branchOptions3; a++ )
							{
								var branchOptions4 = currentActivity.lines[currentLine].locations[x][y][z][a].length;
								if( branchOptions4 == 1 )
								{
									for( var i = 0; i < branchOptions4; i++ )
									{
										if( currentActivity.lines[currentLine].locations[x][y][z][a][i].name == stationName )
										{
											return {stationNumber: x, branchNumber: [y,z,a,i]};
										}
									}
								}
								else
								{
									for( var b = 0; b < branchOptions4; b++ )
									{
										var branchOptions5 = currentActivity.lines[currentLine].locations[x][y][z][a][b].length;
										if( branchOptions5 == 1 )
										{
											for( var i = 0; i < branchOptions5; i++ )
											{
												if( currentActivity.lines[currentLine].locations[x][y][z][a][b][i].name == stationName )
												{
													return {stationNumber: x, branchNumber: [y,z,a,b,i]};
												}
											}
										}
										else
										{
											for( var c = 0; c < branchOptions5; c++ )
											{
												var branchOptions6 = currentActivity.lines[currentLine].locations[x][y][z][a][b][c].length;
												if( branchOptions6 == 1 )
												{
													for( var i = 0; i < branchOptions6; i++ )
													{
														if( currentActivity.lines[currentLine].locations[x][y][z][a][b][c][i].name == stationName )
														{
															return {stationNumber: x, branchNumber: [y,z,a,b,c,i]};
														}
													}
												}
												else
												{
													for( var d = 0; d < branchOptions6; d++ )
													{
														var branchOptions7 = currentActivity.lines[currentLine].locations[x][y][z][a][b][c][d].length;
														if( branchOptions7 == 1 )
														{
															for( var i = 0; i < branchOptions7; i++ )
															{
																if( currentActivity.lines[currentLine].locations[x][y][z][a][b][c][d][i].name == stationName )
																{
																	return {stationNumber: x, branchNumber: [y,z,a,b,c,d,i]};
																}
															}
														}
														else
														{
															for( var e = 0; e < branchOptions7; e++ )
															{
																var branchOptions8 = currentActivity.lines[currentLine].locations[x][y][z][a][b][c][d][e].length;
																if( branchOptions8 == 1 )
																{
																	for( var i = 0; i < branchOptions8; i++ )
																	{
																		if( currentActivity.lines[currentLine].locations[x][y][z][a][b][c][d][e][i].name == stationName )
																		{
																			return {stationNumber: x, branchNumber: [y,z,a,b,c,d,e,i]};
																		}
																	}
																}
																else
																{
																	// At this point you should be wondering why on earth you would ever need more than 8 branch splits. Although, feel free to continue if you want :)
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function getImageCoords(oldStationX, oldStationY)
{
	/*
	This function remapps the coordinates of the image in real life to the
	coordinates of the image as it is displayed in the browser at the current
	point in time. This is required because the image scales, and as such the
	coordinates change.
	*/
	var imageWidth = document.getElementById("mapImg").clientWidth;
	var imageHeight = document.getElementById("mapImg").clientHeight;
	var containerWidth = document.getElementById("mapPanel").clientWidth;
	var containerHeight = document.getElementById("mapPanel").clientHeight;
	
	var originalImageWidth = document.getElementById("mapImg").naturalWidth;
	
	var offsetWidth = ( containerWidth - imageWidth ) / 2;
	var offsetHeight = 40;
	
	var sf = imageWidth/originalImageWidth;
	
	var newStationX = (sf * oldStationX) + offsetWidth;
	var newStationY = (sf * oldStationY) + offsetHeight;
	return [newStationX, newStationY];
}

function setup( activity, startLine, startStation )
{
	/*
	This function is used to setup the window in learn mode. The activity paramater is the
	JavaScript object of the stations and lines, startLine is the line number that the train
	starts on, and startStation is the name of the starting station.
	*/
	currentActivity = activity;
	document.getElementById("mapImg").src = currentActivity.image;
	document.getElementById("mapImg").onload = function()
	{
		currentLine = startLine;
		currentStationName = startStation;
		moveTrainToStation( startStation );
	};
}

function moveTrainToStation( whatStation )
{
	console.log("NOW MOVING TRAIN");
	/*
	One of the most important functions of RailCode. Takes a paramater
	of the name of the station, and moves the train to that station.
	*/
	whatStation = whatStation.toLowerCase();
	var trainImg = document.getElementById("trainImg");
	trainImg.style.display = "none";
	
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( whatStation );
	if( stationAndBranchNumber )
	{
		var theStation = currentActivity.lines[currentLine].locations[stationAndBranchNumber.stationNumber];
		for( var x = 0; x < stationAndBranchNumber.branchNumber.length; x++ )
		{
			theStation = theStation[stationAndBranchNumber.branchNumber[x]];
		}
		if( ! theStation.disabled )
		{
			var stationX = theStation.x;
			var stationY = theStation.y;
			
			var newCoords = getImageCoords(stationX, stationY);
			trainImg.style.left = newCoords[0]-4;
			trainImg.style.top = newCoords[1]-4;
			updateStationInfo();
			if( arrivedAtStationCallback )
			{
				arrivedAtStationCallback( whatStation );
			}
		}
		else
		{
			errorToReturn = "Woops!\nThis station is closed! Try and find another route through.";
		}
	}
	else
	{
		alert("Woops! I couldn't find the station '" + whatStation + "'.");
	}
	trainImg.style.display = "block";
}

function getNextStation()
{
	/*
	Returns the name of the next station the train will move to. Used by updateStationInfo.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber + 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		return "N/A";
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
				return "N/A";
			}
			else
			{
				alert("Woops! A branch can only have two options!");
			}
		}
		if( stationName != undefined )
		{
			return stationName;
		}
	}
}

function getPrevStation()
{
	/*
	Returns the name of the previous station the train will move to. Used by updateStationInfo.
	*/
	var stationAndBranchNumber = getStationNumberAndBranchNumberFromStationName( currentStationName );
	var stepNumber = stationAndBranchNumber.stationNumber;
	var newStepNumber = stepNumber - 1;
	var theStation = currentActivity.lines[currentLine].locations[newStepNumber];
	if( theStation == undefined )
	{
		return "N/A";
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
				return "N/A";
			}
			else
			{
				alert("Woops! A branch can only have two options!");
			}
		}
		if( stationName != undefined )
		{
			return stationName;
		}
	}
}

function hasForwardBranch()
{
	/*
	This station returns true if there is a branch in the immediate forwards direction, and false if there is not.
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
				return true;
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
	}
	return false;
}

function hasBackwardBranch()
{
	/*
	This station returns true if there is a branch in the immediate backwards direction, and false if there is not.
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
				return true;
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
	}
	return false;
}

function executeTrain()
{
	/*
	The command that uses the lists generated by forwards(), backwards() and switchLine() to move
	the train around the track. We have to use this function instead of calling moveTrainToStation
	directly from the above commands because we need a delay between all the commands, and as
	JavaScript is asynchronus, this is the easiest way of doing it.
	*/
	if( ! backupTrainStations )
	{
		backupTrainStations = "";
		backupTrainStations = trainStations.slice();
	}
	if( trainStations.length != 0 )
	{
		currentLine = trainLines[0];
		currentStationName = trainStations[0];
		if( currentStationName != "error" )
		{
			moveTrainToStation( currentStationName );
			trainStations.splice(0,1);
			trainLines.splice(0,1);
			if( trainStations[0] )
			{
				setTimeout(executeTrain, 1000);
			}
			else
			{
				//document.getElementById("railcodeCode").disabled = false;
				checkResult( 1, backupTrainStations, currentLine, document.getElementById("railcodeCode").value, errorToReturn, playFinishedStation );
			}
		}
		else
		{
			//document.getElementById("railcodeCode").disabled = false;
			checkResult( 0, backupTrainStations, currentLine, document.getElementById("railcodeCode").value, errorToReturn, playFinishedStation );
		}
	}
	else
	{
		//document.getElementById("railcodeCode").disabled = false;
		checkResult( 1, [], currentLine, document.getElementById("railcodeCode").value, errorToReturn, playFinishedStation );
	}
}

function updateStationInfo()
{
	/*
	Function used to update the bar above the map to show the current line colour, current
	station name, next station name, and previous station name.
	*/
	var currentLineName = currentActivity.lines[currentLine].name;
	var backgroundColour = "";
	var textColour = "black";
	switch( currentLineName )
	{
		case "bakerloo":
			backgroundColour = "#956438";
			textColour = "white";
			break;
		case "central":
			backgroundColour = "#ED1C2F";
			textColour = "white";
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
			textColour = "white";
			break;
		case "northern":
			backgroundColour = "#221E1F";
			textColour = "white";
			break;
		case "piccadilly":
			backgroundColour = "#014FA3";
			textColour = "white";
			break;
		case "victoria":
			backgroundColour = "#0095D7";
			break;
		case "waterloo and city":
			backgroundColour = "#79CBBE";
			break;
	}
	document.getElementById("infoDiv").style.backgroundColor = backgroundColour;
	document.getElementById("infoDiv").innerHTML = "<table style=\"width:100%; height:100%; font-size:18px; text-align: center;\"><tr><td>Previous Station: " + toTitleCase(getPrevStation()) + "</td><td>Current Station: " + toTitleCase(currentStationName) + "</td><td>Next Station: " + toTitleCase(getNextStation()) + "</td></tr></table>";
	document.getElementById("infoDiv").firstChild.style.color = textColour;
}

function toTitleCase(str)
{
	/*
	Very simple function that makes station names look pretty by making the first character of each word uppercase.
	*/
	if( str != "N/A" )
	{
		return str.replace(/\w\S*/g, function(txt)
		{
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
	else
	{
		return str;
	}
}