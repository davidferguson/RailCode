currentStage = 0; //contains the number (zero-indexed) of the current stage the user is on
currentStep = 0; //contains the number (zero-indexed) of the current step the user is on
mode = ''; //contains the mode (play or learn) that the user is on

function pageLoad(gameMode, stage, step)
{
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
	//this function is run when the user has typed their code, pressed 'Run Code', and the code has been compiled and run
	
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
	//this function is run if the user's code was correct for the learn mode
	//it presents a nice message and asks them to continue
	
	document.getElementById('trainInfoPanel').style.backgroundColor = '#BCF5A9';
	if( mode == "play" )
	{
		document.getElementById('trainInfoPanel').innerHTML = 'Well Done! You got that spot on, and your code added <b>' + codePoints + '</b> points to your highscore!</br>If you want, you can save your solution as a challenge which will allow your friends to try and beat your code score!';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 40%; height: 100%; background-color: #F5ECCE;" onclick="startChallenge(' + codePoints + ');">Save Solution as Challenge</button><button style="width: 60%; height: 100%; background-color: #BCF5A9;" onclick="nextStep();">Continue</button>';
	}
	else
	{
		document.getElementById('trainInfoPanel').innerHTML = 'Well Done! You got that spot on.';
		document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #BCF5A9;" onclick="nextStep();">Continue</button>';
	}
}

function displayIncorrect(error)
{
	//this function is run if the user's code was incorrect for the learn mode
	//it presents an error message and asks them to retry
	
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
	document.getElementById('codeButtons').innerHTML = '<button style="width: 100%; height: 100%; background-color: #F5A9A9;" onclick="retryStep();">Retry</button>'
}

function nextStep()
{
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
				http.open('get', '/ui/process.php?action=updateStage&newStage=' + currentStage+1, false);
				http.onload = function ()
				{
					window.location = "main.php";
				}
				http.send( null );
				alert(stageCompleteMsg[currentStage]);
			}
			else
			{
				alert(stageCompleteMsg[currentStage]);
				//go to the next stage
				currentStage++;
				currentStep = 0;
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