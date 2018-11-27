


function average(array){
    
    var sum = 0;
    
    array.forEach(function (score){
        sum= sum + score;
    });
    
    return Math.round(sum/array.length);
}


var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("AVERAGE SCORE");
console.log(average(scores));