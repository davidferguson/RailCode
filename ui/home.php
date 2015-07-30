<?php
	session_start();
	if( ! isset($_SESSION["email"]) )
	{
		header("Location: login.php");
	}
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>RailCode :: Main</title>
		<link href="bootstrap.css" rel="stylesheet">
		<style>
			body {
				padding-top: 50px;
			}
			.starter-template {
				padding: 40px 15px;
				text-align: center;
			}
			#logoBig {
				width: 100%;
			}
			svg {
				width: 50%;
				height: auto;
				display: block;
				margin-left: auto;
				margin-right: auto;
				font-family: 'Quicksand', sans-serif;
				text-decoration: 
			}
			.col-md-4 {
				padding-right: 20px;
				padding-left: 20px;
			}
		</style>
	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="main.php">RailCode</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li><a href="learn.php">Learn</a></li>
						<li><a href="play.php">Play</a></li>
						<li><a href="challenge.php">Challenge</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container" style="margin-top:20px;">
			<div id="logoBig">
				<svg
				   xmlns:dc="http://purl.org/dc/elements/1.1/"
				   xmlns:cc="http://creativecommons.org/ns#"
				   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
				   xmlns:svg="http://www.w3.org/2000/svg"
				   xmlns="http://www.w3.org/2000/svg"
				   xmlns:xlink="http://www.w3.org/1999/xlink"
				   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
				   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
				   width="234.41373"
				   height="74.794533"
				   viewBox="-40 -120 234.41373 111.13428"
				   id="svg2"
				   version="1.1"
				   inkscape:version="0.91 r13725"
				   sodipodi:docname="logo.svg.2015_07_30_11_07_03.0.svg">
				  <sodipodi:namedview
					 pagecolor="#ffffff"
					 bordercolor="#666666"
					 borderopacity="1"
					 objecttolerance="10"
					 gridtolerance="10"
					 guidetolerance="10"
					 inkscape:pageopacity="0"
					 inkscape:pageshadow="2"
					 inkscape:window-width="1600"
					 inkscape:window-height="837"
					 id="namedview3523"
					 showgrid="false"
					 inkscape:zoom="3.6203867"
					 inkscape:cx="126.65867"
					 inkscape:cy="-15.500081"
					 inkscape:window-x="-8"
					 inkscape:window-y="-8"
					 inkscape:window-maximized="1"
					 inkscape:current-layer="svg2"
					 fit-margin-top="10"
					 fit-margin-left="10"
					 fit-margin-right="10"
					 fit-margin-bottom="10" />
				  <title
					 id="title4">Route map of London Underground, London Overground, Docklands Light Railway and Crossrail licensed under Creative Commons Attribution-Share Alike 4.0 International by Wikimedians</title>
				  <metadata
					 id="license">
					<rdf:RDF>
					  <cc:Work
						 rdf:about="">
						<dc:format>image/svg+xml</dc:format>
						<dc:type
						   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
						<cc:license
						   rdf:resource="http://creativecommons.org/licenses/by-sa/3.0/" />
						<dc:title>Route map of London Underground, London Overground, Docklands Light Railway and Crossrail licensed under Creative Commons Attribution-Share Alike 4.0 International by Wikimedians</dc:title>
					  </cc:Work>
					  <cc:License
						 rdf:about="http://creativecommons.org/licenses/by-sa/3.0/">
						<cc:permits
						   rdf:resource="http://creativecommons.org/ns#Reproduction" />
						<cc:permits
						   rdf:resource="http://creativecommons.org/ns#Distribution" />
						<cc:requires
						   rdf:resource="http://creativecommons.org/ns#Notice" />
						<cc:requires
						   rdf:resource="http://creativecommons.org/ns#Attribution" />
						<cc:permits
						   rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
						<cc:requires
						   rdf:resource="http://creativecommons.org/ns#ShareAlike" />
					  </cc:License>
					</rdf:RDF>
				  </metadata>
				  <style
					 type="text/css"
					 id="style7">
				text {font-family:Arimo,Liberation Sans,Helvetica,Arial,sans-serif}
				.textbg {stroke:#fff;stroke-width:3;stroke-linejoin:round}
				.zone {font-size:35px;font-weight:bold;text-anchor:middle}
				.st {font-size:14px;fill:#000}
				.small {font-size:11px;fill:#000}
				.intline {font-size:11px;fill:#fff}
				.x {fill:#999}
				.b {font-weight:bold}
				.mid {text-anchor:middle}
				.end {text-anchor:end}
				.ul {text-decoration:underline;cursor:help}
				.me {fill:none;stroke-width:5}
				.mes {fill:none;stroke-width:1.5;stroke:#fff;stroke-linecap:round}
				.meb {fill:none;stroke-width:5.5}
				.mex {fill:none;stroke-width:3.5;stroke:#fff}
				.ftfl {fill:#009}
				.fbakerloo {fill:#894E24}
				.sbakerloo {stroke:#894E24}
				.fcentral {fill:#DC241F}
				.scentral {stroke:#DC241F}
				.fcircle {fill:#d90}
				.scircle {stroke:#FFCE00}
				.bcircle {stroke:#d90}
				.fdistrict {fill:#007229}
				.sdistrict {stroke:#007229}
				.fhnc {fill:#c78}
				.shnc {stroke:#D799AF}
				.bhnc {stroke:#c78}
				.fjubilee {fill:#777}
				.sjubilee {stroke:#868F98}
				.fmetropolitan {fill:#826}
				.smetropolitan {stroke:#751056}
				.fnorthern {fill:#000}
				.snorthern {stroke:#000}
				.fpiccadilly {fill:#0019A8}
				.spiccadilly {stroke:#0019A8}
				.fvictoria {fill:#09d}
				.svictoria {stroke:#00A0E2}
				.fwnc {fill:#5b9}
				.swnc {stroke:#76D0BD}
				.swnc2 {stroke:#0019A8;stroke-width:0.5;fill:none}
				.fdlr {fill:#00a4a7}
				.sdlr {stroke:#00a4a7}
				.sdlr2 {stroke:#fff;stroke-width:1;fill:none}
				.fog {fill:#E87511}
				.fogx {fill:#fb5}
				.sog {stroke:#E87511}
				.sogx {stroke:#fb5}
				.fcrossrail {fill:#7156A5}
				.scrossrail {stroke:#7156A5}
				.ftflrail {fill:#0019A8}
				.stflrail {stroke:#0019A8}
				.stl {stroke:#6C0;stroke-width:2;fill:none}
				.ftl {fill:#5b0}
				.rn {fill:#99f}
				.osib {fill:none;stroke:#fff;stroke-width:5}
				.osi {fill:none;stroke:#009;stroke-width:3.5;cursor:help}
				.branch {stroke:#fff;stroke-width:3;stroke-dasharray:4;fill:none}
				.tleg:hover {fill:#009;stroke-width:1;stroke:#009;cursor:pointer}
				.tleg:active {cursor:progress}
				.toff:hover {cursor:pointer}
				.toff:active {cursor:progress}
				.blink {fill:none;stroke-width:12;stroke-linecap:round;opacity:0;visibility:hidden;cursor:pointer}
				.pointer {cursor:pointer}
				.progress:active {cursor:progress}
					</style>
				  <defs
					 id="defs9">
					<path
					   id="term"
					   style="fill:none;stroke-width:5"
					   d="M -8,0 8,0"
					   inkscape:connector-curvature="0" />
					<use
					   xlink:href="#term"
					   id="termbakerloo"
					   class="sbakerloo"
					   style="stroke:#894e24"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termcentral"
					   class="scentral"
					   style="stroke:#dc241f"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termcircle"
					   class="scircle"
					   style="stroke:#ffce00"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termdistrict"
					   class="sdistrict"
					   style="stroke:#007229"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termhnc"
					   class="shnc"
					   style="stroke:#d799af"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termjubilee"
					   class="sjubilee"
					   style="stroke:#868f98"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termmetropolitan"
					   class="smetropolitan"
					   style="stroke:#751056"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termnorthern"
					   class="snorthern"
					   style="fill:#9999ff;stroke:#000000"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termpiccadilly"
					   class="spiccadilly"
					   style="stroke:#0019a8"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termvictoria"
					   class="svictoria"
					   style="stroke:#00a0e2"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termdlr"
					   class="sdlr"
					   style="stroke:#00a4a7"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termog"
					   class="sog"
					   style="stroke:#e87511"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#term"
					   id="termcrossrail"
					   class="stflrail"
					   style="stroke:#0019a8"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<path
					   id="termx"
					   style="fill:#ffffff;stroke-width:0.75"
					   d="m 1.75,-2 5.75,0 0,4 -15,0 0,-4 5.75,0"
					   inkscape:connector-curvature="0" />
					<use
					   xlink:href="#termx"
					   id="termnorthernx"
					   class="snorthern"
					   style="fill:#9999ff;stroke:#000000"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#termx"
					   id="termogx"
					   class="sog"
					   style="stroke:#e87511"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<path
					   id="st"
					   style="fill:none;stroke-width:5"
					   d="M 1,0 7.5,0"
					   inkscape:connector-curvature="0" />
					<path
					   id="stb"
					   style="fill:none;stroke-width:5"
					   d="M 2.5,0 7.75,0"
					   inkscape:connector-curvature="0" />
					<use
					   xlink:href="#st"
					   id="stbakerloo"
					   class="sbakerloo"
					   style="stroke:#894e24"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stcentral"
					   class="scentral"
					   style="stroke:#dc241f"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<g
					   id="stcircle">
					  <use
						 xlink:href="#stb"
						 class="meb bcircle"
						 id="use33"
						 style="font-weight:bold;fill:none;stroke:#dd9900;stroke-width:5.5"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#st"
						 class="scircle"
						 id="use35"
						 style="stroke:#ffce00"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<use
					   xlink:href="#st"
					   id="stdistrict"
					   class="sdistrict"
					   style="stroke:#007229"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<g
					   id="sthnc">
					  <use
						 xlink:href="#stb"
						 class="meb bhnc"
						 id="use39"
						 style="font-weight:bold;fill:none;stroke:#cc7788;stroke-width:5.5"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#st"
						 class="shnc"
						 id="use41"
						 style="stroke:#d799af"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<use
					   xlink:href="#st"
					   id="stjubilee"
					   class="sjubilee"
					   style="stroke:#868f98"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stmetropolitan"
					   class="smetropolitan"
					   style="stroke:#751056"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stnorthern"
					   class="snorthern"
					   style="fill:#9999ff;stroke:#000000"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stpiccadilly"
					   class="spiccadilly"
					   style="stroke:#0019a8"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stvictoria"
					   class="svictoria"
					   style="stroke:#00a0e2"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stdlr"
					   class="sdlr"
					   style="stroke:#00a4a7"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stog"
					   class="sog"
					   style="stroke:#e87511"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<use
					   xlink:href="#st"
					   id="stcrossrail"
					   class="stflrail"
					   style="stroke:#0019a8"
					   x="0"
					   y="0"
					   width="2500"
					   height="1320" />
					<path
					   id="stx"
					   style="fill:none;stroke-width:5"
					   d="M 8,0 2,0"
					   inkscape:connector-curvature="0" />
					<path
					   id="stxm"
					   style="fill:none;stroke:#ffffff;stroke-width:3.5"
					   d="M 7.25,0 0,0"
					   inkscape:connector-curvature="0" />
					<path
					   id="stxm2"
					   style="fill:none;stroke:#ffffff;stroke-width:1.5"
					   d="M 6.25,0 0,0"
					   inkscape:connector-curvature="0" />
					<g
					   id="stmetropolitanx">
					  <use
						 xlink:href="#stx"
						 class="smetropolitan"
						 id="use55"
						 style="stroke:#751056"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#stxm"
						 id="use57"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="stnorthernx">
					  <use
						 xlink:href="#stx"
						 class="snorthern"
						 id="use60"
						 style="fill:#9999ff;stroke:#000000"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#stxm"
						 id="use62"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="stogx">
					  <use
						 xlink:href="#stx"
						 class="sog"
						 id="use65"
						 style="stroke:#e87511"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#stxm"
						 id="use67"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="stogx2">
					  <use
						 xlink:href="#stx"
						 class="sog"
						 id="use70"
						 style="stroke:#e87511"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#stxm2"
						 id="use72"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="stcrossrailx">
					  <use
						 xlink:href="#stx"
						 class="scrossrail"
						 id="use75"
						 style="stroke:#7156a5"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <use
						 xlink:href="#stxm"
						 id="use77"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<circle
					   id="sttl"
					   cx="0"
					   cy="0"
					   r="4"
					   class="ftl"
					   style="fill:#55bb00" />
					<g
					   id="sttlnr">
					  <circle
						 cx="0"
						 cy="0"
						 r="5.5"
						 style="fill:#ffffff;stroke:#000000;stroke-width:0.75"
						 id="circle81" />
					  <path
						 style="fill:none;stroke:#ef2721;stroke-width:1"
						 d="m -5,-1.25 10,0 m -10,2.5 10,0 m -7.5,-5 5,2.5 -5,2.5 5,2.5"
						 id="path83"
						 inkscape:connector-curvature="0" />
					</g>
					<g
					   id="sttlow">
					  <use
						 xlink:href="#sttl"
						 id="use86"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					  <path
						 style="fill:none;stroke:#ffffff;stroke-width:1"
						 d="M -3,-3 1.5,0 -3,3"
						 id="path88"
						 inkscape:connector-curvature="0" />
					</g>
					<path
					   id="nr"
					   style="fill:#ef2721"
					   transform="matrix(0.25,0,0,0.25,-6.25,-4)"
					   d="m 11,0 11,0 15,8 13,0 0,5 -13,0 -13,7 26,0 0,5 -26,0 16,8 L 28,33 13,25 0,25 0,20 13,20 26,13 0,13 0,8 26,8 Z"
					   inkscape:connector-curvature="0" />
					<g
					   id="intnr"
					   cursor="help">
					  <circle
						 cx="0"
						 cy="0"
						 r="8.25"
						 id="circle92"
						 style="fill:#ffffff" />
					  <circle
						 cx="0"
						 cy="0"
						 r="7"
						 style="fill:#ffffff;stroke:#000000;stroke-width:1"
						 id="circle94" />
					  <use
						 xlink:href="#nr"
						 id="use96"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="intnrx"
					   cursor="help">
					  <circle
						 cx="0"
						 cy="0"
						 r="8.25"
						 id="circle99"
						 style="fill:#ffffff" />
					  <circle
						 cx="0"
						 cy="0"
						 r="7"
						 style="fill:#ffffff;stroke:#999999;stroke-width:1"
						 id="circle101" />
					  <use
						 xlink:href="#nr"
						 id="use103"
						 x="0"
						 y="0"
						 width="2500"
						 height="1320" />
					</g>
					<g
					   id="int">
					  <circle
						 cx="0"
						 cy="0"
						 r="8.25"
						 id="circle106"
						 style="fill:#ffffff" />
					  <circle
						 cx="0"
						 cy="0"
						 r="6"
						 style="fill:#ffffff;stroke:#000000;stroke-width:3"
						 id="circle108" />
					</g>
					<g
					   id="intx">
					  <circle
						 cx="0"
						 cy="0"
						 r="8.25"
						 id="circle111"
						 style="fill:#ffffff" />
					  <circle
						 cx="0"
						 cy="0"
						 r="6"
						 style="fill:#ffffff;stroke:#999999;stroke-width:3"
						 id="circle113" />
					</g>
					<g
					   id="cap2">
					  <rect
						 x="-8.25"
						 y="-8.25"
						 width="31"
						 height="16.5"
						 rx="8.25"
						 id="rect116"
						 style="fill:#ffffff" />
					  <rect
						 x="-6"
						 y="-6"
						 width="26.5"
						 height="12"
						 rx="6"
						 style="fill:#ffffff;stroke:#000000;stroke-width:3"
						 id="rect118" />
					</g>
					<g
					   id="cap2l">
					  <rect
						 x="-8.25"
						 y="-8.25"
						 width="34.5"
						 height="16.5"
						 rx="8.25"
						 id="rect121"
						 style="fill:#ffffff" />
					  <rect
						 x="-6"
						 y="-6"
						 width="30"
						 height="12"
						 rx="6"
						 style="fill:#ffffff;stroke:#000000;stroke-width:3"
						 id="rect123" />
					</g>
					<g
					   id="cap2nr"
					   cursor="help">
					  <rect
						 x="-8.25"
						 y="-8.25"
						 width="31"
						 height="16.5"
						 rx="8.25"
						 id="rect126"
						 style="fill:#ffffff" />
					  <rect
						 x="-7"
						 y="-7"
						 width="28.5"
						 height="14"
						 rx="7"
						 style="fill:#ffffff;stroke:#000000;stroke-width:1"
						 id="rect128" />
					</g>
					<g
					   id="cap3nr"
					   cursor="help">
					  <rect
						 x="-8.25"
						 y="-8.25"
						 width="38"
						 height="16.5"
						 rx="8.25"
						 id="rect131"
						 style="fill:#ffffff" />
					  <rect
						 x="-7"
						 y="-7"
						 width="35.5"
						 height="14"
						 rx="7"
						 style="fill:#ffffff;stroke:#000000;stroke-width:1"
						 id="rect133" />
					</g>
					<path
					   id="STRg"
					   style="fill:#ffffff;stroke:none"
					   d="m 0,0 3,3 0,-2.5 -3,-3 -3,3 0,2.5 z"
					   inkscape:connector-curvature="0" />
					<g
					   id="airport"
					   transform="matrix(0,-0.04,0.04,0,-10,10)"
					   style="fill:#000000;stroke:none">
					  <polygon
						 points="10,350 30,350 80,275 200,275 140,490 170,490 320,275 450,275 490,250 450,225 320,225 170,10 140,10 200,225 80,225 30,150 10,150 30,240 30,260 "
						 id="polygon137" />
					  <ellipse
						 cx="441"
						 cy="250"
						 rx="50"
						 ry="24"
						 id="ellipse139"
						 style="stroke:#000000" />
					</g>
					<rect
					   id="route_base"
					   x="-8"
					   y="-8"
					   width="16"
					   height="16"
					   rx="5"
					   class="fog"
					   style="fill:#e87511" />
					<g
					   id="AETRAM"
					   cursor="help"
					   transform="matrix(0.025,0,0,0.025,-6.25,0)">
					  <path
						 style="fill:none;stroke:#000000;stroke-width:25"
						 d="m -80,-20 250,70 160,0 250,-70 m -410,70 30,-30 100,0 30,30 -30,-30 -50,0 0,130"
						 id="path143"
						 inkscape:connector-curvature="0" />
					  <path
						 d="m 150,140 200,0 60,50 -320,0 m 340,0 a 97.5,195 0 0 1 0,390 l -360,0 a 97.5,195 0 0 1 0,-390"
						 id="path145"
						 inkscape:connector-curvature="0"
						 style="fill:#000000" />
					  <path
						 d="m 430,220 a 70,190 0 0 1 70,160 L 0,380 A 70,190 0 0 1 70,220"
						 id="path147"
						 inkscape:connector-curvature="0"
						 style="fill:#ffffff" />
					</g>
				  </defs>
				  <text
					 xml:space="preserve"
					 style="font-style:normal;font-weight:normal;font-size:40px;line-height:125%;font-family:Sans;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
					 x="-47.540802"
					 y="-70.524094"
					 id="text10354"
					 sodipodi:linespacing="125%"><tspan
					   sodipodi:role="line"
					   id="tspan10356"
					   x="-47.540802"
					   y="-70.524094"
					   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#0019a8;fill-opacity:1">ailCode</tspan></text>
				  <text
					 xml:space="preserve"
					 style="font-style:normal;font-weight:normal;font-size:24px;line-height:125%;font-family:Sans;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
					 x="-35.428391"
					 y="-28.236372"
					 id="text11657"
					 sodipodi:linespacing="125%"><a xlink:href= "learn.php"><tspan
					   sodipodi:role="line"
					   id="tspan11659"
					   x="-35.428391"
					   y="-28.236372"
					   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#dc241f;fill-opacity:1">learn</tspan></a></text>
				  <text
					 xml:space="preserve"
					 style="font-style:normal;font-weight:normal;font-size:24px;line-height:125%;font-family:Sans;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
					 x="50.571613"
					 y="-28.236326"
					 id="text11657-4"
					 sodipodi:linespacing="125%"><a xlink:href= "main.php"><tspan
					   sodipodi:role="line"
					   id="tspan11659-1"
					   x="50.571613"
					   y="-28.236326"
					   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#751056;fill-opacity:1">play</tspan></a></text>
				  <text
					 xml:space="preserve"
					 style="font-style:normal;font-weight:normal;font-size:24px;line-height:125%;font-family:Sans;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
					 x="120.5716"
					 y="-28.236326"
					 id="text11657-4-8"
					 sodipodi:linespacing="125%"><a xlink:href= "challenge.php"><tspan
					   sodipodi:role="line"
					   id="tspan11659-1-8"
					   x="120.5716"
					   y="-28.236326"
					   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#007229;fill-opacity:1">challenge</tspan></a></text>
				  <text
					 xml:space="preserve"
					 style="font-style:normal;font-weight:normal;font-size:64.19324493px;line-height:125%;font-family:Sans;letter-spacing:0px;word-spacing:0px;fill:#0019a8;fill-opacity:1;stroke:none"
					 x="-91.597099"
					 y="-54.850899"
					 id="text10358"
					 sodipodi:linespacing="125%"
					 transform="scale(0.99165021,1.0084201)"><tspan
					   sodipodi:role="line"
					   id="tspan10360"
					   x="-91.597099"
					   y="-54.850899"
					   style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:70.58940125px;font-family:Quicksand;-inkscape-font-specification:Quicksand;fill:#0019a8;fill-opacity:1">R</tspan></text>
				  <rect
					 style="fill:#0019a8;fill-opacity:1;stroke:none"
					 id="rect11136"
					 width="204.72285"
					 height="7.8451195"
					 x="-55.141857"
					 y="-63.989834" />
				  <rect
					 style="fill:#0019a8;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					 id="rect11655"
					 width="9.9436893"
					 height="12.705825"
					 x="-18.91188"
					 y="-58.906292" />
				  <rect
					 style="fill:#0019a8;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					 id="rect11655-8"
					 width="9.9436893"
					 height="12.705825"
					 x="55.088123"
					 y="-58.906307" />
				  <rect
					 style="fill:#0019a8;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
					 id="rect11655-8-0-6"
					 width="9.9436893"
					 height="20.992231"
					 x="144.00978"
					 y="-70.373734" />
				</svg>
			</div>
			<div class="row" style="margin-top: 50px;">
				<div class="col-md-4">
					<h2>Learn</h2>
					<p>Begin your programming journey with <i>Learn</i>. Here you can learn computational thinking - even if you have never programmed before!</p>
				</div>
				<div class="col-md-4">
					<h2>Play</h2>
					<p>Our <i>Play</i> section allows you to develop your skills, whilst using a points-based system to encourage you to write concise, clean code. And besides, it’s fun!</p>
				</div>
				<div class="col-md-4">
					<h2>Challenge</h2>
					<p>If you come across a task that you find particularly interesting, you can tag it as a Challenge. Then ask your friends and see if your solution is the best - or can it be beaten...</p>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
	</body>
</html>