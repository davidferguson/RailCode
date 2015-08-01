/*learnObject.js

This file contains an object, stages, which contains information about every step of the learn mode
Each step has a description of what the user should do in order to complete the step, an array of
strings stat must be included in the user's code, a boolean variable indicating whether the step should
run sucessfully or if an error is OK, the station the step should start on, the list of stations that should
be passed through, the number of the line that should be started on, the number of the line that
should be ended on, and the required object in the stationLocations.js file listing all the names of
the stations and their X and Y coordinates

*/

var stages = [
{
	step: [
		{
			instruction: "Welcome to RailCode, where you can have fun learning programming.<br />Shown is a map of the <span class='instructionNameText'>Waterloo and City</span> line. A tube is currently at the <span class='instructionNameText'>Waterloo</span> station, but it needs to get to the <span class='instructionNameText'>Bank</span> station. Type <span class='instructionCodeText'>forwards</span> into the code box on the left and click 'Run'.",
			mustInclude: ['forwards'],
			stepSuccess: true,
			startStation: 'waterloo',
			stations: ['bank'],
			startLine: '0',
			endLine: '0',
			objectToUse: waterloo
		},
		{
			instruction: "Well done! You just ran your first program. Did you see how typing <span class='instructionCodeText'>forwards</span> made the tube move forwards by one station, from <span class='instructionNameText'>Waterloo</span> to <span class='instructionNameText'>Bank</span>? But now the tube needs to go back from <span class='instructionNameText'>Bank</span> to <span class='instructionNameText'>Waterloo</span>. This time, type <span class='instructionCodeText'>backwards</span> into the code box and click 'Run'.",
			mustInclude: ['backwards'],
			stepSuccess: true,
			startStation: 'bank',
			stations: ['waterloo'],
			startLine: '0',
			endLine: '0',
			objectToUse: waterloo
		},
		{
			instruction: "Well done! The tube has just moved back from <span class='instructionNameText'>Bank</span> to <span class='instructionNameText'>Waterloo</span>. To find out which station is <span class='instructionCodeText'>forwards</span> and which station is <span class='instructionCodeText'>backwards</span>, take a look at the 'Next Station' and 'Previous Station'  in the top of the map area. The station displayed in the 'Next' box, and all the ones after it on the line are the ones you will go to with <span class='instructionCodeText'>forwards</span>, the 'Previous' box is for <span class='instructionCodeText'>backwards</span>. If <span class='instructionNameText'>NA</span> is displayed, the tube cannot move in that direction. Click 'Run' to continue. (No need to type anything)",
			stepSuccess: true,
			startStation: 'waterloo',
			stations: [],
			startLine: '0',
			endLine: '0',
			objectToUse: waterloo
		},
		{
			instruction: "We have now changed to the <span class='instructionNameText'>Bakerloo Line</span>. The tube is at <span class='instructionNameText'>Paddington</span> station. It needs to go to <span class='instructionNameText'>Marylebone</span> station. Type <span class='instructionCodeText'>forwards</span>, then <span class='instructionCodeText'>forwards</span> again on a new line and click 'Run'.",
			mustInclude: ['forwards\nforwards'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ['edgware road', 'marylebone'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Wow! Did you see that typing two <span class='instructionCodeText'>forwards</span>, each on it's own line, made the tube move forwards twice? This is because because the first instruction in the code box is run, then the next, then the next. Now make the tube move to <span class='instructionNameText'>Warwick Avenue</span> station, which is three stations back.",
			mustInclude: ['backwards\nbackwards\nbackwards'],
			stepSuccess: true,
			startStation: 'marylebone',
			stations: ['edgware road', 'paddington', 'warwick avenue'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Excellent! You can now make the tube move forwards and backwards through stations. To show off your new talent, move the tube to <span class='instructionNameText'>Elephant and Castle</span> station, right at the end of the <span class='instructionNameText'>Bakerloo Line</span>. (You count the stations!)",
			mustInclude: ['forwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards'],
			stepSuccess: true,
			startStation: 'warwick avenue',
			stations: ['paddington', 'edgware road', 'marylebone', 'baker street', 'regent\'s park', 'oxford circus', 'piccadilly circus', 'charing cross', 'embankment', 'waterloo', 'lambeth north', 'elephant & castle'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		}
	]
},
{
	step: [
		{
			instruction: "Welcome back! As you can see, your tube is still at <span class='instructionNameText'>Elephant and Castle</span> station. But now it is needed at <span class='instructionNameText'>Harrow and Wealdstone</span> station, right at the start of the <span class='instructionNameText'>Bakerloo Line</span>. Move your tube to <span class='instructionNameText'>Harrow and Wealdstone</span>, please.",
			mustInclude: ['backwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards\nbackwards'],
			stepSuccess: true,
			startStation: 'elephant & castle',
			stations: ['lambeth north', 'waterloo', 'embankment', 'charing cross', 'piccadilly circus', 'oxford circus', 'regent\'s park', 'baker street', 'marylebone', 'edgware road', 'paddington', 'warwick avenue', 'maida vale', 'kilburn park', 'queen\'s park', 'kensal green', 'willesden junction', 'harlesden', 'stonebridge park', 'wembley central', 'north wembley', 'south kenton', 'kenton', 'harrow & wealdstone'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Excellent! Only, now your tube is needed again at <span class='instructionNameText'>Elephant and Castle</span> station. If you don't mind, please move your tube back to <span class='instructionNameText'>Elephant and Castle</span>.",
			mustInclude: ['forwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards\nforwards'],
			stepSuccess: true,
			startStation: 'harrow & wealdstone',
			stations: ['kenton', 'south kenton', 'north wembley', 'wembley central', 'stonebridge park', 'harlesden', 'willesden junction', 'kensal green', 'queen\'s park', 'kilburn park', 'maida vale', 'warwick avenue', 'paddington', 'edgware road', 'marylebone', 'baker street', 'regent\'s park', 'oxford circus', 'piccadilly circus', 'charing cross', 'embankment', 'waterloo', 'lambeth north', 'elephant & castle'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Hmm.. Your tube is needed again at <span class='instructionNameText'>Harrow and Wealdstone</span> station, but I think there is a faster way to do this. Type <span class='instructionCodeText'>repeat 24 times</span>, take a new line, type <span class='instructionCodeText'>backwards</span>, take another new line, and type <span class='instructionCodeText'>end repeat</span>. Click 'Run' now - can you guess what will happen?",
			mustInclude: ['repeat 24 times\nbackwards\nend repeat'],
			stepSuccess: true,
			startStation: 'elephant & castle',
			stations: ['lambeth north', 'waterloo', 'embankment', 'charing cross', 'piccadilly circus', 'oxford circus', 'regent\'s park', 'baker street', 'marylebone', 'edgware road', 'paddington', 'warwick avenue', 'maida vale', 'kilburn park', 'queen\'s park', 'kensal green', 'willesden junction', 'harlesden', 'stonebridge park', 'wembley central', 'north wembley', 'south kenton', 'kenton', 'harrow & wealdstone'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Fantastic! You accomplished in three lines what originally took you 24. Did you guess that what you type between <span class='instructionCodeText'>repeat 24 times</span> and <span class='instructionCodeText'>end repeat</span> will be run 24 times? Use this new power to move your tube to <span class='instructionNameText'>Elephant and Castle</span>.",
			mustInclude: ['repeat 24 times\nforwards\nend repeat'],
			stepSuccess: true,
			startStation: 'harrow & wealdstone',
			stations: ['kenton', 'south kenton', 'north wembley', 'wembley central', 'stonebridge park', 'harlesden', 'willesden junction', 'kensal green', 'queen\'s park', 'kilburn park', 'maida vale', 'warwick avenue', 'paddington', 'edgware road', 'marylebone', 'baker street', 'regent\'s park', 'oxford circus', 'piccadilly circus', 'charing cross', 'embankment', 'waterloo', 'lambeth north', 'elephant & castle'],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Good work! We have now changed to a section of the <span class='instructionNameText'>Hammersmith and City</span> line. Your tube is currently positioned at <span class='instructionNameText'>Hammersmith</span> station. In only three lines, please move it to <span class='instructionNameText'>Paddington</span> station.",
			mustInclude: ['repeat 8 times\nforwards\nend repeat'],
			stepSuccess: true,
			startStation: 'hammersmith',
			stations: ["goldhawk road","shepherd's bush market","wood lane","latimer road","ladbroke grove","westbourne park","royal oak","paddington"],
			startLine: '0',
			endLine: '0',
			objectToUse: hammersmith
		},
		{
			instruction: "Excellent! Now move your tube to <span class='instructionNameText'>Goldhawk Road</span> station (second station along). Use as many lines as you want, but consider that time is money...",
			mustInclude: ['backwards'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["royal oak","westbourne park","ladbroke grove","latimer road","wood lane","shepherd's bush market", "goldhawk road"],
			startLine: '0',
			endLine: '0',
			objectToUse: hammersmith
		}
	]
},
{
	step: [
		{
			instruction: "Hi again! We're back on the <span class='instructionNameText'>Bakerloo</span> line and we're ready to go. Our tube is positioned on <span class='instructionNameText'>Harrow &amp; Wealdstone</span> station. However, try making your tube move <span class='instructionCodeText'>backwards</span> by one station, off the <span class='instructionNameText'>Bakerloo</span> line.",
			mustInclude: ['backwards'],
			stepSuccess: false,
			startStation: 'harrow & wealdstone',
			stations: ["error"],
			startLine: '0',
			endLine: 'error',
			objectToUse: bakerloo
		},
		{
			instruction: "Wait! Did you see that! Our tube certainly did not like moving past the line (not surprising, really). In fact, it did not move because the tube cannot move off the end of the line. To test this, use <span class='instructionCodeText'>repeat</span> to move your tube 50 stations <span class='instructionCodeText'>forwards</span>, off the other end of the <span class='instructionNameText'>Bakerloo</span> line.",
			mustInclude: ['forwards'],
			stepSuccess: false,
			startStation: 'harrow & wealdstone',
			stations: ["kenton","south kenton","north wembley","wembley central","stonebridge park","harlesden","willesden junction","kensal green","queen's park","kilburn park","maida vale","warwick avenue","paddington","edgware road","marylebone","baker street",'regent\'s park',"oxford circus","piccadilly circus","charing cross","embankment","waterloo","lambeth north","elephant & castle","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error","error"],
			startLine: '0',
			endLine: 'error',
			objectToUse: bakerloo
		},
		{
			instruction: "You see, I was right. Your tube is now at <span class='instructionNameText'>Elephant & Castle</span>, the last station on the <span class='instructionNameText'>Bakerloo</span> line. Not only that, but after moving forward past all 16 stations on the Bakerloo line, your program stopped and and if this was eny other lesson, an error would be displayed. This is not a good thing, because you may have other instructions that come after your <span class='instructionCodeText'>repeat 50 times</span> code. If your program stops, those instructions will not be run. Click 'Run' to continue. (No need to type anything this time)",
			stepSuccess: true,
			startStation: 'elephant & castle',
			stations: [],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Right. What we need to do is somehow make the tube stop when it cannot move any further along the line. To do this type <span class='instructionCodeText'>while canMoveBackwards do</span> , newline, <span class='instructionCodeText'>backwards</span> , newline, and <span class='instructionCodeText'>end while</span> . Can you understand what will happen? Click 'Run' to see if you were right.",
			mustInclude: ['while canMoveBackwards do\nbackwards\nend while'],
			stepSuccess: true,
			startStation: 'elephant & castle',
			stations: ["lambeth north","waterloo","embankment","charing cross","piccadilly circus","oxford circus",'regent\'s park',"baker street","marylebone","edgware road","paddington","warwick avenue","maida vale","kilburn park","queen's park","kensal green","willesden junction","harlesden","stonebridge park","wembley central","north wembley","south kenton","kenton","harrow & wealdstone"],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "If you guessed that the tube would continue backwards until the start of the line then stop, then you were right! What the code does is move the tube <span class='instructionCodeText'>backwards whilst</span> the tube can move backwards (<span class='instructionCodeText'>canMoveBackwards</span>).  Any lines between the <span class='instructionCodeText'>while</span> and <span class='instructionCodeText'>end while</span> will be run until the tube can no longer move backwards. No error messages appear for this method and any code after the <span class='instructionCodeText'>end while</span> will still be run - that's a really good thing. Click 'Run' to continue. (No need to type anything).",
			stepSuccess: true,
			startStation: 'harrow & wealdstone',
			stations: [],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "You've now figured out how to move <span class='instructionCodeText'>backwards</span> to the start of a line, but what about <span class='instructionCodeText'>forwards</span>? Well, replace <span class='instructionCodeText'>canMoveBackwards</span> with <span class='instructionCodeText'>canMoveForwards</span> and <span class='instructionCodeText'>backwards</span> with <span class='instructionCodeText'>forwards</span> . And who thought programming was difficult? Move your tube to the end of the line using <span class='instructionCodeText'>while</span> .",
			mustInclude: ['while canMoveForwards do\nforwards\nend while'],
			stepSuccess: true,
			startStation: 'harrow & wealdstone',
			stations: ["kenton","south kenton","north wembley","wembley central","stonebridge park","harlesden","willesden junction","kensal green","queen's park","kilburn park","maida vale","warwick avenue","paddington","edgware road","marylebone","baker street",'regent\'s park',"oxford circus","piccadilly circus","charing cross","embankment","waterloo","lambeth north","elephant & castle"],
			startLine: '0',
			endLine: '0',
			objectToUse: bakerloo
		},
		{
			instruction: "Well, you're now looking at a section of the <span class='instructionNameText'>Jubilee</span> line. The same rules apply here as to the <span class='instructionNameText'>Bakerloo</span> line: you cannot go further than the last station shown on the line. So, without further ado, take your tube forwards to the end of the line.",
			mustInclude: ['while canMoveForwards do\nforwards\nend while'],
			stepSuccess: true,
			startStation: 'westminster',
			stations: ["waterloo","southwark","london bridge","bermondsey","canada water","canary wharf","north greenwich","canning town","west ham","stratford"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "Super work! Now to round off this section, bring your tube back to the start of this section of the line.",
			mustInclude: ['while canMoveBackwards do\nbackwards\nend while'],
			stepSuccess: true,
			startStation: 'stratford',
			stations: ["west ham","canning town","north greenwich","canary wharf","canada water","bermondsey","london bridge","southwark","waterloo","westminster"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		}
	]
},
{
	step: [
		{
			instruction: "Great work! Now please move your tube <span class='instructionCodeText'>forwards</span> to <span class='instructionNameText'>Canada Water</span> station.",
			mustInclude: ['forwards'],
			stepSuccess: true,
			startStation: 'westminster',
			stations: ["waterloo","southwark","london bridge","bermondsey","canada water"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "Nice one. Next, <span class='instructionCodeText'>forwards</span> to <span class='instructionNameText'>West Ham</span> station.",
			mustInclude: ['forwards'],
			stepSuccess: true,
			startStation: 'canada water',
			stations: ["canary wharf","north greenwich","canning town","west ham"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "You're doing superb! But wouldn't it be easier if we could specify the station name and what direction the station is in, and have the tube take us there? (Rather than counting all those stations as I know you are doing) Well, you can with the help of our friend <span class='instructionCodeText'>while</span> . Type <span class='instructionCodeText'>while the currentStation is not &quot;Canada Water&quot; do</span> , newline, <span class='instructionCodeText'>backwards</span> , newline, <span class='instructionCodeText'>end while</span> and click 'Run'.",
			mustInclude: ['while the currentStation is not "Canada Water" do\nbackwards\nend while'],
			stepSuccess: true,
			startStation: 'west ham',
			stations: ["canning town","north greenwich","canary wharf","canada water"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "Wow! Without having to count any stations we moved back to <span class='instructionNameText'>Canada Water</span>. Do you understand how this works? The tube will keep moving <span class='instructionCodeText'>backwards</span> whilst it is not on <span class='instructionNameText'>Canada Water</span> station. This means that when the tube reaches <span class='instructionNameText'>Canada Water</span> it will stop. Click 'Run' to continue. (No need to type anything.)",
			stepSuccess: true,
			startStation: 'canada water',
			stations: [],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "Can you now guess how to go <span class='instructionCodeText'>forwards</span> from <span class='instructionNameText'> Canada Water</span>to <span class='instructionNameText'>Stratford</span>? All you need to do is replace <span class='instructionCodeText'>backwards</span> with <span class='instructionCodeText'>forwards</span> and <span class='instructionNameText'>Canada Water</span> with <span class='instructionNameText'>Stratford</span> in the code you just used. It's easy! Try that now.",
			mustInclude: ['while the currentStation is not "Stratford" do\nforwards\nend while'],
			stepSuccess: true,
			startStation: 'canada water',
			stations: ["canary wharf","north greenwich","canning town","west ham","stratford"],
			startLine: '0',
			endLine: '0',
			objectToUse: jubilee
		},
		{
			instruction: "Bravo! Let's try this on a different line. This is a section of the <span class='instructionNameText'>District</span> line. Your tube is at <span class='instructionNameText'>West Kensington</span> station. Move it to <span class='instructionNameText'>Ravenscourt Park</span> using <span class='instructionCodeText'>while</span>.",
			mustInclude: ['while the currentStation is not "Ravenscourt Park" do\nbackwards\nend while'],
			stepSuccess: true,
			startStation: 'west kensington',
			stations: ["barons court","hammersmith","ravenscourt park"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Good! Now go to <span class='instructionNameText'>Earl's Court</span> .",
			mustInclude: ['while the currentStation is not "Earl\'s Court" do\nforwards\nend while'],
			stepSuccess: true,
			startStation: 'ravenscourt park',
			stations: ["hammersmith","barons court","west kensington","earl's court"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "And now, go to <span class='instructionNameText'>Turnham Green</span> station.",
			mustInclude: ['while the currentStation is not "Turnham Green" do\nbackwards\nend while'],
			stepSuccess: true,
			startStation: "earl's court",
			stations: ["west kensington","barons court","hammersmith","ravenscourt park","stamford brook","turnham green"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		}
	]
},
{
	step: [
		{
			instruction: "Well done! So far you're zooming through the underground. Now, using one <span class='instructionCodeText'>backwards</span> instruction, try to go to <span class='instructionNameText'>Gunnersbury</span> station. Can you tell what might go wrong?",
			mustInclude: ['backwards'],
			stepSuccess: true,
			startStation: 'turnham green',
			stations: ["chiswick park"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Oh dear! Instead of going to <span class='instructionNameText'>Gunnersbury</span>, you've gone to <span class='instructionNameText'>Chiswick Park</span> station. This is because when your tube meets a split, no matter if it is travelling in, it will always take the left path (from the tube's perspective). Move the tube <span class='instructionCodeText'>forwards</span> back to <span class='instructionNameText'>Turnham Green</span> station, and we'll work on fixing this problem.",
			mustInclude: ['forwards'],
			stepSuccess: true,
			startStation: 'chiswick park',
			stations: ["turnham green"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "What we need to do is change the default setting of our tube so that it goes right when it meets a split, rather than left. Thankfully this is possible by typing <span class='instructionCodeText'>head right</span> . This does not need to be just before the tube reaches a split, typing this at the start of your code will keep the setting whilst your code is running. Try this now by typing <span class='instructionCodeText'>head right</span> , newline, <span class='instructionCodeText'>backwards</span> .",
			mustInclude: ['head right\nbackwards'],
			stepSuccess: true,
			startStation: 'turnham green',
			stations: ["gunnersbury"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Fabulous! Our tube is now at <span class='instructionNameText'>Gunnersbury</span> station. You'll notice that there is another split in the <span class='instructionNameText'>District Line</span>, just after <span class='instructionNameText'>Earl's Court</span>. Go the <span class='instructionCodeText'>right</span> way on that split and stop at <span class='instructionNameText'>Gloucester Road</span>.",
			mustInclude: ['head right', 'forwards'],
			stepSuccess: true,
			startStation: 'gunnersbury',
			stations: ["turnham green","stamford brook","ravenscourt park","hammersmith","barons court","west kensington","earl\'s court","gloucester road"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Super! Now go down to <span class='instructionNameText'>West Brompton</span>.",
			stepSuccess: true,
			startStation: 'gloucester road',
			stations: ["west brompton"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Well done! You find this easy, don't you? Well, now go to <span class='instructionNameText'>Ealing Common</span>.",
			stepSuccess: true,
			startStation: 'west brompton',
			stations: ["ealing common"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		},
		{
			instruction: "Fabulous! Well done for managing that last one! Now go all the way up to <span class='instructionNameText'>Victoria</span> station.",
			stepSuccess: true,
			startStation: 'ealing common',
			stations: ["victoria"],
			startLine: '0',
			endLine: '0',
			objectToUse: district
		}
	]
},
{
	step: [
		{
			instruction: "Good Job. You'll see that a section of the <span class='instructionNameText'>Piccadilly Line</span> has been added in alongside the <span class='instructionNameText'>District Line</span>. Now, the tube needs to go to <span class='instructionNameText'>North Ealing</span>, but that is on the <span class='instructionNameText'>Piccadilly Line</span>. To make our tube switch line we need to go to a station with a white dot that is also shared with the <span class='instructionNameText'>Piccadilly Line</span>. <span class='instructionNameText'>Earl's Court</span> station is an example of this, so go there.",
			stepSuccess: true,
			startStation: 'victoria',
			stations: ["earl\'s court"],
			startLine: '0',
			endLine: '0',
			objectToUse: districtPiccadilly
		},
		{
			instruction: "OK. To change lines all you need to do is position yourself on the station you plan to change at (we've already done this), and type the instruction <span class='instructionCodeText'>switch line</span> . That's it! Try that, and see how you can switch to the <span class='instructionNameText'>Piccadilly Line</span>. You can tell what line you are on by the colour of the 'Current / Next / Previous Station Information Panel.",
			stepSuccess: true,
			startStation: 'earl\'s court',
			stations: ["earl\'s court"],
			startLine: '0',
			endLine: '1',
			objectToUse: districtPiccadilly
		},
		{
			instruction: "Great! You've made it onto the <span class='instructionNameText'>Piccadilly Line</span>. (The Station Information Panel is now dark blue). Now it should be simple for you to go to our destination of <span class='instructionNameText'>North Ealing</span>.",
			stepSuccess: true,
			startStation: 'earl\'s court',
			stations: ["north ealing"],
			startLine: '1',
			endLine: '1',
			objectToUse: districtPiccadilly
		},
		{
			instruction: "Fab! Your doing, well, fabulously! Now go on down to <span class='instructionNameText'>Ealing Broadway</span>, the station on the <span class='instructionNameText'>District Line</span>. Do this by switching at any station you like.",
			mustInclude: ['switch'],
			stepSuccess: true,
			startStation: 'north ealing',
			stations: ["ealing broadway"],
			startLine: '1',
			endLine: '0',
			objectToUse: districtPiccadilly
		},
		{
			instruction: "And now go all the way up to <span class='instructionNameText'>Knightsbridge</span>, on the <span class='instructionNameText'>Piccadilly Line</span>.",
			mustInclude: ['switch'],
			stepSuccess: true,
			startStation: 'ealing broadway',
			stations: ["knightsbridge"],
			startLine: '0',
			endLine: '1',
			objectToUse: districtPiccadilly
		}
	]
},
{
	step: [
		{
			instruction: "OK. Now we've added in a section of the <span class='instructionNameText'>Circle Line</span>. Using only one instruction, go to <span class='instructionNameText'>South Kensington</span> station.",
			mustInclude: ['backwards'],
			stepSuccess: true,
			startStation: 'knightsbridge',
			stations: ["south kensington"],
			startLine: '1',
			endLine: '1',
			objectToUse: districtPiccadillyCircle
		},
		{
			instruction: "Excellent. You're now all ready to switch to the <span class='instructionNameText'>Circle Line</span>. However, you cannot just use the <span class='instructionCodeText'>switch line</span> instruction, because the tube won't know which line to switch to. If there is more than two lines that the tube can switch between, you must specify the line to switch to. Type <span class='instructionCodeText'>switch line to &quot;Circle&quot;</span> , and click 'Run'.",
			mustInclude: ['switch line to "Circle"'],
			stepSuccess: true,
			startStation: 'south kensington',
			stations: ["south kensington"],
			startLine: '1',
			endLine: '2',
			objectToUse: districtPiccadillyCircle
		},
		{
			instruction: "Marvellous! You've made it onto the <span class='instructionNameText'>Circle Line</span>. Using a <span class='instructionCodeText'>repeat</span> instruction, go to <span class='instructionNameText'>Notting Hill Gate</span> station.",
			mustInclude: ['repeat'],
			stepSuccess: true,
			startStation: 'south kensington',
			stations: ["notting hill gate"],
			startLine: '2',
			endLine: '2',
			objectToUse: districtPiccadillyCircle
		},
		{
			instruction: "Good. Now, by switching at <span class='instructionNameText'>South Kensington</span> station, go to <span class='instructionNameText'>Knightsbridge</span> station.",
			mustInclude: ['switch line to "Piccadilly"'],
			stepSuccess: true,
			startStation: 'notting hill gate',
			stations: ["high street kensington","gloucester road","south kensington","south kensington","knightsbridge"],
			startLine: '2',
			endLine: '1',
			objectToUse: districtPiccadillyCircle
		},
		{
			instruction: "Well done! Your progress is outstanding! The map you now see is a bit more complex - but don't let that put you off! Your tube is stationed at <span class='instructionNameText'>South Kensington</span> station but it is now needed at <span class='instructionNameText'>Hammersmith</span> on the <span class='instructionNameText'>Circle Line</span>. Good luck!",
			stepSuccess: true,
			startStation: 'south kensington',
			stations: ["hammersmith"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Wow! Congratulations for getting that tricky one! Next stop: please go to <span class='instructionNameText'>Green Park</span>.",
			stepSuccess: true,
			startStation: 'hammersmith',
			stations: ["green park"],
			startLine: '2',
			endLine: '4',
			objectToUse: multiple
		},
		{
			instruction: "Oh, sorry, I actually meant <span class='instructionNameText'>Queens Park</span>! Off you go...",
			stepSuccess: true,
			startStation: 'green park',
			stations: ["queen\'s park"],
			startLine: '4',
			endLine: '3',
			objectToUse: multiple
		}
	]
},
{
	step: [
		{
			instruction: "Super! You are doing great. You are currently at <span class='instructionNameText'>Queen's Park</span> station, which has no ability to allow you to switch line. However,  try and switch line to the <span class='instructionNameText'>Circle Line</span> from <span class='instructionNameText'>Queen's Park</span>",
			mustInclude: ['switch line to "Circle"'],
			stepSuccess: false,
			startStation: 'queen\'s park',
			stations: ["error"],
			startLine: '3',
			endLine: 'error',
			objectToUse: multiple
		},
		{
			instruction: "Did you notice what happened? There was an error, and your program stopped. As discussed previously, that is a bad thing because it prevents any instructions that come after your <span class='instructionCodeText'>switch line to &quot;Circle&quot;</span> instruction from being run. We need a way to find out if the tube can switch to another line from it's current position. Click 'Run' to continue... (No need to type anything)",
			stepSuccess: true,
			startStation: 'queen\'s park',
			stations: [],
			startLine: '3',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "OK. Type <span class='instructionCodeText'>if &quot;Jubilee&quot; is in the switchLines then</span> , newline, <span class='instructionCodeText'>switch line to &quot;Jubilee&quot;</span> , newline, <span class='instructionCodeText'>end if</span> . (You need to remember the double-quotes) Click 'Run' and see what happens.",
			mustInclude: ['if "Jubilee" is in the switchLines then\nswitch line to "Jubilee"\nend if'],
			stepSuccess: true,
			startStation: 'queen\'s park',
			stations: [],
			startLine: '3',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "Well, if you wanted something interesting to happen, you've come to the wrong place. Nothing happened. However, no errors appeared because your tube did not try to switch to the <span class='instructionNameText'>Jubilee</span> line. The tube looked to see if it could switch to the <span class='instructionNameText'>Jubilee Line</span>, found that it couldn't, and so did not run the instruction between <span class='instructionCodeText'>if</span> and <span class='instructionCodeText'>end if</span>. Now move to <span class='instructionNameText'>Paddington</span> station.",
			stepSuccess: true,
			startStation: 'queen\'s park',
			stations: ["paddington"],
			startLine: '3',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "OK. Using <span class='instructionCodeText'>if</span>, now try switching to the <span class='instructionNameText'>Jubilee Line</span>.",
			mustInclude: ['if "Jubilee" is in the switchLines then\nswitch line to "Jubilee"\nend if'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: [],
			startLine: '3',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "Again nothing happened. Again, this is because you cannot switch to the <span class='instructionNameText'>Jubilee Line</span> from <span class='instructionNameText'>Paddington</span> station. The only lines available to switch from <span class='instructionNameText'>Paddington</span> station in this map are the <span class='instructionNameText'>Circle Line</span>, the <span class='instructionNameText'>Bakerloo Line</span> and the <span class='instructionNameText'>Hammersmith and City Line</span>. Again using <span class='instructionCodeText'>if</span>, this time try switching to the <span class='instructionNameText'>Hammersmith and City Line</span>.",
			mustInclude: ['if "Hammersmith and City" is in the switchLines then\nswitch line to "Hammersmith and City"\nend if'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["paddington"],
			startLine: '3',
			endLine: '1',
			objectToUse: multiple
		},
		{
			instruction: "Excellent. Now, using <span class='instructionCodeText'>if</span> whenever you need to switch line, go to <span class='instructionNameText'>Marble Arch</span> station.",
			mustInclude: ['if','switch line'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["marble arch"],
			startLine: '1',
			endLine: '0',
			objectToUse: multiple
		},
		{
			instruction: "And on to <span class='instructionNameText'>Hammersmith</span> station on the <span class='instructionNameText'>Circle Line</span>...",
			mustInclude: ['if', 'switch line'],
			stepSuccess: true,
			startStation: 'marble arch',
			stations: ["hammersmith"],
			startLine: '0',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "And finally, using any method you like, get your tube to <span class='instructionNameText'>High Street Kensington</span>",
			stepSuccess: true,
			startStation: 'hammersmith',
			stations: ["high street kensington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		}
	]
},
{
	step: [
		{
			instruction: "OK. It's recap time. Your tube is at <span class='instructionNameText'>High Street Kensington</span> station. Using only <span class='instructionCodeText'>forwards</span>, move it to <span class='instructionNameText'>Paddington</span> station.",
			mustInclude: ['forwards'],
			stepSuccess: true,
			startStation: 'high street kensington',
			stations: ["paddington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Now only using <span class='instructionCodeText'>backwards</span> , go back to <span class='instructionNameText'>High Street Kensington</span>. You may (or may not) need to set your <span class='instructionCodeText'>head</span>ing first!",
			mustInclude: ['backwards'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["high street kensington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Excellent! This time use <span class='instructionCodeText'>repeat</span> instruction to go to <span class='instructionNameText'>Paddington</span> station.",
			mustInclude: ['repeat'],
			stepSuccess: true,
			startStation: 'high street kensington',
			stations: ["paddington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Fab! Again using <span class='instructionCodeText'>repeat</span> , go back to... you guessed it: <span class='instructionNameText'>High Street Kensington</span> station. Again, you may need to set your <span class='instructionCodeText'>head</span>ing first.",
			mustInclude: ['repeat'],
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["high street kensington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "OK. Now, using the <span class='instructionCodeText'>while</span> and <span class='instructionCodeText'>canMoveForwards</span> instructions, take your tube to <span class='instructionNameText'>Baker Street</span> station, at the end of this section of the <span class='instructionNameText'>Circle Line</span>.",
			mustInclude: ['while', 'canMoveForwards'],
			stepSuccess: true,
			startStation: 'high street kensington',
			stations: ["baker street"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "And using <span class='instructionCodeText'>while</span> and <span class='instructionCodeText'>canMoveBackwards</span> , go to <span class='instructionNameText'>South Kensington</span> station, at the start of the shown section of the <span class='instructionNameText'>Circle Line</span>.",
			mustInclude: ['while', 'canMoveBackwards'],
			stepSuccess: true,
			startStation: 'baker street',
			stations: ["south kensington"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Now, in only three lines, move your tube to <span class='instructionNameText'>Edgware Road</span> station. (Hint: use <span class='instructionCodeText'>while</span> and <span class='instructionCodeText'>currentStation</span> .",
			mustInclude: ['while the currentStation is not'],
			stepSuccess: true,
			startStation: 'south kensington',
			stations: ["edgware road"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "And again, using <span class='instructionCodeText'>currentStation</span> , go to <span class='instructionNameText'>Gloucester Road</span> station.",
			mustInclude: ['currentStation'],
			stepSuccess: true,
			startStation: 'edgware road',
			stations: ["gloucester road"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "OK. Now go to <span class='instructionNameText'>Royal Oak</span> station, on the other part of the <span class='instructionNameText'>Circle Line</span> after the junction at <span class='instructionNameText'>Edgware Road</span> station.",
			stepSuccess: true,
			startStation: 'gloucester road',
			stations: ["royal oak"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "And now take your tube to <span class='instructionNameText'>Notting Hill Gate</span> station.",
			stepSuccess: true,
			startStation: 'royal oak',
			stations: ["notting hill gate"],
			startLine: '2',
			endLine: '2',
			objectToUse: multiple
		},
		{
			instruction: "Now go to <span class='instructionNameText'>Oxford Circus</span> station, which is on the <span class='instructionNameText'>Central Line</span> You may need to <span class='instructionCodeText'>switch line</span> ...",
			stepSuccess: true,
			startStation: 'notting hill gate',
			stations: ["oxford circus"],
			startLine: '2',
			endLine: '0',
			objectToUse: multiple
		},
		{
			instruction: "And by switching onto the <span class='instructionNameText'>Bakerloo Line</span>, go to <span class='instructionNameText'>Baker Street</span> station.",
			stepSuccess: true,
			startStation: 'oxford circus',
			stations: ["baker street"],
			startLine: '0',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "Now switch onto the <span class='instructionNameText'>Hammersmith and City Line</span> and go to <span class='instructionNameText'>Paddington</span> station. Remember, you need to specify which line you want to switch to using <span class='instructionCodeText'>switch line to</span> .",
			stepSuccess: true,
			startStation: 'baker street',
			stations: ["paddington"],
			startLine: '3',
			endLine: '1',
			objectToUse: multiple
		},
		{
			instruction: "Now switch back to the <span class='instructionNameText'>Bakerloo Line</span> and go to <span class='instructionNameText'>Kilburn Park</span> station.",
			stepSuccess: true,
			startStation: 'paddington',
			stations: ["kilburn park"],
			startLine: '1',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "Without causing an error, try to switch to the <span class='instructionNameText'>Victoria Line</span> at <span class='instructionNameText'>Kilburn Park</span> station. You'll need to use <span class='instructionCodeText'>if</span> and <span class='instructionCodeText'>is in the switchLines</span> .",
			mustInclude: ['if', 'is in the switchLines'],
			stepSuccess: true,
			startStation: 'kilburn park',
			stations: [],
			startLine: '3',
			endLine: '3',
			objectToUse: multiple
		},
		{
			instruction: "Now go to <span class='instructionNameText'>Baker Street</span> station, and safely (i.e: use <span class='instructionCodeText'>if</span>) switch to the <span class='instructionNameText'>Jubilee Line</span>.",
			mustInclude: ['if', 'is in the switchLines'],
			stepSuccess: true,
			startStation: 'kilburn park',
			stations: ["baker street"],
			startLine: '3',
			endLine: '4',
			objectToUse: multiple
		},
		{
			instruction: "Finally, go to <span class='instructionNameText'>Green Park</span> station.",
			stepSuccess: true,
			startStation: 'baker street',
			stations: ["green park"],
			startLine: '4',
			endLine: '4',
			objectToUse: multiple
		}
	]
}
]