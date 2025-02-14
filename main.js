const prompt = require("prompt-sync")();

let questions = [
    {
        question: "Combien y a-t-il de rayures sur le drapeau Américain?",
        options: ["1. 9", "2. 11", "3. 13", "4. 15"],
        answer: ["3", "Les 13 bandes rouges et blanches symbolisent toujours les 13 colonies britanniques qui ont gagné leur indépendance, les 13 premiers États américains"]
    },
    {
        question: "Combien faut-il en moyenne de grains de raisins pour faire une bouteille de 75 cl de vin ?",
        options: ["1. 400", "2. 600", "3. 800", "4. 1000"],
        answer: ["2", "Il faut environ 600 grains de raisin pour faire une bouteille de 75cl"]
    },
    {
        question: "Quel a été le premier film Disney?",
        options: ["1. Pinocchio", "2. Cendrillon", "3. Bambi", "4. Blanche-neige"],
        answer: ["4", "Blanche-Neige et les Sept Nains (1937), Pinocchio (1940), Bambi (1942), Cendrillon (1950)"]
    },
    {
        question: "Quel Pays possède le plus grand nombre d'îles dans le monde?",
        options: ["1. La Suède", "2. La Thaïlande", "3. La Grèce", "4. La France"],
        answer: ["1", "La première place du classement est occupée par la Suède avec 267 570 îles, suivie par la Norvège. Il faut savoir que la majeure partie est inhabitée."]
    },
    {
        question: "Sur quelle partie du corps l'Homme a le plus de bactéries?",
        options: ["1. Les aisselles", "2. Les parties génitales", "3. Le nombril", "4. les oreilles"],
        answer: ["3", "Peu importe le temps que vous passez sous la douche, vous ne pourrez pas nettoyer complètement le nombril. Il abrite plus de 2 000 variétés de bactéries et, étant donné sa nature cachée et chaude (par rapport au reste de la température du corps), elles sont idéales pour la croissance bactérienne "]
    }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].question);
    for (let j = 0; j < 4; j++) {
        console.log(questions[i].options[j]);
    }

    let choice = prompt("Votre réponse: ");
    if (choice === questions[i].answer[0]) {
        console.log("Bravo " + questions[i].answer[1]);
        score++;
    } else {
        console.log("La bonne réponse était: " + questions[i].answer[1]);
    }
}

console.log("Votre score est de " + score + " sur " + questions.length + ".");


