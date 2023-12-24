const content = "어떻게 하면 좀 더 이쁘고 쓰기편한 서비스를 만들 수 있을까?";
	 const text = document.querySelector(".typingContents");
	 let i = 0;
	 
	 function typing(){
		 if (i < content.length) {
		 let txt = content.charAt(i);
		 text.innerHTML += txt;
		 i++;
		 }
	 }
	 setInterval(typing, 200)