function checkAnswers() {
    const answers = {
        cricket: {
            q1: "India",
            q2: "Sachin Tendulkar",
            q3: "England",
            q4: "Shoaib Akhtar",
            q5: "Virat Kohli",
            q6: "Yuvraj Singh",
            q7: "Michael Hussey",
            q8: "Muttiah Muralitharan",
            q9: "Virat Kohli",
            q10: "Sourav Ganguly",
            q11: "Australia",
            q12: "Sachin Tendulkar",
            q13: "Sachin Tendulkar",
            q14: "Australia",
            q15: "Virat Kohli"
        },
        football: {
            q1: "Fede Valverde",
            q2: "14",
            q3: "Portugal",
            q4: "Kaká",
            q5: "Gareth Bale",
            q6: "Germany",
            q7: "Cristiano Ronaldo",
            q8: "Karim Benzema",
            q9: "Manchester United",
            q10: "Sami Khedira",
            q11: "Juventus",
            q12: "Kaká",
            q13: "Cristiano Ronaldo",
            q14: "Kylian Mbappé",
            q15: "Eden Hazard"
        },
        tennis: {
            q1: "Roger Federer",
            q2: "Serena Williams",
            q3: "Novak Djokovic",
            q4: "Maria Sharapova",
            q5: "Steffi Graf",
            q6: "Iga Świątek",
            q7: "Rafael Nadal",
            q8: "Martina Hingis",
            q9: "Novak Djokovic",
            q10: "Martina Navratilova",
            q11: "Rafael Nadal",
            q12: "Venus Williams",
            q13: "Roger Federer",
            q14: "Serena Williams",
            q15: "Iga Świątek"
        },
    f1: {
        q1: "Ferrari",
        q2: "Max Verstappen",
        q3: "Monaco",
        q4: "7",
        q5: "Mercedes",
        q6: "Italy",
        q7: "Lewis Hamilton",
        q8: "Blue",
        q9: "Giuseppe Farina",
        q10: "Ferrari",
        q11: "Spa-Francorchamps",
        q12: "Kimi Räikkönen",
        q13: "Sebastian Vettel",
        q14: "Japan",
        q15: "Max Verstappen"
    }
    };

    let form = document.forms["quizForm"];
    let score = 0;
    let total = Object.keys(answers[quizType]).length;

    for (let q in answers[quizType]) {
        if (form[q] && form[q].value === answers[quizType][q]) {
            score++;
        }
    }

    let percentage = (score / total) * 100;
    let compliment = "";

    if (quizType === "cricket") {
        if (percentage <= 33) {
            compliment = "You’re just warming up! A rookie fan, but every legend started somewhere.";
        } else if (percentage <= 66) {
            compliment = "Solid fan vibes. You know your cover drives and yorkers!";
        } else {
            compliment = "Pure blood cricket lover. You breathe runs and wickets!";
        }
    } else if (quizType === "football") {
        if (percentage <= 33) {
            compliment = "You’re just kicking off! A rookie fan, but every legend started somewhere.";
        } else if (percentage <= 66) {
            compliment = "Solid football vibes. You know your hat-tricks and free kicks!";
        } else {
            compliment = "Ultimate football fan. You live and breathe goals and glory!";
        }
    } else if (quizType === "tennis") {
    if (percentage <= 33) {
        compliment = "You’re just starting your rally! A rookie fan, but every champion began somewhere.";
    } else if (percentage <= 66) {
        compliment = "Solid tennis vibes. You know your aces, volleys, and baseline shots!";
    } else {
        compliment = "Ultimate tennis fan. You live and breathe Grand Slams and match points!";
    }
    } else if (quizType === "f1") {
    if (percentage <= 33) {
        compliment = "You're just starting your engines! A rookie fan, but every F1 champion began somewhere.";
    } else if (percentage <= 66) {
        compliment = "Solid F1 vibes 🏁. You know your podiums, pit stops, and fast laps!";
    } else {
        compliment = "Ultimate F1 fan 🏆. You live and breathe Grand Prix, DRS, and checkered flags!";
    }
}
    // Set modal content
    document.getElementById("scoreText").innerText =
        `You got ${score}/${total} correct (${Math.round(percentage)}%).`;
    document.getElementById("complimentText").innerText = compliment;

    // Show modal
    document.getElementById("resultModal").style.display = "flex";
}

// Close modal function
function closeModal() {
    document.getElementById("resultModal").style.display = "none";
}
