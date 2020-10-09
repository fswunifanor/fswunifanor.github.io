var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var perfilD=document.getElementById("perfil");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');

var tques=questions.length;
var scoreA=0;
var scoreB=0;
var scoreC=0;
var scoreD=0;
var quesindex=0;
// function quit()
// {         
// 	      quiz.style.display='none';
//           result.style.display='';
//           var f=score/tques;
//           result.textContent="SCORE ="+f*100;
//           q.style.display="none";
// }
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	 return;// body...
};
give_ques(0);

function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("Selecione um Item");return;}

	// if(selected_ans.value==questions[quesindex][5])
	// 	{score=score+1;}
	if(selected_ans.value==1)
		scoreA++;
	else if (selected_ans.value==2)
		scoreB++;
	else if (selected_ans.value==3)
		scoreC++;
	else if (selected_ans.value==4)
		scoreD++;
	
	selected_ans.checked=false;
	quesindex++;
	// if(quesindex==tques-1)
	// 	nextbutton.textContent="Finish";
	// res.innerHTML=perfil[0];
	
	if(quesindex==7)
	{
		quesindex=0;
		// q.style.display='none';
		quiz.style.display='none';
		res.style.display='';
		var max;
		var img = document.getElementById("animal");		
		img.style.height = "200px";
		if(scoreA > scoreB)
			if(scoreA > scoreC)
				if(scoreA > scoreD){
					max=0;
					img.src = "./img/personalidade/aguia.png";
				}
				else{
					max=3;
					img.src = "./img/personalidade/img/shark.png";
				}
			else 
				if(scoreC>scoreD){
					max=2;
					img.src = "./img/personalidade/img/gato.png";
				}
				else{
					max=3;
					img.src = "./img/personalidade/img/shark.png";
				}			
		else
			 if (scoreB > scoreC)
				if (scoreB>scoreD){
					max=1;
					img.src = "./img/personalidade/wolf.png";
				}
				else 
					if(scoreC>scoreD){
						max=2;
						img.src = "./img/personalidade/gato.png";
					}
					else{
						max=3;
						img.src = "./img/personalidade/shark.png";
					}
			else 
				if(scoreC>scoreD){
					max=2;
					img.src = "./img/personalidade/gato.png";
				}
				else{
					max=3;
					img.src = "./img/personalidade/shark.png";
				}

		var name = document.getElementById("nAnimal");
		name.innerHTML = perfil[max][0];
		perfilD.innerHTML= perfil[max][1];
	}
	
	give_ques(quesindex);

}

function nextPerfil(){
	quiz.style.display='';
	res.style.display='none';
	scoreA=0;
	scoreB=0;
	scoreC=0;
	scoreD=0;	
}