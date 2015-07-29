var bakerloo = {
	image: "/maps/bakerloo.png",
	startLine: 0,
	startStation: "harrow & wealdstone",
	lines: [
		{
			name: "bakerloo",
			locations: [
				[{name:"harrow & wealdstone", x:98, y:24}],
				[{name:"kenton", x:99, y:70}],
				[{name:"south kenton", x:122, y:179}],
				[{name:"north wembley", x:160, y:208}],
				[{name:"wembley central", x:199, y:239}],
				[{name:"stonebridge park", x:239, y:269}],
				[{name:"harlesden", x:279, y:298}],
				[{name:"willesden junction", x:235, y:332}],
				[{name:"kensal green", x:359, y:359}],
				[{name:"queen's park", x:406, y:392}],
				[{name:"kilburn park", x:444, y:423}],
				[{name:"maida vale", x:484, y:435}],
				[{name:"warwick avenue", x:524, y:483}],
				[{name:"paddington", x:636, y:510}],
				[{name:"edgware road", x:692, y:432}],
				[{name:"marylebone", x:723, y:403}],
				[{name:"baker street", x:786, y:395}],
				[{name:"regent's park", x:856, y:414}],
				[{name:"oxford circus", x:930, y:469}],
				[{name:"piccadilly circus", x:994, y:554}],
				[{name:"charing cross", x:1109, y:599}],
				[{name:"embankment", x:1128, y:627}],
				[{name:"waterloo", x:1179, y:693}],
				[{name:"lambeth north", x:1286, y:725}],
				[{name:"elephant & castle", x:1365, y:725}]
			]
		}
	]
}

var waterloo = {
	image: "/maps/waterloo.png",
	startLine: 0,
	startStation: "bank",
	lines: [
		{
			name: "waterloo and city",
			locations: [
				[{name:"waterloo", x:24, y:286}],
				[{name:"bank", x:204, y:23}]
			]
		}
	]
}

var hammersmith = {
	image: "/maps/hammersmith.png",
	startLine: 0,
	startStation: "hammersmith",
	lines: [
		{
			name: "hammersmith",
			locations: [
				[{name:"hammersmith", x:58, y:662}],
				[{name:"goldhawk road", x:58, y:624}],
				[{name:"shepherd's bush market", x:58, y:576}],
				[{name:"wood lane", x:58, y:538}],
				[{name:"latimer road", x:76, y:481}],
				[{name:"ladbroke grove", x:121, y:441}],
				[{name:"westbourne park", x:166, y:411}],
				[{name:"royal oak", x:276, y:373}],
				[{name:"paddington", x:432, y:328}],
				[{name:"edgware road", x:512, y:291}],
				[{name:"baker street", x:605, y:234}],
				[{name:"great portland street", x:683, y:174}],
				[{name:"euston square", x:811, y:86}],
				[{name:"king's cross st. pancras", x:927, y:68}]
			]
		}
	]
}

var jubilee = {
	image: "/maps/jubilee.png",
	startLine: 0,
	startStation: "westminster",
	lines: [
		{
			name: "jubilee",
			locations: [
				[{name:"westminster", x:31, y:591}],
				[{name:"waterloo", x:169, y:591}],
				[{name:"southwark", x:240, y:552}],
				[{name:"london bridge", x:356, y:504}],
				[{name:"bermondsey", x:502, y:502}],
				[{name:"canada water", x:644, y:502}],
				[{name:"canary wharf", x:911, y:464}],
				[{name:"north greenwich", x:1048, y:467}],
				[{name:"canning town", x:1084, y:351}],
				[{name:"west ham", x:1091, y:180}],
				[{name:"stratford", x:1012, y:28}]
			]
		}
	]
}

var district = {
	image: "/maps/district.png",
	startLine: 0,
	startStation: "ealing broadway",
	lines: [
		{
			name: "district",
			locations: [
				[[[{name:"ealing broadway", x:51, y:65}],[0]],[0]],
				[[[{name:"ealing common", x:137, y:99}],[0]],[0]],
				[[[{name:"acton town", x:192, y:137}],[{name:"richmond", x:79, y:306}]],[0]],
				[[[{name:"chiswick park", x:229, y:166}],[{name:"gunnersbury", x:191, y:221}]],[0]],
				[[{name:"turnham green", x:291, y:212}],[0]],
				[[{name:"stamford brook", x:323, y:236}],[0]],
				[[{name:"ravenscourt park", x:379, y:259}],[0]],
				[[{name:"hammersmith", x:445, y:255}],[0]],
				[[{name:"barons court", x:536, y:258}],[{name:"fulham broadway", x:704, y:378}]],
				[[{name:"west kensington", x:637, y:258}],[{name:"west brompton", x:704, y:327}]],
				[{name:"earl's court", x:758, y:260}],
				[[{name:"high street kensington", x:801, y:173}],[{name:"gloucester road", x:957, y:260}]],
				[[{name:"notting hill gate", x:767, y:64}],[{name:"south kensington", x:1044, y:241}]],
				[[0],[{name:"sloane square", x:1108, y:187}]],
				[[0],[{name:"victoria", x:1166, y:148}]]
			]
		}
	]
}

var districtPiccadilly = {
	image: "/maps/districtPiccadilly.png",
	startLine: 0,
	startStation: "ealing broadway",
	lines: [
		{
			name: "district",
			locations: [
				[[[{name:"ealing broadway", x:99, y:85}],[0]],[0]],
				[[[{name:"ealing common", x:185, y:117}],[0]],[0]],
				[[[{name:"acton town", x:239, y:158}],[{name:"richmond", x:127, y:327}]],[0]],
				[[[{name:"chiswick park", x:278, y:187}],[{name:"gunnersbury", x:240, y:241}]],[0]],
				[[{name:"turnham green", x:340, y:232}],[0]],
				[[{name:"stamford brook", x:371, y:258}],[0]],
				[[{name:"ravenscourt park", x:428, y:279}],[0]],
				[[{name:"hammersmith", x:494, y:279}],[0]],
				[[{name:"barons court", x:586, y:282}],[{name:"fulham broadway", x:753, y:399}]],
				[[{name:"west kensington", x:685, y:279}],[{name:"west brompton", x:752, y:347}]],
				[{name:"earl's court", x:807, y:279}],
				[[{name:"high street kensington", x:849, y:195}],[{name:"gloucester road", x:1005, y:279}]],
				[[{name:"notting hill gate", x:814, y:86}],[{name:"south kensington", x:1090, y:259}]],
				[[0],[{name:"sloane square", x:1157, y:209}]],
				[[0],[{name:"victoria", x:1214, y:168}]]
			]
		},
		{
			name: "piccadilly",
			locations: [
				[[{name:"north ealing", x:156, y:14}],[{name:"northfields", x:102, y:205}]],
				[[{name:"ealing common", x:198, y:99}],[{name:"south ealing", x:143, y:176}]],
				[{name:"acton town", x:251, y:139}],
				[{name:"turnham green", x:353, y:215}],
				[{name:"hammersmith", x:494, y:259}],
				[{name:"barons court", x:585, y:262}],
				[{name:"earl's court", x:806, y:259}],
				[{name:"gloucester road", x:1005, y:259}],
				[{name:"south kensington", x:1081, y:239}],
				[{name:"knightsbridge", x:1130, y:141}]
			]
		}
	]
}

var districtPiccadillyCircle = {
	image: "/maps/districtPiccadillyCircle.png",
	startLine: 0,
	startStation: "ealing broadway",
	lines: [
		{
			name: "district",
			locations: [
				[[[{name:"ealing broadway", x:99, y:85}],[0]],[0]],
				[[[{name:"ealing common", x:185, y:117}],[0]],[0]],
				[[[{name:"acton town", x:239, y:158}],[{name:"richmond", x:127, y:327}]],[0]],
				[[[{name:"chiswick park", x:278, y:187}],[{name:"gunnersbury", x:240, y:241}]],[0]],
				[[{name:"turnham green", x:340, y:232}],[0]],
				[[{name:"stamford brook", x:371, y:258}],[0]],
				[[{name:"ravenscourt park", x:428, y:279}],[0]],
				[[{name:"hammersmith", x:494, y:279}],[0]],
				[[{name:"barons court", x:586, y:282}],[{name:"fulham broadway", x:753, y:399}]],
				[[{name:"west kensington", x:685, y:279}],[{name:"west brompton", x:752, y:347}]],
				[{name:"earl's court", x:807, y:279}],
				[[{name:"high street kensington", x:849, y:195}],[{name:"gloucester road", x:1005, y:279}]],
				[[{name:"notting hill gate", x:814, y:86}],[{name:"south kensington", x:1090, y:259}]],
				[[0],[{name:"sloane square", x:1157, y:209}]],
				[[0],[{name:"victoria", x:1214, y:168}]]
			]
		},
		{
			name: "piccadilly",
			locations: [
				[[{name:"north ealing", x:156, y:14}],[{name:"northfields", x:102, y:205}]],
				[[{name:"ealing common", x:198, y:99}],[{name:"south ealing", x:143, y:176}]],
				[{name:"acton town", x:251, y:139}],
				[{name:"turnham green", x:353, y:215}],
				[{name:"hammersmith", x:494, y:259}],
				[{name:"barons court", x:585, y:262}],
				[{name:"earl's court", x:806, y:259}],
				[{name:"gloucester road", x:1005, y:259}],
				[{name:"south kensington", x:1081, y:239}],
				[{name:"knightsbridge", x:1130, y:141}]
			]
		},
		{
			name: "circle",
			locations: [
				[{name:"notting hill gate", x:818, y:85}],
				[{name:"high street kensington", x:852, y:192}],
				[{name:"gloucester road", x:1006, y:272}],
				[{name:"south kensington", x:1087, y:253}],
				[{name:"sloane square", x:1156, y:204}],
				[{name:"victoria", x:1212, y:164}]
			]
		}
	]
}

var multiple = {
	image: "/maps/multiple.png",
	startLine: 0,
	startStation: "white city",
	lines: [
		{
			name: "central",
			locations: [
				[{name:"white city", x:39, y:305}],
				[{name:"shepherd's bush", x:201, y:304}],
				[{name:"holland park", x:302, y:303}],
				[{name:"notting hill gate", x:395, y:303}],
				[{name:"queensway", x:465, y:303}],
				[{name:"lancaster gate", x:546, y:264}],
				[{name:"marble arch", x:622, y:207}],
				[{name:"bond street", x:700, y:151}],
				[{name:"oxford circus", x:763, y:103}]
			]
		},
		{
			name: "hammersmith and city",
			locations: [
				[{name:"hammersmith", x:72, y:452}],
				[{name:"goldhawk road", x:72, y:414}],
				[{name:"shepherd;s bush market", x:72, y:366}],
				[{name:"wood lane", x:72, y:329}],
				[{name:"latimer road", x:92, y:269}],
				[{name:"ladbroke grove", x:136, y:229}],
				[{name:"westbourne park", x:181, y:199}],
				[{name:"royal oak", x:293, y:158}],
				[{name:"paddington", x:447, y:118}],
				[{name:"edgware road", x:536, y:81}],
				[{name:"baker street", x:607, y:29}]
			]
		},
		{
			name: "circle",
			locations: [
				[[{name:"hammersmith", x:79, y:452}],[0]],
				[[{name:"goldhawk road", x:79, y:414}],[0]],
				[[{name:"shepherd's bush market", x:79, y:366}],[0]],
				[[{name:"wood lane", x:79, y:329}],[{name:"south kensington", x:667, y:477}]],
				[[{name:"latimer road", x:97, y:274}],[{name:"gloucester road", x:587, y:493}]],
				[[{name:"ladbroke grove", x:140, y:236}],[{name:"high street kensington", x:431, y:413}]],
				[[{name:"westbourne park", x:185, y:204}],[{name:"notting hill gate", x:397, y:304}]],
				[[{name:"royal oak", x:293, y:166}],[{name:"bayswater", x:411, y:225}]],
				[{name:"paddington", x:453, y:126}],
				[{name:"edgware road", x:540, y:86}],
				[{name:"baker street", x:615, y:32}]
			]
		},
		{
			name: "bakerloo",
			locations: [
				[{name:"queeen's park", x:240, y:29}],
				[{name:"kilburn park", x:277, y:56}],
				[{name:"maida vale", x:318, y:88}],
				[{name:"warwick avenue", x:358, y:116}],
				[{name:"paddington", x:465, y:143}],
				[{name:"edgware road", x:523, y:64}],
				[{name:"marylebone", x:556, y:36}],
				[{name:"baker street", x:613, y:29}],
				[{name:"regent's park", x:691, y:47}],
				[{name:"oxford circus", x:763, y:102}]
			]
		},
		{
			name: "jubilee",
			locations: [
				[{name:"baker street", x:613, y:29}],
				[{name:"bond street", x:701, y:152}],
				[{name:"green park", x:763, y:236}]
			]
		}
	]
}

var multiple2 = {
	image: "/maps/multiple2.png",
	startLine: 0,
	startStation: "sloane square",
	lines: [
		{
			name: "circle",
			locations: [
				[{name:"sloane square", x:74, y:459}],
				[{name:"victoria", x:131, y:417}],
				[{name:"st. james's park", x:175, y:385}],
				[{name:"westminster", x:212, y:358}],
				[{name:"embankment", x:298, y:292}],
				[{name:"temple", x:349, y:255}],
				[{name:"blackfriars", x:391, y:222}],
				[{name:"mansion house", x:431, y:193}],
				[{name:"cannon street", x:469, y:165}],
				[{name:"monument", x:554, y:152}],
				[{name:"tower hill", x:648, y:149}],
				[{name:"aldgate", x:701, y:94}],
				[{name:"moorgate", x:537, y:41}]
			]
		},
		{
			name: "district",
			locations: [
				[{name:"sloane square", x:76, y:465}],
				[{name:"victoria", x:133, y:424}],
				[{name:"st. james's park", x:179, y:391}],
				[{name:"westminster", x:216, y:363}],
				[{name:"embankment", x:303, y:299}],
				[{name:"temple", x:354, y:261}],
				[{name:"blackfriars", x:396, y:228}],
				[{name:"mansion house", x:434, y:199}],
				[{name:"cannon street", x:474, y:172}],
				[{name:"monument", x:555, y:159}],
				[{name:"tower hill", x:649, y:156}]
			]
		},
		{
			name: "victoria",
			locations: [
				[{name:"oxford circus", x:103, y:137}],
				[{name:"green park", x:103, y:270}],
				[{name:"victoria", x:135, y:421}],
				[{name:"pimlico", x:169, y:468}]
			]
		},
		{
			name: "bakerloo",
			locations: [
				[{name:"oxford circus", x:103, y:137}],
				[{name:"piccadilly circus", x:165, y:222}],
				[{name:"charing cross", x:278, y:271}],
				[{name:"embankment", x:298, y:297}],
				[{name:"waterloo", x:350, y:363}],
				[{name:"lambeth north", x:457, y:393}],
				[{name:"elephant & castle", x:537, y:392}]
			]
		},
		{
			name: "jubilee",
			locations: [
				[{name:"green park", x:103, y:270}],
				[{name:"westminster", x:212, y:361}],
				[{name:"waterloo", x:352, y:362}],
				[{name:"southwark", x:423, y:325}],
				[{name:"london bridge", x:539, y:274}],
				[{name:"bermondsey", x:681, y:272}]
			]
		},
		{
			name: "northern",
			locations: [
				[{name:"tottenham court road", x:175, y:81}],
				[{name:"leicester square", x:239, y:168}],
				[{name:"charing cross", x:283, y:265}],
				[{name:"embankment", x:304, y:290}],
				[{name:"waterloo", x:354, y:358}]
			]
		},
		{
			name: "piccadilly",
			locations: [
				[{name:"green park", x:103, y:270}],
				[{name:"piccadilly circus", x:165, y:222}],
				[{name:"leicester square", x:239, y:168}],
				[{name:"covent garden", x:274, y:139}],
				[{name:"holborn", x:286, y:66}]
			]
		},
		{
			name: "central",
			locations: [
				[{name:"oxford circus", x:103, y:137}],
				[{name:"tottenham court road", x:175, y:81}],
				[{name:"holborn", x:286, y:66}],
				[{name:"chancery lane", x:339, y:65}],
				[{name:"st. paul's", x:445, y:94}],
				[{name:"bank", x:533, y:124}]
			]
		},
		{
			name: "waterloo and city",
			locations: [
				[{name:"waterloo", x:352, y:361}],
				[{name:"bank", x:533, y:124}]
			]
		}
	]
}

var lessons = [district, hammersmith]