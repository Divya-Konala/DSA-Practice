class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        // code here
        // return arr
        let first=0;
        let last=n-1;
        let res=[];
        while(first<last){
            res.push(arr[last--]);
            res.push(arr[first++]);
        }if(n%2!==0){
            res.push(arr[first]);
        }
        for(let j=0;j<n;j++){
            arr[j]=res[j];
        }
    }
}