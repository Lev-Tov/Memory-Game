var memoryGame={};

memoryGame.images=[];
memoryGame.picked=false;
memoryGame.card1=0;
memoryGame.card2=0;
memoryGame.guessed=0;

memoryGame.pause=false;

memoryGame.createboard=function(){

	for(var i = 0; i<4 ; i++){
		var row = document.createElement("div");
		row.classList.add("row");
		for (var j = 0; j < 3; j++) {
			var card= document.createElement("div");
			card.classList.add("card", "col-xs-3");
			card.id=i*3+j;
			card.style.backgroundImage="url(images/texture.jpg)";
			card.addEventListener("click",memoryGame.display);
			row.appendChild(card);

		}
		document.getElementsByClassName("container")[0].appendChild(row);
	}
};

memoryGame.imageArray=function(){
	for(var i=0;i<6;i++){
		memoryGame.images.push("images/"+(i+1)+".jpg");
		memoryGame.images.push("images/"+(i+1)+".jpg");
	}
}

memoryGame.shuffle=function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

memoryGame.display=function(e){
	if (!memoryGame.pause) {
		e.target.style.backgroundImage= "url("+memoryGame.images[e.target.id]+")";
		if(!memoryGame.picked){
			memoryGame.card1=e.target;
			memoryGame.picked=true;

		}
		else{
			memoryGame.card2=e.target;
			memoryGame.pause = true;
			memoryGame.check();
			
		}	
	}
}
memoryGame.check=function(){
	if (memoryGame.pause) {
		//console.log("test")
		if (memoryGame.card1.style.backgroundImage==memoryGame.card2.style.backgroundImage){
			memoryGame.picked=false;
			memoryGame.pause=false;
			memoryGame.guessed++;
			if (memoryGame.guessed==6){
				alert("Congratulation You Won!");
			}
		}
			else{
				setTimeout(function(){
					memoryGame.card1.style.backgroundImage="url(images/texture.jpg)";
					memoryGame.card2.style.backgroundImage="url(images/texture.jpg)";

					memoryGame.card1 = 0;
					memoryGame.card2 = 0;
					memoryGame.pause=false;
					memoryGame.picked=false;
				},1000);
				
			}										
		}
}


memoryGame.createboard();
memoryGame.imageArray();
memoryGame.shuffle(memoryGame.images);

