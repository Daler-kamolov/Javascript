var one = document.querySelector('.imgOne');
var two = document.querySelector('.imgTwo');
var three = document.querySelector('.imgThree');

function loadImg() {
    
    var prom = new Promise(function(resolve,reject) {
        setTimeout(() =>{
            console.log('loading Images...');
            resolve();
        },500)
    });
    prom.then(function() {
        setTimeout(() => {
            console.log("2");
            one.style.display = 'block';
        },1000);
    }).catch(function() {
       setTimeout(() => {
        var pOne = document.createElement('p');
        pOne.innerHTML = 'Error!';
        document.body.append(pOne);
        },1000)
    })
    prom.then(function() {
        setTimeout(() => {
            console.log("3");
            two.style.display = 'block';
        },2000);
    }).catch(function() {
        setTimeout(() => {
            var pOne = document.createElement('p');
            pOne.innerHTML = 'Error!';
            document.body.append(pOne);
            },2000)
    })
    prom.then(function() {
        setTimeout(() => {
            console.log("4");
            three.style.display = 'block';
        },3000);
    }).catch(function() {
        setTimeout(() => {
            var pOne = document.createElement('p');
            pOne.innerHTML = 'Error!';
            document.body.append(pOne);
            },3000)
    }).finally(function () {
        var hhh = document.createElement('h1');
        hhh.innerHTML = 'Загрузка изображений!';
        hhh.style.position = "absolute";
        hhh.style.top = '100px';
        document.body.append(hhh);
    })
};
loadImg()
   