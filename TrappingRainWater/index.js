//Best Implementation
var trap = function (height) {
  if (height == null || height.length == 0) return 0;

  let n = height.length;
  let left = 0,
    right = n - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else water += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else water += rightMax - height[right];
      right--;
    }
  }
  return water;
};

//Brute Force
var trap = function (height) {
  let n = height.length;
  let water = 0;
  for (let i = 1; i < n - 1; i++) {
    // Find maximum element on its left
    let left = height[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, height[j]);
    }
    // Find maximum element on its right
    let right = height[i];
    for (let j = i + 1; j < n; j++) {
      right = Math.max(right, height[j]);
    }
    // Update maximum water value
    water += Math.min(left, right) - height[i];
  }
  return water;
};
