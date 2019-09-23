require_relative 'questionsdatabase'
require_relative 'users'
require_relative 'questions'

class Reply
  attr_reader :parent_reply_id, :user_id, :question_id, :id

  def self.find_by_id(id)
    results = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    results.map { |result| Reply.new(result) }.first
  end

  def self.find_by_user_id(user_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        replies
      WHERE
        user_id = ?
    SQL
    results.map { |result| Reply.new(result) }
  end

  def self.find_by_question_id(question_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_id = ?
    SQL
    results.map { |result| Reply.new(result) }.first
  end
  
  def self.find_child(parent_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, parent_id)
      SELECT
        *
      FROM
      replies
    WHERE
      parent_reply_id = ?
  SQL
  results.map { |result| Reply.new(result) }
  end
  

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @user_id = options['user_id']
    @body = options['body']
  end

  def author
    User.find_by_id(user_id)
  end

  def question
    Question.find_by_id(question_id)
  end
  
  def parent_reply
    Reply.find_by_id(parent_reply_id)
  end

  def child_reply
    Reply.find_child(id)
  end  
end

