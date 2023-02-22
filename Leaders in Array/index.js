class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
        let max=Number.MIN_VALUE;
        let ans=[];
        for(let i=n-1;i>=0;i--){
            if(arr[i]>=max){
                max=arr[i];
                ans.push(arr[i]);
            }
        }
        return ans.sort((a,b)=>b-a);
    }
}