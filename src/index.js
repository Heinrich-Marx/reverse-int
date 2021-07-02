module.exports = function reverse (n) {
 
        n = n.toString().split('');
        if (n[0] == '-') {
            n.shift(n[0]);
            n = n.reverse().join('');
            return n
        }
        else {
            n = n.reverse().join('');
            return n
        } 
        
    
    
}
