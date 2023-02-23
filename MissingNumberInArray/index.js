class Solution{
    MissingNumber(array,n){
        //code here
        array.sort((a,b)=>a-b);
        let num=1;
        for(let i=0;i<array.length&&num<n;i++){
            if(array[i]!==num) return num;
            num++;
        }
        return num;
    }
}