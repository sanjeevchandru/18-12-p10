document.write("10.Print 2-D array"+"<br>");
var arr=[[1, 2, 1, 24],
 [8, 11, 9, 4],
  [7, 0, 7, 27],
   [7, 4, 28, 14],
    [3, 10, 26, 7]];
function test10(arr){
    for(let i=0;i<arr.length;i++){
        document.write("row "+i+"<br>");
        for(let j=0;j<arr[i].length;j++){
            document.write(arr[i][j]+"<br>");
        }
    }
}
test10(arr)