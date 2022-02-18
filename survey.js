const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer1} enjoys ${answer2} and usually listens to ${answer3} while doing that. ${answer4} is their favourite meal, especially if its ${answer5}. They also consider ${answer6} to be their favourite sport. Last but not least, ${answer7} is their "superpower" one might say.`);

              // It can also be written in this form!
              // console.log(`What\'s your name? Nicknames are also acceptable :) ${answer1}\nWhat\'s an activity you like doing? ${answer2}\nWhat do you listen to while doing that? ${answer3}\nWhich meal is your favourite? ${answer4}\nWhat\'s your favourite thing to eat for that meal? ${answer5}\nWhich sport is your absolute favourite? ${answer6}\nWhat is your superpower? In a few words, tell us what you are amazing at! ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});