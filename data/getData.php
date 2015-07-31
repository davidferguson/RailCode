<?php
/*

getData.php

This file fetches live information from Transport for London's
open data portal about the current status of the lines in the
London Underground. The data is then sorted and processed into
a JSON format and sent to main.php

*/
	
	$url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus";
	$xml = simplexml_load_file( $url );
	if( $xml )
	{
		foreach($xml->LineStatus as $currentLine)
		{
			if( $currentLine->Line["ID"] < 90 )
			{
				$lineName = $currentLine->Line["Name"];
				$status = $currentLine->Status["CssClass"];
				if( $status != "GoodService" )
				{
					$stationTo = array();
					$stationFrom = array();
					$stationLine = array();
					foreach( $currentLine->BranchDisruptions->BranchDisruption as $currentDisruption)
					{
						array_push($stationTo, (string) $currentDisruption->StationTo->attributes()->Name);
						array_push($stationFrom, (string) $currentDisruption->StationFrom->attributes()->Name);
						array_push($stationLine, str_replace("&", "and", (string) $lineName));
					}
				}
			}
		}
		$stationClosures = array();
		$stationClosures["from"] = $stationFrom;
		$stationClosures["to"] = $stationTo;
		$stationClosures["lines"] = $stationLine;
		echo json_encode( $stationClosures );
	}
	else
	{
		echo "Error 1: Unable to load XML file.";
	}
	
?>