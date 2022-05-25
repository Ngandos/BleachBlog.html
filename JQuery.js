$(document).ready(function(){
$("#bounce").click(function(){
    $('#bounce').effect('bounce', {times: 5}, 1000);
        });
$('#shaking').click(function(){
    $("#shaking").effect('shake', {times: 3}, 1000);//Effect est produit puis le code disparais donc pas de retour
        });
    $('#boom').click(function() {
        $('#booming').toggle('highlight');
        });

$('#ParaOne').mouseenter(function(){//Id Element Ciblé et fonction
    $('#saved').toggle('explode')//ID D'anim Toggle = event provoqué par l'evenement ecouté donc a la suppression de cet evenement retour a la normale
        })

$('#ParaTwo').mouseenter(function(){
    $('#saved1').toggle('explode')
        })

$('#Grid').click(function(){//Function explode 
    $('#Grid').toggle('explode')
})

$("#Grid").click(function (e) {//Retour Origine State
    $("#Grid").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
});

$('#shaking').click(function(){//Fonction changement du style de body actionné par clic bouton ID shaking
    $("body").animate({
        color:"green",
        backgroundColor: "rgb(20, 20, 20)"})
})

//ImgExplode........................................................................
$('#Grill').click(function(){//Function explode 
    $('#Grill').toggle('explode')
        })

$("#Grill").click(function (e) {//Retour Origine State
    $("#Grill").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });


$('#Grill1').click(function(){//Function explode 
    $('#Grill1').toggle('explode')
        })

$("#Grill1").click(function (e) {//Retour Origine State
    $("#Grill1").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });


$('#Grill2').click(function(){//Function explode 
    $('#Grill2').toggle('explode')
        })

$("#Grill2").click(function (e) {//Retour Origine State
    $("#Grill2").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });


$('#Grill3').click(function(){//Function explode 
    $('#Grill3').toggle('explode')
        })

$("#Grill3").click(function (e) {//Retour Origine State
    $("#Grill3").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });


$('#Grill4').click(function(){//Function explode 
    $('#Grill4').toggle('explode')
        })

$("#Grill4").click(function (e) {//Retour Origine State
    $("#Grill4").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });

$('#Grill5').click(function(){//Function explode 
    $('#Grill5').toggle('explode')
        })

$("#Grill5").click(function (e) {//Retour Origine State
    $("#Grill5").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
        });

$('#Grill6').click(function(){//Function explode 
    $('#Grill6').toggle('explode')
        })

$("#Grill6").click(function (e) {//Retour Origine State
    $("#Grill6").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
    });
    
$('#Grill7').click(function(){//Function explode 
    $('#Grill7').toggle('explode')
        })

$("#Grill7").click(function (e) {//Retour Origine State
    $("#Grill7").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
    });

$('#Grill8').click(function(){//Function explode 
    $('#Grill8').toggle('explode')
        })

$("#Grill8").click(function (e) {//Retour Origine State
    $("#Grill8").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
});

$('#Grill9').click(function(){//Function explode 
    $('#Grill9').toggle('explode')
        })

$("#Grill9").click(function (e) {//Retour Origine State
    $("#Grill9").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
});

$('#Grill10').click(function(){//Function explode 
    $('#Grill10').toggle('explode')
        })

$("#Grill10").click(function (e) {//Retour Origine State
    $("#Grill10").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
});

$('#Grill11').click(function(){//Function explode 
    $('#Grill11').toggle('explode')
        })

$("#Grill11").click(function (e) {//Retour Origine State
    $("#Grill11").toggle('explode', {
        pieces: 150
    }, 1000);
    setTimeout();
});

$('#Hover').click(function(){
    $('#GridBox').toggle(1000)('hide')
    $('#GridBox2').toggle(1000)('hide')
    $('#ParaTwo').toggle(1000)('Hide')
});

$('#Hover1').click(function(){
    $('#ParaOne').toggle(1000)('hide');
    $('#GridBox2').toggle(1000)('hide');
    $('#ParaTwo').toggle(1000)('hide');
    $('#nav').animate({color: red, backgroundColor: "rgb(20, 20, 20)"});
});

$('#Hover2').click(function(){
    $('#ParaOne').toggle(1000)('hide')
    $('#GridBox1').toggle(1000)('hide')
    $('#GridBox2').toggle(1000)('hide')
})

$('#Hover3').click(function(){
    $('#ParaOne').toggle(1000)('hide')
    $('#ParaTwo').toggle(1000)('hide')
    $('#GridBox1').toggle(1000)('hide')
})
    })

