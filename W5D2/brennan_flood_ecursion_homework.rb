def sum_to(n)
    return 0 if n == 0
    return nil if n < 0

    n += sum_to(n - 1)
end

def add_numbers(arr)
    return nil if arr.length == 0
    return arr[0] if arr.length == 1

    arr[0] += add_numbers(arr[1..-1])
end

def gamma_fnc(n)
    return nil if n == 0
    return 1 if n == 1
  
    (n - 1) * gamma_fnc(n - 1)
end

def ice_cream_shop(flavors, favorite)
    return false if flavors[0] == nil
    return true if flavors[0] == favorite

    ice_cream_shop(flavors[1..-1], favorite)

end

def reverse(str)
    return "" if str[0] == nil

    str[-1] + reverse(str[0..-2])
end
