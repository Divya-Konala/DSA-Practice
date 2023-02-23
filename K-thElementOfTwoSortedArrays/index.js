class Solution {
    kthElement(A,B,n,m,k){ 
        //code here
        let arr=[...A,...B];
        arr.sort((a,b)=>a-b);
        return arr[k-1];
    }
}