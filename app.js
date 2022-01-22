var feld = document.querySelectorAll('.feld')
var button = document.querySelectorAll('button')



//rows und columns zum Spielfeld hinzugefügt!//
var row = 5
var column = 0
for (let i = 0; i < feld.length; i++) {
    if (column >6) {
        column = column -7
        row--
        feld[i].setAttribute("row", `${row}`)
        feld[i].setAttribute("column", `${column}`)
    }else{
        feld[i].setAttribute("row", `${row}`)
        feld[i].setAttribute("column", `${column}`)
    }
    column++
}

// hineinwerfen //////////////////////////
var player = true
var columns = []
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', ()=>{
        auswahlplayer(i)
    })
    columns[i] = 0 
}
function auswahlplayer(column) {
    if (player == true) {
        player1(column)
        player = false
    } else {
        player2(column)
        player = true
    }
}
function player1(column) {
    if (columns[column] <= 5) {
        var stein = document.createElement('div')
        stein.setAttribute('class', 'steinrot')
        var parent = document.querySelector(`[row="${columns[column]}"][column="${column}"]`)
        parent.appendChild(stein)
        columns[column]++   
        rotgewonnen()
    }
}
function player2(column) {
    if (columns[column] <= 5) {
        var stein = document.createElement('div')
        stein.setAttribute('class', 'steingelb')
        var parent = document.querySelector(`[row="${columns[column]}"][column="${column}"]`)
        parent.appendChild(stein)
        columns[column]++ 
        gelbgewonnen()
        rotgewonnen() 
    }
}
////auswertung(rot)/////

function rotgewonnen() {
    var reihe = 0
    var spalte = 0
    for (let i = 0; i < feld.length; i++) {
        if (spalte == 7) {
            spalte = spalte - 7
            reihe++
            var parent = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childElementCount
            
            if (parent == 1) {
                var child = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childNodes[0].className
                if (child == "steinrot") {
                    reihencheck(reihe, spalte)
                    spaltencheck(reihe, spalte)
                    diagonalcheck(reihe, spalte)
                    diagonallinkscheck(reihe, spalte)
                }
            }   
        }else{
            var parent = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childElementCount
            
            if (parent == 1) {
                var child = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childNodes[0].className
                if (child == "steinrot") {
                    reihencheck(reihe, spalte)
                    spaltencheck(reihe, spalte)
                    diagonalcheck(reihe, spalte)
                    diagonallinkscheck(reihe, spalte)
                }
            }   
        }
        spalte++

    }
    
}




function reihencheck(reihe, spalte) {
    var restspalteminus = spalte -3
   if (restspalteminus >= 1) {
        checkrotreihe(reihe, spalte) 
   }
   var restspalteplus = spalte +3
   if (restspalteplus <= 5) {
        checkrot(reihe, spalte)
   }
}
function spaltencheck(reihe, spalte) {
    var restspalteminus = reihe -3
   if (restspalteminus >= 1) {
        checkrotspalteminus(reihe, spalte) 
   }
   var restspalteplus = reihe +3
   if (restspalteplus <= 4) {
        checkrotspalteplus(reihe, spalte)
   }
}
function diagonalcheck(reihe, spalte) {
    var restreiheminus = reihe +3
    var restspalteminus = spalte +3
   if (restreiheminus <=4 && restspalteminus <=5) {
        checkrotdiagonalrechtsoben(reihe, spalte) 
   }
   var restspalteplus = spalte +3
   var restreiheplus = reihe -3
   if (restreiheplus >= 1 && restspalteplus <=5) {
       console.log(reihe,spalte)
        checkrotdiagonalrechtsunten(reihe, spalte)
   }
}
function diagonallinkscheck(reihe, spalte) {
    var restreiheminus = reihe +3
    var restspalteminus = spalte -3
   if (restreiheminus <=4 && restspalteminus >=1) {
        checkrotdiagonallinksoben(reihe, spalte) 
   }
   var restspalteplus = spalte -3
   var restreiheplus = reihe -3
   if (restreiheplus >= 1 && restspalteplus >=1) {
       console.log(reihe,spalte)
        checkrotdiagonallinksunten(reihe, spalte)
   }
}





function checkrot(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe}"][column="${spalte +i}"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe}"][column="${spalte +i}"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotreihe(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe}"][column="${spalte -i}"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe}"][column="${spalte -i}"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotspalteplus(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte }"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotspalteminus(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte }"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonalrechtsoben(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte+i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte+i}"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonalrechtsunten(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte+i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte+i }"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}

function checkrotdiagonallinksoben(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte-i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte-i}"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonallinksunten(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte-i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte-i }"]`).childNodes[0].className
            if (child == "steinrot") {
                if(i == 3){
                    rotgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}

//-auswertung(gelb)------------///

function gelbgewonnen() {
    var reihe = 0
    var spalte = 0
    for (let i = 0; i < feld.length; i++) {
        if (spalte == 7) {
            spalte = spalte - 7
            reihe++
            var parent = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childElementCount
            
            if (parent == 1) {
                var child = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childNodes[0].className
                if (child == "steingelb") {
                    reihencheckgelb(reihe, spalte)
                    spaltencheckgelb(reihe, spalte)
                    diagonalcheckgelb(reihe, spalte)
                    diagonallinkscheckgelb(reihe, spalte)
                }
            }   
        }else{
            var parent = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childElementCount
            
            if (parent == 1) {
                var child = document.querySelector(`[row="${reihe}"][column="${spalte}"]`).childNodes[0].className
                if (child == "steingelb") {
                    reihencheckgelb(reihe, spalte)
                    spaltencheckgelb(reihe, spalte)
                    diagonalcheckgelb(reihe, spalte)
                    diagonallinkscheckgelb(reihe, spalte)
                }
            }   
        }
        spalte++

    }
    
}




function reihencheckgelb(reihe, spalte) {
    var restspalteminus = spalte -3
   if (restspalteminus >= 1) {
        checkrotreihegelb(reihe, spalte) 
   }
   var restspalteplus = spalte +3
   if (restspalteplus <= 5) {
        checkrotgelb(reihe, spalte)
   }
}
function spaltencheckgelb(reihe, spalte) {
    var restspalteminus = reihe -3
   if (restspalteminus >= 1) {
        checkrotspalteminusgelb(reihe, spalte) 
   }
   var restspalteplus = reihe +3
   if (restspalteplus <= 4) {
        checkrotspalteplusgelb(reihe, spalte)
   }
}
function diagonalcheckgelb(reihe, spalte) {
    var restreiheminus = reihe +3
    var restspalteminus = spalte +3
   if (restreiheminus <=4 && restspalteminus <=5) {
        checkrotdiagonalrechtsobengelb(reihe, spalte) 
   }
   var restspalteplus = spalte +3
   var restreiheplus = reihe -3
   if (restreiheplus >= 1 && restspalteplus <=5) {
       console.log(reihe,spalte)
        checkrotdiagonalrechtsuntengelb(reihe, spalte)
   }
}
function diagonallinkscheckgelb(reihe, spalte) {
    var restreiheminus = reihe +3
    var restspalteminus = spalte -3
   if (restreiheminus <=4 && restspalteminus >=1) {
        checkrotdiagonallinksobengelb(reihe, spalte) 
   }
   var restspalteplus = spalte -3
   var restreiheplus = reihe -3
   if (restreiheplus >= 1 && restspalteplus >=1) {
       console.log(reihe,spalte)
        checkrotdiagonallinksuntengelb(reihe, spalte)
   }
}





function checkrotgelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe}"][column="${spalte +i}"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe}"][column="${spalte +i}"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotreihegelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe}"][column="${spalte -i}"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe}"][column="${spalte -i}"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotspalteplusgelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte }"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotspalteminusgelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte }"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonalrechtsobengelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte+i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte+i}"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonalrechtsuntengelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte+i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte+i }"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}

function checkrotdiagonallinksobengelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe+i}"][column="${spalte-i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe+i}"][column="${spalte-i}"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}
function checkrotdiagonallinksuntengelb(reihe, spalte) {
    var ineinerreihe = true
    var i = 1
    while (ineinerreihe == true) {
        var parent = document.querySelector(`[row="${reihe-i}"][column="${spalte-i }"]`).childElementCount
        if (parent == 1) {
            var child = document.querySelector(`[row="${reihe-i}"][column="${spalte-i }"]`).childNodes[0].className
            if (child == "steingelb") {
                if(i == 3){
                    gelbgewinnt()
                } 
            }else{
                ineinerreihe = false
            }
        }else{
            ineinerreihe = false
        } 
        i++   
    }
        
}



function rotgewinnt() {
 var sieger = document.querySelector('.gewinner')
    sieger.classList.add('rot')
    sieger.innerHTML= "Rot gewinnt!"
    setTimeout(() => {
        location.reload();    
    }, 3000); 
}

function gelbgewinnt() {
    var sieger = document.querySelector('.gewinner')
    sieger.innerHTML= "Gelb gewinnt!"
    sieger.classList.add('gelb')
    setTimeout(() => {
        location.reload();    
    }, 3000);
     
  
}
