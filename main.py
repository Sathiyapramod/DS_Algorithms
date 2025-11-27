from typing import List
import math


def find_second_max(nums: List[int]) -> int:
    first_max = nums[0]
    second_max = -math.inf

    for el in nums:
        if el > first_max:
            second_max = first_max
            first_max = el
        elif second_max < el:
            second_max = el
    print(second_max)

find_second_max([34, 57, 64, 18, 23])
