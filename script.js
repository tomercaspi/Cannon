
// getElementByClassName returns array of elements, not single element, as getElementById. So it is needed to point to the element you want
// var barrel = document.getElementsByClassName('cannonBarrel')[0];
var up = document.getElementsByClassName('buttonUp')[0];
var down = document.getElementsByClassName('buttonDown')[0];
var shoot = document.getElementsByClassName('buttonShoot')[0];
var shooting = document.getElementById('shooting');


var cannon = {
    deg: 0,
    barrel: document.getElementsByClassName('cannonBarrel')[0],
    addDegree: function() {
        this.deg++;
        this.render();
    },
    decreaseDegree: function() {
        this.deg--;
        this.render();
    },
    render: function() {
        this.barrel.setAttribute('style', 'transform: rotate(' + cannon.deg + 'deg);');
    },
    fireCannon: function() {
        var ball = new Ball();
        ball.fire(shooting);
    },
    power: function() {
        return 2;
    }
}

up.addEventListener('click', function(){
    cannon.addDegree();
});

down.addEventListener('click', function(){
    cannon.decreaseDegree();
});

shoot.addEventListener('click', function(){
    cannon.fireCannon();
});

function Ball() {
    this.el = document.createElement('div');
    this.el.className = "ball";
}

Ball.prototype.fire = function(node) {
    node.appendChild(this.el);
    this.el.setAttribute('style', 'bottom: '+ (125 + cannon.deg*3) + 'px; right: '+ (377 - cannon.deg) + 'px;');
    this.moveBall();
}

Ball.prototype.moveBall = function(){
    var that = this.el;
    var sum = 0;
    var deg  = 1;
    var time = 20;
/*    var horizontalDistance = that.power * Math.cos(Math.toRadians(that.deg)) * time;
    var verticalDistance = (that.power * time * Math.sin(Math.toRadians(that.deg))) - (0.5 * preference.g * Math.pow(time,2));*/
    helper.animate(that, function(el, i){
        sum += deg * -10;
        helper.changeCss(el,'transform: translate('+ sum + 'px, '+ '1px)');
        if (sum<-900){
            that.parentNode.removeChild(that);
            return true;
        }

        }
        ,time)
}
