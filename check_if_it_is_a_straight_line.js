//You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var calculateSlop = function(x,y){
    let val = ((y[1]-x[1])/(y[0]-x[0]))
     return val;
 }
 
 var checkStraightLine = function(coordinates) {
     if(coordinates.length===2){
         return true;
     }
     let slop_initial=calculateSlop(coordinates[0],coordinates[1]);
     for(let i =0;i<coordinates.length;i++){
        let slop;
        if(i+2>coordinates.length){
            slop = calculateSlop(coordinates[i],coordinates[0])
        }else{
            slop = calculateSlop(coordinates[i],coordinates[i+1])
        }
         if(slop_initial !== slop){
            return false
         }
     }
      return true;
 }