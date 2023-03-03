// Ideal Approach
class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(arr, dep, n)
    {
        //your code here
        let trains= new Array(n);
        //TimeComplexity-O(n)
        for(let i=0;i<n;i++){
            trains[i]={
                arr:arr[i],
                dep:dep[i]
            }
        }
        //TimeComplexity-(logn)
        trains.sort((a,b)=>a.arr-b.arr);//sorted by arr time
        
        let platform=[trains[0]];//sorted by dept time-suppose
        let count=1;
        //TimeComplexity-O(nlogn)
        for(let i=1;i<n;i++){
            if(platform[0].dep<trains[i].arr){
                platform.shift();
            }else{
                count++;
            }
            platform.push(trains[i]);
            platform.sort((a,b)=>a.dep-b.dep);
        }
        return count;
    }
}

// Brute Force
class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(arr, dep, n)
    {
        //your code here
        let platForm=[];
        let maxPlatforms=0;
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<platForm.length;j++){
                if(dep[platForm[j]]<arr[i]){
                    platForm.splice(j,1);
                    j--;
                }
            }
            platForm.push(i);
            if(platForm.length>maxPlatforms) maxPlatforms=platForm.length;
        }
        return maxPlatforms;
    }
}