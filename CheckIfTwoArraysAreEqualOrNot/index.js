class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
        A.sort((a,b)=>a-b);
        B.sort((a,b)=>a-b);
        for(let i=0;i<N;i++){
            if(A[i]!==B[i])  return 0;
        }
        return 1;
    }
}