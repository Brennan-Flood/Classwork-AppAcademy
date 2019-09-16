require 'rspec'
require 'tdd_project'

describe "my_uniq" do
  
  it "should accept an argument" do 
    expect{my_uniq()}.to raise_error(ArgumentError)
  end

  it "should accept an array as argument" do
    sample_array = [1, 2, 3]
    expect{my_uniq(sample_array)}.to_not raise_error
  end

  it "should remove duplicate elements" do
    sample_array = [1, 1, 2, 3]
    expect(my_uniq(sample_array)).to eq([1, 2, 3])
  end
end

describe "two_sum" do

  it "should accept an argument" do 
    expect{two_sum()}.to raise_error(ArgumentError)
  end

  it "should accept an array as an argument" do
    sample_array = [1, 2, 3]
    expect{two_sum(sample_array)}.to_not raise_error
  end

  it "should return index-pairs of elements that sum to zero" do
    sample_array = [1, 2, 3, -1]
    expect(two_sum(sample_array)).to eq([[0, 3]])
  end
end

describe "my_transpose" do 

  it "should accept an argument" do 
    expect{my_transpose()}.to raise_error(ArgumentError)
  end

  it "should accept an array as an argument" do
    sample_array = [ [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ]
    expect{my_transpose(sample_array)}.to_not raise_error
  end
  
  it "should return the transposed version of the array" do
        input_array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]
        output_array = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    expect(my_transpose(input_array)).to eq(output_array)
  end

end

describe "my_stock_picker" do

  it "should accept an argument" do
    expect{my_stock_picker()}.to raise_error(ArgumentError)
  end

  it "should accept an array as an argument" do 
    sample_array = [10, 15, 100]
    expect{my_stock_picker(sample_array)}.to_not raise_error
  end

  it "should return the most profitable buy/sell pair" do
    sample_array = [5, 2, 10, 100]
    expect(my_stock_picker(sample_array)).to eq(98)
  end
end

