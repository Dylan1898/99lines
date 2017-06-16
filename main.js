var friends = ['Brock', 'Charlie', 'Cody', 'Ronnie','Matthew']
for(x = 0; x<friends.length; x++){    
    for (i = 99; i > 1; i--){
    
        console.log( [i] + ' ' + 'lines of code in the file,' + ' ' + [i] + ' ' + 'lines of code;' + ' ' + friends[x] + ' ' + 'strikes one out, clears it all out,' );       
    }
console.log([1] + ' ' + 'line of code in the file,' + ' ' + [1] + ' ' + 'line of code;' + ' ' + friends[x] + ' ' + 'strikes one out, clears it all out, no more lines of code in the file.')
}