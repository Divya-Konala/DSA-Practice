// Brute Force Method
var waysToSplit = function(nums) {
    let n=nums.length;
    let i=0,res=0;
    while(i<n-2){ 
        let j=i+1,k=n-1;
        while(j<k){
        let left=findSum(0,j-1);
        let mid=findSum(j,k-1);
        let right=findSum(k,n-1);
        if(left<=mid){
            if(mid<=right){
                // console.log(i,j,k);
                res++;
            }
            k--;
        }else break;
    }
    i++;
    }
    return res;
    function findSum(f,l){
        let sum=0;
        for(let i=f;i<=l;i++){
            sum+=nums[i];
        }
        return sum;
    }
};
let nums=[1,2,2,2,5,0];
console.log(waysToSplit(nums));