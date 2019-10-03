require "byebug"
class Array 
    def my_each(&prc)
        i = 0
        while i < self.length
            prc.call(self[i])
            i += 1
        end
        
    end

    def my_select(&prc)
        new_array = []
        self.my_each do |ele| 
            new_array << ele if prc.call(ele)
        end
        new_array 
    end

      def my_reject(&prc)
        new_array = []
        self.my_each do |ele| 
            new_array << ele if !prc.call(ele)
        end
        new_array 
    end

    def my_any?(&prc)
        count = 0 
        self.my_each do |ele| 
            count += 1 if prc.call(ele)
        end
        count > 0 
    end

    def my_all?(&prc)
        count = 0 
        self.my_each do |ele| 
            count += 1 if prc.call(ele)
        end
        count == self.length 
    end

    def my_flatten
        new_array = []
        self.my_each do |ele|
            if ele.class != Array 
                new_array += [ele]
            else
                new_array += ele.my_flatten
            end
        end
        new_array 
    end

    def my_zip(*arrays)
        new_array = []
        i = 0
        while i < self.length
            sub_array = []
            sub_array << self[i]
            arrays.each do |array|
                if array[i] != nil
                    sub_array << array[i]
                else
                    sub_array << nil
                end
            end
            i += 1
            new_array << sub_array
        end
        new_array

    end

    def my_rotate(n=1)
        new_array = self.dup 
        if n > 0 
            n.times do 
                first = new_array.shift
                new_array.push(first)
            end
        else
            (-n).times do 
                last = new_array.pop
                new_array.unshift(last)
            end 
        end
        new_array 
    end

    def my_join(seperator="")
        new_str = ""
        i = 0
        while i < self.length - 1
            new_str += self[i]
            new_str += seperator
            i += 1
        end
        new_str += self[-1]
        new_str
    end

    def my_reverse
        new_array = []
        i = self.length - 1
        while i >= 0 
            new_array << self[i]
            i -= 1
        end
        new_array
    end
   
    def bubble_sort!(&prc)
    prc ||= Proc.new{|num_1, num_2| num_1 <=> num_2}
    sorted = false
    while !sorted
      sorted = true

      (0...self.length - 1).each do |idx|
        if prc.call(self[idx], self[idx + 1]) == 1 
          self[idx], self[idx + 1] = self[idx + 1], self[idx]
          sorted = false
        end
      end
    end
      self
  end

  def bubble_sort(&prc)
    dup_array = self.dup 
    dup_array.bubble_sort!(&prc)
  end
end

def factors(num)
  (1..num).select {|i| num % i == 0}
end

def substrings(string)
  substrings = []
  i = 0 
  while i < string.length
    k = i 
    while k < string.length
      substrings << string[i..k]
      k += 1 
    end
    i += 1 
  end
  substrings
end

def subwords(word, dictionary)
  substring_arr = substrings(word)
  substring_arr.select { |word| dictionary.include?(word) }
end

