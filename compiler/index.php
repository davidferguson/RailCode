<html>
	<head>
		<title>Compiler for RailCode</title>
		<script type="text/javascript" src="/compiler/operators.js">Unable to load Operator Library...</script>
		<script type="text/javascript" src="/compiler/base64.js">Unable to load Base64 Codec Library...</script>
		<style>
			textarea {
				width: 700px;
				height: 300px;
			}
		</style>
	</head>
	<body>
		<h1>Compiler for RailCode</h1>
		<textarea id="railcodeCode"></textarea>
		<button onclick="compileCode();">Compile</button>
		<textarea id="javascriptCode"></textarea>
		<button onclick="eval(document.getElementById('javascriptCode').value);;">Run</button>
		<script>
			function replaceAll(text, strA, strB)
			{
				while ( text.indexOf(strA) != -1)
				{
					text = text.replace(strA,strB);
				}
				return text;
			}
			var http = new XMLHttpRequest();
			function compileCode()
			{
				var codeToCompile = document.getElementById("railcodeCode").value;
				http.open('get', '/compiler/compiler.php?script=' + encode64( codeToCompile ), false);
				http.send( null );
				var javascriptCode = replaceAll( http.responseText, "\\\"", "\"" );
				document.getElementById("javascriptCode").value = javascriptCode;
			}
		</script>
	</body>
</html>