
var btn=document.getElementById("getdata");
var output=document.getElementById("result");

btn.addEventListener("click",function(){
	var ourRequest=new XMLHttpRequest();
	ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-1.json");
	ourRequest.onload=function(){
		var ourData=JSON.parse(ourRequest.responseText);
		renderHtml(ourData);
	};
	ourRequest.send();
});

function renderHtml(data){
	var htmlString="this is a test";

	for(i=0;i<data.length;i++){
		htmlString+="<p>"+data[i].name +"is a "+ data[i].species + " and like to eat";
		for(j=0;j<data[i].foods.likes.length;j++){
			if(j==0)
				htmlString+=" "+data[i].foods.likes[j];
			else
				htmlString+=" and "+data[i].foods.likes[j];
		}
		htmlString+=" </p>";
	}

	output.insertAdjacentHTML('beforeend',htmlString);
}