window.onload=function()
{	
	var audio=document.getElementsByTagName("audio")[0]
	var n11=document.getElementById("n1")
	var n22=document.getElementById("n2")

	n11.addEventListener("touchstart",function(){
//		设置音量
		if(audio.volume>=0 && audio.volume<1){
			audio.volume=audio.volume+0.1;
		}
//		console.log(audio.volume);
	},false)
	n22.addEventListener("touchstart",function(){
		if(audio.volume>=0.1 && audio.volume<=1){
			audio.volume=audio.volume-0.1;
		}
//		console.log(audio.volume);
	},false)
	audio.addEventListener("ended",function(){
		music.setAttribute("class","");
	}.false)
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play")
		}
		else {
			audio.pause();
			this.setAttribute("class","")
		}
	},false)
	page1.addEventListener("touchstart",function(){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut")
			page3.setAttribute("class","page fadeIn")
		},4000)
	},false)
	
	
}
