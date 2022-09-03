// создал массив с загаднными словами
let words = ["берёза", "обезьяна","компьютер","космос","планета","станция","море","волны","акула", "пляж","судно","водохранилище","автомобиль", "лодка","водоворот","бухгалтер"];
// переменная в которую рандомным способ записывается слово из массива
let word = words[Math.floor(Math.random()* words.length)];
// массив в который будет записываться ответ игрока
let answerArray = [];
// количество попыток 
let tryTimes = word.length * 2;
// переменная которая будет показывать оставшиеся буквы
let remainingLetters = word.length;
// 
let test = '';

// Функция которая заполняет массив 
function createAnswerArray(){
    for(let i = 0; i < word.length; i++){
        answerArray[i] = "_";
     }
     console.log(word);
    return answerArray;
}
createAnswerArray();

function gamePlay(){
    //  пока неотгаданных букв больше 0 и количество попыток больше 0, игра продолжается
    while (remainingLetters > 0 && tryTimes > 0){
        alert(`Осталось попыток ${tryTimes} букв,угаданные буквы : ${answerArray.join(' ')}`);
        let guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры.');
        guess = guess.toLowerCase();
        if(guess === null){
            break;
        }else if( guess.length !== 1){
            alert('Пожалуйста введите одну букву');
        }else{
            for (let j = 0; j < word.length; j++){
                if (word[j] === guess){
                    answerArray[j]= guess;
                    remainingLetters--;
                    // test += answerArray[j];
                }
                if (answerArray[j] !== '_'){
                    remainingLetters++;
                // alert('Буква уже угадана!');
            }
        }
        if(answerArray.join('') === word){
            alert('Вы выиграли!');
            break;
        }
     }
     tryTimes--;
    }
}
gamePlay();
        
        if(answerArray[0] !== "_" && answerArray[1] !== "_" && answerArray[2] !== "_" && answerArray[3] !== "_" && answerArray[5] !== "_" && answerArray[6] !== "_"){
            for(let i = 0; i < word.length; i++){
                if(answerArray[i] !== "_"){
                    // alert(answerArray.join(' '));
                    alert(`Отлично! загаданое слово было ${word}`);
                    break;
                }else if(tryTimes === 0){
                    alert(`Проигрыш, загаданое слово было ${word}`);
                    break;
                }else{
                    alert('Произошла ошибка');
                    break;
                }
            }
            }