def range(start, last)
    return [start] if start == (last - 1)

    arr = []
    arr += [start] + range(start + 1, last)
end

def exp_1(b, e)
    return b if e == 1
    return 1 if e == 0
    
    b * exp_1(b, e - 1)
end

def exp_2(b, e)
    return b if e == 1
    return 1 if e == 0

    if e.even?
        exp_2(b, e / 2)**2
    else
        b * exp_2(b, (e - 1) / 2)**2
    end
end
#does not work
class Array
def deep_dup

  copy =[]
  self.each do |ele|
    if ele.is_a?(Array)
        copy += ele.deep_dup
    else
      copy << ele
    end
 
  end
  return copy
end
end

#array = [1, 2, 3]
##temp_array = Marshal.load(Marshal.dump(array))
#temp_array = array.deep_dup
#temp_array << 4
#p array
#p temp_array
#
#
#arr = [1, 2]
#new_arr = arr.deep_dup

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
# 0 1 1 2 3
require "byebug"
def fib(n)
    return [0] if n == 0
    return [1] if n == 1
    return [0, 1] if n == 2
    # sequence = []
    value = fib(n - 1)
    value << value[-1] + value[-2]
    # sequence += [value[-1] + value[-2]]
end
#bsearch doesnt work for 
def bsearch(arr, target)
    #debugger
    return nil unless target.between?(arr.first, arr.last)

    mid_idx = arr.length / 2
    left = arr[0...mid_idx] 
    right = arr[mid_idx + 1..-1]
    mid = arr[mid_idx]
    return mid_idx if mid == target
    
    if mid > target
        bsearch(left, target)
    else
        result = bsearch(right, target)
        if result == nil
            return nil
        else
           mid_idx + 1 + result
        end
    end
end




#p bsearch([1, 2, 3], 1) # => 0
#p bsearch([2, 3, 4, 5, 6], 3) # => 1
#p bsearch([2, 4, 6, 8, 10], 6) # => 2
#p bsearch([1, 3, 4, 5, 9], 5) # => 3
#p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
#p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
#p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
#number_arr = (1..100).to_a
#p bsearch(number_arr, 99)

# base case # done
# middle 
#recursively dividing  --- calling merge

def merge_sort(arr)
  return arr if arr.length < 2
  mid = arr.length / 2
  
  left = arr.take(mid)
  right = arr.drop(mid)
  sorted_left = merge_sort(left)
  sorted_right = merge_sort(right)
  merge(sorted_left, sorted_right)
end

# sort([2, 9, 1, 7, 0])

# += build up sorted array
# left and right must be 1 element

def merge(left, right)
  sorted = []
  until left.empty? || right.empty?
    if left[0] < right[0]
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  sorted + left + right
end

def subsets(arr)
    return [[]] if arr.empty? 
    subs = subsets(arr[0...-1])
    # subs << subs[-1] + [arr[-1]]
    subs + [arr] + [subs[-1]]
end

def permutations(arr)

end


permutations([1, 2, 3]) # => [[1, 2, 3], [1, 3, 2],
                        #     [2, 1, 3], [2, 3, 1],
                        #     [3, 1, 2], [3, 2, 1]]


# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# p subsets([1, 2, 3])
# => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]