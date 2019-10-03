class Employee
  attr_reader :salary, :name, :title
  attr_accesor :boss
  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    return salary * multiplier
  end
end