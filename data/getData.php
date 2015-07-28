<?php
	
	function print_r2($val){
		echo "<html><body>";
        echo '<pre>';
        print_r($val);
        echo  '</pre>';
		echo "</body></html>";
}
	
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