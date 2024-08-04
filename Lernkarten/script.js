const cards = {
    geography: {
        capitals: [
            { question: "Was ist die Hauptstadt von Frankreich?", answer: "Paris" },
            { question: "Was ist die Hauptstadt von Deutschland?", answer: "Berlin" },
            { question: "Was ist die Hauptstadt von Italien?", answer: "Rom" }
        ],
        rivers: [
            { question: "Welcher Fluss fließt durch London?", answer: "Themse" },
            { question: "Welcher Fluss ist der längste der Welt?", answer: "Nil" },
            { question: "Welcher Fluss fließt durch Paris?", answer: "Seine" }
        ],
        mountains: [
            { question: "Was ist der höchste Berg der Welt?", answer: "Mount Everest" },
            { question: "Welcher Berg ist der höchste in Afrika?", answer: "Kilimandscharo" },
            { question: "Welcher Berg ist der höchste in Europa?", answer: "Mont Blanc" }
        ]
    },
    math: {
        arithmetic: [
            { question: "Was ist 2 + 2?", answer: "4" },
            { question: "Was ist 7 - 3?", answer: "4" },
            { question: "Was ist 5 * 6?", answer: "30" }
        ],
        geometry: [
            { question: "Wie viele Seiten hat ein Dreieck?", answer: "3" },
            { question: "Wie viele Ecken hat ein Rechteck?", answer: "4" },
            { question: "Was ist die Summe der Innenwinkel eines Quadrats?", answer: "360 Grad" }
        ],
        algebra: [
            { question: "Was ist die Lösung von x + 2 = 4?", answer: "x = 2" },
            { question: "Was ist die Lösung von 3x = 9?", answer: "x = 3" },
            { question: "Was ist die Lösung von x^2 = 16?", answer: "x = 4 oder x = -4" }
        ]
    },
    science: {
        chemistry: [
            { question: "Was ist die chemische Formel von Wasser?", answer: "H2O" },
            { question: "Was ist das chemische Symbol für Gold?", answer: "Au" },
            { question: "Was ist die chemische Formel von Kohlendioxid?", answer: "CO2" }
        ],
        physics: [
            { question: "Wer entdeckte die Schwerkraft?", answer: "Isaac Newton" },
            { question: "Was ist die Lichtgeschwindigkeit?", answer: "299.792 km/s" },
            { question: "Was ist das Newton'sche Gesetz der Bewegung?", answer: "F = ma" }
        ],
        biology: [
            { question: "Was ist die grundlegende Einheit des Lebens?", answer: "Zelle" },
            { question: "Was ist die DNA?", answer: "Desoxyribonukleinsäure" },
            { question: "Wer entdeckte die Zellen?", answer: "Robert Hooke" },
            { question: "Was ist die Einheit der Vererbung?", answer: "Gen" }
        ]
    }
};

let currentTopic = null;
let currentChapter = null;
let currentCardIndex = 0;
let showingQuestion = true;

function showCard() {
    if (currentTopic && currentChapter) {
        const cardElement = document.getElementById('card');
        const currentCard = cards[currentTopic][currentChapter][currentCardIndex];
        cardElement.innerText = showingQuestion ? currentCard.question : currentCard.answer;
    }
}

function flipCard() {
    showingQuestion = !showingQuestion;
    showCard();
}

function showPreviousCard() {
    if (currentTopic && currentChapter && currentCardIndex > 0) {
        currentCardIndex--;
        showingQuestion = true;
        showCard();
    }
}

function showNextCard() {
    if (currentTopic && currentChapter && currentCardIndex < cards[currentTopic][currentChapter].length - 1) {
        currentCardIndex++;
        showingQuestion = true;
        showCard();
    }
}

function changeTopic(topic, chapter) {
    currentTopic = topic;
    currentChapter = chapter;
    currentCardIndex = 0;
    showingQuestion = true;
    showCard();
}

// Initial display
document.getElementById('card').innerText = 'Wähle ein Thema';
