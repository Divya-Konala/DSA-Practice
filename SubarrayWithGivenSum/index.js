class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        //your code here
        let first=0,last=0;
        let sum=arr[0];
        if(sum==s) return [first+1,last+1];
        while(last<n){
           if(sum<s)
                sum+=arr[++last];
            else
                sum-=arr[first++];
             if(sum==s){
              if(first<=last)  return [first+1,last+1];
              else return [-1];
            } 
        }
        
        return [-1];
    }
}