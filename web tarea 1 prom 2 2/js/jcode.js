$(document).ready(paginaCargada);

function paginaCargada()
{
    
	$('#mod1').click(acMod1);
	$('#mod2').click(acMod2);
	$('#mod3').click(acMod3);
	$('#menuDrop').hide;
	
	$('#menuDrop').click(showMenu);
	$(window).resize(screenChange);
	screenChange();
}

function screenChange()
{
   var anchoPantalla = window.innerWidth;
  
    if (anchoPantalla < 480)
	{
		$('#data1').hide();
		$('#data2').hide();
		$('#data3').hide();
		$('#menuDrop').show();
		$('#navMenu').hide();
	}
	
	else 
	{
		$('#data1').show();
		$('#data2').show();
		$('#data3').show();
		$('#menuDrop').hide();
		$('#navMenu').show();
	}
}

function acMod1()
{
 	$('#data1').slideToggle(1000);	
}
function acMod2()
{
 	$('#data2').slideToggle(1000);	
}
function acMod3()
{
 	$('#data3').slideToggle(1000);	
}

function showMenu()
{
 	$('#navMenu').slideToggle(1000);	
}
