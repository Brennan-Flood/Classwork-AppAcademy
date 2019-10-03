require_relative "employee"

class Manager < Employee
  attr_reader :employees
  def initialize(name, title, salary, boss)
    super
    @employees = []
  end

  def hire(employee)
    @employees << employee
    employee.boss = self
  end

  def bonus(multiplier)
    employees.map(&:salary).sum * multiplier
  end
end