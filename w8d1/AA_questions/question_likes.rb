require_relative 'questionsdatabase'

class QuestionLike
  def self.likers_for_questions_id(question_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN question_likes ON question_likes.user_id = users.id
      WHERE
       question_id = ?
    SQL
    results.map { |result| User.new(result) }
  end

  def self.num_likes_for_question_id(question_id)
    results = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        questions.body, COUNT(questions.id) AS total
      FROM
        questions
      JOIN question_likes ON questions.id = question_likes.question_id
      WHERE
        question_id = ?
    SQL
    results
  end
end