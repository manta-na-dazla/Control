// Функция для получения случайного ответа из массива
function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Объект с вопросами и соответствующими ответами
const questionsAndAnswers = {
  'Привет': ['Привет!', 'Здравствуй!', 'Добрый день!'],
  'Как дела?': ['Хорошо!', 'Отлично!', 'Неплохо. А у тебя?'],
  'Что делаешь?': ['Я помощник!', 'Отвечаю на вопросы!', 'Помогаю пользователю.']
};

// Функция для получения ответа на вопрос пользователя
function getAnswer(question) {
  // Приводим вопрос пользователя к нижнему регистру
  const lowercaseQuestion = question.toLowerCase();

  // Проверяем, есть ли вопрос в списке
  if (lowercaseQuestion in questionsAndAnswers) {
    // Получаем случайный ответ из списка
    const randomResponse = getRandomResponse(questionsAndAnswers[lowercaseQuestion]);
    return randomResponse;
  } else {
    // Если вопроса нет в списке, возвращаем стандартный ответ
    return 'Извините, я не понимаю ваш вопрос. Можете задать другой вопрос?';
  }
}

// Функция для обработки вопроса пользователя
function processQuestion(question) {
  // Получаем ответ на вопрос пользователя
  const answer = getAnswer(question);

  // Выводим ответ на экран
  console.log(answer);
}

// Пример использования
const question = prompt('Задайте вопрос:');
processQuestion(question);
