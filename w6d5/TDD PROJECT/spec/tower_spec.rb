require 'rspec'
require 'towers'

describe "Towers" do 

  subject(:towers) {Towers.new}

    describe "#initialize" do
      it "should set and expose the @towers variable to a 2d array of length three" do
        expect(towers.towers.length).to eq(3)
      end

      it "should set the first tower to [3, 2, 1]" do
        expect(towers.towers[0]).to eq([3, 2, 1])
      end

      it "should set towers 2 and 3 to be empty arrays" do
        expect(towers.towers[1]).to eq([])
        expect(towers.towers[2]).to eq([])
      end
    end
    
    describe "#moves" do 
        it "should accept two indices as arguments" do
          expect{towers.moves(0, 1)}.to_not raise_error
        end

        it "should call valid_move?" do 
          expect(towers.moves(1, 2)).to receive(:valid_move?)
        end

        let(:move_test) {Towers.new}
        
        it "should move disk from first tower to second tower" do
          move_test.moves(0, 2)
          expect(move_test.towers[0]).to eq([3,2])
          expect(move_test.towers[2]).to eq([1])
          # [[3, e2], [], [1]]
          move_test.moves(2, 1)
          expect(move_test.towers[1]).to eq([1])
          expect(move_test.towers[2]).to eq([])
        end
    end

    describe "#valid_move?" do 
        let(:valid_test) {Towers.new}
        

      it "should accept a disk and tower as arguments" do
        expect{valid_test.valid_move?(1, 2)}.to_not raise_error
      end

      it "should return true if disk is smaller than any disk on the tower" do
        expect(valid_test.valid_move?(1, 1)).to eq(true)
      end

      it "should return false if the disk is larger than any disk on the tower" do
        expect(valid_test.valid_move?(3, 0)).to eq(false)
      end
    end

    describe "won?" do
      let(:won_test) {Towers.new}

      it "should return false if tower 1 or 2 has a disk" do
        expect(won_test.won?).to eq(false)
      end

      it "should return true if tower 3 has 3 disks" do
        won_test.instance_variable_set(:@towers, [[], [], [3, 2, 1]])
        expect(won_test.won?).to eq(true)
      end
      #expect([[], [], [3, 2, 1]]).to eq(true)
    end
end
# [[3, 2, 1], [], []]
# [[3, 2], [], [1]]
# [[3], [2], [1]]
# [[3], [2, 1], []]
# [[], [2, 1], [3]]
# [[1], [2], [3]]
# [[1], [], [3, 2]]
# [[], [], [3, 2, 1]]

# can't put a larger value on a smaller one
# removing a disk => .pop
# adding a disk => <<
# #initialize
# #move(idx1, idx2)
# #valid_move?(disk_value, )
# #won?
# attr_reader for towers