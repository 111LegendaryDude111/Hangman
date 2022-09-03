let words = ["берёза", "обезьяна","компьютер","космос","планета","станция","море","волны","акула", "пляж","судно","водохранилище","автомобиль", "лодка","водоворот","бухгалтер"];
         let word = words[Math.floor(Math.random()* words.length)];
         let answerArray = [];
         let tryTimes = word.length * 2;
         let test = '';
         for(let i = 0; i < word.length; i++){
            answerArray[i] = "_";
         }
         console.log(word);
         let remainingLetters = word.length;
         while (remainingLetters > 0 && tryTimes > 0){
            alert(`Осталось попыток ${tryTimes} букв,угаданные буквы : ${answerArray.join(' ')}`);
            let guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры.')
            guess = guess.toLowerCase();
            if(guess === null){
                break
            }else if( guess.length !== 1){
                alert('Пожалуйста введите одну букву');
            }else{
                for( let j = 0; j < word.length; j++){
                    if(word[j]===guess){
                        answerArray[j]= guess;
                        remainingLetters--;
                        // test += answerArray[j];
                    }
                    if(answerArray[j] !== '_'){
                    remainingLetters++;
                    // alert('Буква уже угадана!');
                }
            }
            if(answerArray.join('') == word){
                alert('Вы выиграли!');
                break;
            }
         }
         tryTimes--;
        }
        if(answerArray[0] !== "_" && answerArray[1] !== "_" && answerArray[2] !== "_" && answerArray[3] !== "_" && answerArray[5] !== "_" && answerArray[6] !== "_"){
            for(let i = 0; i < word.length; i++){
                if(answerArray[i] !== "_"){
                    alert(answerArray.join(' '));
                    alert(`Отлично! Было загадано слово ${word}`);
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