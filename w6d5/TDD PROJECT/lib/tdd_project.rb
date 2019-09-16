def my_uniq(array)
  hash = Hash.new{0}
  array.each {|ele| hash[ele] += 1}
  hash.keys
end

def two_sum(array)
    indices=[]
    i=0
    while(i < array.length - 1)
        k = i + 1
        while (k < array.length)
            indices << [i,k] if array[i] + array[k] == 0
            k += 1
        end
        i += 1 
    end
    indices
end

def my_transpose(array)

    array.map.with_index do |row,i|
        row.map.with_index do |col,k|
            col = array[k][i] 
        end 
    end

end

def my_stock_picker(array)
  new_array = []
  (0..array.length - 1).each do |i|
    (0..array.length - 1).each do |k|
      new_array << array[k] - array[i] if k > i
    end
  end
  new_array.max
end

