var years = 1;
var stv,stv2 = 2.5;
 

function getStv(summa,mths){
  var res;
  // mths = mths*12;
  if(mths<13){
    stv = 3.3;
  }else if(mths>=13 && mths<24){
    stv = 2.5;
  }else if(mths>=24  ){
    stv = 2;
  }

  if(summa<100000){
    stv2 = 3.3;
  }else if(summa>=100000 && summa<500000){
    stv2 = 3;
  }else if(summa>=500000 && summa<1000000){
    stv2 = 2.5;
  }else if(summa>=1000000   ){
    stv2 = 2;
  }
  if(stv>stv2){
    res=stv2;
  }else{
    res=stv;
  }

  return res;
}

function getTotal(summa,mths){
  let res = getStv(summa,mths);
  procent = (summa*((mths*res)/100));
  total = parseFloat(procent) + parseInt(summa);
  every = total/mths;
  procent =Math.ceil((procent)*100)/100;
  total =Math.ceil((total)*100)/100;
  every =Math.ceil((every)*100)/100;

  $('#res').html(every+' ₽');
  console.log(summa,mths);
  $('.stv').html(res+'%');
}

$(document).ready(function() {
	$('#burger-icon').click(function(){
		$(this).toggleClass('open');
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('scroll load', function() {
		$('.burger-icon').removeClass('open');
		$('.navbar').removeClass('nav-toggle');
	});

	$('#sum-range').on('input', function(){ 
 		$('#sum-input').attr("value", this.value); 
 		// $('#res').html(getStv(this.value,$('#time-input').value));
 		getTotal(this.value,$('#time-input').val());
	})
	$('#sum-input').on('input', function(){ 
 		$('#sum-range').attr("value", this.value); 
 		getTotal($('#sum-range').val(),$('#time-input').val());
	})
	$('#time-range').on('input', function(){ 
 		$('#time-input').attr("value", this.value);
 		getTotal($('#sum-range').val(),$('#time-input').val());
	})
	$('#time-input').on('input', function(){ 
 		$('#time-range').attr("value", this.value);
 		getTotal($('#sum-range').val(),$('#time-input').val()); 
	})

	document.getElementById("sum-range").oninput = function() {
	  var value = (this.value-this.min)/(this.max-this.min)*100;
	  this.style.background = 'linear-gradient(to right, #B5D7FF 0%, #B5D7FF ' + value + '%, #fff ' + value + '%, white 100%)'
	};

	document.getElementById("time-range").oninput = function() {
	  var value = (this.value-this.min)/(this.max-this.min)*100;
	  this.style.background = 'linear-gradient(to right, #B5D7FF 0%, #B5D7FF ' + value + '%, #fff ' + value + '%, white 100%)'
	};

	$('.selection .option').click(function(){
    let id = $(this).attr('data-id');
    $('.option').removeClass('option-selected');
    $('.req-wrapper').removeClass('req-wrapper-active');
    $(this).addClass('option-selected');
    $('.req-wrapper').hide();
    $('#req-'+id).show().addClass('req-wrapper-active');
  });

	$('.selection .form-option').click(function(){
    let id = $(this).attr('data-id');
    $('.form-option').removeClass('option-active');
    $('.form-wrapper').removeClass('form-wrapper-active');
    $(this).addClass('option-active');
    $('.form-wrapper').hide();
    $('#form-'+id).show().addClass('form-wrapper-active');
  });

	$('.dropdown').click(function(){
    $(this).toggleClass('dropdown-expanded');
  });
  $('.card').click(function(){
    $('.card').removeClass('card-selected');
    $(this).addClass('card-selected');
  });
});