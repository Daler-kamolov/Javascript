var btn = document.createElement('button');
btn.innerHTML = 'Go!';
btn.className = 'vip-btn';
btn.onclick = run;
document.body.append(btn);
var sel = 0;
var score = document.createElement('h1');
    score.innerHTML = 'Score: ' + sel;
    score.className = 'score';
    document.body.append(score);
   
function run() {
//level 1;

var lev1 = document.createElement('h1');
    lev1.innerHTML = 'Уровень 1';
    lev1.className = 'lev1';
    document.body.append(lev1);
var elem1 = document.createElement('div');
    elem1.className = 'vip';
    elem1.id = 'first';
    elem1.onclick = game;
    document.body.append(elem1);
var elem2 = document.createElement('div');
    elem2.className = 'vip';
    elem2.id = 'second';
    elem2.onclick = game;
    document.body.append(elem2);
var elem3 = document.createElement('div');
    elem3.className = 'vip';
    elem3.id = 'third';
    elem3.onclick = game;
    document.body.append(elem3);
var elem4 = document.createElement('div');
    elem4.className = 'vip';
    elem4.id = 'fourth';
    elem4.onclick = game;
    document.body.append(elem4);
var images = [elem1,elem2,elem3,elem4];

function game() {
    console.log(this);
    console.log(this.attributes.name);
    
    if(this.id == 'first') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
           elem1.style.background = "url('./img/html.png')";
           elem1.style.border = "3px solid black";
           images = [elem2,elem3,elem4];
            for(var i = 0; i < images.length; i++) {
                if(elem1.style.background === images[i].style.background) {
                    elem1.style.opacity = '0';
                    images[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000) 
    }
    else if(this.id == 'second') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            elem2.style.background = "url('./img/js.jpg')";
            elem2.style.border = "3px solid black"; 
            images = [elem1,elem3,elem4];
            for(var i = 0; i < images.length; i++) {
                if(elem2.style.background === images[i].style.background) {
                    elem2.style.opacity = '0';
                    images[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000); 
    }
    else if(this.id == 'third') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            elem3.style.background = "url('./img/html.png')";
            elem3.style.border = "3px solid black";
            images = [elem1,elem2,elem4];
            for(var i = 0; i < images.length; i++) {
                if(elem3.style.background === images[i].style.background) {
                    elem3.style.opacity = '0';
                    images[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000); 
    }
    else if(this.id == 'fourth'){
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            elem4.style.background = "url('./img/js.jpg')";
            elem4.style.border = "3px solid black";
            images = [elem1,elem2,elem3];
          for(var i = 0; i < images.length - 1; i++) {
            if(elem4.style.background === images[i].style.background) {
                elem4.style.opacity = '0';
                images[i].style.opacity = '0';
                sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
          }
          setTimeout(function() {
           if(elem1.style.opacity === '0' && elem2.style.opacity === '0' && elem3.style.opacity === '0' && elem4.style.opacity === '0')
            lev1.innerHTML = 'Вы выиграли первый уровень!Не плохо!'
            },500);
        },1000);
    }
    
}



//level 2
var lev2 = document.createElement('h1');
    lev2.innerHTML = 'Уровень 2';
    lev2.className = 'lev1';
    document.body.append(lev2);
var newel1 = document.createElement('div');
    newel1.className = 'vip';
    newel1.id = 'newFirst'; 
    newel1.onclick = newGame;
    document.body.append(newel1);   
var newel2 = document.createElement('div');
    newel2.className = 'vip';
    newel2.id = 'newSecond'; 
    newel2.onclick = newGame;
    document.body.append(newel2);   
var newel3 = document.createElement('div');
    newel3.className = 'vip';
    newel3.id = 'newThird'; 
    newel3.onclick = newGame;
    document.body.append(newel3);
var newel4 = document.createElement('div');
    newel4.className = 'vip';
    newel4.id = 'newFourth'; 
    newel4.onclick = newGame;
    document.body.append(newel4);       
var newel5 = document.createElement('div');
    newel5.className = 'vip';
    newel5.id = 'newFiveth'; 
    newel5.onclick = newGame;
    document.body.append(newel5);                
var newel6 = document.createElement('div');
    newel6.className = 'vip';
    newel6.id = 'newSixth'; 
    newel6.onclick = newGame;
    document.body.append(newel6);    

var newimages = [newel1,newel2,newel3,newel4,newel5,newel6];    
function newGame() {
    if(this.id == 'newFirst') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
           newel1.style.background = "url('./img/html.png')";
           newel1.style.border = "3px solid black";
           newimages = [newel2,newel3,newel4,newel5,newel6];
            for(var i = 0; i < newimages.length; i++) {
                if(newel1.style.background === newimages[i].style.background) {
                    newel1.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000) 
    }
    else if(this.id == 'newSecond') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            newel2.style.background = "url('./img/js.jpg')";
            newel2.style.border = "3px solid black"; 
            newimages = [newel1,newel3,newel4,newel5,newel6];
            for(var i = 0; i < newimages.length; i++) {
                if(newel2.style.background === newimages[i].style.background) {
                    newel2.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000); 
    }
    else if(this.id == 'newThird') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            newel3.style.background = "url('./img/html.png')";
            newel3.style.border = "3px solid black";
            newimages = [newel1,newel2,newel4,newel5,newel6];
            for(var i = 0; i < newimages.length; i++) {
                if(newel3.style.background === newimages[i].style.background) {
                    newel3.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000); 
    }
    else if(this.id == 'newFourth'){
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            newel4.style.background = "url('./img/json.jpg')";
            newel4.style.border = "3px solid black";
            newimages = [newel1,newel2,newel3,newel5,newel6];
            for(var i = 0; i < newimages.length; i++) {
                if(newel4.style.background === newimages[i].style.background) {
                    newel4.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
    },1000);
}
    else if(this.id == 'newFiveth') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            newel5.style.background = "url('./img/js.jpg')";
            newel5.style.border = "3px solid black";
            newimages = [newel1,newel2,newel3,newel4,newel6];
            for(var i = 0; i < newimages.length - 1; i++) {
                if(newel5.style.background ===newimages[i].style.background) {
                    newel5.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                    }
              }
        },1000);
    }
    else if(this.id == 'newSixth') {
        this.style.transform = "rotateY(0deg)";
        setTimeout(function() {
            newel6.style.background = "url('./img/json.jpg')";
            newel6.style.border = "3px solid black";
            newimages = [newel1,newel2,newel3,newel4,newel5];
            for(var i = 0; i < newimages.length ; i++) {
                if(newel6.style.background === newimages[i].style.background) {
                    newel6.style.opacity = '0';
                    newimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                    }
              }
            setTimeout(function () {
                if(newel1.style.opacity === '0' && newel2.style.opacity === '0' && newel3.style.opacity === '0' && newel4.style.opacity === '0' && newel5.style.opacity === '0' && newel6.style.opacity === '0')
                lev2.innerHTML = 'Вы выиграли второй уровень!Отлично!'
            },500)      
        },1000);
    }
}


//level 3
var lev3 = document.createElement('h1');
    lev3.className = 'lev1';
    lev3.innerHTML = 'Уровень 3';
var total = document.createElement('h1');
    total.innerHTML = '';
    total.className = 'total';
    document.body.append(total);
    document.body.append(lev3); 
var lastel1 = document.createElement('div');
    lastel1.className = 'vip';
    lastel1.id = 'lastel1';
    lastel1.onclick = lastGame;
    document.body.append(lastel1);
var lastel2 = document.createElement('div');
    lastel2.className = 'vip';
    lastel2.id = 'lastel2';
    lastel2.onclick = lastGame;
    document.body.append(lastel2);
var lastel3 = document.createElement('div');
    lastel3.className = 'vip';
    lastel3.id = 'lastel3';
    lastel3.onclick = lastGame;
    document.body.append(lastel3);
var lastel4 = document.createElement('div');
    lastel4.className = 'vip';
    lastel4.id = 'lastel4';
    lastel4.onclick = lastGame;
    document.body.append(lastel4);
var lastel5 = document.createElement('div');
    lastel5.className = 'vip';
    lastel5.id = 'lastel5';
    lastel5.onclick = lastGame;
    document.body.append(lastel5);
var lastel6 = document.createElement('div');
    lastel6.className = 'vip';
    lastel6.id = 'lastel6';
    lastel6.onclick = lastGame;
    document.body.append(lastel6);
var lastel7 = document.createElement('div');
    lastel7.className = 'vip';
    lastel7.id = 'lastel7';
    lastel7.onclick = lastGame;
    document.body.append(lastel7);
var lastel8 = document.createElement('div');
    lastel8.className = 'vip';
    lastel8.id = 'lastel8';
    lastel8.onclick = lastGame;
    document.body.append(lastel8);
var lastimages = [lastel1,lastel2,lastel3,lastel4,lastel5,lastel6,lastel7,lastel8];

function lastGame() {
    this.style.transform = 'rotateY(0deg)';
    if(this.id == 'lastel1') {
        setTimeout(function() {
           lastel1.style.background = "url('./img/html.png')";
           lastel1.style.border = "3px solid black";
           lastimages = [lastel2,lastel3,lastel4,lastel5,lastel6,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel1.style.background === lastimages[i].style.background) {
                    lastel1.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel; 
                }
            }
        },1000) 
    }
    else if(this.id == 'lastel2') {
        setTimeout(function() {
            lastel2.style.background = "url('./img/js.jpg')";
            lastel2.style.border = '3px solid black';
            lastimages = [lastel1,lastel3,lastel4,lastel5,lastel6,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel2.style.background === lastimages[i].style.background) {
                    lastel2.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel; 
                }
            }
        },1000);
    }
    else if(this.id == 'lastel3') {
        setTimeout(function() {
            lastel3.style.background = "url('./img/html.png')";
            lastel3.style.border = "3px solid black";
            lastimages = [lastel1,lastel2,lastel4,lastel5,lastel6,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel3.style.background === lastimages[i].style.background) {
                    lastel3.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel; 
                }
            }
        },1000);
    }
    else if(this.id == 'lastel4') {
        setTimeout(function() {
            lastel4.style.background = "url('./img/js.jpg')";
            lastel4.style.border = "3px solid black";
            lastimages = [lastel1,lastel2,lastel3,lastel5,lastel6,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel4.style.background === lastimages[i].style.background) {
                    lastel4.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000);
    }
    else if(this.id == 'lastel5') {
        setTimeout(function() {
            lastel5.style.background = "url('./img/json.jpg')";
            lastel5.style.border = '3px solid black';
            lastimages = [lastel1,lastel2,lastel3,lastel4,lastel6,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel5.style.background === lastimages[i].style.background) {
                    lastel5.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000);
    }
    else if(this.id == 'lastel6') {
        setTimeout(function () {
            lastel6.style.background = "url('./img/jsone.png')";
            lastel6.style.border = '3px solid black';
            lastimages = [lastel1,lastel2,lastel3,lastel4,lastel5,lastel7,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel6.style.background === lastimages[i].style.background) {
                    lastel6.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000);
    }
    else if(this.id == "lastel7") {
        setTimeout(function() {
            lastel7.style.background = "url('./img/json.jpg')";
            lastel7.style.background = '3px solid black';
            lastimages = [lastel1,lastel2,lastel3,lastel4,lastel5,lastel6,lastel8];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel7.style.background === lastimages[i].style.background) {
                    lastel7.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
        },1000);
    }
    else if(this.id == 'lastel8') {
        setTimeout(function() {
            lastel8.style.background = "url('./img/jsone.png')";
            lastel8.style.border = "3px solid black";
            lastimages = [lastel1,lastel2,lastel3,lastel4,lastel5,lastel6,lastel7];
            for(var i = 0; i < lastimages.length; i++) {
                if(lastel8.style.background === lastimages[i].style.background) {
                    lastel8.style.opacity = '0';
                    lastimages[i].style.opacity = '0';
                    sel +=100;
                    score.innerHTML = 'Score: ' + sel;
                }
            }
            setTimeout(function() {
                lev3.innerHTML = "Вы выиграли третий уровень!Превосходно! <h1 class='total'>Поздравляю!!!Вы заработали " + sel + "очков!</h1>" 
                document.body.className = 'good';
                var btnnew = document.createElement('button');
                    btnnew.className = 'vip-btn';
                    btnnew.innerHTML = 'New Play';
                    document.body.append(btnnew);
                    btnnew.onclick = reloadPage;
            },300)
        },1000);
    }
}
function reloadPage() {
    location.reload();
}














    
}
    