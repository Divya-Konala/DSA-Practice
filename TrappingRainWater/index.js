//Best Implementation
var trap = function (height) {
  if (height == null || height.length == 0) {
    return 0;
  }

  let left = 0,
    right = height.length - 1;
  let left_max = 0,
    right_max = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        water += right_max - height[right];
      }
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
