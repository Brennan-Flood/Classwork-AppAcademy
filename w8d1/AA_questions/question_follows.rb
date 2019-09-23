require_relative 'questionsdatabase'
require_relative 'users'
require_relative 'questions'

class QuestionFollow


  def self.followers_for_question_id(question_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN question_follows ON question_follows.user_id = users.id
      JOIN questions ON question_follows.question_id = questions.id
      WHERE 
        questions.id = ?
      SQL
    results.map { |result| User.new(result) }
  end

  def self.followed_questions_for_user_id(user_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      JOIN question_follows ON question_follows.question_id = questions.id
      JOIN users ON question_follows.user_id = users.id
      WHERE 
        users.id = ?
      SQL
    results.map { |result| Question.new(result) }
  end

   def self.most_followed_questions(n)
    results = QuestionsDatabase.instance.execute(<<-SQL, n)
      SELECT
        questions.body, COUNT(questions.body) AS total
      FROM
        questions
      JOIN question_follows ON question_follows.question_id = questions.id
      GROUP BY questions.body
      ORDER BY total DESC
      LIMIT ?
        
      SQL
    results
  end
end