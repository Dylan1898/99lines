
var friends = ['Brock','Charlie','Cody','Ronnie','Matthew'] 
for(x = 0; x<friends.length; x++){
    console.log(friends[x])    
    for (i = 99; i > 2; i--){
    
        console.log( [i] + ' ' + 'lines of code in the file,' + ' ' + [i] + ' ' + 'lines of code;' + ' ' + friends[x] + ' ' + 'strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );       
    }
    console.log(2 + ' ' + 'lines of code in the file,' + ' ' + 2 + ' ' + 'lines of code;' + ' ' + friends[x] + ' ' + 'strikes one out, clears it all out, 1 line of code in the file')
console.log([1] + ' ' + 'line of code in the file,' + ' ' + [1] + ' ' + 'line of code;' + ' ' + friends[x] + ' ' + 'strikes one out, clears it all out, no more lines of code in the file.')
}

/*
for (var i = 99, x= 0; i > 1, x<friends.length; i--, x++) {
 
    console.log( [i]  + ' lines of code in the file,' +  [i] +  ' lines of code;' + ' ' + friends[x] + ' strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );       
    }
console.log([1] + ' ' + ' line of code in the file,' + [1] + ' ine of code;' + ' ' + friends[x] + ' strikes one out, clears it all out, no more lines of code in the file.');

var i =100;
var x = 0;
while( i>1){
     x;friends.length;i--,x++
     console.log( [i]  + ' lines of code in the file,' +  [i] +  ' lines of code;' + ' ' + friends[x] + ' strikes one out, clears it all out,' + ' ' + [i-1] + ' ' + 'lines of code in the file'  );
}
console.log([1] + ' ' + ' line of code in the file,' + [1] + ' line of code;' + ' ' + friends[x] + ' strikes one out, clears it all out, no more lines of code in the file.');
*/