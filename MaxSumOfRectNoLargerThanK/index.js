var maxSumSubmatrix = function(matrix, k) {
    let rows=matrix.length;
    let cols=matrix[0].length;
    let sumArr=Array(rows);
    let max=-Infinity;
    // Try starting from column 0 to the rightmost column
    for(let c1=0;c1<cols;c1++){
        // Because we start with a new column, we should clear sums
        sumArr.fill(0);
        // Scan through the rest of the columns
        for(let c2=c1;c2<cols;c2++){
             // Update current sums for each row, sums[r] = sum(matrix[r][c1:c2]) 
            for(let row=0;row<rows;row++){
                sumArr[row]+=matrix[row][c2];//[2,1]
            }
            for(let r1=0;r1<rows;r1++){
                let sum=0;
                for(let r2=r1;r2<rows;r2++){
                    // Calculate sum for current rectangle: sum(matrix[r1:r2, c1:c2])
                    sum+=sumArr[r2];
                    // Update target max sum
                    if(sum>max && sum<=k){
                        max=sum;
                    }
                }
            }
        }
    }
    return max;
};