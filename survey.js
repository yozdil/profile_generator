const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)?  ", (a1) => {
  rl.question("What's an activity you like doing? ", (a2) => {
    rl.question("What do you listen to while doing that?  ", (a3) => {
      rl.question(
        "Which meal is your favorite (eg: dinner, brunch, etc.) ",
        (a4) => {
          rl.question(
            "What's your favorite thing to eat for that meal?  ",
            (a5) => {
              rl.question("Which sport is your absolute favorite?  ", (a6) => {
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!  ",
                  (a7) => {
                    console.log(`\n--PROFILE GENERATOR--\n
Name: ${a1}\n
Activity: ${a2}\n
Listens: ${a3} while ${a2}\n
Favorite Meal: ${a4}\n
Favorite Food: ${a5} for ${a4}\n
Sport: ${a6}\n
Superpower: ${a7}\n`);
                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});
