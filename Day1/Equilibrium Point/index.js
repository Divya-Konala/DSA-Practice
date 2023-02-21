class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        let leftSum=0,rightSum=0;
        a.map((num)=>leftSum+=num);
        for(let i=n-1;i>=0;i--){
            leftSum-=a[i];
            if(leftSum==rightSum)   return i+1;
            else rightSum+=a[i];
        }
        return -1;
    }
}