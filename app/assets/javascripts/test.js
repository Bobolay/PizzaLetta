var general_triper = {
    bad: true,
    good: false,
    qwerty: 1
};

var triper = {
    good: true,
    zxcvb: function(){
        return 2;
    }
};

triper.__proto__ = general_triper;
triper.zxcvb();