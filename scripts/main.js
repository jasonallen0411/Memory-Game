var firstImage;
var secondImage;
var counter = 2;
function clickCounter(){
	if(counter == 1){
		counter++;
	}else if(counter == 2){
		counter = 1;
	}
	console.log(counter);
}

$("#startButton").click(function(){
	$(".wrapper").animate({opacity: "1"}, 1500);
	// $(".wrapper").css("display", "block");
	$("#startButton").css("display", "none");
	$("#memory").css("display", "none");

});

$("#picBox1").click(function(){
	clickCounter();
	$("#picBox1").css("background-image","url('images/ant.jpg')");
	$("#picBox1").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png)")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

	
$("#picBox2").click(function(){
	clickCounter();
	$("#picBox2").css("background-image","url('images/tiger.jpg')");
	$("#picBox2").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}


	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}
});

$("#picBox3").click(function(){
	clickCounter();
	$("#picBox3").css("background-image","url('images/cougar.jpeg')");
	$("#picBox3").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}


	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}
});

$("#picBox4").click(function(){
	clickCounter();
	$("#picBox4").css("background-image","url('images/goldDog.jpeg')");
	$("#picBox4").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox5").click(function(){
	clickCounter();
	$("#picBox5").css("background-image","url('images/spider.jpeg')");
	$("#picBox5").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox6").click(function(){
	clickCounter();
	$("#picBox6").css("background-image","url('images/shark.jpg')");
	$("#picBox6").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox7").click(function(){
	clickCounter();
	$("#picBox7").css("background-image","url('images/elephant.jpg')");
	$("#picBox7").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox8").click(function(){
	clickCounter();
	$("#picBox8").css("background-image","url('images/panther.jpg')");
	$("#picBox8").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox9").click(function(){
	clickCounter();
	$("#picBox9").css("background-image","url('images/whiteCat.jpg')");
	$("#picBox9").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox10").click(function(){
	clickCounter();
	$("#picBox10").css("background-image","url('images/lion.jpg')");
	$("#picBox10").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox11").click(function(){
	clickCounter();
	$("#picBox11").css("background-image","url('images/brownCat.jpeg')");
	$("#picBox11").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox12").click(function(){
	clickCounter();
	$("#picBox12").css("background-image","url('images/blackDog.jpg')");
	$("#picBox12").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox13").click(function(){
	clickCounter();
	$("#picBox13").css("background-image","url('images/whale.jpg')");
	$("#picBox13").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox14").click(function(){
	clickCounter();
	$("#picBox14").css("background-image","url('images/whiteDog.jpg')");
	$("#picBox14").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox15").click(function(){
	clickCounter();
	$("#picBox15").css("background-image","url('images/monkey.jpg')");
	$("#picBox15").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox16").click(function(){
	clickCounter();
	$("#picBox16").css("background-image","url('images/tiger.jpg')");
	$("#picBox16").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});


$("#picBox17").click(function(){
	clickCounter();
	$("#picBox17").css("background-image","url('images/cougar.jpeg')");
	$("#picBox17").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});	

$("#picBox18").click(function(){
	clickCounter();
	$("#picBox18").css("background-image","url('images/ant.jpg')");
	$("#picBox18").css("background-size", "contain");
		if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox19").click(function(){
	clickCounter();
	$("#picBox19").css("background-image","url('images/spider.jpeg')");
	$("#picBox19").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox20").click(function(){
	clickCounter();
	$("#picBox20").css("background-image","url('images/elephant.jpg')");
	$("#picBox20").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox21").click(function(){
	clickCounter();
	$("#picBox21").css("background-image","url('images/blackDog.jpg')");
	$("#picBox21").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox22").click(function(){
	clickCounter();
	$("#picBox22").css("background-image","url('images/goldDog.jpeg')");
	$("#picBox22").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox23").click(function(){
	clickCounter();
	$("#picBox23").css("background-image","url('images/panther.jpg')");
	$("#picBox23").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox24").click(function(){
	clickCounter();
	$("#picBox24").css("background-image","url('images/brownCat.jpeg')");
	$("#picBox24").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox25").click(function(){
	clickCounter();
	$("#picBox25").css("background-image","url('images/monkey.jpg')");
	$("#picBox25").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox26").click(function(){
	clickCounter();
	$("#picBox26").css("background-image","url('images/whale.jpg')");
	$("#picBox26").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox27").click(function(){
	clickCounter();
	$("#picBox27").css("background-image","url('images/whiteDog.jpg')");
	$("#picBox27").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox28").click(function(){
	clickCounter();
	$("#picBox28").css("background-image","url('images/whiteCat.jpg')");
	$("#picBox28").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox29").click(function(){
	clickCounter();
	$("#picBox29").css("background-image","url('images/shark.jpg')");
	$("#picBox29").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});

$("#picBox30").click(function(){
	clickCounter();
	$("#picBox30").css("background-image","url('images/lion.jpg')");
	$("#picBox30").css("background-size", "contain");
	if(counter == 1){
		firstImage = $(this).css("background-image");
	}else if(counter == 2){
		secondImage = $(this).css("background-image");
	}
	if( counter == 2 && firstImage != secondImage ){
		console.log(firstImage,secondImage);
		setTimeout(function(){
			$("#picBox2").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox3").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox4").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox5").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox6").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox7").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox8").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox9").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox10").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox11").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox12").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox13").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox14").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox15").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox16").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox17").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox18").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox19").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox20").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox21").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox22").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox23").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox24").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox25").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox26").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox27").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox28").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox29").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox30").css("background-image","url('images/cardBack.png')")}, 2000);
		setTimeout(function(){
			$("#picBox1").css("background-image","url('images/cardBack.png')")}, 2000);
		
		firstImage = null; secondImage = null;
	}


	
});



