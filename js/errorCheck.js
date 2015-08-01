/*
errorCheck.js

This file handles all the error checking for the learn, play, and therefore
challenge modes. It is passed various information regarding the last run
of the RailCode train, and then alters the page depending on if the
user's code was correct, or if they did not get the task correct

This file also handles the initial setup of of all modes, and handles the
requests to save the users progress into the database

*/

currentStage = 0; //contains the number (zero-indexed) of the current stage the user is on
currentStep = 0; //contains the number (zero-indexed) of the current step the user is on
mode = ''; //contains the mode (play or learn) that the user is on

function pageLoad(gameMode, stage, step)
{
	/*
	Takes in three parameters, the mode to be loaded in and the stage and step
	of the learn mode to be loaded in if the mode to be loaded in is learn
	
	From this the function calls other various setup functions and initialises variables
	*/
	if (gameMode == 'learn')
	{
		mode = 'learn';
		currentStage = stage;
		if( step != undefined )
		{
			console.log("SETTING STEP");
			currentStep = step;
		}
		setup(stages[currentStage].step[currentStep].objectToUse, stages[currentStage].step[currentStep].startLine, stages[currentStage].step[currentStep].startStation);
		document.getElementById('trainInfoPanel').innerHTML = stages[currentStage].step[currentStep].instruction;
	}
	else
	{
		mode = 'play';
		generatePlayValues( function ()
		{
			playSetup();
		});
	}
}

function checkResult(stepSuccess, tubeStations, tubeEndLine, userCode, error, requiredStation)
{
	/*
	This function looks at the various parameters passed to it, and from
	these deceides if the user has sucessfully completed the task or not
	*/
	
	var continueOn = true;
	
	if (mode == "learn")
	{
		//code to be run to check the users attempt during the LEARN mode
		
		if (stages[currentStage].step[currentStep].stepSuccess != stepSuccess)
		{
			continueOn = false;
		}
		if (stages[currentStage].step[currentStep].endLine != tubeEndLine)
		{
			console.log(tubeEndLine);
			console.log(stages[currentStage].step[currentStep].endLine);
			console.log(2);
			continueOn = false;
		}
		
		
		console.log("LENGTH");
		console.log(stages[currentStage].step[currentStep].stations.length);
		if (stages[currentStage].step[currentStep].stations.length != 1)
		{
			console.log(stages[currentStage].step[currentStep].stations);
			console.log(tubeStations);
			for (var i = 0; i < stages[currentStage].step[currentStep].stations.length; i++)
			{
				//loop through each string in the mustInclude array
				if (stages[currentStage].step[currentStep].stations[i] != tubeStations[i])
				{
					console.log(3);
					continueOn = false;
				}
			}
		}
		else
		{
			if (stages[currentStage].step[currentStep].stations[stages[currentStage].step[currentStep].stations.length -1] != tubeStations[tubeStations.length -1])
			{
				console.log(stages[currentStage].step[currentStep].stations[stages[currentStage].step[currentStep].stations.length -1]);
				console.log(tubeStations[tubeStations.length -1]);
				console.log(4);
				continueOn = false;
			}
		}
		if( stages[currentStage].step[currentStep].mustInclude != undefined )
		{
			for (var i = 0; i < stages[currentStage].step[currentStep].mustInclude.length; i++)
			{
				//loop through each string in the mustInclude array
				if (userCode.toLowerCase().replace(/ the/g, '').replace(/ /g, '').indexOf(stages[currentStage].step[currentStep].mustInclude[i].toLowerCase().replace(/ the/g, '').replace(/ /g, '')) == -1)
				{
					console.log(5);
					continueOn = false;
				}
			}
		}
	}
	else
	{
		//code to be run to check the user's attempt during the PLAY mode
		if (!stepSuccess) {continueOn = false;}
		if (tubeStations[tubeStations.length -1] != requiredStation)
		{
			continueOn = false;
		}
	}
	if (continueOn)
	{
		//the user's code was correct, proceed to the next step or load another play image
		var codePoints = calculatePoints(userCode);
		displayCorrect(codePoints);
	}
	else
	{
		//the user's code was incorrect, give an error and ask to retry
		displayIncorrect(error);
	}
}

function displayCorrect( codePoints )
{
	/*
	this function is run if the user's code was correct for the learn mode
	it presents a nice message and asks them to continue
	*/
	
	document.getElementById('trainInfoPanel').style.backgroundColor = '#BCF5A9';
	if( mode == "play" )
	{
		document.getElementById('trainInfoPanel').innerHTML = 'Well Done! You got that spot on, and your code added <b>' + codePoints + '</b> points to your highscore!</br>If you want, you can save your solution as a challenge which will allow your friends to try and beat your code score!';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 40%; height: 100%; background-color: #F5ECCE;" onclick="startChallenge(' + codePoints + ');">Save Solution as Challenge</button><button style="width: 60%; height: 100%; background-color: #BCF5A9;" onclick="nextStep();">Continue</button>';
	}
	else if( mode == "challenge" )
	{
		document.getElementById('trainInfoPanel').innerHTML = 'Sumbitting solution to server...';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #BCF5A9;">Please Wait...</button>';
		submitSolution( codePoints, function( result ) {
			if( result )
			{
				document.getElementById('trainInfoPanel').innerHTML = 'Well Done! You got that spot on, and your code added <b>' + codePoints + '</b> points to your highscore!</br>Your code has also been submitted to this challenge, to help other users improve!';
				document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #BCF5A9;" onclick="showOtherCodeList();">See other users\'s code</button>';
			}
			else
			{
				document.getElementById('trainInfoPanel').innerHTML = 'Oh no!</br>It seems that your code didn\'t submit to the server properly. You can click "Try again" to try and resubmit your code. Sorry.';
				document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #BCF5A9;" onclick="submitSolution(' + codePoints + ');">Try Again</button>';
			}
		});
	}
	else
	{
		document.getElementById('trainInfoPanel').innerHTML = 'Well Done! You got that spot on.';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #BCF5A9;" onclick="nextStep();">Continue</button>';
	}
}

function displayIncorrect(error)
{
	/*
	this function is run if the user's code was incorrect for the learn mode
	it presents an error message and asks them to retry
	*/
	
	if (!stages[currentStage].step[currentStep].hasOwnProperty("customError") || error == '')
	{
		document.getElementById('trainInfoPanel').innerHTML = "Oh dear! That didn't quite work.";
	}
	else
	{
		//there is a custom error message that needs to be sent to the user in addition to the standard error message
		document.getElementById('trainInfoPanel').innerHTML = "Oh dear! That didn't quite work. " + error + ' ' + stages[currentStage].step[currentStep].customError;
	}
	document.getElementById('trainInfoPanel').style.backgroundColor = '#F5A9A9';
	document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #F5A9A9;" onclick="retryStep();">Retry</button>';
}

function nextStep()
{
	/*
	This mode allows the ser to proceed to the next step in the learn mode
	if their code is correct
	
	If the mode is play, then it calls functions to generate a new challenge
	for the user
	*/
	var http;
	document.getElementById("railcodeCode").value = "";
	if (mode == 'learn')
	{
		if (stages[currentStage].step.length - 1 == currentStep)
		{
			//we are at the end of a stage
			if (stages.length-1 == currentStage)
			{
				//the user has completed all the levels
				// The user has now finished the learn mode.
				http = new XMLHttpRequest();
				http.open('get', '/ui/process.php?action=updateStage&newStage=' + currentStage+1, false);
				http.onload = function ()
				{
					window.location = "main.php";
				};
				http.send( null );
				alert(stageCompleteMsg[currentStage]);
			}
			else
			{
				alert(stageCompleteMsg[currentStage]);
				//go to the next stage
				currentStage++;
				currentStep = 0;
				http = new XMLHttpRequest();
				http.open('get', '/ui/process.php?action=updateStage&newStage=' + currentStage, false);
				http.send( null );
			}
		}
		else
		{
			//increment up to the next step in the stage
			currentStep++;
		}
		document.getElementById('trainInfoPanel').style.backgroundColor = '#F2F5A9';
		document.getElementById('trainInfoPanel').innerHTML = stages[currentStage].step[currentStep].instruction;
		document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%;" onclick="compileAndRun();">Run</button>';
		
		//Now send the object, line and station to the function that handles all the map loading
		setup(stages[currentStage].step[currentStep].objectToUse, stages[currentStage].step[currentStep].startLine, stages[currentStage].step[currentStep].startStation);
	}
	else
	{
		//this is play mode
		document.getElementById('trainInfoPanel').style.backgroundColor = '#F2F5A9';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%;" onclick="compileAndRun();">Run</button>';
		generatePlayValues( function ()
		{
			playSetup();
		});
	}
}

function retryStep()
{
	/*
	This mode allows the ser to retry the stage that they did not sucseed at
	
	If the mode is play, then it calls functions to generate a the same challenge
	for the user
	*/
	if (mode == 'learn')
	{
		setup(stages[currentStage].step[currentStep].objectToUse, stages[currentStage].step[currentStep].startLine, stages[currentStage].step[currentStep].startStation);
		document.getElementById('trainInfoPanel').innerHTML = stages[currentStage].step[currentStep].instruction;
	}
	else
	{
		playSetup();
	}
	document.getElementById('trainInfoPanel').style.backgroundColor = '#F2F5A9';
	document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%;" onclick="compileAndRun();">Run</button>';
}