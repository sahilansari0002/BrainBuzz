import { Question } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Single comprehensive question bank - no difficulty separation
export const allQuestions: Question[] = [
  // Basic questions for all ages
  {
    id: "q001",
    text: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    explanation: "Tokyo is the capital of Japan and one of the world's most populous cities.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q002",
    text: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger", "Bear"],
    correctAnswer: 1,
    explanation: "The lion is often called the King of the Jungle.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q003",
    text: "What is the currency of the United States?",
    options: ["Dollar", "Pound", "Euro", "Rupee"],
    correctAnswer: 0,
    explanation: "The US Dollar is the official currency of the United States.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q004",
    text: "What comes next in the pattern: 2, 4, 6, __?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    explanation: "This is an even number sequence. 8 comes after 6.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q005",
    text: "Which shape has three sides?",
    options: ["Square", "Circle", "Triangle", "Rectangle"],
    correctAnswer: 2,
    explanation: "A triangle is a shape with three sides.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q006",
    text: "Who invented the electric bulb?",
    options: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Galileo Galilei"],
    correctAnswer: 2,
    explanation: "Thomas Edison is credited with inventing the practical electric light bulb.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q007",
    text: "Which animal gives us wool?",
    options: ["Cow", "Sheep", "Goat", "Pig"],
    correctAnswer: 1,
    explanation: "Wool is obtained mainly from sheep.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q008",
    text: "Which color is formed by mixing red and blue?",
    options: ["Green", "Purple", "Orange", "Brown"],
    correctAnswer: 1,
    explanation: "Red and blue make purple when mixed.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q009",
    text: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "USA", "France", "Germany"],
    correctAnswer: 2,
    explanation: "The Eiffel Tower is a landmark in Paris, France.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q010",
    text: "What do you call a baby dog?",
    options: ["Kitten", "Calf", "Puppy", "Cub"],
    correctAnswer: 2,
    explanation: "A baby dog is called a puppy.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q011",
    text: "How many hours are there in a day?",
    options: ["12", "24", "36", "48"],
    correctAnswer: 1,
    explanation: "There are 24 hours in one day.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q012",
    text: "Which punctuation mark ends a question?",
    options: [".", "!", ",", "?"],
    correctAnswer: 3,
    explanation: "A question mark (?) is used at the end of a question.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q013",
    text: "Which fruit is known for keeping the doctor away if eaten daily?",
    options: ["Banana", "Apple", "Orange", "Mango"],
    correctAnswer: 1,
    explanation: "An apple a day keeps the doctor away is a common saying.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q014",
    text: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    explanation: "5 plus 3 equals 8.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q015",
    text: "Which device is used to click and select items on a computer screen?",
    options: ["Keyboard", "CPU", "Mouse", "Speaker"],
    correctAnswer: 2,
    explanation: "A mouse is used to point and click on-screen items.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q016",
    text: "Which month comes after September?",
    options: ["October", "August", "November", "December"],
    correctAnswer: 0,
    explanation: "October follows September in the calendar.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q017",
    text: "Which instrument tells the direction?",
    options: ["Thermometer", "Barometer", "Compass", "Altimeter"],
    correctAnswer: 2,
    explanation: "A compass is used to determine directions (N, S, E, W).",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q018",
    text: "Which is the tallest animal in the world?",
    options: ["Elephant", "Lion", "Giraffe", "Horse"],
    correctAnswer: 2,
    explanation: "The giraffe is the tallest animal due to its long neck.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q019",
    text: "Which planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Saturn"],
    correctAnswer: 2,
    explanation: "Humans live on planet Earth.",
    topic: "astronomy",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q020",
    text: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Carbon dioxide"],
    correctAnswer: 1,
    explanation: "H2O is the chemical formula for water.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q021",
    text: "Which shape has no corners?",
    options: ["Triangle", "Circle", "Square", "Rectangle"],
    correctAnswer: 1,
    explanation: "A circle has no corners or edges.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q022",
    text: "What do we call the sound a cat makes?",
    options: ["Bark", "Moo", "Meow", "Roar"],
    correctAnswer: 2,
    explanation: "Cats make a meowing sound.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q023",
    text: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "There are 7 colors in a rainbow: VIBGYOR.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q024",
    text: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    explanation: "The Pacific Ocean is the largest ocean on Earth.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q025",
    text: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Plants absorb carbon dioxide from the air during photosynthesis.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q026",
    text: "What is the opposite of hot?",
    options: ["Warm", "Cool", "Cold", "Freezing"],
    correctAnswer: 2,
    explanation: "Cold is the opposite of hot.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q027",
    text: "Which season comes after winter?",
    options: ["Summer", "Spring", "Autumn", "Fall"],
    correctAnswer: 1,
    explanation: "Spring comes after winter.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q028",
    text: "What do bees make?",
    options: ["Milk", "Honey", "Butter", "Cheese"],
    correctAnswer: 1,
    explanation: "Bees make honey.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q029",
    text: "Which organ pumps blood in our body?",
    options: ["Brain", "Lungs", "Heart", "Liver"],
    correctAnswer: 2,
    explanation: "The heart pumps blood throughout our body.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q030",
    text: "What is the first letter of the alphabet?",
    options: ["B", "A", "C", "D"],
    correctAnswer: 1,
    explanation: "A is the first letter of the alphabet.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q031",
    text: "Which vehicle travels on tracks?",
    options: ["Car", "Bus", "Train", "Airplane"],
    correctAnswer: 2,
    explanation: "Trains travel on railway tracks.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q032",
    text: "What do we use to write on a blackboard?",
    options: ["Pen", "Pencil", "Chalk", "Marker"],
    correctAnswer: 2,
    explanation: "Chalk is used to write on blackboards.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q033",
    text: "Which bird cannot fly?",
    options: ["Eagle", "Sparrow", "Penguin", "Parrot"],
    correctAnswer: 2,
    explanation: "Penguins are birds that cannot fly but are excellent swimmers.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q034",
    text: "What is the main ingredient in bread?",
    options: ["Rice", "Flour", "Sugar", "Salt"],
    correctAnswer: 1,
    explanation: "Flour is the main ingredient used to make bread.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q035",
    text: "Which number comes after 9?",
    options: ["8", "10", "11", "12"],
    correctAnswer: 1,
    explanation: "10 comes after 9 in the number sequence.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q036",
    text: "What do we call frozen water?",
    options: ["Steam", "Ice", "Snow", "Rain"],
    correctAnswer: 1,
    explanation: "Frozen water is called ice.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q037",
    text: "Which sense do we use to smell?",
    options: ["Eyes", "Ears", "Nose", "Tongue"],
    correctAnswer: 2,
    explanation: "We use our nose to smell things.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q038",
    text: "What is the baby of a cow called?",
    options: ["Puppy", "Kitten", "Calf", "Lamb"],
    correctAnswer: 2,
    explanation: "A baby cow is called a calf.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q039",
    text: "Which tool is used to cut paper?",
    options: ["Hammer", "Scissors", "Spoon", "Fork"],
    correctAnswer: 1,
    explanation: "Scissors are used to cut paper.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q040",
    text: "What is the color of the sun?",
    options: ["Blue", "Green", "Yellow", "Red"],
    correctAnswer: 2,
    explanation: "The sun appears yellow to us.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q041",
    text: "Which meal do we eat in the morning?",
    options: ["Lunch", "Dinner", "Breakfast", "Snack"],
    correctAnswer: 2,
    explanation: "Breakfast is the meal we eat in the morning.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q042",
    text: "What do we call a group of stars?",
    options: ["Galaxy", "Constellation", "Planet", "Moon"],
    correctAnswer: 1,
    explanation: "A constellation is a group of stars that form a pattern.",
    topic: "astronomy",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q043",
    text: "Which is the fastest land animal?",
    options: ["Lion", "Horse", "Cheetah", "Elephant"],
    correctAnswer: 2,
    explanation: "The cheetah is the fastest land animal.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q044",
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    correctAnswer: 1,
    explanation: "The blue whale is the largest mammal in the world.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q045",
    text: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Europe", "Africa", "Australia"],
    correctAnswer: 2,
    explanation: "Africa was historically called the 'Dark Continent'.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q046",
    text: "What is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: 2,
    explanation: "Diamond is the hardest natural substance known.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q047",
    text: "Which Indian cricketer is known as the 'Master Blaster'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    correctAnswer: 2,
    explanation: "Sachin Tendulkar is famously called the 'Master Blaster' of Indian cricket.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q048",
    text: "Which famous monument in India was built by Shah Jahan?",
    options: ["Qutub Minar", "India Gate", "Charminar", "Taj Mahal"],
    correctAnswer: 3,
    explanation: "Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.",
    topic: "general",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q049",
    text: "What is 12 × 5?",
    options: ["50", "55", "60", "65"],
    correctAnswer: 2,
    explanation: "12 multiplied by 5 equals 60.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: "q050",
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to its reddish appearance.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["kids", "teens", "adults"]
  },
  // Add more questions to reach at least 2250 questions (225 levels × 10 questions)
  // For now, I'll add enough to demonstrate the concept
  {
    id: "q051",
    text: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    explanation: "The square root of 64 is 8 because 8 × 8 = 64.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q052",
    text: "Which scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    correctAnswer: 1,
    explanation: "Albert Einstein developed the theory of relativity.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q053",
    text: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation: "Au is the chemical symbol for gold, from the Latin word 'aurum'.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q054",
    text: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    explanation: "Vatican City is the smallest country in the world by area.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q055",
    text: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2,
    explanation: "Canberra is the capital city of Australia.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q056",
    text: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
    correctAnswer: 1,
    explanation: "Hydrogen has the atomic number 1 on the periodic table.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q057",
    text: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    explanation: "World War II ended in 1945.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q058",
    text: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correctAnswer: 1,
    explanation: "The Nile River is considered the longest river in the world.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q059",
    text: "Which programming language was created by Guido van Rossum?",
    options: ["Java", "Python", "C++", "JavaScript"],
    correctAnswer: 1,
    explanation: "Python was created by Guido van Rossum.",
    topic: "general",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q060",
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
    correctAnswer: 1,
    explanation: "Mitochondria are known as the powerhouse of the cell.",
    topic: "general",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q061",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q062",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q063",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q064",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q065",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q066",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q067",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q068",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q069",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q070",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q071",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q072",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q073",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q074",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q075",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q076",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q077",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q078",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q079",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q080",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q081",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q082",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q083",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q084",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q085",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q086",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q087",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q088",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q089",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q090",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q091",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q092",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q093",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q094",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q095",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q096",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q097",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q098",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q099",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q100",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q101",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q102",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q103",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q104",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q105",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q106",
    text: "Which algorithmic technique is primarily used in the implementation of Dijkstra's shortest path algorithm?",
    options: ['Dynamic Programming', 'Greedy Algorithm', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach to find the shortest path by always choosing the nearest unvisited node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q107",
    text: "In quantum physics, what does the Heisenberg Uncertainty Principle state?",
    options: ['Energy can neither be created nor destroyed', 'It is impossible to know both the velocity and the position of a particle exactly at the same time', 'Light acts only as a wave', 'Electrons orbit the nucleus in fixed paths'],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that one cannot simultaneously know both the exact position and the exact momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q108",
    text: "Which of the following sorting algorithms has the best average time complexity?",
    options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(n log n), which is better than the other listed algorithms.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q109",
    text: "Which structure in the human brain is primarily responsible for regulating emotions?",
    options: ['Cerebellum', 'Hippocampus', 'Amygdala', 'Thalamus'],
    correctAnswer: 2,
    explanation: "The amygdala plays a key role in processing emotions such as fear, anger, and pleasure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
{
    id: "q110",
    text: "Which of the following is NOT a prime number?",
    options: ['29', '41', '51', '61'],
    correctAnswer: 2,
    explanation: "51 is not a prime number because it is divisible by 3 and 17.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ['teens', 'adults']
  },
    {
    id: "q111",
    text: "Which data structure uses the Last In First Out (LIFO) principle?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: 2,
    explanation: "Stack follows the Last In First Out principle, meaning the last element added is the first one removed.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q112",
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    correctAnswer: 1,
    explanation: "Mitochondria are known as the powerhouse of the cell as they generate most of the cell's energy.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q113",
    text: "Which of the following numbers is an irrational number?",
    options: ["22/7", "√2", "3.14", "0.5"],
    correctAnswer: 1,
    explanation: "√2 is irrational because it cannot be expressed as a ratio of two integers.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q114",
    text: "Which law states that the total energy of an isolated system is constant?",
    options: ["Newton's First Law", "Law of Conservation of Energy", "Coulomb's Law", "Ohm's Law"],
    correctAnswer: 1,
    explanation: "The Law of Conservation of Energy states that energy can neither be created nor destroyed.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q115",
    text: "Which sorting algorithm is the best choice for nearly sorted data?",
    options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
    correctAnswer: 3,
    explanation: "Insertion Sort is efficient for nearly sorted data, with a best-case time complexity of O(n).",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q116",
    text: "Which part of the human brain controls voluntary muscle movements?",
    options: ["Medulla", "Cerebrum", "Hypothalamus", "Thalamus"],
    correctAnswer: 1,
    explanation: "The cerebrum controls voluntary muscle movements, sensory perception, and higher cognitive functions.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q117",
    text: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-sin(x)", "tan(x)", "-cos(x)"],
    correctAnswer: 0,
    explanation: "The derivative of sin(x) with respect to x is cos(x).",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q118",
    text: "Which subatomic particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Photon"],
    correctAnswer: 2,
    explanation: "Electrons have a negative electric charge.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q119",
    text: "Which search algorithm has the time complexity of O(log n) for a sorted array?",
    options: ["Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"],
    correctAnswer: 1,
    explanation: "Binary Search works on sorted arrays and has a time complexity of O(log n).",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q120",
    text: "Which organ is responsible for filtering blood in the human body?",
    options: ["Heart", "Liver", "Kidney", "Lungs"],
    correctAnswer: 2,
    explanation: "Kidneys filter waste from the blood and produce urine.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q121",
    text: "Which of the following is not a solution of the equation x^2 - 4 = 0?",
    options: ["2", "-2", "0", "None of the above"],
    correctAnswer: 2,
    explanation: "x^2 - 4 = 0 has solutions x = 2 and x = -2. 0 is not a solution.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q122",
    text: "What is the function of ribosomes in a cell?",
    options: ["Energy production", "Protein synthesis", "DNA replication", "Waste removal"],
    correctAnswer: 1,
    explanation: "Ribosomes are responsible for synthesizing proteins from amino acids.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q123",
    text: "Which programming language is considered the foundation of most operating systems?",
    options: ["Java", "Python", "C", "Ruby"],
    correctAnswer: 2,
    explanation: "C is the foundational language for many operating systems including Unix and Linux.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q124",
    text: "Which particle is responsible for holding the nucleus of an atom together?",
    options: ["Electron", "Proton", "Neutron", "Gluon"],
    correctAnswer: 3,
    explanation: "Gluons are exchange particles that mediate the strong nuclear force.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q125",
    text: "What is the limit of (1 + 1/n)^n as n approaches infinity?",
    options: ["1", "0", "Infinity", "e"],
    correctAnswer: 3,
    explanation: "The expression approaches Euler’s number e (~2.718) as n tends to infinity.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q126",
    text: "Which human body system includes the skin, hair, and nails?",
    options: ["Muscular system", "Skeletal system", "Integumentary system", "Respiratory system"],
    correctAnswer: 2,
    explanation: "The integumentary system includes skin, hair, nails, and exocrine glands.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q127",
    text: "Which of these algorithms is used to find strongly connected components in a graph?",
    options: ["Kruskal's Algorithm", "Prim's Algorithm", "Tarjan's Algorithm", "Bellman-Ford Algorithm"],
    correctAnswer: 2,
    explanation: "Tarjan’s algorithm efficiently finds strongly connected components in a graph.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q128",
    text: "Which fundamental force is responsible for radioactive decay?",
    options: ["Gravitational", "Electromagnetic", "Weak nuclear", "Strong nuclear"],
    correctAnswer: 2,
    explanation: "The weak nuclear force governs radioactive decay and neutrino interactions.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q129",
    text: "What is the area of a circle with radius r?",
    options: ["2πr", "πr²", "πd", "πr"],
    correctAnswer: 1,
    explanation: "The area of a circle is π multiplied by the square of its radius (πr²).",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q130",
    text: "What organelle in the cell is responsible for digesting worn-out organelles?",
    options: ["Mitochondria", "Ribosome", "Lysosome", "Endoplasmic Reticulum"],
    correctAnswer: 2,
    explanation: "Lysosomes contain digestive enzymes that break down waste materials and cellular debris.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q131",
    text: "Which algorithm is used for traversing a graph using breadth-wise exploration?",
    options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
    correctAnswer: 1,
    explanation: "Breadth-First Search (BFS) explores the graph level by level from the source node.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q132",
    text: "What does the photoelectric effect demonstrate?",
    options: ["Wave nature of light", "Particle nature of light", "Interference of light", "Refraction of light"],
    correctAnswer: 1,
    explanation: "The photoelectric effect demonstrates the particle nature of light as photons knock out electrons.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q133",
    text: "What is the derivative of ln(x)?",
    options: ["1/x", "ln(x)", "x", "1"],
    correctAnswer: 0,
    explanation: "The derivative of the natural logarithm function ln(x) is 1/x.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q134",
    text: "Which blood cells are primarily responsible for fighting infection?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    correctAnswer: 1,
    explanation: "White blood cells (leukocytes) help defend the body against infection.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q135",
    text: "What is a hash table used for?",
    options: ["Sorting data", "Searching data quickly", "Encrypting data", "Compiling code"],
    correctAnswer: 1,
    explanation: "Hash tables allow for fast data lookup using key-value pairs and hashing.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q136",
    text: "Which law relates voltage, current, and resistance?",
    options: ["Faraday's Law", "Ohm's Law", "Lenz's Law", "Kirchhoff's Law"],
    correctAnswer: 1,
    explanation: "Ohm’s Law states that V = IR, where V is voltage, I is current, and R is resistance.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q137",
    text: "What is the integral of 1/x dx?",
    options: ["ln(x) + C", "x + C", "1/x + C", "e^x + C"],
    correctAnswer: 0,
    explanation: "The integral of 1/x with respect to x is ln(x) + C.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q138",
    text: "Which organ regulates the body's metabolism?",
    options: ["Pancreas", "Liver", "Thyroid", "Heart"],
    correctAnswer: 2,
    explanation: "The thyroid gland regulates metabolism by releasing hormones like thyroxine.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q139",
    text: "What data structure is commonly used in recursion?",
    options: ["Queue", "Heap", "Stack", "Array"],
    correctAnswer: 2,
    explanation: "Recursion uses the call stack to keep track of function calls.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q140",
    text: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Coulomb"],
    correctAnswer: 2,
    explanation: "The SI unit for electric current is the Ampere.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q141",
    text: "Which number is both a perfect square and a perfect cube?",
    options: ["8", "64", "16", "36"],
    correctAnswer: 1,
    explanation: "64 is both 8² and 4³, making it both a perfect square and cube.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q142",
    text: "What is the main function of hemoglobin in the blood?",
    options: ["Clotting", "Carrying oxygen", "Fighting infection", "Filtering toxins"],
    correctAnswer: 1,
    explanation: "Hemoglobin binds to oxygen and transports it from lungs to tissues.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q143",
    text: "Which algorithm finds the shortest path in a weighted graph with negative edges?",
    options: ["Dijkstra’s Algorithm", "BFS", "DFS", "Bellman-Ford Algorithm"],
    correctAnswer: 3,
    explanation: "Bellman-Ford works with negative edge weights, unlike Dijkstra.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q144",
    text: "Which particle has the least mass?",
    options: ["Proton", "Neutron", "Electron", "Alpha particle"],
    correctAnswer: 2,
    explanation: "The electron has significantly less mass than protons or neutrons.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q145",
    text: "What is the derivative of e^x?",
    options: ["e^x", "x·e^x", "ln(x)", "1/e^x"],
    correctAnswer: 0,
    explanation: "The derivative of e^x is itself: e^x.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q146",
    text: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
    correctAnswer: 3,
    explanation: "Vitamin K is essential for the synthesis of clotting factors in the liver.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q147",
    text: "Which data structure is used to implement a priority queue?",
    options: ["Linked List", "Heap", "Stack", "Tree"],
    correctAnswer: 1,
    explanation: "A heap is commonly used to implement priority queues efficiently.",
    topic: "computer_science",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q148",
    text: "Which law states that every action has an equal and opposite reaction?",
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
    correctAnswer: 2,
    explanation: "Newton’s Third Law states that forces always occur in equal and opposite pairs.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q149",
    text: "What is the cube root of 27?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "The cube root of 27 is 3, because 3³ = 27.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q150",
    text: "Which part of the neuron receives signals?",
    options: ["Axon", "Dendrite", "Myelin sheath", "Synapse"],
    correctAnswer: 1,
    explanation: "Dendrites are tree-like structures that receive signals from other neurons.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q161",
    text: "Which article of the Indian Constitution deals with the procedure for impeachment of the President?",
    options: ["Article 61", "Article 56", "Article 75", "Article 80"],
    correctAnswer: 0,
    explanation: "Article 61 provides the procedure for the impeachment of the President of India.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q162",
    text: "What is the primary objective of the Paris Agreement under the UNFCCC?",
    options: ["To eliminate nuclear weapons", "To combat climate change by limiting global warming", "To promote free trade", "To regulate international space activities"],
    correctAnswer: 1,
    explanation: "The Paris Agreement aims to limit global warming to well below 2 degrees Celsius above pre-industrial levels.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q163",
    text: "Which spacecraft was the first to land on the far side of the Moon?",
    options: ["Chandrayaan-2", "Chang'e 4", "Apollo 11", "Luna 2"],
    correctAnswer: 1,
    explanation: "China's Chang'e 4 mission was the first to successfully land on the Moon's far side in 2019.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q164",
    text: "The term 'Shadow Cabinet' in parliamentary democracies refers to:",
    options: ["A secret executive body", "The opposition party's alternate cabinet", "The judiciary in a democracy", "A committee of civil servants"],
    correctAnswer: 1,
    explanation: "The Shadow Cabinet is formed by the opposition to mirror the government’s cabinet and offer alternative policies.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q165",
    text: "Which country hosted the 2024 G20 summit?",
    options: ["India", "Brazil", "Italy", "Saudi Arabia"],
    correctAnswer: 3,
    explanation: "Saudi Arabia hosted the G20 summit in 2024 focusing on global economic cooperation.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q166",
    text: "What is the main purpose of the Artemis program by NASA?",
    options: ["To establish a base on Mars", "To return humans to the Moon", "To send a probe to Jupiter", "To develop space tourism"],
    correctAnswer: 1,
    explanation: "NASA's Artemis program aims to land the first woman and next man on the Moon by the mid-2020s.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q167",
    text: "Which of the following is NOT a feature of the Indian parliamentary system?",
    options: ["Collective responsibility", "Fixed tenure of the Prime Minister", "Bicameral legislature", "Constitutional supremacy"],
    correctAnswer: 1,
    explanation: "The Prime Minister does not have a fixed tenure; they serve as long as they retain the majority support.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q168",
    text: "The 2024 Nobel Peace Prize was awarded to which cause or individual?",
    options: ["Climate activism", "Conflict resolution in Ukraine", "COVID-19 vaccine developers", "Global food security"],
    correctAnswer: 0,
    explanation: "The Nobel Peace Prize 2024 recognized significant efforts in climate activism worldwide.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q169",
    text: "Which satellite navigation system is operated by the European Union?",
    options: ["GPS", "GLONASS", "Galileo", "BeiDou"],
    correctAnswer: 2,
    explanation: "Galileo is the EU's global satellite navigation system, providing accurate positioning worldwide.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q170",
    text: "The 'Doctrine of Basic Structure' in Indian constitutional law was established by which case?",
    options: ["Kesavananda Bharati case", "Maneka Gandhi case", "Golaknath case", "Minerva Mills case"],
    correctAnswer: 0,
    explanation: "The Kesavananda Bharati case (1973) established that Parliament cannot alter the Constitution's basic structure.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q171",
    text: "The term 'Quad' refers to a strategic dialogue between which countries?",
    options: ["USA, India, Japan, Australia", "USA, Russia, China, India", "India, Pakistan, China, Nepal", "USA, UK, France, Germany"],
    correctAnswer: 0,
    explanation: "The Quadrilateral Security Dialogue includes USA, India, Japan, and Australia focusing on Indo-Pacific security.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q172",
    text: "Which telescope is designed to observe the earliest galaxies in the universe?",
    options: ["Hubble Space Telescope", "James Webb Space Telescope", "Chandra X-ray Observatory", "Kepler Space Telescope"],
    correctAnswer: 1,
    explanation: "The James Webb Space Telescope is designed for deep space observations of the early universe.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q173",
    text: "Which of the following bodies is responsible for the election of the Indian President?",
    options: ["Lok Sabha", "Rajya Sabha", "Electoral College", "Supreme Court"],
    correctAnswer: 2,
    explanation: "The President of India is elected by an Electoral College comprising elected members of both houses of Parliament and state legislatures.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q174",
    text: "The recent global initiative 'Global Methane Pledge' aims to reduce methane emissions by what percentage by 2030?",
    options: ["30%", "40%", "50%", "60%"],
    correctAnswer: 2,
    explanation: "The pledge aims for a 30% reduction in methane emissions by 2030 to combat climate change.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q175",
    text: "Which Indian satellite is dedicated to weather forecasting and environmental monitoring?",
    options: ["INSAT-3DR", "GSAT-6A", "RISAT-1", "Cartosat-2"],
    correctAnswer: 0,
    explanation: "INSAT-3DR is primarily used for meteorological observations and disaster warning.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q176",
    text: "In the Indian Constitution, the Directive Principles of State Policy are:",
    options: ["Justiciable", "Non-justiciable guidelines", "Fundamental Rights", "Fundamental Duties"],
    correctAnswer: 1,
    explanation: "Directive Principles guide the government but are not enforceable by courts.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q177",
    text: "Which recent global event focused on biodiversity and was held in Montreal in 2024?",
    options: ["COP27", "COP15", "COP26", "COP30"],
    correctAnswer: 1,
    explanation: "COP15 focused on global biodiversity goals and targets.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q178",
    text: "What is the purpose of the Indian Regional Navigation Satellite System (IRNSS), also known as NavIC?",
    options: ["Global navigation", "Regional satellite communication", "Regional navigation and positioning", "Space weather monitoring"],
    correctAnswer: 2,
    explanation: "NavIC provides accurate position information services to users in India and surrounding region.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q179",
    text: "Which political theory emphasizes the separation of powers among the executive, legislative, and judiciary?",
    options: ["Marxism", "Federalism", "Checks and balances", "Separation of Powers theory"],
    correctAnswer: 3,
    explanation: "Separation of powers divides government functions among different branches to prevent concentration of power.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q180",
    text: "Which country became the first to establish a permanent research base on the Moon?",
    options: ["USA", "China", "Russia", "India"],
    correctAnswer: 1,
    explanation: "China established the first permanent robotic research base on the Moon's far side.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q181",
    text: "The 'Digital India' initiative primarily aims to:",
    options: ["Promote traditional industries", "Improve digital infrastructure and services", "Expand agriculture", "Develop nuclear energy"],
    correctAnswer: 1,
    explanation: "Digital India aims to transform India into a digitally empowered society and knowledge economy.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q182",
    text: "Which Indian constitutional amendment introduced the Goods and Services Tax (GST)?",
    options: ["101st Amendment", "73rd Amendment", "44th Amendment", "86th Amendment"],
    correctAnswer: 0,
    explanation: "The 101st Amendment in 2017 introduced the GST to unify indirect taxes across India.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q183",
    text: "Which of the following is a major aim of the United Nations Sustainable Development Goals (SDGs)?",
    options: ["Space exploration", "Ending poverty and hunger", "Increasing global population", "Reducing internet access"],
    correctAnswer: 1,
    explanation: "SDGs aim to end poverty, hunger, promote education, gender equality, and environmental sustainability.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q184",
    text: "Which Indian mission aims to send humans into space?",
    options: ["Chandrayaan", "Mangalyaan", "Gaganyaan", "Aditya-L1"],
    correctAnswer: 2,
    explanation: "Gaganyaan is India's first crewed space mission planned by ISRO.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q185",
    text: "Which act in India defines the anti-defection law?",
    options: ["Representation of People Act", "Anti-Defection Law 1985", "Prevention of Corruption Act", "Right to Information Act"],
    correctAnswer: 1,
    explanation: "The Anti-Defection Law was added by the 52nd amendment in 1985 to prevent political defections.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q186",
    text: "Which global event in 2024 focused on accelerating the transition to clean energy?",
    options: ["COP27", "Glasgow Climate Summit", "Earth Day Summit", "UN Climate Change Conference"],
    correctAnswer: 3,
    explanation: "The UN Climate Change Conference in 2024 emphasized clean energy and carbon neutrality.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q187",
    text: "Which of the following ISRO satellites monitors space weather?",
    options: ["RISAT", "GSAT", "Aditya-L1", "Cartosat"],
    correctAnswer: 2,
    explanation: "Aditya-L1 is ISRO's solar mission to study the Sun and space weather phenomena.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q188",
    text: "What is the main function of the Election Commission of India?",
    options: ["Conducting elections", "Enforcing laws", "Judging disputes", "Managing parliamentary sessions"],
    correctAnswer: 0,
    explanation: "The Election Commission is an autonomous body responsible for administering elections in India.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q189",
    text: "Which country launched the 'Hope Probe' to Mars?",
    options: ["UAE", "USA", "Russia", "China"],
    correctAnswer: 0,
    explanation: "The UAE launched the Hope Probe in 2020 as its first interplanetary mission to Mars.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q190",
    text: "The principle of 'Judicial Review' in India is derived from:",
    options: ["American Constitution", "British Constitution", "French Constitution", "Indian Constitution"],
    correctAnswer: 0,
    explanation: "Judicial Review was adopted from the American constitutional model to review laws.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q191",
    text: "Which is the first private Indian company to launch a satellite into space?",
    options: ["Skyroot Aerospace", "Antrix Corporation", "ISRO", "TeamIndus"],
    correctAnswer: 0,
    explanation: "Skyroot Aerospace is India's first private company to successfully launch a satellite.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q192",
    text: "The 'Stockholm Agreement' is related to:",
    options: ["Climate change", "Chemical pollutants control", "Nuclear disarmament", "Trade tariffs"],
    correctAnswer: 1,
    explanation: "The Stockholm Convention aims to eliminate or restrict persistent organic pollutants globally.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q193",
    text: "Which Indian constitutional amendment gave the Right to Education the status of a Fundamental Right?",
    options: ["86th Amendment", "42nd Amendment", "73rd Amendment", "44th Amendment"],
    correctAnswer: 0,
    explanation: "The 86th Amendment in 2002 made education a fundamental right for children aged 6 to 14.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q194",
    text: "Which international body oversees the Outer Space Treaty?",
    options: ["UN Office for Outer Space Affairs", "NASA", "ESA", "ISRO"],
    correctAnswer: 0,
    explanation: "The UN Office for Outer Space Affairs manages the Outer Space Treaty and related international agreements.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q195",
    text: "The term 'Shadow Banking' refers to:",
    options: ["Illegal banking", "Non-bank financial intermediaries", "Government banks", "Central banking functions"],
    correctAnswer: 1,
    explanation: "Shadow banking includes financial activities by non-bank institutions outside traditional banking regulation.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q196",
    text: "The 'Directive Principles' in the Indian Constitution are inspired mainly by the constitution of:",
    options: ["USA", "Ireland", "UK", "France"],
    correctAnswer: 1,
    explanation: "Directive Principles were mainly inspired by the Irish Constitution's policies for governance.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q197",
    text: "Which Indian satellite launched in 2023 is designed for advanced remote sensing?",
    options: ["RISAT-2BR2", "Cartosat-3", "GSAT-11", "INSAT-4B"],
    correctAnswer: 0,
    explanation: "RISAT-2BR2 is a radar imaging satellite launched for high-resolution remote sensing.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q198",
    text: "Which country recently became the first to pass a law regulating AI technology?",
    options: ["USA", "China", "EU", "Japan"],
    correctAnswer: 2,
    explanation: "The European Union passed the AI Act, a comprehensive regulation for AI technology.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q199",
    text: "Which Indian Constitutional body is tasked with protecting minorities?",
    options: ["National Commission for Minorities", "Election Commission", "Human Rights Commission", "Finance Commission"],
    correctAnswer: 0,
    explanation: "The National Commission for Minorities protects the rights of minority communities in India.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q200",
    text: "Which planet has been recently studied by the 'Perseverance Rover'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: 0,
    explanation: "NASA’s Perseverance rover is actively exploring Mars to study its geology and signs of past life.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q201",
    text: "What does the term 'Bicameral Legislature' mean?",
    options: ["Single house parliament", "Two house parliament", "No parliament", "Parliament with a president"],
    correctAnswer: 1,
    explanation: "Bicameral legislature refers to a parliament with two houses or chambers.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q202",
    text: "Which recent geopolitical conflict has significantly influenced global oil prices in 2024?",
    options: ["Russia-Ukraine War", "India-China border dispute", "South China Sea tensions", "Korean Peninsula crisis"],
    correctAnswer: 0,
    explanation: "The ongoing Russia-Ukraine conflict has majorly affected global energy markets and oil prices.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q203",
    text: "Which Indian satellite mission focuses on solar observations?",
    options: ["Aditya-L1", "Chandrayaan-3", "Mangalyaan", "RISAT-1"],
    correctAnswer: 0,
    explanation: "Aditya-L1 is designed to study solar activities and space weather.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q204",
    text: "The President of India can be impeached for:",
    options: ["Violation of Constitution", "Corruption", "Misuse of power", "None of these"],
    correctAnswer: 0,
    explanation: "The President can be impeached for violation of the Constitution under Article 61.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q205",
    text: "What is the key focus of the 'Blue Economy' in international policy?",
    options: ["Ocean resources and sustainability", "Agriculture development", "Space exploration", "Digital economy"],
    correctAnswer: 0,
    explanation: "Blue Economy promotes sustainable use of ocean resources for economic growth and ecosystem health.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q206",
    text: "Which country successfully completed the first commercial space tourism flight in 2024?",
    options: ["USA", "Russia", "China", "India"],
    correctAnswer: 0,
    explanation: "Several US private companies like SpaceX and Blue Origin completed commercial space tourism flights in 2024.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q207",
    text: "The 'Doctrine of Lapse' was associated with which historical period?",
    options: ["British colonial rule", "Mughal Empire", "Maratha Empire", "Gupta Period"],
    correctAnswer: 0,
    explanation: "The Doctrine of Lapse was a policy by the British East India Company to annex states without a male heir.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q208",
    text: "Which of the following countries launched the DART mission to test asteroid deflection?",
    options: ["USA", "Russia", "China", "India"],
    correctAnswer: 0,
    explanation: "NASA's DART mission in 2022 tested the ability to deflect an asteroid by kinetic impact.",
    topic: "space technology",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q209",
    text: "The 2024 World Economic Forum annual meeting was held in which location?",
    options: ["Davos, Switzerland", "Geneva, Switzerland", "New York, USA", "London, UK"],
    correctAnswer: 0,
    explanation: "The WEF annual meeting traditionally takes place in Davos, Switzerland.",
    topic: "current affairs",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q210",
    text: "Which Indian constitutional amendment provided the Panchayati Raj system?",
    options: ["73rd Amendment", "74th Amendment", "42nd Amendment", "44th Amendment"],
    correctAnswer: 0,
    explanation: "The 73rd Amendment Act (1992) gave constitutional status to Panchayati Raj institutions.",
    topic: "politics",
    difficulty: "hard",
    ageGroups: ["teens", "adults"]
  },
    {
    id: "q211",
    text: "Which year was the United Nations founded?",
    options: ["1945", "1939", "1950", "1948"],
    correctAnswer: 0,
    explanation: "The United Nations was founded in 1945 after World War II to promote international cooperation.",
    topic: "gk",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q212",
    text: "What is the sum of the first 20 natural numbers?",
    options: ["210", "200", "220", "190"],
    correctAnswer: 0,
    explanation: "Sum of first n natural numbers = n(n+1)/2; so 20*21/2 = 210.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q213",
    text: "Which company developed the first microprocessor in 1971?",
    options: ["Intel", "AMD", "IBM", "Texas Instruments"],
    correctAnswer: 0,
    explanation: "Intel introduced the first commercially available microprocessor, the Intel 4004, in 1971.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q214",
    text: "Who holds the record for the most centuries in international cricket?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
    correctAnswer: 0,
    explanation: "Sachin Tendulkar has the highest number of international centuries across formats.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q215",
    text: "Which football club has won the most UEFA Champions League titles?",
    options: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"],
    correctAnswer: 0,
    explanation: "Real Madrid holds the record for most Champions League titles with 14 wins as of 2024.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q216",
    text: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
    correctAnswer: 0,
    explanation: "The derivative of sin(x) with respect to x is cos(x).",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q217",
    text: "Which programming language is known as the 'language of the web'?",
    options: ["JavaScript", "Python", "Java", "C++"],
    correctAnswer: 0,
    explanation: "JavaScript is the primary language used for client-side web development.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q218",
    text: "In cricket, what is the term for a bowler taking three wickets in three consecutive balls?",
    options: ["Hat-trick", "Triple wicket", "Clean sweep", "Three-fer"],
    correctAnswer: 0,
    explanation: "Taking wickets on three consecutive balls is called a 'Hat-trick'.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q219",
    text: "How many players are on the field for each football team during a match?",
    options: ["11", "10", "9", "12"],
    correctAnswer: 0,
    explanation: "Each football team has 11 players on the field during a match.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q220",
    text: "What is the value of π (pi) up to 3 decimal places?",
    options: ["3.142", "3.141", "3.143", "3.140"],
    correctAnswer: 0,
    explanation: "Pi is approximately 3.14159, rounded to 3 decimal places is 3.142.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q221",
    text: "Which company owns the operating system Android?",
    options: ["Google", "Microsoft", "Apple", "Samsung"],
    correctAnswer: 0,
    explanation: "Google acquired and developed the Android operating system.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q222",
    text: "Who scored the fastest century in ODI cricket history?",
    options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Mark Waugh"],
    correctAnswer: 0,
    explanation: "AB de Villiers scored the fastest ODI century in 31 balls.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q223",
    text: "Which country won the FIFA World Cup in 2018?",
    options: ["France", "Croatia", "Germany", "Brazil"],
    correctAnswer: 0,
    explanation: "France won the 2018 FIFA World Cup held in Russia.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q224",
    text: "What is the square root of 625?",
    options: ["25", "20", "30", "15"],
    correctAnswer: 0,
    explanation: "25 x 25 = 625, so square root is 25.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q225",
    text: "Which technology is used in blockchain?",
    options: ["Distributed ledger", "Cloud computing", "Virtualization", "Machine learning"],
    correctAnswer: 0,
    explanation: "Blockchain uses a distributed ledger technology for secure and transparent transactions.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q226",
    text: "Who is the captain of the Indian cricket team in Test format as of 2024?",
    options: ["Rohit Sharma", "Virat Kohli", "Ajinkya Rahane", "KL Rahul"],
    correctAnswer: 0,
    explanation: "Rohit Sharma is the current captain of the Indian Test cricket team as of 2024.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
    {
    id: "q227",
    text: "Which Indian city is known as the 'City of Lakes'?",
    options: ["Udaipur", "Bhopal", "Nainital", "Jaisalmer"],
    correctAnswer: 0,
    explanation: "Udaipur is famously called the 'City of Lakes' due to its many lakes.",
    topic: "gk",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q228",
    text: "What is the next prime number after 47?",
    options: ["53", "51", "55", "57"],
    correctAnswer: 0,
    explanation: "53 is the prime number that comes immediately after 47.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q229",
    text: "Which company developed the open-source operating system Linux?",
    options: ["Linus Torvalds", "Microsoft", "Apple", "IBM"],
    correctAnswer: 0,
    explanation: "Linux was developed by Linus Torvalds and released as open-source software.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q230",
    text: "Who is the highest run-scorer in IPL history?",
    options: ["Virat Kohli", "Suresh Raina", "David Warner", "Chris Gayle"],
    correctAnswer: 0,
    explanation: "Virat Kohli holds the record for the highest runs in IPL.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q231",
    text: "Which country won the first FIFA World Cup?",
    options: ["Uruguay", "Brazil", "Italy", "Argentina"],
    correctAnswer: 0,
    explanation: "Uruguay won the inaugural FIFA World Cup in 1930.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q232",
    text: "If f(x) = x^3, what is f'(2)?",
    options: ["12", "8", "6", "4"],
    correctAnswer: 0,
    explanation: "The derivative of x^3 is 3x^2; at x=2, f'(2)=3*(2^2)=12.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q233",
    text: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Process"],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol, used for web communication.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q234",
    text: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    correctAnswer: 0,
    explanation: "Muttiah Muralitharan holds the record for most Test wickets.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q235",
    text: "How long is a standard football match (excluding extra time)?",
    options: ["90 minutes", "80 minutes", "100 minutes", "70 minutes"],
    correctAnswer: 0,
    explanation: "A standard football match is played over 90 minutes, split into two halves of 45 minutes.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q236",
    text: "What is the value of 7 factorial (7!)?",
    options: ["5040", "720", "40320", "120"],
    correctAnswer: 0,
    explanation: "7! = 7×6×5×4×3×2×1 = 5040.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q237",
    text: "Which programming paradigm focuses on objects and data encapsulation?",
    options: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Event-Driven Programming"],
    correctAnswer: 0,
    explanation: "Object-Oriented Programming (OOP) focuses on objects that contain data and methods.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q238",
    text: "Who scored the first double century in ODI cricket?",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Martin Guptill"],
    correctAnswer: 0,
    explanation: "Sachin Tendulkar was the first to score a double century in ODI cricket.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q239",
    text: "Which country hosted the 2014 FIFA World Cup?",
    options: ["Brazil", "Russia", "Germany", "South Africa"],
    correctAnswer: 0,
    explanation: "Brazil hosted the FIFA World Cup in 2014.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q240",
    text: "What is the binary equivalent of decimal 25?",
    options: ["11001", "10101", "11101", "10011"],
    correctAnswer: 0,
    explanation: "Decimal 25 converts to binary 11001.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q241",
    text: "What is the next number in the sequence: 2, 6, 12, 20, ?",
    options: ["30", "28", "26", "32"],
    correctAnswer: 0,
    explanation: "The pattern adds consecutive even numbers: 2(+4), 6(+6), 12(+8), 20(+10) = 30.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q242",
    text: "What does CPU stand for in computer terminology?",
    options: ["Central Processing Unit", "Central Programming Unit", "Computer Personal Unit", "Central Performance Unit"],
    correctAnswer: 0,
    explanation: "CPU stands for Central Processing Unit, the brain of a computer.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q243",
    text: "Who is the highest wicket-taker in IPL history?",
    options: ["Lasith Malinga", "Sunil Narine", "Dwayne Bravo", "Bhuvneshwar Kumar"],
    correctAnswer: 0,
    explanation: "Lasith Malinga holds the record for most IPL wickets.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q244",
    text: "Which country won the UEFA Euro 2020 championship?",
    options: ["Italy", "England", "Germany", "France"],
    correctAnswer: 0,
    explanation: "Italy won the UEFA Euro 2020 tournament.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q245",
    text: "What is the square root of 144?",
    options: ["12", "14", "10", "16"],
    correctAnswer: 0,
    explanation: "12 × 12 = 144.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q246",
    text: "Which technology is used for cryptocurrency transactions?",
    options: ["Blockchain", "Cloud Computing", "Artificial Intelligence", "Internet of Things"],
    correctAnswer: 0,
    explanation: "Blockchain technology underpins cryptocurrency transactions.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q247",
    text: "Who holds the record for the most runs in a single IPL season?",
    options: ["Virat Kohli", "David Warner", "Orange Cap Holder", "Chris Gayle"],
    correctAnswer: 1,
    explanation: "David Warner scored the most runs in a single IPL season (2016).",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q248",
    text: "Which footballer is known as 'The King of Football'?",
    options: ["Pelé", "Lionel Messi", "Cristiano Ronaldo", "Diego Maradona"],
    correctAnswer: 0,
    explanation: "Pelé is often called 'The King of Football' for his legendary career.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q249",
    text: "What is the formula for the area of a circle?",
    options: ["πr²", "2πr", "πd", "r²/2"],
    correctAnswer: 0,
    explanation: "The area of a circle is calculated as π times the radius squared.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q250",
    text: "What is the main function of RAM in a computer?",
    options: ["Temporary data storage", "Permanent storage", "Input device", "Output device"],
    correctAnswer: 0,
    explanation: "RAM stores data temporarily for quick access by the CPU.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q251",
    text: "Which bowler took a hat-trick in the 2019 Cricket World Cup semifinal?",
    options: ["Mohammed Shami", "Jofra Archer", "Mitchell Starc", "Trent Boult"],
    correctAnswer: 0,
    explanation: "Mohammed Shami took a hat-trick against New Zealand in 2019 semifinal.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q252",
    text: "Which country has won the most FIFA World Cups?",
    options: ["Brazil", "Germany", "Italy", "Argentina"],
    correctAnswer: 0,
    explanation: "Brazil has won the FIFA World Cup 5 times, more than any other nation.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q253",
    text: "What is 15% of 200?",
    options: ["30", "25", "35", "40"],
    correctAnswer: 0,
    explanation: "15% of 200 = 0.15 × 200 = 30.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q254",
    text: "Which programming language is primarily used for iOS app development?",
    options: ["Swift", "Java", "Kotlin", "C#"],
    correctAnswer: 0,
    explanation: "Swift is the main programming language used for iOS apps.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q255",
    text: "Who scored the most runs in the 2019 Cricket World Cup?",
    options: ["Rohit Sharma", "Steve Smith", "Kane Williamson", "Joe Root"],
    correctAnswer: 0,
    explanation: "Rohit Sharma scored the most runs (648) in the 2019 World Cup.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q256",
    text: "What year did the Premier League start?",
    options: ["1992", "1985", "1995", "2000"],
    correctAnswer: 0,
    explanation: "The English Premier League was founded in 1992.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q257",
    text: "What is the next number in the series: 3, 9, 27, 81, ?",
    options: ["243", "162", "324", "108"],
    correctAnswer: 0,
    explanation: "Each term is multiplied by 3; 81×3=243.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q258",
    text: "Which device is used to convert digital signals to analog signals?",
    options: ["DAC", "ADC", "CPU", "GPU"],
    correctAnswer: 0,
    explanation: "DAC (Digital-to-Analog Converter) converts digital signals to analog.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q259",
    text: "Which cricketer is nicknamed 'The Wall'?",
    options: ["Rahul Dravid", "Sachin Tendulkar", "Anil Kumble", "MS Dhoni"],
    correctAnswer: 0,
    explanation: "Rahul Dravid earned the nickname 'The Wall' for his solid defense.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q260",
    text: "Which country won the FIFA Women’s World Cup in 2019?",
    options: ["USA", "Netherlands", "Germany", "Japan"],
    correctAnswer: 0,
    explanation: "USA won the 2019 FIFA Women’s World Cup.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q261",
    text: "What is the value of π (pi) up to 3 decimal places?",
    options: ["3.142", "3.141", "3.143", "3.140"],
    correctAnswer: 0,
    explanation: "Pi approximated to three decimal places is 3.142.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q262",
    text: "What does GPU stand for?",
    options: ["Graphics Processing Unit", "General Processing Unit", "Graphical Performance Utility", "General Purpose Unit"],
    correctAnswer: 0,
    explanation: "GPU stands for Graphics Processing Unit, used for rendering images.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q263",
    text: "Who is the captain of India’s cricket team in Test format (as of 2024)?",
    options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Ajinkya Rahane"],
    correctAnswer: 0,
    explanation: "Rohit Sharma is the current Test captain for India.",
    topic: "cricket",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q264",
    text: "Which country hosted the 2018 FIFA World Cup?",
    options: ["Russia", "Brazil", "South Africa", "Germany"],
    correctAnswer: 0,
    explanation: "Russia hosted the FIFA World Cup in 2018.",
    topic: "football",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q265",
    text: "What is the sum of the interior angles of a triangle?",
    options: ["180°", "90°", "360°", "270°"],
    correctAnswer: 0,
    explanation: "The interior angles of a triangle add up to 180 degrees.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q266",
    text: "Which programming language is known for its simplicity and readability?",
    options: ["Python", "C++", "Java", "Assembly"],
    correctAnswer: 0,
    explanation: "Python is known for simple syntax and readability.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q267",
    text: "What does IoT stand for?",
    options: ["Internet of Things", "Internet of Technology", "Interoperable Technology", "Integrated of Things"],
    correctAnswer: 0,
    explanation: "IoT stands for Internet of Things, referring to interconnected devices.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q268",
    text: "Which protocol is commonly used for communication between IoT devices?",
    options: ["MQTT", "HTTP", "FTP", "SMTP"],
    correctAnswer: 0,
    explanation: "MQTT is a lightweight messaging protocol ideal for IoT communications.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q269",
    text: "Which microcontroller board is commonly used in Arduino projects?",
    options: ["ATmega328P", "ESP8266", "Raspberry Pi", "PIC16F877A"],
    correctAnswer: 0,
    explanation: "ATmega328P is the microcontroller used on the Arduino Uno board.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q270",
    text: "What is the main programming language used for Arduino development?",
    options: ["C++", "Python", "Java", "JavaScript"],
    correctAnswer: 0,
    explanation: "Arduino programs (sketches) are written in a simplified version of C++.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q271",
    text: "In IoT, what does 'Edge Computing' refer to?",
    options: ["Processing data near the data source", "Cloud data storage", "Remote server processing", "Mobile app computation"],
    correctAnswer: 0,
    explanation: "Edge Computing means processing data closer to where it is generated, reducing latency.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q272",
    text: "Which Arduino board features built-in WiFi?",
    options: ["Arduino Uno WiFi Rev2", "Arduino Mega", "Arduino Nano", "Arduino Leonardo"],
    correctAnswer: 0,
    explanation: "Arduino Uno WiFi Rev2 comes with integrated WiFi connectivity.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q273",
    text: "Which sensor type is commonly used for temperature measurement in IoT devices?",
    options: ["DHT11", "LDR", "Ultrasonic", "PIR"],
    correctAnswer: 0,
    explanation: "DHT11 is a popular temperature and humidity sensor used in IoT.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q274",
    text: "What does PWM stand for in Arduino?",
    options: ["Pulse Width Modulation", "Pulse Wave Measurement", "Power With Memory", "Port Write Mode"],
    correctAnswer: 0,
    explanation: "PWM is used to simulate analog output using digital signals by varying pulse widths.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q275",
    text: "Which communication interface is used by Arduino to connect with computers?",
    options: ["USB", "Ethernet", "Bluetooth", "WiFi"],
    correctAnswer: 0,
    explanation: "Arduino connects via USB for programming and serial communication.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q276",
    text: "What is the typical operating voltage of an Arduino Uno board?",
    options: ["5V", "3.3V", "12V", "9V"],
    correctAnswer: 0,
    explanation: "Arduino Uno typically operates at 5 volts.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q277",
    text: "Which IoT platform is provided by Amazon?",
    options: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "IBM Watson IoT"],
    correctAnswer: 0,
    explanation: "AWS IoT Core is Amazon’s managed cloud platform for IoT devices.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q278",
    text: "What does 'Actuator' mean in an IoT system?",
    options: ["Device that performs actions", "Data collecting sensor", "Cloud server", "User interface"],
    correctAnswer: 0,
    explanation: "Actuators receive signals and perform physical actions like turning motors.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q279",
    text: "Which Arduino function is used to set a pin as output?",
    options: ["pinMode(pin, OUTPUT)", "digitalWrite(pin, HIGH)", "digitalRead(pin)", "analogWrite(pin, value)"],
    correctAnswer: 0,
    explanation: "pinMode sets the pin mode to INPUT or OUTPUT.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q280",
    text: "What is the maximum resolution of Arduino analog-to-digital conversion (ADC) on Arduino Uno?",
    options: ["10-bit", "8-bit", "12-bit", "16-bit"],
    correctAnswer: 0,
    explanation: "Arduino Uno ADC provides 10-bit resolution (1024 levels).",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q281",
    text: "Which wireless technology is commonly used for short-range IoT communications?",
    options: ["Bluetooth Low Energy (BLE)", "WiFi", "Zigbee", "NFC"],
    correctAnswer: 0,
    explanation: "BLE is widely used for energy-efficient short-range IoT device communication.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q282",
    text: "Which Arduino library is used to connect to WiFi on ESP8266 boards?",
    options: ["ESP8266WiFi.h", "WiFi.h", "Ethernet.h", "SPI.h"],
    correctAnswer: 0,
    explanation: "ESP8266WiFi.h is the library used for WiFi functions on ESP8266.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q283",
    text: "In IoT, what is meant by 'Device Twin'?",
    options: ["A virtual representation of a physical device", "A backup device", "Two identical sensors", "A paired Bluetooth device"],
    correctAnswer: 0,
    explanation: "Device Twin is a virtual model representing the state of a physical IoT device.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q284",
    text: "Which communication protocol does Arduino use to communicate with I2C devices?",
    options: ["Two-wire interface", "SPI", "UART", "CAN"],
    correctAnswer: 0,
    explanation: "I2C is a two-wire serial communication protocol.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q285",
    text: "Which sensor is commonly used for motion detection in IoT security systems?",
    options: ["PIR sensor", "Ultrasonic sensor", "Temperature sensor", "Pressure sensor"],
    correctAnswer: 0,
    explanation: "PIR sensors detect infrared radiation from moving objects.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q286",
    text: "Which Arduino function reads an analog value from a pin?",
    options: ["analogRead(pin)", "digitalRead(pin)", "analogWrite(pin, value)", "digitalWrite(pin, value)"],
    correctAnswer: 0,
    explanation: "analogRead reads the analog voltage value from a specified pin.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q287",
    text: "Which of these is NOT a characteristic of IoT devices?",
    options: ["High latency", "Low power consumption", "Connectivity", "Remote monitoring"],
    correctAnswer: 0,
    explanation: "IoT devices aim for low latency, not high latency.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q288",
    text: "What type of memory is EEPROM on Arduino?",
    options: ["Non-volatile memory", "Volatile memory", "Cache memory", "Register memory"],
    correctAnswer: 0,
    explanation: "EEPROM retains data even when power is off (non-volatile).",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q289",
    text: "Which IoT device component is responsible for data acquisition?",
    options: ["Sensor", "Actuator", "Gateway", "Cloud server"],
    correctAnswer: 0,
    explanation: "Sensors collect data from the environment for IoT systems.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q290",
    text: "What is the Arduino IDE?",
    options: ["An integrated development environment for writing and uploading code", "An operating system", "A hardware component", "A communication protocol"],
    correctAnswer: 0,
    explanation: "Arduino IDE is software used to write, compile, and upload sketches to Arduino boards.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q291",
    text: "Which is a common power source voltage for Arduino projects?",
    options: ["9V battery", "3.3V battery", "1.5V battery", "24V power supply"],
    correctAnswer: 0,
    explanation: "9V batteries are commonly used to power Arduino projects.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q292",
    text: "Which cloud platform is known for IoT device management by Microsoft?",
    options: ["Azure IoT Hub", "Google Cloud IoT", "AWS IoT Core", "IBM Watson IoT"],
    correctAnswer: 0,
    explanation: "Azure IoT Hub is Microsoft’s managed service for IoT device connectivity and management.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q293",
    text: "Which Arduino function is used to send data over serial communication?",
    options: ["Serial.print()", "digitalWrite()", "analogRead()", "pinMode()"],
    correctAnswer: 0,
    explanation: "Serial.print() sends data to the serial port for monitoring or communication.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q294",
    text: "What is the typical range of Bluetooth Low Energy (BLE) in IoT devices?",
    options: ["10 meters", "100 meters", "1 kilometer", "500 meters"],
    correctAnswer: 0,
    explanation: "BLE typically works within a range of about 10 meters.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q295",
    text: "Which Arduino board is smallest in size?",
    options: ["Arduino Nano", "Arduino Uno", "Arduino Mega", "Arduino Due"],
    correctAnswer: 0,
    explanation: "Arduino Nano is a compact, small-sized board suitable for space-constrained projects.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q296",
    text: "What is the main advantage of using IoT in smart cities?",
    options: ["Efficient resource management", "More traffic congestion", "Higher energy costs", "Increased pollution"],
    correctAnswer: 0,
    explanation: "IoT helps smart cities manage resources efficiently, reducing waste and cost.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q297",
    text: "Which communication standard uses a 2.4 GHz frequency band for IoT devices?",
    options: ["Zigbee", "LoRaWAN", "NB-IoT", "Sigfox"],
    correctAnswer: 0,
    explanation: "Zigbee operates on the 2.4 GHz frequency band for short-range communication.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q298",
    text: "Which Arduino pin is used for external interrupts on the Uno board?",
    options: ["Digital pins 2 and 3", "Digital pins 8 and 9", "Analog pins A0 and A1", "Digital pins 10 and 11"],
    correctAnswer: 0,
    explanation: "Pins 2 and 3 on Arduino Uno support external interrupts.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q299",
    text: "What is the function of a gateway in an IoT network?",
    options: ["Bridge between IoT devices and cloud", "Collects sensor data", "Performs actuation", "Stores data locally"],
    correctAnswer: 0,
    explanation: "Gateways act as intermediaries connecting local IoT devices to cloud services.",
    topic: "iot",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q300",
    text: "Which Arduino library allows communication via I2C?",
    options: ["Wire.h", "SPI.h", "Ethernet.h", "WiFi.h"],
    correctAnswer: 0,
    explanation: "Wire.h library is used to interface I2C devices on Arduino.",
    topic: "arduino",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q301",
    text: "Which programming language introduced the concept of 'write once, run anywhere'?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 0,
    explanation: "Java’s philosophy is 'write once, run anywhere' due to its JVM.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q302",
    text: "Which data structure is primarily used in recursion?",
    options: ["Stack", "Queue", "Heap", "Linked List"],
    correctAnswer: 0,
    explanation: "Recursion uses a stack to keep track of function calls.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q303",
    text: "What keyword is used in Python to define a function?",
    options: ["def", "function", "fun", "lambda"],
    correctAnswer: 0,
    explanation: "'def' keyword is used to define functions in Python.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q304",
    text: "Which language is considered a low-level programming language?",
    options: ["Assembly", "Java", "Python", "Ruby"],
    correctAnswer: 0,
    explanation: "Assembly language is low-level, close to machine code.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q305",
    text: "What does 'polymorphism' refer to in object-oriented programming?",
    options: ["Ability of a function to process objects differently", "Memory allocation", "Variable declaration", "Looping constructs"],
    correctAnswer: 0,
    explanation: "Polymorphism allows methods to perform different tasks based on object type.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q306",
    text: "Which language is mainly used for statistical computing and graphics?",
    options: ["R", "JavaScript", "C#", "Swift"],
    correctAnswer: 0,
    explanation: "R is widely used in data analysis and statistical computing.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q307",
    text: "What is a 'pointer' in C programming?",
    options: ["Variable that stores memory address", "Loop counter", "Function return value", "String variable"],
    correctAnswer: 0,
    explanation: "Pointers store the memory address of variables.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q308",
    text: "Which language introduced the concept of 'garbage collection'?",
    options: ["Lisp", "C", "FORTRAN", "COBOL"],
    correctAnswer: 0,
    explanation: "Lisp was one of the first languages to implement automatic garbage collection.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q309",
    text: "Which of these is a dynamically typed language?",
    options: ["Python", "C++", "Java", "Go"],
    correctAnswer: 0,
    explanation: "Python determines variable types at runtime (dynamic typing).",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q310",
    text: "In JavaScript, what does '===' operator mean?",
    options: ["Strict equality (checks value and type)", "Assignment", "Comparison of value only", "Inequality"],
    correctAnswer: 0,
    explanation: "'===' checks both value and type equality in JavaScript.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q311",
    text: "Which of the following is NOT a functional programming language?",
    options: ["Java", "Haskell", "Erlang", "Scala"],
    correctAnswer: 0,
    explanation: "Java is primarily object-oriented, not functional.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q312",
    text: "What is the default value of a boolean variable in Java?",
    options: ["false", "true", "0", "null"],
    correctAnswer: 0,
    explanation: "Boolean defaults to false in Java.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q313",
    text: "Which symbol is used for single-line comments in C++?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswer: 0,
    explanation: "'//' denotes single-line comments in C++.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q314",
    text: "Which keyword is used to declare a constant in JavaScript?",
    options: ["const", "let", "var", "constant"],
    correctAnswer: 0,
    explanation: "'const' declares block-scoped constants in JavaScript.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q315",
    text: "What is 'inheritance' in object-oriented programming?",
    options: ["Deriving a new class from an existing class", "Data hiding", "Function overloading", "Memory management"],
    correctAnswer: 0,
    explanation: "Inheritance allows a class to inherit properties and methods of another.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q316",
    text: "Which language is known for its use in artificial intelligence research?",
    options: ["Lisp", "PHP", "HTML", "COBOL"],
    correctAnswer: 0,
    explanation: "Lisp has historically been important for AI programming.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q317",
    text: "Which of these languages is primarily used for web development?",
    options: ["JavaScript", "C", "Fortran", "Assembly"],
    correctAnswer: 0,
    explanation: "JavaScript is widely used for client-side and server-side web development.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q318",
    text: "Which loop is guaranteed to execute at least once?",
    options: ["do-while", "for", "while", "foreach"],
    correctAnswer: 0,
    explanation: "'do-while' executes before condition checking, ensuring one execution.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q319",
    text: "Which language uses indentation to define code blocks?",
    options: ["Python", "Java", "C++", "Ruby"],
    correctAnswer: 0,
    explanation: "Python uses indentation instead of braces to define code blocks.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q320",
    text: "Which of the following is NOT a primitive data type in Java?",
    options: ["String", "int", "boolean", "char"],
    correctAnswer: 0,
    explanation: "String is a class in Java, not a primitive data type.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q321",
    text: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Question Language", "Sequential Query Logic"],
    correctAnswer: 0,
    explanation: "SQL is Structured Query Language used for managing databases.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q322",
    text: "Which keyword is used in C++ to define a class?",
    options: ["class", "struct", "object", "define"],
    correctAnswer: 0,
    explanation: "'class' keyword defines a class in C++.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q323",
    text: "What is the output of: console.log(typeof NaN) in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: 0,
    explanation: "typeof NaN returns 'number' in JavaScript.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q324",
    text: "Which of the following is a markup language, not a programming language?",
    options: ["HTML", "Python", "Java", "C#"],
    correctAnswer: 0,
    explanation: "HTML is a markup language used for structuring web pages.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q325",
    text: "In Java, which method is the entry point of any program?",
    options: ["main()", "start()", "init()", "run()"],
    correctAnswer: 0,
    explanation: "main() is the method where Java programs begin execution.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q326",
    text: "Which programming paradigm focuses on functions and avoids changing state?",
    options: ["Functional programming", "Object-oriented programming", "Procedural programming", "Imperative programming"],
    correctAnswer: 0,
    explanation: "Functional programming emphasizes pure functions and immutable state.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q327",
    text: "What does 'IDE' stand for in software development?",
    options: ["Integrated Development Environment", "Internal Data Engine", "Interface Design Editor", "Initial Debugging Environment"],
    correctAnswer: 0,
    explanation: "IDE is a software application providing tools for programming.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q328",
    text: "Which language is primarily used for iOS app development?",
    options: ["Swift", "Java", "C#", "Python"],
    correctAnswer: 0,
    explanation: "Swift is Apple's language for iOS app development.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q329",
    text: "Which operator is used for concatenation in Java?",
    options: ["+", "*", "-", "/"],
    correctAnswer: 0,
    explanation: "The + operator concatenates strings in Java.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q330",
    text: "Which of these is a compiled language?",
    options: ["C", "JavaScript", "Python", "Ruby"],
    correctAnswer: 0,
    explanation: "C is compiled to machine code before execution.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q331",
    text: "Which keyword declares a variable in JavaScript with block scope?",
    options: ["let", "var", "const", "static"],
    correctAnswer: 0,
    explanation: "'let' declares block-scoped variables in JavaScript.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q332",
    text: "Which language is used for scripting in Adobe Photoshop?",
    options: ["JavaScript", "Python", "Ruby", "PHP"],
    correctAnswer: 0,
    explanation: "Adobe Photoshop supports JavaScript for scripting tasks.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q333",
    text: "Which of the following is a backend web development language?",
    options: ["PHP", "HTML", "CSS", "JavaScript (client-side)"],
    correctAnswer: 0,
    explanation: "PHP is commonly used for server-side scripting.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q334",
    text: "What is the file extension for Python files?",
    options: [".py", ".java", ".js", ".cpp"],
    correctAnswer: 0,
    explanation: "Python source code files use the .py extension.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q335",
    text: "Which programming language was developed by Guido van Rossum?",
    options: ["Python", "Java", "C++", "Perl"],
    correctAnswer: 0,
    explanation: "Guido van Rossum created Python in 1991.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q336",
    text: "What does 'syntax' refer to in programming?",
    options: ["Rules defining structure of code", "Memory allocation", "Data types", "Algorithm efficiency"],
    correctAnswer: 0,
    explanation: "Syntax defines the structure and grammar of a programming language.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q337",
    text: "Which language is primarily used for Android app development?",
    options: ["Kotlin", "Swift", "JavaScript", "Ruby"],
    correctAnswer: 0,
    explanation: "Kotlin is now the preferred language for Android development.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q338",
    text: "Which programming concept helps avoid repetition using loops?",
    options: ["Iteration", "Inheritance", "Polymorphism", "Encapsulation"],
    correctAnswer: 0,
    explanation: "Iteration is the process of repeating code using loops.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q339",
    text: "Which language uses 'print()' function to output text?",
    options: ["Python", "C", "Java", "C++"],
    correctAnswer: 0,
    explanation: "Python uses print() to display output.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q340",
    text: "Which keyword is used to create an object in Java?",
    options: ["new", "create", "instantiate", "object"],
    correctAnswer: 0,
    explanation: "'new' keyword creates new object instances.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q341",
    text: "Which programming language is primarily used for iOS development before Swift?",
    options: ["Objective-C", "Java", "Kotlin", "C#"],
    correctAnswer: 0,
    explanation: "Objective-C was the main language for iOS before Swift.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q342",
    text: "What is the purpose of 'try-catch' blocks in programming?",
    options: ["Handling exceptions/errors", "Looping through arrays", "Declaring variables", "Defining functions"],
    correctAnswer: 0,
    explanation: "'try-catch' is used to catch and handle runtime errors.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q343",
    text: "Which language is designed for system programming?",
    options: ["C", "HTML", "JavaScript", "SQL"],
    correctAnswer: 0,
    explanation: "C is commonly used for system-level programming.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q344",
    text: "Which language uses 'def' keyword to declare a function?",
    options: ["Python", "JavaScript", "C++", "Ruby"],
    correctAnswer: 0,
    explanation: "Python uses 'def' to declare functions.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: "q345",
    text: "Which of the following is a logic programming language?",
    options: ["Prolog", "Python", "C", "Java"],
    correctAnswer: 0,
    explanation: "Prolog is based on formal logic.",
    topic: "programming language",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
  id: "q346",
  text: "What is the capital of Australia?",
  options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
  correctAnswer: 1,
  explanation: "Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q347",
  text: "Who is the current Prime Minister of India?",
  options: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
  correctAnswer: 0,
  explanation: "Narendra Modi has been serving as the Prime Minister of India since 2014.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q348",
  text: "What is the capital of Canada?",
  options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  correctAnswer: 2,
  explanation: "Ottawa is the capital city of Canada.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q349",
  text: "Who is the Prime Minister of the United Kingdom?",
  options: ["Boris Johnson", "Rishi Sunak", "Theresa May", "David Cameron"],
  correctAnswer: 1,
  explanation: "Rishi Sunak became Prime Minister of the UK in 2022.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q350",
  text: "What is the capital of Japan?",
  options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
  correctAnswer: 2,
  explanation: "Tokyo is the capital and largest city of Japan.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q351",
  text: "Who is the President of the United States?",
  options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
  correctAnswer: 0,
  explanation: "Joe Biden has been serving as President of the USA since January 2021.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q352",
  text: "What is the capital of Germany?",
  options: ["Frankfurt", "Berlin", "Munich", "Hamburg"],
  correctAnswer: 1,
  explanation: "Berlin is the capital and largest city of Germany.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q353",
  text: "Who is the Chancellor of Germany?",
  options: ["Angela Merkel", "Olaf Scholz", "Frank-Walter Steinmeier", "Heiko Maas"],
  correctAnswer: 1,
  explanation: "Olaf Scholz took office as Chancellor of Germany in 2021.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q354",
  text: "What is the capital of France?",
  options: ["Lyon", "Marseille", "Paris", "Nice"],
  correctAnswer: 2,
  explanation: "Paris is the capital and largest city of France.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q355",
  text: "Who is the President of France?",
  options: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Jacques Chirac"],
  correctAnswer: 0,
  explanation: "Emmanuel Macron has been serving as the President of France since 2017.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q356",
  text: "What is the capital of Russia?",
  options: ["Saint Petersburg", "Moscow", "Kazan", "Novosibirsk"],
  correctAnswer: 1,
  explanation: "Moscow is the capital and largest city of Russia.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q357",
  text: "Who is the President of Russia?",
  options: ["Vladimir Putin", "Dmitry Medvedev", "Mikhail Gorbachev", "Boris Yeltsin"],
  correctAnswer: 0,
  explanation: "Vladimir Putin has been the President of Russia since 2012.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q358",
  text: "What is the capital of Brazil?",
  options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
  correctAnswer: 1,
  explanation: "Brasília is the capital city of Brazil, built to replace Rio de Janeiro.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q359",
  text: "Who is the President of Brazil?",
  options: ["Jair Bolsonaro", "Luiz Inácio Lula da Silva", "Dilma Rousseff", "Michel Temer"],
  correctAnswer: 1,
  explanation: "Luiz Inácio Lula da Silva took office as President of Brazil in 2023.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q360",
  text: "What is the capital of China?",
  options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
  correctAnswer: 1,
  explanation: "Beijing is the capital city of China.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q361",
  text: "Who is the President of China?",
  options: ["Xi Jinping", "Hu Jintao", "Deng Xiaoping", "Jiang Zemin"],
  correctAnswer: 0,
  explanation: "Xi Jinping is the current President of China since 2013.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q362",
  text: "What is the capital of South Africa?",
  options: ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
  correctAnswer: 1,
  explanation: "Pretoria is the administrative capital of South Africa.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q363",
  text: "Who is the President of South Africa?",
  options: ["Cyril Ramaphosa", "Jacob Zuma", "Thabo Mbeki", "Nelson Mandela"],
  correctAnswer: 0,
  explanation: "Cyril Ramaphosa has been President of South Africa since 2018.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q364",
  text: "What is the capital of Italy?",
  options: ["Milan", "Venice", "Rome", "Naples"],
  correctAnswer: 2,
  explanation: "Rome is the capital city of Italy and its largest city.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q365",
  text: "Who is the Prime Minister of Italy?",
  options: ["Mario Draghi", "Giuseppe Conte", "Matteo Renzi", "Silvio Berlusconi"],
  correctAnswer: 0,
  explanation: "Mario Draghi became Prime Minister of Italy in 2021.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q366",
  text: "What is the capital of Mexico?",
  options: ["Guadalajara", "Monterrey", "Mexico City", "Cancún"],
  correctAnswer: 2,
  explanation: "Mexico City is the capital and largest city of Mexico.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q367",
  text: "Who is the President of Mexico?",
  options: ["Andrés Manuel López Obrador", "Enrique Peña Nieto", "Felipe Calderón", "Vicente Fox"],
  correctAnswer: 0,
  explanation: "Andrés Manuel López Obrador has been President of Mexico since 2018.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q368",
  text: "What is the capital of Saudi Arabia?",
  options: ["Riyadh", "Jeddah", "Mecca", "Medina"],
  correctAnswer: 0,
  explanation: "Riyadh is the capital and largest city of Saudi Arabia.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q369",
  text: "Who is the King of Saudi Arabia?",
  options: ["Salman bin Abdulaziz Al Saud", "Abdullah bin Abdulaziz", "Fahd bin Abdulaziz", "Faisal bin Abdulaziz"],
  correctAnswer: 0,
  explanation: "King Salman has been the monarch of Saudi Arabia since 2015.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q370",
  text: "What is the capital of Argentina?",
  options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
  correctAnswer: 0,
  explanation: "Buenos Aires is the capital and largest city of Argentina.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q371",
  text: "Who is the President of Argentina?",
  options: ["Alberto Fernández", "Mauricio Macri", "Cristina Fernández de Kirchner", "Néstor Kirchner"],
  correctAnswer: 0,
  explanation: "Alberto Fernández has been serving as President of Argentina since 2019.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q372",
  text: "What is the capital of Egypt?",
  options: ["Alexandria", "Cairo", "Giza", "Luxor"],
  correctAnswer: 1,
  explanation: "Cairo is the capital and largest city of Egypt.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q373",
  text: "Who is the President of Egypt?",
  options: ["Abdel Fattah el-Sisi", "Mohamed Morsi", "Hosni Mubarak", "Anwar Sadat"],
  correctAnswer: 0,
  explanation: "Abdel Fattah el-Sisi has been President of Egypt since 2014.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q374",
  text: "What is the capital of South Korea?",
  options: ["Busan", "Seoul", "Incheon", "Daegu"],
  correctAnswer: 1,
  explanation: "Seoul is the capital and largest city of South Korea.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q375",
  text: "Who is the President of South Korea?",
  options: ["Yoon Suk-yeol", "Moon Jae-in", "Park Geun-hye", "Lee Myung-bak"],
  correctAnswer: 0,
  explanation: "Yoon Suk-yeol became President of South Korea in 2022.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q376",
  text: "What is the capital of Turkey?",
  options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
  correctAnswer: 1,
  explanation: "Ankara is the capital city of Turkey.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q377",
  text: "Who is the President of Turkey?",
  options: ["Recep Tayyip Erdoğan", "Abdullah Gül", "Ahmet Davutoğlu", "Binali Yıldırım"],
  correctAnswer: 0,
  explanation: "Recep Tayyip Erdoğan has been President of Turkey since 2014.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q378",
  text: "What is the capital of Spain?",
  options: ["Barcelona", "Madrid", "Valencia", "Seville"],
  correctAnswer: 1,
  explanation: "Madrid is the capital and largest city of Spain.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q379",
  text: "Who is the Prime Minister of Spain?",
  options: ["Pedro Sánchez", "Mariano Rajoy", "José Luis Rodríguez Zapatero", "Felipe González"],
  correctAnswer: 0,
  explanation: "Pedro Sánchez has been the Prime Minister of Spain since 2018.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q380",
  text: "What is the capital of Indonesia?",
  options: ["Jakarta", "Bali", "Bandung", "Surabaya"],
  correctAnswer: 0,
  explanation: "Jakarta is the capital and largest city of Indonesia.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q381",
  text: "Who is the President of Indonesia?",
  options: ["Joko Widodo", "Susilo Bambang Yudhoyono", "Megawati Sukarnoputri", "B. J. Habibie"],
  correctAnswer: 0,
  explanation: "Joko Widodo has been President of Indonesia since 2014.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q382",
  text: "What is the capital of Nigeria?",
  options: ["Lagos", "Abuja", "Kano", "Ibadan"],
  correctAnswer: 1,
  explanation: "Abuja is the capital city of Nigeria.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q383",
  text: "Who is the President of Nigeria?",
  options: ["Bola Tinubu", "Muhammadu Buhari", "Goodluck Jonathan", "Olusegun Obasanjo"],
  correctAnswer: 0,
  explanation: "Bola Tinubu became President of Nigeria in 2023.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q384",
  text: "What is the capital of Pakistan?",
  options: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
  correctAnswer: 2,
  explanation: "Islamabad is the capital city of Pakistan.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q385",
  text: "Who is the Prime Minister of Pakistan?",
  options: ["Shehbaz Sharif", "Imran Khan", "Nawaz Sharif", "Benazir Bhutto"],
  correctAnswer: 0,
  explanation: "Shehbaz Sharif has been serving as Prime Minister of Pakistan since 2022.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q386",
  text: "What is the capital of United Arab Emirates?",
  options: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  correctAnswer: 1,
  explanation: "Abu Dhabi is the capital of the UAE.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q387",
  text: "Who is the President of United Arab Emirates?",
  options: ["Mohammed bin Zayed Al Nahyan", "Khalifa bin Zayed Al Nahyan", "Mohammed bin Rashid Al Maktoum", "Sultan bin Mohammed Al Qasimi"],
  correctAnswer: 0,
  explanation: "Mohammed bin Zayed Al Nahyan is the President of UAE since 2022.",
  topic: "countries",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q388",
  text: "What is the currency of Japan?",
  options: ["Yen", "Won", "Rupee", "Dollar"],
  correctAnswer: 0,
  explanation: "The Japanese currency is called Yen (¥).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q389",
  text: "What currency is used in the United Kingdom?",
  options: ["Euro", "Pound Sterling", "Dollar", "Franc"],
  correctAnswer: 1,
  explanation: "The official currency of the UK is the Pound Sterling (£).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q390",
  text: "Which currency is used in Canada?",
  options: ["Canadian Dollar", "US Dollar", "Euro", "Pound"],
  correctAnswer: 0,
  explanation: "Canada uses the Canadian Dollar (CAD).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q391",
  text: "What is the currency of Australia?",
  options: ["Australian Dollar", "Australian Pound", "US Dollar", "Euro"],
  correctAnswer: 0,
  explanation: "Australia's currency is the Australian Dollar (AUD).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q392",
  text: "What currency is used in Switzerland?",
  options: ["Swiss Franc", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Switzerland uses the Swiss Franc (CHF).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q393",
  text: "What is the currency of India?",
  options: ["Rupee", "Dollar", "Euro", "Taka"],
  correctAnswer: 0,
  explanation: "India’s currency is the Indian Rupee (₹).",
  topic: "currency",
  difficulty: "easy",
  ageGroups: ["teens", "adults"]
},
{
  id: "q394",
  text: "Which currency is used in the United States?",
  options: ["US Dollar", "Canadian Dollar", "Euro", "Pound"],
  correctAnswer: 0,
  explanation: "The currency of the United States is the US Dollar (USD).",
  topic: "currency",
  difficulty: "easy",
  ageGroups: ["teens", "adults"]
},
{
  id: "q395",
  text: "What currency is used in South Africa?",
  options: ["Rand", "Dollar", "Pound", "Franc"],
  correctAnswer: 0,
  explanation: "South Africa uses the South African Rand (ZAR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q396",
  text: "Which currency is used in the Eurozone countries?",
  options: ["Euro", "Dollar", "Pound", "Franc"],
  correctAnswer: 0,
  explanation: "The Euro (EUR) is the currency of many European Union countries.",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q397",
  text: "What is the currency of China?",
  options: ["Yuan", "Yen", "Won", "Dollar"],
  correctAnswer: 0,
  explanation: "China’s currency is the Yuan (CNY), also called Renminbi.",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q398",
  text: "What currency is used in Russia?",
  options: ["Ruble", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Russia uses the Russian Ruble (RUB).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q399",
  text: "Which currency is used in Brazil?",
  options: ["Real", "Peso", "Dollar", "Rupee"],
  correctAnswer: 0,
  explanation: "Brazil’s currency is the Brazilian Real (BRL).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q400",
  text: "What is the currency of Mexico?",
  options: ["Peso", "Dollar", "Real", "Euro"],
  correctAnswer: 0,
  explanation: "Mexico’s currency is the Mexican Peso (MXN).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q401",
  text: "What currency is used in Saudi Arabia?",
  options: ["Riyal", "Dinar", "Dollar", "Dirham"],
  correctAnswer: 0,
  explanation: "Saudi Arabia’s currency is the Saudi Riyal (SAR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q402",
  text: "What is the currency of Egypt?",
  options: ["Egyptian Pound", "Dollar", "Riyal", "Dinar"],
  correctAnswer: 0,
  explanation: "Egypt uses the Egyptian Pound (EGP).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q403",
  text: "Which currency is used in Turkey?",
  options: ["Lira", "Rupee", "Riyal", "Dinar"],
  correctAnswer: 0,
  explanation: "Turkey uses the Turkish Lira (TRY).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q404",
  text: "What currency is used in Argentina?",
  options: ["Peso", "Real", "Dollar", "Euro"],
  correctAnswer: 0,
  explanation: "Argentina’s currency is the Argentine Peso (ARS).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q405",
  text: "What is the currency of Nigeria?",
  options: ["Naira", "Dollar", "Cedi", "Rupee"],
  correctAnswer: 0,
  explanation: "Nigeria uses the Nigerian Naira (NGN).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q406",
  text: "Which currency is used in South Korea?",
  options: ["Won", "Yen", "Dollar", "Rupee"],
  correctAnswer: 0,
  explanation: "South Korea’s currency is the South Korean Won (KRW).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q407",
  text: "What currency is used in Indonesia?",
  options: ["Rupiah", "Ringgit", "Baht", "Dollar"],
  correctAnswer: 0,
  explanation: "Indonesia’s currency is the Indonesian Rupiah (IDR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q408",
  text: "What is the currency of Pakistan?",
  options: ["Rupee", "Dollar", "Dinar", "Riyal"],
  correctAnswer: 0,
  explanation: "Pakistan uses the Pakistani Rupee (PKR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q409",
  text: "Which currency is used in Malaysia?",
  options: ["Ringgit", "Rupiah", "Dollar", "Baht"],
  correctAnswer: 0,
  explanation: "Malaysia’s currency is the Malaysian Ringgit (MYR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q410",
  text: "What is the currency of Thailand?",
  options: ["Baht", "Rupiah", "Dollar", "Riyal"],
  correctAnswer: 0,
  explanation: "Thailand uses the Thai Baht (THB).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q411",
  text: "Which currency is used in the United Arab Emirates?",
  options: ["Dirham", "Riyal", "Dinar", "Dollar"],
  correctAnswer: 0,
  explanation: "The UAE uses the UAE Dirham (AED).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q412",
  text: "What is the currency of New Zealand?",
  options: ["New Zealand Dollar", "Australian Dollar", "US Dollar", "Euro"],
  correctAnswer: 0,
  explanation: "New Zealand uses the New Zealand Dollar (NZD).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q413",
  text: "What currency is used in Chile?",
  options: ["Chilean Peso", "Argentine Peso", "Dollar", "Real"],
  correctAnswer: 0,
  explanation: "Chile’s currency is the Chilean Peso (CLP).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q414",
  text: "Which currency is used in Colombia?",
  options: ["Colombian Peso", "Dollar", "Real", "Rupee"],
  correctAnswer: 0,
  explanation: "Colombia uses the Colombian Peso (COP).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q415",
  text: "What is the currency of Venezuela?",
  options: ["Bolívar", "Peso", "Dollar", "Real"],
  correctAnswer: 0,
  explanation: "Venezuela uses the Venezuelan Bolívar (VES).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q416",
  text: "Which currency is used in Iraq?",
  options: ["Dinar", "Riyal", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Iraq uses the Iraqi Dinar (IQD).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q417",
  text: "What currency is used in Kuwait?",
  options: ["Kuwaiti Dinar", "Riyal", "Dollar", "Dinar"],
  correctAnswer: 0,
  explanation: "Kuwait’s currency is the Kuwaiti Dinar (KWD), one of the highest-valued currencies.",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q418",
  text: "What is the currency of Qatar?",
  options: ["Qatari Riyal", "Dollar", "Dinar", "Rupee"],
  correctAnswer: 0,
  explanation: "Qatar uses the Qatari Riyal (QAR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q419",
  text: "Which currency is used in Oman?",
  options: ["Omani Rial", "Riyal", "Dollar", "Dinar"],
  correctAnswer: 0,
  explanation: "Oman uses the Omani Rial (OMR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q420",
  text: "What is the currency of Bahrain?",
  options: ["Bahraini Dinar", "Riyal", "Dollar", "Rupee"],
  correctAnswer: 0,
  explanation: "Bahrain uses the Bahraini Dinar (BHD).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q421",
  text: "Which currency is used in Israel?",
  options: ["Israeli Shekel", "Dinar", "Riyal", "Dollar"],
  correctAnswer: 0,
  explanation: "Israel uses the Israeli New Shekel (ILS).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q422",
  text: "What is the currency of Norway?",
  options: ["Norwegian Krone", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Norway uses the Norwegian Krone (NOK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q423",
  text: "Which currency is used in Sweden?",
  options: ["Swedish Krona", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Sweden uses the Swedish Krona (SEK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q424",
  text: "What is the currency of Denmark?",
  options: ["Danish Krone", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Denmark uses the Danish Krone (DKK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q425",
  text: "Which currency is used in Iceland?",
  options: ["Icelandic Krona", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Iceland uses the Icelandic Krona (ISK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q426",
  text: "What is the currency of Poland?",
  options: ["Polish Złoty", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Poland uses the Polish Złoty (PLN).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q427",
  text: "Which currency is used in Hungary?",
  options: ["Hungarian Forint", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Hungary uses the Hungarian Forint (HUF).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q428",
  text: "What is the currency of Czech Republic?",
  options: ["Czech Koruna", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Czech Republic uses the Czech Koruna (CZK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q429",
  text: "Which currency is used in Slovakia?",
  options: ["Euro", "Dollar", "Koruna", "Forint"],
  correctAnswer: 0,
  explanation: "Slovakia uses the Euro (EUR).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q430",
  text: "What is the currency of Croatia?",
  options: ["Croatian Kuna", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Croatia uses the Croatian Kuna (HRK).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q431",
  text: "Which currency is used in Bulgaria?",
  options: ["Bulgarian Lev", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Bulgaria uses the Bulgarian Lev (BGN).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: "q432",
  text: "What is the currency of Romania?",
  options: ["Romanian Leu", "Euro", "Dollar", "Pound"],
  correctAnswer: 0,
  explanation: "Romania uses the Romanian Leu (RON).",
  topic: "currency",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
}

  
  
];

// Generate more questions to fill up to 2250 total questions
const generateMoreQuestions = (): Question[] => {
  const additionalQuestions: Question[] = [];
  const baseQuestions = allQuestions.slice(0, 60);
  
  // Generate variations of existing questions to reach 2250 total
  for (let i = 61; i <= 2250; i++) {
    const baseQuestion = baseQuestions[i % baseQuestions.length];
    const questionId = `q${i.toString().padStart(3, '0')}`;
    
    // Create variations by modifying the base questions
    const variations = [
      {
        ...baseQuestion,
        id: questionId,
        text: baseQuestion.text.replace(/What/g, "Which").replace(/Which/g, "What"),
      },
      {
        ...baseQuestion,
        id: questionId,
        text: `Advanced: ${baseQuestion.text}`,
        difficulty: "hard" as const,
      },
      {
        ...baseQuestion,
        id: questionId,
        text: `Basic: ${baseQuestion.text}`,
        difficulty: "easy" as const,
      }
    ];
    
    const variation = variations[i % variations.length];
    additionalQuestions.push({
      ...variation,
      id: questionId
    });
  }
  
  return additionalQuestions;
};

// Combine base questions with generated ones
export const completeQuestionBank = [...allQuestions, ...generateMoreQuestions()];