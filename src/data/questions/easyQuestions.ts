import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const easyQuestions: Question[] = [
  // Astronomy Questions
  {
    id: uuidv4(),
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet because it appears red from iron oxide (rust) on its surface.",
    topic: "astronomy",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    explanation: "Tokyo is the capital of Japan and one of the world's most populous cities.",
    topic: "geography",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "How many legs does a spider have?",
    options: ["6", "8", "10", "4"],
    correctAnswer: 1,
    explanation: "Spiders are arachnids and have 8 legs.",
    topic: "biology",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which number comes after 99?",
    options: ["98", "100", "101", "99"],
    correctAnswer: 1,
    explanation: "100 comes after 99 in counting.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What device is used to type letters into a computer?",
    options: ["Monitor", "Mouse", "Keyboard", "Scanner"],
    correctAnswer: 2,
    explanation: "A keyboard is used to input text into a computer.",
    topic: "computers",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger", "Bear"],
    correctAnswer: 1,
    explanation: "The lion is often called the King of the Jungle.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What is the currency of the United States?",
    options: ["Dollar", "Pound", "Euro", "Rupee"],
    correctAnswer: 0,
    explanation: "The US Dollar is the official currency of the United States.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which festival is known as the Festival of Lights in India?",
    options: ["Holi", "Diwali", "Eid", "Christmas"],
    correctAnswer: 1,
    explanation: "Diwali is celebrated as the Festival of Lights across India.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What comes next in the pattern: 2, 4, 6, __?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
    explanation: "This is an even number sequence. 8 comes after 6.",
    topic: "reasoning",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which Indian cricketer is known as the 'Master Blaster'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    correctAnswer: 2,
    explanation: "Sachin Tendulkar is famously called the 'Master Blaster' of Indian cricket.",
    topic: "sports",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
{
    id: uuidv4(),
    text: "What shape has three sides?",
    options: ["Square", "Circle", "Triangle", "Rectangle"],
    correctAnswer: 2,
    explanation: "A triangle is a shape with three sides.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Who invented the electric bulb?",
    options: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Galileo Galilei"],
    correctAnswer: 2,
    explanation: "Thomas Edison is credited with inventing the practical electric light bulb.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "What is the capital of India?",
    options: ["Mumbai", "Chennai", "Kolkata", "New Delhi"],
    correctAnswer: 3,
    explanation: "New Delhi is the capital city of India.",
    topic: "geography",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which animal gives us wool?",
    options: ["Cow", "Sheep", "Goat", "Pig"],
    correctAnswer: 1,
    explanation: "Wool is obtained mainly from sheep.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which color is formed by mixing red and blue?",
    options: ["Green", "Purple", "Orange", "Brown"],
    correctAnswer: 1,
    explanation: "Red and blue make purple when mixed.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "USA", "France", "Germany"],
    correctAnswer: 2,
    explanation: "The Eiffel Tower is a landmark in Paris, France.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What do you call a baby dog?",
    options: ["Kitten", "Calf", "Puppy", "Cub"],
    correctAnswer: 2,
    explanation: "A baby dog is called a puppy.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "How many hours are there in a day?",
    options: ["12", "24", "36", "48"],
    correctAnswer: 1,
    explanation: "There are 24 hours in one day.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which punctuation mark ends a question?",
    options: [".", "!", ",", "?"],
    correctAnswer: 3,
    explanation: "A question mark (?) is used at the end of a question.",
    topic: "english",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Who was the first Prime Minister of India?",
    options: ["Lal Bahadur Shastri", "Indira Gandhi", "Jawaharlal Nehru", "Mahatma Gandhi"],
    correctAnswer: 2,
    explanation: "Jawaharlal Nehru was the first Prime Minister of independent India.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which fruit is known for keeping the doctor away if eaten daily?",
    options: ["Banana", "Apple", "Orange", "Mango"],
    correctAnswer: 1,
    explanation: "An apple a day keeps the doctor away is a common saying.",
    topic: "health",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
    explanation: "5 plus 3 equals 8.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which device is used to click and select items on a computer screen?",
    options: ["Keyboard", "CPU", "Mouse", "Speaker"],
    correctAnswer: 2,
    explanation: "A mouse is used to point and click on-screen items.",
    topic: "computers",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which famous monument in India was built by Shah Jahan?",
    options: ["Qutub Minar", "India Gate", "Charminar", "Taj Mahal"],
    correctAnswer: 3,
    explanation: "Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
    topic: "geography",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which month comes after September?",
    options: ["October", "August", "November", "December"],
    correctAnswer: 0,
    explanation: "October follows September in the calendar.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which cartoon character lives in a pineapple under the sea?",
    options: ["Tom", "Jerry", "SpongeBob", "Mickey"],
    correctAnswer: 2,
    explanation: "SpongeBob SquarePants lives in a pineapple under the sea.",
    topic: "entertainment",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which instrument tells the direction?",
    options: ["Thermometer", "Barometer", "Compass", "Altimeter"],
    correctAnswer: 2,
    explanation: "A compass is used to determine directions (N, S, E, W).",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "What do bees make?",
    options: ["Silk", "Honey", "Wax", "Milk"],
    correctAnswer: 1,
    explanation: "Bees produce honey from nectar collected from flowers.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which is the tallest animal in the world?",
    options: ["Elephant", "Lion", "Giraffe", "Horse"],
    correctAnswer: 2,
    explanation: "The giraffe is the tallest animal due to its long neck.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Saturn"],
    correctAnswer: 2,
    explanation: "Humans live on planet Earth.",
    topic: "astronomy",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which finger is used to wear a ring in most cultures?",
    options: ["Thumb", "Index", "Middle", "Ring finger"],
    correctAnswer: 3,
    explanation: "Rings are typically worn on the ring finger.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Carbon dioxide"],
    correctAnswer: 1,
    explanation: "H2O is the chemical formula for water.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which shape has no corners?",
    options: ["Triangle", "Circle", "Square", "Rectangle"],
    correctAnswer: 1,
    explanation: "A circle has no corners or edges.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What do we call the sound a cat makes?",
    options: ["Bark", "Moo", "Meow", "Roar"],
    correctAnswer: 2,
    explanation: "Cats make a meowing sound.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "There are 7 colors in a rainbow: VIBGYOR.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What is the opposite of 'hot'?",
    options: ["Cold", "Warm", "Cool", "Burning"],
    correctAnswer: 0,
    explanation: "The opposite of hot is cold.",
    topic: "english",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which Indian festival is known for throwing colors?",
    options: ["Diwali", "Raksha Bandhan", "Holi", "Eid"],
    correctAnswer: 2,
    explanation: "Holi is known as the festival of colors in India.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which of these is a programming language?",
    options: ["Java", "Google", "Chrome", "Microsoft"],
    correctAnswer: 0,
    explanation: "Java is a programming language used for software development.",
    topic: "computers",
    difficulty: "easy",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "What is the smallest two-digit number?",
    options: ["10", "11", "12", "9"],
    correctAnswer: 0,
    explanation: "10 is the smallest two-digit number.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which fruit has its seeds on the outside?",
    options: ["Apple", "Banana", "Strawberry", "Grapes"],
    correctAnswer: 2,
    explanation: "Strawberries have seeds on the outside.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which of these is a part of a computer?",
    options: ["Monitor", "Microwave", "Television", "Camera"],
    correctAnswer: 0,
    explanation: "A monitor is an output device of a computer.",
    topic: "computers",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What do plants need to make food?",
    options: ["Sunlight", "Moonlight", "Darkness", "Wind"],
    correctAnswer: 0,
    explanation: "Plants use sunlight to perform photosynthesis.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which color means 'stop' in traffic lights?",
    options: ["Green", "Yellow", "Red", "Blue"],
    correctAnswer: 2,
    explanation: "Red light means stop in traffic rules.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "How many letters are there in the English alphabet?",
    options: ["24", "25", "26", "27"],
    correctAnswer: 2,
    explanation: "There are 26 letters in the English alphabet.",
    topic: "english",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which animal is known for its black and white stripes?",
    options: ["Zebra", "Tiger", "Cheetah", "Horse"],
    correctAnswer: 0,
    explanation: "Zebras have black and white stripes.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Who is the President of India in 2024?",
    options: ["Droupadi Murmu", "Narendra Modi", "Ram Nath Kovind", "Amit Shah"],
    correctAnswer: 0,
    explanation: "Droupadi Murmu is the President of India as of 2024.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which game is played with a bat and ball?",
    options: ["Football", "Tennis", "Cricket", "Chess"],
    correctAnswer: 2,
    explanation: "Cricket is played using a bat and ball.",
    topic: "sports",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Rhino"],
    correctAnswer: 2,
    explanation: "The blue whale is the largest known mammal.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "How many days are there in a leap year?",
    options: ["365", "366", "364", "360"],
    correctAnswer: 1,
    explanation: "A leap year has 366 days.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
    {
    id: uuidv4(),
    text: "What gas do humans breathe in to survive?",
    options: ["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
    correctAnswer: 2,
    explanation: "Humans need oxygen to survive.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "How many sides does a triangle have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "A triangle has three sides.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What does a thermometer measure?",
    options: ["Length", "Speed", "Temperature", "Weight"],
    correctAnswer: 2,
    explanation: "A thermometer measures temperature.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What color is the sky on a clear day?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: 1,
    explanation: "The sky appears blue due to the scattering of sunlight.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What do bees make?",
    options: ["Milk", "Wax", "Honey", "Bread"],
    correctAnswer: 2,
    explanation: "Bees make honey from nectar.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which part of the plant is usually underground?",
    options: ["Leaves", "Stem", "Flowers", "Roots"],
    correctAnswer: 3,
    explanation: "Roots grow underground and absorb nutrients.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
    topic: "geography",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which month has 28 days (or 29 in a leap year)?",
    options: ["January", "February", "March", "April"],
    correctAnswer: 1,
    explanation: "February has 28 days, and 29 in leap years.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    explanation: "New Delhi is the capital of India.",
    topic: "india special",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What does CPU stand for in computers?",
    options: ["Central Power Unit", "Computer Processing Unit", "Central Processing Unit", "Control Panel Utility"],
    correctAnswer: 2,
    explanation: "CPU stands for Central Processing Unit.",
    topic: "computers",
    difficulty: "easy",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which number comes after 99?",
    options: ["100", "101", "99.5", "98"],
    correctAnswer: 0,
    explanation: "100 comes after 99.",
    topic: "math",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What is the main source of energy for the Earth?",
    options: ["Moon", "Stars", "Sun", "Fire"],
    correctAnswer: 2,
    explanation: "The sun provides light and heat energy to Earth.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which bird is known for mimicking human speech?",
    options: ["Pigeon", "Peacock", "Parrot", "Sparrow"],
    correctAnswer: 2,
    explanation: "Parrots can mimic human speech.",
    topic: "animals",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "Spiders have 8 legs.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which sense organ is used to smell?",
    options: ["Eyes", "Nose", "Ears", "Skin"],
    correctAnswer: 1,
    explanation: "The nose helps us to smell.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "What is the currency of the United States?",
    options: ["Euro", "Dollar", "Pound", "Yen"],
    correctAnswer: 1,
    explanation: "The U.S. currency is called the Dollar.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ pumps blood throughout the body?",
    options: ["Lungs", "Brain", "Heart", "Kidney"],
    correctAnswer: 2,
    explanation: "The heart is responsible for pumping blood.",
    topic: "science",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "Which season comes after summer in India?",
    options: ["Winter", "Monsoon", "Spring", "Autumn"],
    correctAnswer: 1,
    explanation: "In India, the monsoon season follows summer.",
    topic: "geography",
    difficulty: "easy",
    ageGroups: ["kids", "teens"]
  },
  {
    id: uuidv4(),
    text: "Which instrument is used to tell time?",
    options: ["Thermometer", "Clock", "Compass", "Scale"],
    correctAnswer: 1,
    explanation: "A clock is used to measure time.",
    topic: "general knowledge",
    difficulty: "easy",
    ageGroups: ["kids"]
  },
  {
    id: uuidv4(),
    text: "How many vowels are there in the English alphabet?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "There are 5 vowels: A, E, I, O, U.",
    topic: "english",
    difficulty: "easy",
    ageGroups: ["kids"]
  },

{
    id: uuidv4(),
    text: "What is the process by which plants make their food called?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    correctAnswer: 1,
    explanation: "Plants use photosynthesis to convert sunlight into food.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the square root of 144?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    explanation: "The square root of 144 is 12.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Who wrote the Indian National Anthem?",
    options: ["Sarojini Naidu", "Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose"],
    correctAnswer: 2,
    explanation: "Rabindranath Tagore wrote the Indian National Anthem, 'Jana Gana Mana'.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which component is considered the 'brain' of the computer?",
    options: ["RAM", "Monitor", "CPU", "Hard Drive"],
    correctAnswer: 2,
    explanation: "The CPU (Central Processing Unit) acts as the brain of the computer.",
    topic: "computers",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "In which organ of the human body would you find the alveoli?",
    options: ["Heart", "Liver", "Lungs", "Kidneys"],
    correctAnswer: 2,
    explanation: "Alveoli are small air sacs found in the lungs.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the past tense of 'fly'?",
    options: ["Flied", "Flown", "Flew", "Flying"],
    correctAnswer: 2,
    explanation: "The past tense of 'fly' is 'flew'.",
    topic: "english",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which Indian leader is known as the 'Iron Man of India'?",
    options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "B. R. Ambedkar", "Mahatma Gandhi"],
    correctAnswer: 1,
    explanation: "Sardar Vallabhbhai Patel is referred to as the 'Iron Man of India'.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which formula represents the area of a triangle?",
    options: ["b × h", "½ × b × h", "πr²", "a² + b² = c²"],
    correctAnswer: 1,
    explanation: "Area of a triangle = ½ × base × height.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which part of the computer stores long-term data?",
    options: ["RAM", "Hard Drive", "CPU", "ROM"],
    correctAnswer: 1,
    explanation: "Hard drives store long-term data in a computer.",
    topic: "computers",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for sodium?",
    options: ["S", "Na", "Sn", "So"],
    correctAnswer: 1,
    explanation: "Na is the symbol for sodium in the periodic table.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is primarily responsible for global warming?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
    explanation: "Carbon dioxide traps heat in the atmosphere, contributing to global warming.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2,
    explanation: "Canberra is the capital of Australia, not Sydney or Melbourne.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematical property does this equation show: 3 × (4 + 5) = (3 × 4) + (3 × 5)?",
    options: ["Commutative", "Distributive", "Associative", "Additive"],
    correctAnswer: 1,
    explanation: "The distributive property distributes multiplication over addition.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Who was the first President of independent India?",
    options: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Sardar Patel"],
    correctAnswer: 2,
    explanation: "Dr. Rajendra Prasad was the first President of India.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which device is used to measure atmospheric pressure?",
    options: ["Thermometer", "Hygrometer", "Barometer", "Anemometer"],
    correctAnswer: 2,
    explanation: "A barometer is used to measure atmospheric pressure.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Choose the correct spelling:",
    options: ["Definately", "Definitely", "Defanitely", "Defenetly"],
    correctAnswer: 1,
    explanation: "'Definitely' is the correct spelling.",
    topic: "english",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which freedom fighter gave the slogan 'Inquilab Zindabad'?",
    options: ["Mahatma Gandhi", "Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai"],
    correctAnswer: 1,
    explanation: "Bhagat Singh popularized the slogan 'Inquilab Zindabad'.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is 25% of 200?",
    options: ["25", "50", "100", "75"],
    correctAnswer: 1,
    explanation: "25% of 200 is 50 (200 × 0.25).",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "What type of software is Microsoft Excel?",
    options: ["Operating System", "Spreadsheet", "Browser", "Database"],
    correctAnswer: 1,
    explanation: "Microsoft Excel is a spreadsheet software.",
    topic: "computers",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which of the following is a renewable energy source?",
    options: ["Coal", "Natural Gas", "Solar", "Petrol"],
    correctAnswer: 2,
    explanation: "Solar energy is renewable, unlike fossil fuels.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },

  {
    id: uuidv4(),
    text: "Which layer of the Earth is made of molten rock?",
    options: ["Core", "Crust", "Mantle", "Tectonic Plate"],
    correctAnswer: 2,
    explanation: "The mantle contains semi-molten rock beneath the crust.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which punctuation mark is used to indicate possession?",
    options: ["Comma", "Apostrophe", "Colon", "Semicolon"],
    correctAnswer: 1,
    explanation: "An apostrophe (') is used to show possession.",
    topic: "english",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which is the longest river in India?",
    options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    correctAnswer: 2,
    explanation: "The Ganga is the longest river in India.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which figure has all sides equal and all angles 90 degrees?",
    options: ["Rectangle", "Rhombus", "Square", "Trapezium"],
    correctAnswer: 2,
    explanation: "A square has all sides equal and right angles.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which programming language is used for web development?",
    options: ["JavaScript", "COBOL", "Fortran", "Swift"],
    correctAnswer: 0,
    explanation: "JavaScript is widely used in front-end web development.",
    topic: "computers",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    correctAnswer: 1,
    explanation: "The cerebellum is responsible for coordination and balance.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which tense is used in the sentence: 'I have finished my homework'?",
    options: ["Past Perfect", "Present Perfect", "Simple Past", "Present Continuous"],
    correctAnswer: 1,
    explanation: "'Have finished' indicates present perfect tense.",
    topic: "english",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which Indian state is known as the 'Land of Five Rivers'?",
    options: ["Rajasthan", "Punjab", "Uttar Pradesh", "Kerala"],
    correctAnswer: 1,
    explanation: "Punjab is called the 'Land of Five Rivers'.",
    topic: "india special",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the average of 5, 10, and 15?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 0,
    explanation: "Average = (5+10+15)/3 = 30/3 = 10.",
    topic: "math",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
    id: uuidv4(),
    text: "Which command is used to copy files in Windows?",
    options: ["CUT", "CTRL+X", "CTRL+C", "DELETE"],
    correctAnswer: 2,
    explanation: "CTRL+C is the shortcut to copy in Windows.",
    topic: "computers",
    difficulty: "medium",
    ageGroups: ["teens"]
  },
  {
  id: uuidv4(),
  text: "Which blood cells help our body fight infections?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  correctAnswer: 1,
  explanation: "White blood cells (WBCs) are responsible for fighting infections in the body.",
  topic: "science",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the value of π (pi) up to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  correctAnswer: 1,
  explanation: "The approximate value of π is 3.14.",
  topic: "math",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Who is the author of the play 'Romeo and Juliet'?",
  options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
  correctAnswer: 2,
  explanation: "William Shakespeare wrote 'Romeo and Juliet'.",
  topic: "english",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Mughal emperor built the Red Fort in Delhi?",
  options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
  correctAnswer: 2,
  explanation: "Shah Jahan built the Red Fort in the 17th century.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which number system uses only 0 and 1?",
  options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
  correctAnswer: 2,
  explanation: "Binary system is used in computing and represents values using 0 and 1.",
  topic: "computers",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which part of the plant conducts photosynthesis?",
  options: ["Stem", "Roots", "Leaves", "Flowers"],
  correctAnswer: 2,
  explanation: "Leaves contain chlorophyll and are the main site for photosynthesis.",
  topic: "science",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Simplify: 5x + 2x - 3x",
  options: ["4x", "3x", "5x", "2x"],
  correctAnswer: 0,
  explanation: "5x + 2x - 3x = 4x",
  topic: "math",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What does the prefix 'auto-' mean?",
  options: ["Self", "Other", "Fast", "New"],
  correctAnswer: 0,
  explanation: "'Auto-' means 'self', as in 'autobiography' or 'automatic'.",
  topic: "english",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which Indian festival celebrates the victory of good over evil with lights?",
  options: ["Holi", "Diwali", "Navratri", "Eid"],
  correctAnswer: 1,
  explanation: "Diwali is the festival of lights and symbolizes the victory of good over evil.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which shortcut key is used to paste text?",
  options: ["CTRL+V", "CTRL+C", "CTRL+P", "CTRL+X"],
  correctAnswer: 0,
  explanation: "CTRL+V is the standard paste command.",
  topic: "computers",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What do you call animals that eat both plants and animals?",
  options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
  correctAnswer: 2,
  explanation: "Omnivores eat both plants and animals.",
  topic: "science",
  difficulty: "medium",
  ageGroups: ["teens", "kids"]
},
{
  id: uuidv4(),
  text: "If a triangle has sides of 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
  options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
  correctAnswer: 3,
  explanation: "It satisfies the Pythagorean theorem (3² + 4² = 5²), so it's a right-angled triangle.",
  topic: "math",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What is the antonym of the word 'ancient'?",
  options: ["Old", "Historical", "Modern", "Classic"],
  correctAnswer: 2,
  explanation: "'Modern' is the opposite of 'ancient'.",
  topic: "english",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which Indian state is famous for the dance form 'Kathakali'?",
  options: ["Kerala", "Punjab", "Odisha", "Maharashtra"],
  correctAnswer: 0,
  explanation: "Kathakali is a classical dance form from Kerala.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which file extension is used for Microsoft Word documents?",
  options: [".xls", ".docx", ".ppt", ".txt"],
  correctAnswer: 1,
  explanation: ".docx is the default file format for MS Word documents.",
  topic: "computers",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What part of speech is the word 'quickly'?",
  options: ["Noun", "Adjective", "Adverb", "Verb"],
  correctAnswer: 2,
  explanation: "'Quickly' is an adverb that describes how something is done.",
  topic: "english",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which Indian leader is known as 'Bapu'?",
  options: ["Nehru", "Gandhi", "Tagore", "Tilak"],
  correctAnswer: 1,
  explanation: "Mahatma Gandhi is affectionately known as 'Bapu'.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the output of 8 × (5 + 3)?",
  options: ["64", "80", "48", "56"],
  correctAnswer: 0,
  explanation: "Using BODMAS: 8 × (5 + 3) = 8 × 8 = 64.",
  topic: "math",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What is the main function of the CPU?",
  options: ["Storing files", "Displaying data", "Processing data", "Printing output"],
  correctAnswer: 2,
  explanation: "The CPU processes data and performs calculations.",
  topic: "computers",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which body organ produces insulin?",
  options: ["Liver", "Pancreas", "Stomach", "Kidney"],
  correctAnswer: 1,
  explanation: "Insulin is produced by the pancreas to control blood sugar levels.",
  topic: "science",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which river is called the 'Ganga of the South'?",
  options: ["Krishna", "Godavari", "Narmada", "Kaveri"],
  correctAnswer: 1,
  explanation: "Godavari is often referred to as the 'Ganga of the South'.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does URL stand for?",
  options: ["Uniform Resource Locator", "Universal Reading Link", "User Reference Link", "Unified Redirect Location"],
  correctAnswer: 0,
  explanation: "URL stands for Uniform Resource Locator, the web address.",
  topic: "computers",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Choose the correctly punctuated sentence:",
  options: [
    "I like apples bananas and grapes.",
    "I like apples, bananas and grapes.",
    "I like, apples, bananas, and grapes.",
    "I like apples, bananas, and grapes."
  ],
  correctAnswer: 3,
  explanation: "The Oxford comma improves clarity: apples, bananas, and grapes.",
  topic: "english",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "Which Indian monument is known as the 'Symbol of Love'?",
  options: ["Qutub Minar", "Charminar", "Taj Mahal", "Red Fort"],
  correctAnswer: 2,
  explanation: "The Taj Mahal is known as the symbol of love, built by Shah Jahan.",
  topic: "india special",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many sides does a hexagon have?",
  options: ["5", "6", "7", "8"],
  correctAnswer: 1,
  explanation: "A hexagon has 6 sides.",
  topic: "math",
  difficulty: "medium",
  ageGroups: ["teens"]
},
{
  id: uuidv4(),
  text: "What is the Heisenberg Uncertainty Principle related to?",
  options: ["Energy and mass", "Position and momentum", "Speed and velocity", "Wave and frequency"],
  correctAnswer: 1,
  explanation: "The Heisenberg Uncertainty Principle states that you cannot simultaneously know the exact position and momentum of a particle.",
  topic: "quantum physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In genetics, what is the term for different forms of a gene?",
  options: ["Genotypes", "Alleles", "Chromosomes", "Nucleotides"],
  correctAnswer: 1,
  explanation: "Alleles are different versions of a gene found at the same locus on homologous chromosomes.",
  topic: "genetics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the integral of 1/x dx?",
  options: ["x", "ln|x| + C", "1/x", "x ln x"],
  correctAnswer: 1,
  explanation: "The integral of 1/x is ln|x| + C.",
  topic: "calculus",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does HTTPS stand for in cybersecurity?",
  options: [
    "HyperText Transmission Protocol Secure",
    "HyperText Transfer Protocol Secure",
    "High-Tech Transfer Protocol Secure",
    "HyperType Transmission Protocol Standard"
  ],
  correctAnswer: 1,
  explanation: "HTTPS stands for HyperText Transfer Protocol Secure, which encrypts data exchanged over the internet.",
  topic: "cybersecurity",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the sum of interior angles of a decagon?",
  options: ["1440°", "1260°", "1080°", "900°"],
  correctAnswer: 0,
  explanation: "A decagon has 10 sides, and the sum of its interior angles is (10-2)×180 = 1440°.",
  topic: "geometry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which amendment of the Indian Constitution introduced GST?",
  options: ["97th", "100th", "101st", "102nd"],
  correctAnswer: 2,
  explanation: "The 101st Constitutional Amendment introduced the Goods and Services Tax (GST).",
  topic: "indian polity",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which hormone is primarily responsible for metabolism regulation?",
  options: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
  correctAnswer: 2,
  explanation: "Thyroxine is produced by the thyroid gland and regulates metabolism.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematical function is the inverse of the exponential function?",
  options: ["Logarithmic", "Trigonometric", "Quadratic", "Linear"],
  correctAnswer: 0,
  explanation: "The logarithmic function is the inverse of the exponential function.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computer architecture, what does ALU stand for?",
  options: ["Arithmetic Logic Unit", "Access Link Utility", "Automated Logic Unit", "Advanced Link Unit"],
  correctAnswer: 0,
  explanation: "ALU stands for Arithmetic Logic Unit, a critical component of the CPU.",
  topic: "computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the literary device where contradictory terms appear together?",
  options: ["Simile", "Oxymoron", "Metaphor", "Irony"],
  correctAnswer: 1,
  explanation: "An oxymoron is a figure of speech where contradictory terms appear in conjunction, like 'deafening silence'.",
  topic: "english",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the molecular formula of glucose?",
  options: ["C6H12O6", "C12H22O11", "CH3COOH", "C2H5OH"],
  correctAnswer: 0,
  explanation: "Glucose is a simple sugar with the molecular formula C6H12O6.",
  topic: "organic chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which trigonometric identity represents cos²θ + sin²θ?",
  options: ["1", "0", "tan θ", "cot θ"],
  correctAnswer: 0,
  explanation: "The identity cos²θ + sin²θ = 1 holds true for all values of θ.",
  topic: "trigonometry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In cybersecurity, what is a firewall primarily used for?",
  options: ["Data storage", "Blocking unauthorized access", "Encrypting data", "Generating passwords"],
  correctAnswer: 1,
  explanation: "A firewall protects networks by blocking unauthorized access while permitting authorized communications.",
  topic: "cybersecurity",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian economist is known as the 'Father of the Green Revolution' in India?",
  options: ["M.S. Swaminathan", "Amartya Sen", "Manmohan Singh", "C. Rangarajan"],
  correctAnswer: 0,
  explanation: "M.S. Swaminathan played a key role in India's Green Revolution which increased food production.",
  topic: "indian economics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the derivative of sin(x)?",
  options: ["cos(x)", "-sin(x)", "-cos(x)", "sin(x)"],
  correctAnswer: 0,
  explanation: "The derivative of sin(x) with respect to x is cos(x).",
  topic: "calculus",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who won the Ballon d'Or in 2023?",
  options: ["Lionel Messi", "Cristiano Ronaldo", "Karim Benzema", "Erling Haaland"],
  correctAnswer: 3,
  explanation: "Erling Haaland won the Ballon d'Or in 2023.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device translates domain names into IP addresses?",
  options: ["Router", "Modem", "DNS Server", "Firewall"],
  correctAnswer: 2,
  explanation: "A DNS Server translates human-readable domain names into machine-readable IP addresses.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian state has the largest coastline?",
  options: ["Gujarat", "Maharashtra", "Tamil Nadu", "Kerala"],
  correctAnswer: 0,
  explanation: "Gujarat has the longest coastline among Indian states.",
  topic: "indian geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the function of mitochondria in a cell?",
  options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
  correctAnswer: 1,
  explanation: "Mitochondria are known as the powerhouse of the cell as they generate energy.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does the acronym 'GDP' stand for?",
  options: ["Gross Domestic Product", "General Domestic Policy", "Gross Departmental Performance", "Government Debt Percentage"],
  correctAnswer: 0,
  explanation: "GDP stands for Gross Domestic Product, the total value of goods and services produced.",
  topic: "economics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which particle is known as the 'God Particle'?",
  options: ["Electron", "Higgs boson", "Photon", "Neutrino"],
  correctAnswer: 1,
  explanation: "The Higgs boson is often called the 'God Particle' because it explains why particles have mass.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which law states that the current through a conductor is directly proportional to the voltage across it?",
  options: ["Newton's First Law", "Ohm's Law", "Faraday's Law", "Kirchhoff's Law"],
  correctAnswer: 1,
  explanation: "Ohm's Law states that current is proportional to voltage, given resistance is constant.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the SI unit of electric capacitance?",
  options: ["Farad", "Henry", "Tesla", "Weber"],
  correctAnswer: 0,
  explanation: "The SI unit of capacitance is the Farad (F).",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organelle is responsible for photosynthesis?",
  options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
  correctAnswer: 1,
  explanation: "Chloroplasts carry out photosynthesis in plant cells.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which treaty ended World War I?",
  options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Utrecht"],
  correctAnswer: 0,
  explanation: "The Treaty of Versailles officially ended World War I in 1919.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of the epic 'Mahabharata'?",
  options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"],
  correctAnswer: 1,
  explanation: "Vyasa is traditionally credited as the author of the Mahabharata.",
  topic: "indian literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computer science, what does 'FIFO' stand for?",
  options: ["First Input First Output", "First In First Out", "Fast Input Fast Output", "First In Fast Output"],
  correctAnswer: 1,
  explanation: "FIFO means First In First Out, a principle used in data structures like queues.",
  topic: "computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the longest river in India?",
  options: ["Ganga", "Yamuna", "Brahmaputra", "Indus"],
  correctAnswer: 0,
  explanation: "The Ganga is the longest river entirely in India.",
  topic: "indian geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which enzyme breaks down proteins in the stomach?",
  options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
  correctAnswer: 2,
  explanation: "Pepsin is the primary enzyme that breaks down proteins in the stomach.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the formula for calculating compound interest?",
  options: ["P(1 + rt)", "P(1 + r/n)^(nt)", "Prt", "P/r"],
  correctAnswer: 1,
  explanation: "Compound interest is calculated as P(1 + r/n)^(nt), where P = principal, r = rate, n = times compounded per year, t = years.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the highest electronegativity?",
  options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
  correctAnswer: 1,
  explanation: "Fluorine has the highest electronegativity of all elements.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of ribosomes in a cell?",
  options: ["Protein synthesis", "Energy production", "DNA replication", "Cell signaling"],
  correctAnswer: 0,
  explanation: "Ribosomes are responsible for synthesizing proteins.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the 2024 Summer Olympics?",
  options: ["France", "Japan", "USA", "China"],
  correctAnswer: 0,
  explanation: "France hosted the 2024 Summer Olympics in Paris.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does 'HTTP' stand for?",
  options: [
    "HyperText Transfer Protocol",
    "Hyperlink Transfer Protocol",
    "HyperText Transmission Program",
    "Hyperlink Text Transfer Program"
  ],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the web.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In Indian history, who was the first Governor-General of independent India?",
  options: ["Jawaharlal Nehru", "C. Rajagopalachari", "Lord Mountbatten", "Rajendra Prasad"],
  correctAnswer: 1,
  explanation: "C. Rajagopalachari was the first and only Indian Governor-General of independent India.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
  options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
  correctAnswer: 1,
  explanation: "Rosencrantz and Guildenstern are characters in Shakespeare's play Hamlet.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of Kazakhstan?",
  options: ["Astana", "Almaty", "Tashkent", "Bishkek"],
  correctAnswer: 0,
  explanation: "Astana, now called Nur-Sultan, is the capital of Kazakhstan.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is primarily used for iOS app development?",
  options: ["Java", "Swift", "Kotlin", "Python"],
  correctAnswer: 1,
  explanation: "Swift is the primary language for iOS app development.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian festival is known as the festival of lights?",
  options: ["Holi", "Diwali", "Eid", "Raksha Bandhan"],
  correctAnswer: 1,
  explanation: "Diwali is the festival of lights celebrated all over India.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for Gold?",
  options: ["Au", "Ag", "Gd", "Ga"],
  correctAnswer: 0,
  explanation: "The chemical symbol for Gold is Au.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is primarily synthesized when human skin is exposed to sunlight?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is synthesized in the skin upon exposure to sunlight.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Bhutan?",
  options: ["Thimphu", "Kathmandu", "Dhaka", "Paro"],
  correctAnswer: 0,
  explanation: "Thimphu is the capital city of Bhutan.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who formulated the laws of planetary motion?",
  options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Copernicus"],
  correctAnswer: 2,
  explanation: "Johannes Kepler formulated the three laws of planetary motion.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian leader gave the slogan 'Do or Die' during the Quit India Movement?",
  options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
  correctAnswer: 1,
  explanation: "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement in 1942.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process by which plants lose water vapor through their leaves?",
  options: ["Transpiration", "Respiration", "Photosynthesis", "Osmosis"],
  correctAnswer: 0,
  explanation: "Transpiration is the loss of water vapor from plants, primarily through stomata in leaves.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the term for a polygon with 12 sides?",
  options: ["Decagon", "Dodecagon", "Hexadecagon", "Octagon"],
  correctAnswer: 1,
  explanation: "A polygon with 12 sides is called a dodecagon.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is known as the 'mother of all languages'?",
  options: ["C", "Assembly", "Fortran", "COBOL"],
  correctAnswer: 2,
  explanation: "Fortran is often called the 'mother of all languages' as it was one of the earliest programming languages.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does the term 'GDP deflator' measure?",
  options: [
    "Inflation in the economy",
    "Total GDP growth",
    "Government spending",
    "Trade deficit"
  ],
  correctAnswer: 0,
  explanation: "The GDP deflator measures the change in prices for all goods and services included in GDP, reflecting inflation.",
  topic: "economics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the 'Missile Man of India'?",
  options: ["Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "Satish Dhawan"],
  correctAnswer: 2,
  explanation: "A.P.J. Abdul Kalam was called the 'Missile Man of India' for his work on missile technology.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which classical dance form originated in Kerala?",
  options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
  correctAnswer: 2,
  explanation: "Kathakali is a classical dance form that originated in Kerala.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Speed of light in vacuum (approx)?",
  options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
  correctAnswer: 0,
  explanation: "Speed of light is approximately 300,000 km/s.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered penicillin?",
  options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
  correctAnswer: 1,
  explanation: "Alexander Fleming discovered penicillin.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Earth", "Jupiter", "Saturn", "Mars"],
  correctAnswer: 2,
  explanation: "Saturn has the highest known number of moons.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
  correctAnswer: 2,
  explanation: "Mitochondria generate energy for cells.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote 'A Brief History of Time'?",
  options: ["Stephen Hawking", "Carl Sagan", "Neil deGrasse Tyson", "Albert Einstein"],
  correctAnswer: 0,
  explanation: "Stephen Hawking authored the book.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
  correctAnswer: 1,
  explanation: "Nitrogen makes up about 78% of the atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is known as the 'City of Lakes' in India?",
  options: ["Udaipur", "Bhopal", "Ahmedabad", "Chennai"],
  correctAnswer: 0,
  explanation: "Udaipur is called City of Lakes.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the CEO of Tesla (as of 2024)?",
  options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
  correctAnswer: 1,
  explanation: "Elon Musk is Tesla's CEO.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country invented paper?",
  options: ["China", "Egypt", "Greece", "India"],
  correctAnswer: 0,
  explanation: "Paper was invented in ancient China.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin deficiency causes scurvy?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  correctAnswer: 2,
  explanation: "Scurvy is caused by lack of Vitamin C.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal has the highest melting point?",
  options: ["Iron", "Tungsten", "Gold", "Copper"],
  correctAnswer: 1,
  explanation: "Tungsten has the highest melting point of metals.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the largest moon of Saturn?",
  options: ["Titan", "Ganymede", "Europa", "Callisto"],
  correctAnswer: 0,
  explanation: "Titan is the largest moon of Saturn.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is primarily used for Android app development?",
  options: ["Swift", "Kotlin", "JavaScript", "Ruby"],
  correctAnswer: 1,
  explanation: "Kotlin is Google's preferred language for Android.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In economics, what does 'inflation' refer to?",
  options: ["Increase in money supply", "Decrease in prices", "Increase in prices", "Decrease in money supply"],
  correctAnswer: 2,
  explanation: "Inflation means rising prices over time.",
  topic: "economics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first female Prime Minister of India?",
  options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sushma Swaraj"],
  correctAnswer: 1,
  explanation: "Indira Gandhi was India's first female PM.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula of ozone?",
  options: ["O2", "O3", "CO2", "SO2"],
  correctAnswer: 1,
  explanation: "Ozone molecule consists of three oxygen atoms (O3).",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is known as the 'Pink City' of India?",
  options: ["Jaipur", "Jodhpur", "Udaipur", "Pushkar"],
  correctAnswer: 0,
  explanation: "Jaipur is called the Pink City due to its pink-colored buildings.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist proposed the theory of relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
  correctAnswer: 1,
  explanation: "Albert Einstein proposed both special and general relativity.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in human body produces insulin?",
  options: ["Liver", "Pancreas", "Kidney", "Gallbladder"],
  correctAnswer: 1,
  explanation: "Insulin is produced by the pancreas.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is used in electric bulbs to prevent filament burning?",
  options: ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"],
  correctAnswer: 1,
  explanation: "Argon gas is inert and prevents filament oxidation.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered the circulation of blood?",
  options: ["William Harvey", "Andreas Vesalius", "Robert Hooke", "Louis Pasteur"],
  correctAnswer: 0,
  explanation: "William Harvey explained blood circulation in the 17th century.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which year did India gain independence?",
  options: ["1947", "1950", "1945", "1930"],
  correctAnswer: 0,
  explanation: "India gained independence on 15 August 1947.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the value of gravitational acceleration on Earth?",
  options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "9.2 m/s²"],
  correctAnswer: 0,
  explanation: "Standard acceleration due to gravity is 9.8 m/s².",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument is used to measure atmospheric pressure?",
  options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "A barometer measures atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which software is used for version control in software development?",
  options: ["Git", "Docker", "Jenkins", "Kubernetes"],
  correctAnswer: 0,
  explanation: "Git is a distributed version control system.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first President of India?",
  options: ["Rajendra Prasad", "V.V. Giri", "Zakir Hussain", "S. Radhakrishnan"],
  correctAnswer: 0,
  explanation: "Dr. Rajendra Prasad was the first President.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which river is known as 'Sorrow of Bihar'?",
  options: ["Kosi", "Ganga", "Yamuna", "Brahmaputra"],
  correctAnswer: 0,
  explanation: "Kosi River is called so due to frequent flooding.",
  topic: "indian geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  correctAnswer: 0,
  explanation: "Bell invented the telephone in 1876.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is primarily spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "English"],
  correctAnswer: 1,
  explanation: "Portuguese is Brazil's official language.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of the play 'Waiting for Godot'?",
  options: ["Samuel Beckett", "Arthur Miller", "T.S. Eliot", "Eugene O'Neill"],
  correctAnswer: 0,
  explanation: "'Waiting for Godot' was written by Samuel Beckett.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level?",
  options: ["100°C", "90°C", "110°C", "95°C"],
  correctAnswer: 0,
  explanation: "Water boils at 100°C at 1 atm pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian state is famous for the classical dance 'Manipuri'?",
  options: ["Assam", "Manipur", "Orissa", "Kerala"],
  correctAnswer: 1,
  explanation: "Manipuri dance originated in Manipur.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process of cell division called in somatic cells?",
  options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
  correctAnswer: 0,
  explanation: "Mitosis is cell division in somatic cells.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Fahrenheit?",
  options: ["32°F", "0°F", "100°F", "212°F"],
  correctAnswer: 0,
  explanation: "Water freezes at 32°F.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is known as the financial capital of India?",
  options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
  correctAnswer: 1,
  explanation: "Mumbai is the financial capital of India.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device converts analog signals to digital signals?",
  options: ["ADC (Analog to Digital Converter)", "DAC", "Modem", "Router"],
  correctAnswer: 0,
  explanation: "ADC converts analog signals to digital.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest gland in the human body?",
  options: ["Pancreas", "Liver", "Thyroid", "Adrenal"],
  correctAnswer: 1,
  explanation: "Liver is the largest gland.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the first modern Olympic Games?",
  options: ["Greece", "France", "USA", "England"],
  correctAnswer: 0,
  explanation: "First modern Olympics held in Athens, Greece in 1896.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered the laws of motion?",
  options: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
  correctAnswer: 2,
  explanation: "Newton formulated laws of motion.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the hardest natural substance on Earth?",
  options: ["Diamond", "Graphite", "Quartz", "Topaz"],
  correctAnswer: 0,
  explanation: "Diamond is the hardest natural material.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is liquid at room temperature?",
  options: ["Mercury", "Lead", "Iron", "Gold"],
  correctAnswer: 0,
  explanation: "Mercury remains liquid at room temperature.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the Father of Computer Science?",
  options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
  correctAnswer: 0,
  explanation: "Alan Turing is considered the father of CS.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country has the highest population in the world?",
  options: ["India", "USA", "China", "Russia"],
  correctAnswer: 2,
  explanation: "China has the highest population.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas responsible for global warming?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
  correctAnswer: 1,
  explanation: "Carbon dioxide is the primary greenhouse gas.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Saturn"],
  correctAnswer: 0,
  explanation: "Mars is called the Red Planet due to iron oxide.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who composed the classical piece 'Four Seasons'?",
  options: ["Mozart", "Vivaldi", "Beethoven", "Bach"],
  correctAnswer: 1,
  explanation: "Antonio Vivaldi composed 'Four Seasons'.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main component of natural gas?",
  options: ["Methane", "Ethane", "Propane", "Butane"],
  correctAnswer: 0,
  explanation: "Methane is the major component of natural gas.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian freedom fighter was also known as 'Netaji'?",
  options: ["Bhagat Singh", "Subhas Chandra Bose", "Bal Gangadhar Tilak", "Jawaharlal Nehru"],
  correctAnswer: 1,
  explanation: "Subhas Chandra Bose was called Netaji.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has a prominent ring system?",
  options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  correctAnswer: 1,
  explanation: "Saturn is famous for its rings.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the study of fungi called?",
  options: ["Botany", "Mycology", "Zoology", "Microbiology"],
  correctAnswer: 1,
  explanation: "Mycology is the study of fungi.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the World Wide Web?",
  options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
  correctAnswer: 0,
  explanation: "Tim Berners-Lee invented the WWW in 1989.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the formula for calculating force?",
  options: ["Mass × Velocity", "Mass × Acceleration", "Velocity × Acceleration", "Mass ÷ Acceleration"],
  correctAnswer: 1,
  explanation: "Force = Mass × Acceleration (Newton's Second Law).",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian state is known as the 'Land of Five Rivers'?",
  options: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
  correctAnswer: 0,
  explanation: "Punjab is called 'Land of Five Rivers'.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  correctAnswer: 2,
  explanation: "2 is the smallest and the only even prime number.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet in our solar system is known for its prominent ring system?",
  options: ["Mars", "Jupiter", "Saturn", "Uranus"],
  correctAnswer: 2,
  explanation: "Saturn is famous for its extensive and bright ring system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
  correctAnswer: 2,
  explanation: "Mitochondria generate energy for the cell.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computer science, what does 'HTTP' stand for?",
  options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transfer Program", "HyperTool Transfer Protocol"],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol, used in web communications.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the epic poem 'The Odyssey'?",
  options: ["Homer", "Virgil", "Dante", "Shakespeare"],
  correctAnswer: 0,
  explanation: "'The Odyssey' was composed by the ancient Greek poet Homer.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in Earth's atmosphere?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
  correctAnswer: 2,
  explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Au", "Ag", "Gd", "Go"],
  correctAnswer: 0,
  explanation: "The chemical symbol for gold is Au.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian state is known as the 'Land of Five Rivers'?",
  options: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
  correctAnswer: 0,
  explanation: "Punjab is called the 'Land of Five Rivers'.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the atomic number 1?",
  options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
  correctAnswer: 0,
  explanation: "Hydrogen has atomic number 1.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body is responsible for detoxification?",
  options: ["Kidney", "Liver", "Lungs", "Heart"],
  correctAnswer: 1,
  explanation: "The liver detoxifies chemicals and metabolizes drugs.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "English", "French"],
  correctAnswer: 1,
  explanation: "Portuguese is the official language of Brazil.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who proposed the theory of general relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Albert Einstein proposed the theory of general relativity.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest producer of coffee in the world?",
  options: ["Vietnam", "Colombia", "Brazil", "Ethiopia"],
  correctAnswer: 2,
  explanation: "Brazil is the world's largest coffee producer.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In economics, what does GDP stand for?",
  options: ["Gross Domestic Product", "General Domestic Product", "Gross Domestic Price", "General Demand Product"],
  correctAnswer: 0,
  explanation: "GDP stands for Gross Domestic Product.",
  topic: "economics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level in Celsius?",
  options: ["90°C", "100°C", "110°C", "120°C"],
  correctAnswer: 1,
  explanation: "Water boils at 100°C at sea level.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is known as the backbone of web development?",
  options: ["Python", "JavaScript", "Java", "C++"],
  correctAnswer: 1,
  explanation: "JavaScript is widely used for client-side web development.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian festival is known as the 'Festival of Lights'?",
  options: ["Holi", "Diwali", "Navratri", "Eid"],
  correctAnswer: 1,
  explanation: "Diwali is called the Festival of Lights.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first President of India?",
  options: ["Dr. Rajendra Prasad", "Sardar Patel", "Jawaharlal Nehru", "Dr. Abdul Kalam"],
  correctAnswer: 0,
  explanation: "Dr. Rajendra Prasad was the first President of India.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the sun?",
  options: ["Venus", "Mercury", "Earth", "Mars"],
  correctAnswer: 1,
  explanation: "Mercury is the closest planet to the sun.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas responsible for global warming?",
  options: ["Carbon Dioxide", "Methane", "Oxygen", "Nitrogen"],
  correctAnswer: 0,
  explanation: "Carbon dioxide is the main greenhouse gas causing global warming.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the hardest natural substance on Earth?",
  options: ["Diamond", "Gold", "Quartz", "Graphite"],
  correctAnswer: 0,
  explanation: "Diamond is the hardest known natural material.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country invented the paper?",
  options: ["China", "Egypt", "Greece", "India"],
  correctAnswer: 0,
  explanation: "Paper was invented in ancient China.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who developed the polio vaccine?",
  options: ["Jonas Salk", "Albert Sabin", "Louis Pasteur", "Edward Jenner"],
  correctAnswer: 0,
  explanation: "Jonas Salk developed the first effective polio vaccine.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument measures earthquakes?",
  options: ["Barometer", "Seismograph", "Thermometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "Seismograph records the motion of the ground during earthquakes.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does DNA stand for?",
  options: ["Deoxyribonucleic Acid", "Deoxyribogenetic Acid", "Dioxy Nucleic Acid", "Deoxyribonuclear Acid"],
  correctAnswer: 0,
  explanation: "DNA stands for Deoxyribonucleic Acid.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is the most spoken worldwide?",
  options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
  correctAnswer: 1,
  explanation: "Mandarin Chinese has the highest number of native speakers.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the speed of light?",
  options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "100,000 km/s"],
  correctAnswer: 0,
  explanation: "The speed of light in vacuum is approximately 300,000 km/s.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of 'Harry Potter' series?",
  options: ["J.K. Rowling", "Stephen King", "Agatha Christie", "George R.R. Martin"],
  correctAnswer: 0,
  explanation: "J.K. Rowling wrote the Harry Potter series.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of France?",
  options: ["Berlin", "Paris", "Rome", "Madrid"],
  correctAnswer: 1,
  explanation: "Paris is the capital city of France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is known as ascorbic acid?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctAnswer: 2,
  explanation: "Vitamin C is also called ascorbic acid.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is liquid at room temperature?",
  options: ["Mercury", "Lead", "Gold", "Silver"],
  correctAnswer: 0,
  explanation: "Mercury is the only metal that is liquid at room temperature.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is home to the Great Barrier Reef?",
  options: ["Australia", "USA", "India", "South Africa"],
  correctAnswer: 0,
  explanation: "The Great Barrier Reef is off the coast of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the primary source of energy for Earth?",
  options: ["The Moon", "The Sun", "Volcanoes", "Ocean Tides"],
  correctAnswer: 1,
  explanation: "The Sun is the main energy source for Earth.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do plants primarily use for photosynthesis?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Plants take in carbon dioxide for photosynthesis.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first man to walk on the moon?",
  options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
  correctAnswer: 2,
  explanation: "Neil Armstrong was the first person to walk on the moon.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula of water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
  correctAnswer: 0,
  explanation: "Water's chemical formula is H2O, consisting of two hydrogen atoms and one oxygen atom.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is known as the 'City of Canals'?",
  options: ["Venice", "Amsterdam", "Bangkok", "Bruges"],
  correctAnswer: 0,
  explanation: "Venice is famous for its canals and waterways.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist is known for the laws of motion?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Isaac Newton formulated the three laws of motion.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ is primarily responsible for pumping blood in the human body?",
  options: ["Brain", "Lungs", "Heart", "Kidneys"],
  correctAnswer: 2,
  explanation: "The heart pumps blood throughout the body.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest desert in the world?",
  options: ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"],
  correctAnswer: 2,
  explanation: "The Antarctic Desert is the largest desert by area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which year did India gain independence?",
  options: ["1947", "1950", "1935", "1920"],
  correctAnswer: 0,
  explanation: "India gained independence from British rule in 1947.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile River is the longest river in the world.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does CPU stand for in computer terminology?",
  options: ["Central Processing Unit", "Computer Personal Unit", "Central Programming Unit", "Control Processing Unit"],
  correctAnswer: 0,
  explanation: "CPU stands for Central Processing Unit, the brain of the computer.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent is known as the 'Dark Continent'?",
  options: ["Asia", "Africa", "Europe", "Australia"],
  correctAnswer: 1,
  explanation: "Africa was historically called the Dark Continent.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  correctAnswer: 0,
  explanation: "Alexander Graham Bell is credited with inventing the telephone.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which blood type is known as the universal donor?",
  options: ["A", "B", "AB", "O Negative"],
  correctAnswer: 3,
  explanation: "O Negative blood can be given to any blood type.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which organelle does photosynthesis take place?",
  options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
  correctAnswer: 1,
  explanation: "Chloroplasts are responsible for photosynthesis in plant cells.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Celsius?",
  options: ["0°C", "-32°C", "100°C", "32°C"],
  correctAnswer: 0,
  explanation: "Water freezes at 0 degrees Celsius.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest planet in our solar system?",
  options: ["Earth", "Jupiter", "Saturn", "Neptune"],
  correctAnswer: 1,
  explanation: "Jupiter is the largest planet in the solar system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the 2016 Summer Olympics?",
  options: ["China", "Brazil", "UK", "Russia"],
  correctAnswer: 1,
  explanation: "The 2016 Summer Olympics were held in Rio de Janeiro, Brazil.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the SI unit of force?",
  options: ["Newton", "Joule", "Pascal", "Watt"],
  correctAnswer: 0,
  explanation: "Force is measured in Newtons.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
  options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
  correctAnswer: 1,
  explanation: "Rosencrantz and Guildenstern appear in Hamlet.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first woman to win a Nobel Prize?",
  options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Barbara McClintock"],
  correctAnswer: 0,
  explanation: "Marie Curie was the first woman to win a Nobel Prize.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do humans breathe in to survive?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 0,
  explanation: "Humans breathe in oxygen to survive.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of Japan?",
  options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  correctAnswer: 0,
  explanation: "Tokyo is the capital city of Japan.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent has the largest land area?",
  options: ["Asia", "Africa", "North America", "Europe"],
  correctAnswer: 0,
  explanation: "Asia is the largest continent by land area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which software is used for version control?",
  options: ["Git", "Photoshop", "Microsoft Word", "Excel"],
  correctAnswer: 0,
  explanation: "Git is a version control system widely used in software development.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the fastest land animal?",
  options: ["Lion", "Tiger", "Cheetah", "Leopard"],
  correctAnswer: 2,
  explanation: "The cheetah is the fastest land animal.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the primary language spoken in Canada?",
  options: ["English", "French", "Both English and French", "Spanish"],
  correctAnswer: 2,
  explanation: "Canada is officially bilingual, with both English and French as official languages.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the Mona Lisa?",
  options: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Pablo Picasso"],
  correctAnswer: 0,
  explanation: "Leonardo da Vinci painted the Mona Lisa.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Mars", "Venus", "Jupiter", "Saturn"],
  correctAnswer: 0,
  explanation: "Mars is often called the Red Planet due to its reddish appearance.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of white blood cells?",
  options: ["Carry oxygen", "Fight infections", "Clot blood", "Provide energy"],
  correctAnswer: 1,
  explanation: "White blood cells help fight infections.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is famous for the Eiffel Tower?",
  options: ["France", "Italy", "Spain", "Germany"],
  correctAnswer: 0,
  explanation: "The Eiffel Tower is located in Paris, France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is used to make electrical wires?",
  options: ["Copper", "Iron", "Aluminum", "Lead"],
  correctAnswer: 0,
  explanation: "Copper is widely used due to its excellent electrical conductivity.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the square root of 144?",
  options: ["10", "11", "12", "13"],
  correctAnswer: 2,
  explanation: "12 × 12 = 144, so the square root of 144 is 12.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first Prime Minister of India?",
  options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Subhash Chandra Bose"],
  correctAnswer: 0,
  explanation: "Jawaharlal Nehru was the first Prime Minister of independent India.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  correctAnswer: 2,
  explanation: "The Pacific Ocean is the largest ocean.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the study of living organisms called?",
  options: ["Physics", "Chemistry", "Biology", "Geology"],
  correctAnswer: 2,
  explanation: "Biology is the study of living organisms.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument is used to measure atmospheric pressure?",
  options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "Barometers measure atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Jupiter", "Saturn", "Mars", "Earth"],
  correctAnswer: 1,
  explanation: "Saturn currently has the highest known number of moons.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does HTML stand for?",
  options: ["HyperText Markup Language", "Hyperlink Markup Language", "HyperText Markdown Language", "Hyperlink Text Markup Language"],
  correctAnswer: 0,
  explanation: "HTML stands for HyperText Markup Language, used for web pages.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest country in the world?",
  options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
  correctAnswer: 1,
  explanation: "Vatican City is the smallest country by area and population.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known for its Great Red Spot?",
  options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  correctAnswer: 0,
  explanation: "Jupiter's Great Red Spot is a giant storm.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote 'Pride and Prejudice'?",
  options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Virginia Woolf"],
  correctAnswer: 0,
  explanation: "'Pride and Prejudice' was written by Jane Austen.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process by which plants lose water vapor called?",
  options: ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"],
  correctAnswer: 2,
  explanation: "Transpiration is the loss of water vapor through plants' leaves.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the chemical symbol 'Fe'?",
  options: ["Fluorine", "Iron", "Francium", "Fermium"],
  correctAnswer: 1,
  explanation: "Fe is the chemical symbol for Iron.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first person to propose the heliocentric model?",
  options: ["Copernicus", "Galileo", "Kepler", "Newton"],
  correctAnswer: 0,
  explanation: "Nicolaus Copernicus proposed the heliocentric model where the Sun is at the center.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas responsible for the greenhouse effect?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Carbon dioxide traps heat in the atmosphere causing the greenhouse effect.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the Land of the Rising Sun?",
  options: ["China", "Japan", "South Korea", "Thailand"],
  correctAnswer: 1,
  explanation: "Japan is called the Land of the Rising Sun.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is a noble gas?",
  options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Argon is one of the noble gases.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital city of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ produces insulin in the human body?",
  options: ["Liver", "Pancreas", "Kidneys", "Spleen"],
  correctAnswer: 1,
  explanation: "The pancreas produces insulin.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
  correctAnswer: 2,
  explanation: "Mitochondria produce energy for the cell.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which physicist developed the theory of relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
  correctAnswer: 1,
  explanation: "Albert Einstein developed the theory of relativity.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does the acronym ‘NASA’ stand for?",
  options: ["National Aeronautics and Space Administration", "National Aerospace and Space Agency", "North American Space Association", "National Air and Space Agency"],
  correctAnswer: 0,
  explanation: "NASA stands for National Aeronautics and Space Administration.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country has the largest population in the world?",
  options: ["India", "China", "USA", "Indonesia"],
  correctAnswer: 1,
  explanation: "China has the largest population in the world.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of the Harry Potter series?",
  options: ["J.K. Rowling", "Stephen King", "J.R.R. Tolkien", "C.S. Lewis"],
  correctAnswer: 0,
  explanation: "J.K. Rowling wrote the Harry Potter series.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the currency of the United Kingdom?",
  options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
  correctAnswer: 2,
  explanation: "The currency of the UK is Pound Sterling.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist discovered penicillin?",
  options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
  correctAnswer: 1,
  explanation: "Alexander Fleming discovered penicillin.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in Earth's atmosphere?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Nitrogen makes up about 78% of the Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language has the most native speakers worldwide?",
  options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
  correctAnswer: 2,
  explanation: "Mandarin Chinese has the most native speakers.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process of cell division in somatic cells called?",
  options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
  correctAnswer: 0,
  explanation: "Mitosis is the division of somatic cells.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest producer of coffee?",
  options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
  correctAnswer: 1,
  explanation: "Brazil is the largest producer of coffee.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of the roots of a plant?",
  options: ["Photosynthesis", "Absorption of water and nutrients", "Reproduction", "Support for flowers"],
  correctAnswer: 1,
  explanation: "Roots absorb water and nutrients from the soil.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist proposed the laws of planetary motion?",
  options: ["Kepler", "Newton", "Galileo", "Copernicus"],
  correctAnswer: 0,
  explanation: "Johannes Kepler formulated the laws of planetary motion.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the epic poem 'The Iliad'?",
  options: ["Homer", "Virgil", "Dante", "Shakespeare"],
  correctAnswer: 0,
  explanation: "Homer is credited with composing The Iliad.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is primarily obtained from sunlight?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is synthesized in the skin upon exposure to sunlight.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the sun?",
  options: ["Mercury", "Venus", "Earth", "Mars"],
  correctAnswer: 0,
  explanation: "Mercury is the closest planet to the sun.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level in Celsius?",
  options: ["100°C", "90°C", "80°C", "110°C"],
  correctAnswer: 0,
  explanation: "Water boils at 100 degrees Celsius at sea level.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country invented paper?",
  options: ["China", "Egypt", "Greece", "India"],
  correctAnswer: 0,
  explanation: "Paper was invented in China around 105 AD.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is the capital of Canada?",
  options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
  correctAnswer: 2,
  explanation: "Ottawa is the capital of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Au", "Ag", "Fe", "Pb"],
  correctAnswer: 0,
  explanation: "The chemical symbol for gold is Au.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the Father of Computers?",
  options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
  correctAnswer: 1,
  explanation: "Charles Babbage is considered the Father of Computers.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the FIFA World Cup in 2018?",
  options: ["Brazil", "Russia", "Germany", "France"],
  correctAnswer: 1,
  explanation: "Russia hosted the 2018 FIFA World Cup.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist developed the theory of evolution by natural selection?",
  options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alexander Fleming"],
  correctAnswer: 1,
  explanation: "Charles Darwin proposed the theory of evolution by natural selection.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the unit of electrical resistance?",
  options: ["Ohm", "Volt", "Ampere", "Watt"],
  correctAnswer: 0,
  explanation: "Electrical resistance is measured in Ohms.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known for the Taj Mahal?",
  options: ["India", "Pakistan", "Bangladesh", "Nepal"],
  correctAnswer: 0,
  explanation: "The Taj Mahal is located in India.",
  topic: "indian history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Milton"],
  correctAnswer: 0,
  explanation: "William Shakespeare authored 'Romeo and Juliet'.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known for its rings?",
  options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  correctAnswer: 0,
  explanation: "Saturn is famous for its prominent ring system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the formula for calculating speed?",
  options: ["Distance / Time", "Time / Distance", "Mass / Volume", "Force / Area"],
  correctAnswer: 0,
  explanation: "Speed is calculated as distance divided by time.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first President of the United States?",
  options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
  correctAnswer: 1,
  explanation: "George Washington was the first President of the U.S.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument measures temperature?",
  options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
  correctAnswer: 1,
  explanation: "A thermometer measures temperature.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the hardest natural substance on Earth?",
  options: ["Gold", "Iron", "Diamond", "Quartz"],
  correctAnswer: 2,
  explanation: "Diamond is the hardest natural substance.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the origin of the Olympic Games?",
  options: ["Italy", "Greece", "Egypt", "China"],
  correctAnswer: 1,
  explanation: "The Olympic Games originated in ancient Greece.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which blood type is known as the universal donor?",
  options: ["A", "B", "AB", "O"],
  correctAnswer: 3,
  explanation: "Blood type O negative is considered the universal donor.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula for table salt?",
  options: ["NaCl", "KCl", "Na2SO4", "CaCO3"],
  correctAnswer: 0,
  explanation: "Table salt is sodium chloride, NaCl.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Venus", "Mars", "Jupiter", "Mercury"],
  correctAnswer: 1,
  explanation: "Mars is often called the Red Planet due to its reddish appearance.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  correctAnswer: 0,
  explanation: "Alexander Graham Bell is credited with inventing the telephone.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the atomic number 1?",
  options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
  correctAnswer: 2,
  explanation: "Hydrogen has the atomic number 1.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  correctAnswer: 2,
  explanation: "Paris is the capital of France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body is responsible for filtering blood?",
  options: ["Liver", "Kidneys", "Heart", "Lungs"],
  correctAnswer: 1,
  explanation: "Kidneys filter waste from the blood.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  correctAnswer: 2,
  explanation: "2 is the smallest and only even prime number.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the Mona Lisa?",
  options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
  correctAnswer: 2,
  explanation: "Leonardo da Vinci painted the Mona Lisa.",
  topic: "art",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do plants absorb from the atmosphere for photosynthesis?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Plants absorb carbon dioxide during photosynthesis.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Celsius?",
  options: ["0°C", "32°C", "100°C", "-10°C"],
  correctAnswer: 0,
  explanation: "Water freezes at 0 degrees Celsius.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is famous for the Great Wall?",
  options: ["Japan", "China", "South Korea", "India"],
  correctAnswer: 1,
  explanation: "The Great Wall is located in China.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote 'Pride and Prejudice'?",
  options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Mary Shelley"],
  correctAnswer: 1,
  explanation: "Jane Austen wrote 'Pride and Prejudice'.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  correctAnswer: 3,
  explanation: "The Pacific Ocean is the largest ocean.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the plant conducts photosynthesis?",
  options: ["Roots", "Stem", "Leaves", "Flowers"],
  correctAnswer: 2,
  explanation: "Leaves conduct photosynthesis.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for iron?",
  options: ["Fe", "Ir", "In", "I"],
  correctAnswer: 0,
  explanation: "The symbol for iron is Fe.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first woman to win a Nobel Prize?",
  options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
  correctAnswer: 0,
  explanation: "Marie Curie was the first woman Nobel laureate.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is the largest in our solar system?",
  options: ["Saturn", "Jupiter", "Neptune", "Earth"],
  correctAnswer: 1,
  explanation: "Jupiter is the largest planet.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is famous for the Eiffel Tower?",
  options: ["Italy", "France", "Germany", "Spain"],
  correctAnswer: 1,
  explanation: "The Eiffel Tower is in France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main ingredient in traditional Japanese miso soup?",
  options: ["Soybeans", "Rice", "Fish", "Seaweed"],
  correctAnswer: 0,
  explanation: "Miso paste, made from fermented soybeans, is the main ingredient.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile River is the longest river.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the 'Land of the Midnight Sun'?",
  options: ["Iceland", "Norway", "Finland", "Sweden"],
  correctAnswer: 1,
  explanation: "Norway is called the Land of the Midnight Sun due to its polar days.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the study of earthquakes called?",
  options: ["Meteorology", "Seismology", "Volcanology", "Hydrology"],
  correctAnswer: 1,
  explanation: "Seismology studies earthquakes.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the process by which plants lose water vapor through leaves?",
  options: ["Photosynthesis", "Transpiration", "Respiration", "Osmosis"],
  correctAnswer: 1,
  explanation: "Transpiration is the loss of water vapor from plants.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who developed the laws of motion?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Isaac Newton formulated the laws of motion.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is liquid at room temperature?",
  options: ["Mercury", "Gold", "Silver", "Copper"],
  correctAnswer: 0,
  explanation: "Mercury is liquid at room temperature.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the tallest mountain in the world?",
  options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
  correctAnswer: 1,
  explanation: "Mount Everest is the tallest mountain above sea level.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist is known for the discovery of radioactivity?",
  options: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
  correctAnswer: 0,
  explanation: "Marie Curie discovered radioactivity.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of red blood cells?",
  options: ["Fight infections", "Carry oxygen", "Clot blood", "Produce hormones"],
  correctAnswer: 1,
  explanation: "Red blood cells transport oxygen to tissues.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does DNA stand for?",
  options: ["Deoxyribonucleic Acid", "Dicarboxylic Acid", "Deoxyribonitric Acid", "Dinitrogen Acid"],
  correctAnswer: 0,
  explanation: "DNA stands for Deoxyribonucleic Acid.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device is used to measure atmospheric pressure?",
  options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
  correctAnswer: 1,
  explanation: "Barometers measure atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for potassium?",
  options: ["P", "Pt", "K", "Po"],
  correctAnswer: 2,
  explanation: "Potassium's chemical symbol is K.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest by land area?",
  options: ["Canada", "USA", "Russia", "China"],
  correctAnswer: 2,
  explanation: "Russia is the largest country by land area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Macbeth'?",
  options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Milton"],
  correctAnswer: 0,
  explanation: "William Shakespeare wrote 'Macbeth'.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which blood vessels carry blood away from the heart?",
  options: ["Veins", "Arteries", "Capillaries", "Venules"],
  correctAnswer: 1,
  explanation: "Arteries carry blood away from the heart.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is most abundant in the Earth's crust?",
  options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
  correctAnswer: 0,
  explanation: "Oxygen is the most abundant element in the Earth's crust.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the SI unit of force?",
  options: ["Newton", "Joule", "Watt", "Pascal"],
  correctAnswer: 0,
  explanation: "The unit of force is the Newton.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas humans exhale?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Humans exhale carbon dioxide.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is primarily spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "English"],
  correctAnswer: 1,
  explanation: "Portuguese is the official and primary language of Brazil.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  correctAnswer: 1,
  explanation: "Mitochondria produce energy for the cell.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the father of modern physics?",
  options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
  correctAnswer: 2,
  explanation: "Albert Einstein is often called the father of modern physics.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the formula for calculating the area of a circle?",
  options: ["πr²", "2πr", "πd", "r²"],
  correctAnswer: 0,
  explanation: "The area of a circle is π times the radius squared.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is essential for human respiration?",
  options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
  correctAnswer: 1,
  explanation: "Oxygen is required for human respiration.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the 2016 Summer Olympics?",
  options: ["China", "Brazil", "UK", "Russia"],
  correctAnswer: 1,
  explanation: "The 2016 Summer Olympics were held in Rio de Janeiro, Brazil.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Go", "Ag", "Au", "Gd"],
  correctAnswer: 2,
  explanation: "Gold's chemical symbol is Au.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the longest bone in the human body?",
  options: ["Femur", "Tibia", "Fibula", "Humerus"],
  correctAnswer: 0,
  explanation: "The femur is the longest bone.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the currency of Japan?",
  options: ["Yen", "Won", "Dollar", "Rupee"],
  correctAnswer: 0,
  explanation: "Japanese currency is Yen.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist proposed the theory of relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],
  correctAnswer: 1,
  explanation: "Albert Einstein proposed the theory of relativity.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital city of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is primarily obtained from sunlight?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is synthesized in the skin through sunlight exposure.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent is the Sahara Desert located on?",
  options: ["Asia", "Africa", "Australia", "South America"],
  correctAnswer: 1,
  explanation: "The Sahara Desert is in Africa.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the largest internal organ in the human body?",
  options: ["Kidney", "Liver", "Lung", "Heart"],
  correctAnswer: 1,
  explanation: "The liver is the largest internal organ.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered penicillin?",
  options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Gregor Mendel"],
  correctAnswer: 0,
  explanation: "Alexander Fleming discovered penicillin.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the SI unit of electric current?",
  options: ["Volt", "Ohm", "Ampere", "Watt"],
  correctAnswer: 2,
  explanation: "The unit of electric current is Ampere.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest planet in our solar system?",
  options: ["Mars", "Venus", "Mercury", "Pluto"],
  correctAnswer: 2,
  explanation: "Mercury is the smallest recognized planet.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process by which water changes from liquid to gas?",
  options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
  correctAnswer: 1,
  explanation: "Evaporation is the process of liquid water turning into gas.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest producer of coffee?",
  options: ["Vietnam", "Colombia", "Ethiopia", "Brazil"],
  correctAnswer: 3,
  explanation: "Brazil is the largest coffee producer.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does HTTP stand for in web technology?",
  options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyperlink Transfer Protocol", "HyperText Transmission Protocol"],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol.",
  topic: "technology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the hardest natural substance on Earth?",
  options: ["Gold", "Diamond", "Iron", "Quartz"],
  correctAnswer: 1,
  explanation: "Diamond is the hardest natural substance.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Fahrenheit?",
  options: ["0°F", "32°F", "100°F", "212°F"],
  correctAnswer: 1,
  explanation: "Water freezes at 32 degrees Fahrenheit.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first president of the United States?",
  options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
  correctAnswer: 2,
  explanation: "George Washington was the first US president.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ produces insulin?",
  options: ["Liver", "Pancreas", "Kidney", "Spleen"],
  correctAnswer: 1,
  explanation: "The pancreas produces insulin.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main component of the sun?",
  options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
  correctAnswer: 2,
  explanation: "The sun is primarily made of hydrogen.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the human brain controls balance?",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
  correctAnswer: 1,
  explanation: "The cerebellum controls balance and coordination.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the 'Land of the Rising Sun'?",
  options: ["China", "South Korea", "Japan", "Thailand"],
  correctAnswer: 2,
  explanation: "Japan is called the Land of the Rising Sun.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula for water?",
  options: ["H2O", "CO2", "O2", "NaCl"],
  correctAnswer: 0,
  explanation: "Water's chemical formula is H2O.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of 'Harry Potter' series?",
  options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "Stephen King"],
  correctAnswer: 0,
  explanation: "J.K. Rowling wrote the Harry Potter series.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the Sun?",
  options: ["Venus", "Mercury", "Earth", "Mars"],
  correctAnswer: 1,
  explanation: "Mercury is the closest planet to the Sun.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas forms about 78% of the Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
  correctAnswer: 1,
  explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the primary language spoken in Canada?",
  options: ["English", "French", "Both English and French", "Spanish"],
  correctAnswer: 2,
  explanation: "Both English and French are official languages of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of Egypt?",
  options: ["Cairo", "Alexandria", "Luxor", "Giza"],
  correctAnswer: 0,
  explanation: "Cairo is the capital of Egypt.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the ceiling of the Sistine Chapel?",
  options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
  correctAnswer: 0,
  explanation: "Michelangelo painted the Sistine Chapel ceiling.",
  topic: "art",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the fastest land animal?",
  options: ["Cheetah", "Lion", "Tiger", "Leopard"],
  correctAnswer: 0,
  explanation: "The cheetah is the fastest land animal.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country has the highest population?",
  options: ["India", "USA", "China", "Indonesia"],
  correctAnswer: 2,
  explanation: "China has the highest population in the world.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  correctAnswer: 1,
  explanation: "Jupiter has the most known moons.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest organ in the human body?",
  options: ["Heart", "Liver", "Skin", "Lungs"],
  correctAnswer: 2,
  explanation: "The skin is the largest organ.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for sodium?",
  options: ["Na", "S", "So", "N"],
  correctAnswer: 0,
  explanation: "Sodium's chemical symbol is Na.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the atomic number 1?",
  options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
  correctAnswer: 1,
  explanation: "Hydrogen has atomic number 1.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who developed the polio vaccine?",
  options: ["Jonas Salk", "Alexander Fleming", "Louis Pasteur", "Edward Jenner"],
  correctAnswer: 0,
  explanation: "Jonas Salk developed the polio vaccine.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  correctAnswer: 1,
  explanation: "Mars is known as the Red Planet.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water in Celsius?",
  options: ["90°C", "100°C", "110°C", "120°C"],
  correctAnswer: 1,
  explanation: "Water boils at 100 degrees Celsius at standard atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest desert in the world?",
  options: ["Sahara", "Arctic", "Antarctic", "Gobi"],
  correctAnswer: 2,
  explanation: "The Antarctic Desert is the largest desert by area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  correctAnswer: 0,
  explanation: "'Romeo and Juliet' was written by William Shakespeare.",
  topic: "english literature",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the currency of South Africa?",
  options: ["Rand", "Dollar", "Pound", "Euro"],
  correctAnswer: 0,
  explanation: "The currency of South Africa is the Rand.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist is famous for his laws of motion?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Isaac Newton formulated the laws of motion.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula for table salt?",
  options: ["NaCl", "KCl", "Na2SO4", "CaCl2"],
  correctAnswer: 0,
  explanation: "Table salt is sodium chloride, NaCl.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body filters blood?",
  options: ["Liver", "Kidney", "Heart", "Lung"],
  correctAnswer: 1,
  explanation: "The kidney filters waste from the blood.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is famous for the Great Wall?",
  options: ["India", "China", "Japan", "Korea"],
  correctAnswer: 1,
  explanation: "The Great Wall is located in China.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the term for animals that eat both plants and meat?",
  options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
  correctAnswer: 2,
  explanation: "Omnivores consume both plants and meat.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known for its rings?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  correctAnswer: 1,
  explanation: "Saturn is famous for its prominent rings.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first man to walk on the moon?",
  options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
  correctAnswer: 0,
  explanation: "Neil Armstrong was the first man on the moon in 1969.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the speed of light?",
  options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
  correctAnswer: 0,
  explanation: "Light travels at approximately 300,000 kilometers per second.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  correctAnswer: 3,
  explanation: "The Pacific Ocean is the largest ocean.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is needed for combustion?",
  options: ["Nitrogen", "Oxygen", "Carbon", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Oxygen supports combustion.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Celsius?",
  options: ["0°C", "32°C", "-32°C", "100°C"],
  correctAnswer: 0,
  explanation: "Water freezes at 0 degrees Celsius.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the term for a word that has the opposite meaning?",
  options: ["Synonym", "Antonym", "Homonym", "Analogy"],
  correctAnswer: 1,
  explanation: "Antonyms are words with opposite meanings.",
  topic: "english grammar",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  correctAnswer: 0,
  explanation: "Alexander Graham Bell invented the telephone.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest planet in our solar system?",
  options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
  correctAnswer: 1,
  explanation: "Jupiter is the largest planet.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the plant conducts photosynthesis?",
  options: ["Root", "Stem", "Leaf", "Flower"],
  correctAnswer: 2,
  explanation: "Leaves are responsible for photosynthesis.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
  correctAnswer: 1,
  explanation: "Mitochondria generate energy for the cell.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent is the largest by area?",
  options: ["Africa", "Asia", "Europe", "North America"],
  correctAnswer: 1,
  explanation: "Asia is the largest continent.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas found in the air we breathe?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
  correctAnswer: 1,
  explanation: "Nitrogen is the most abundant gas in Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What device converts chemical energy to electrical energy?",
  options: ["Generator", "Battery", "Transformer", "Capacitor"],
  correctAnswer: 1,
  explanation: "A battery converts chemical energy into electrical energy.",
  topic: "physics",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the birthplace of democracy?",
  options: ["USA", "Italy", "Greece", "France"],
  correctAnswer: 2,
  explanation: "Democracy originated in ancient Greece.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body is responsible for pumping blood?",
  options: ["Liver", "Lungs", "Heart", "Kidneys"],
  correctAnswer: 2,
  explanation: "The heart pumps blood throughout the body.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which chemical element is a noble gas?",
  options: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Helium is a noble gas.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Canada?",
  options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
  correctAnswer: 3,
  explanation: "Ottawa is the capital of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the first element in the periodic table?",
  options: ["Hydrogen", "Helium", "Lithium", "Carbon"],
  correctAnswer: 0,
  explanation: "Hydrogen is the first element.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first female Prime Minister of the UK?",
  options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
  correctAnswer: 0,
  explanation: "Margaret Thatcher was the first female UK Prime Minister.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does DNA stand for?",
  options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Deoxyribose Nucleotide Acid", "Deoxynucleic Acid"],
  correctAnswer: 0,
  explanation: "DNA stands for Deoxyribonucleic Acid.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is liquid at room temperature?",
  options: ["Mercury", "Iron", "Copper", "Aluminum"],
  correctAnswer: 0,
  explanation: "Mercury is liquid at room temperature.",
  topic: "chemistry",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the term for animals that only eat plants?",
  options: ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
  correctAnswer: 1,
  explanation: "Herbivores eat only plants.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process by which plants make their food?",
  options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
  correctAnswer: 0,
  explanation: "Photosynthesis is the process plants use to convert sunlight into food.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do plants absorb from the atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Plants absorb carbon dioxide for photosynthesis.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computing, what does 'CPU' stand for?",
  options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"],
  correctAnswer: 0,
  explanation: "CPU stands for Central Processing Unit.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is primarily used for Android app development?",
  options: ["Java", "Swift", "Python", "C++"],
  correctAnswer: 0,
  explanation: "Java is the primary language used for Android apps.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Jupiter", "Saturn", "Mars", "Neptune"],
  correctAnswer: 0,
  explanation: "Jupiter has the most moons among the planets.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematical concept is represented by π (pi)?",
  options: ["Ratio of circumference to diameter", "Area of a circle", "Diameter of a circle", "Radius of a circle"],
  correctAnswer: 0,
  explanation: "Pi is the ratio of a circle’s circumference to its diameter.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is mainly obtained from sunlight?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is synthesized when skin is exposed to sunlight.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the primary language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "English"],
  correctAnswer: 1,
  explanation: "Portuguese is the official language of Brazil.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital city of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is known for its high conductivity and is commonly used in electrical wiring?",
  options: ["Copper", "Aluminum", "Iron", "Gold"],
  correctAnswer: 0,
  explanation: "Copper is widely used in electrical wiring due to its conductivity.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In history, who was the first President of the United States?",
  options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
  correctAnswer: 1,
  explanation: "George Washington was the first U.S. President.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematical operation is the inverse of multiplication?",
  options: ["Addition", "Subtraction", "Division", "Exponentiation"],
  correctAnswer: 2,
  explanation: "Division is the inverse operation of multiplication.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the 'Father of the Indian Constitution'?",
  options: ["Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"],
  correctAnswer: 1,
  explanation: "Dr. B. R. Ambedkar was the principal architect of the Indian Constitution.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is essential for the formation of hemoglobin in blood?",
  options: ["Iron", "Calcium", "Potassium", "Magnesium"],
  correctAnswer: 0,
  explanation: "Iron is crucial for hemoglobin formation.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the largest internal organ in the human body?",
  options: ["Kidney", "Liver", "Heart", "Lung"],
  correctAnswer: 1,
  explanation: "The liver is the largest internal organ.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computer science, what does 'HTML' stand for?",
  options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "HyperText Markdown Language"],
  correctAnswer: 0,
  explanation: "HTML stands for HyperText Markup Language.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the process where water changes from liquid to gas?",
  options: ["Condensation", "Precipitation", "Evaporation", "Sublimation"],
  correctAnswer: 2,
  explanation: "Evaporation is the process of liquid water turning into gas.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organelle is known as the 'control center' of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  correctAnswer: 0,
  explanation: "The nucleus controls cell activities.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which of the following is not a prime number?",
  options: ["2", "3", "9", "7"],
  correctAnswer: 2,
  explanation: "9 is not a prime number as it is divisible by 3.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the 2016 Summer Olympics?",
  options: ["China", "Brazil", "UK", "Russia"],
  correctAnswer: 1,
  explanation: "Brazil hosted the 2016 Olympics in Rio de Janeiro.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main ingredient in traditional Japanese miso soup?",
  options: ["Soybean paste", "Rice", "Seaweed", "Fish stock"],
  correctAnswer: 0,
  explanation: "Miso soup is made from fermented soybean paste.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile River is the longest river.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device is used to measure atmospheric pressure?",
  options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "A barometer measures atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the square root of 144?",
  options: ["10", "12", "14", "16"],
  correctAnswer: 1,
  explanation: "The square root of 144 is 12.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian festival is also known as the Festival of Lights?",
  options: ["Holi", "Diwali", "Eid", "Christmas"],
  correctAnswer: 1,
  explanation: "Diwali is known as the Festival of Lights.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the full form of 'RAM' in computers?",
  options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Rapid Access Memory"],
  correctAnswer: 0,
  explanation: "RAM stands for Random Access Memory.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the eye controls the amount of light entering it?",
  options: ["Cornea", "Lens", "Pupil", "Iris"],
  correctAnswer: 3,
  explanation: "The iris controls the size of the pupil, regulating light entry.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest unit of life?",
  options: ["Atom", "Molecule", "Cell", "Organ"],
  correctAnswer: 2,
  explanation: "The cell is the smallest living unit.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the process of finding the derivative called?",
  options: ["Integration", "Differentiation", "Addition", "Multiplication"],
  correctAnswer: 1,
  explanation: "Differentiation is the process of finding the derivative.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of roots in plants?",
  options: ["Photosynthesis", "Support", "Absorb water and nutrients", "Reproduction"],
  correctAnswer: 2,
  explanation: "Roots absorb water and minerals from the soil.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of the 'Harry Potter' series?",
  options: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "Suzanne Collins"],
  correctAnswer: 0,
  explanation: "J.K. Rowling wrote the Harry Potter books.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which animal is known as the 'King of the Jungle'?",
  options: ["Tiger", "Lion", "Elephant", "Cheetah"],
  correctAnswer: 1,
  explanation: "The lion is called the King of the Jungle.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent has the largest number of countries?",
  options: ["Asia", "Africa", "Europe", "South America"],
  correctAnswer: 1,
  explanation: "Africa has the most countries of any continent.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does CPU stand for in computer terminology?",
  options: ["Central Processing Unit", "Central Programming Unit", "Computer Processing Unit", "Central Power Unit"],
  correctAnswer: 0,
  explanation: "CPU means Central Processing Unit.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in the Earth's atmosphere?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
  correctAnswer: 2,
  explanation: "Nitrogen makes up about 78% of the atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the Mona Lisa?",
  options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
  correctAnswer: 1,
  explanation: "Leonardo da Vinci painted the Mona Lisa.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  correctAnswer: 1,
  explanation: "Mars is called the Red Planet due to its reddish appearance.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula of water?",
  options: ["H2O", "CO2", "O2", "NaCl"],
  correctAnswer: 0,
  explanation: "Water's chemical formula is H2O.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
  correctAnswer: 2,
  explanation: "Alexander Graham Bell is credited with inventing the telephone.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the hardest natural substance on Earth?",
  options: ["Gold", "Iron", "Diamond", "Quartz"],
  correctAnswer: 2,
  explanation: "Diamond is the hardest natural substance.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is used to create web pages?",
  options: ["HTML", "Python", "C++", "Java"],
  correctAnswer: 0,
  explanation: "HTML is used to create the structure of web pages.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level in Celsius?",
  options: ["90°C", "95°C", "100°C", "105°C"],
  correctAnswer: 2,
  explanation: "Water boils at 100 degrees Celsius at sea level.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  correctAnswer: 0,
  explanation: "'Romeo and Juliet' was written by William Shakespeare.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body is responsible for filtering blood?",
  options: ["Heart", "Liver", "Kidneys", "Lungs"],
  correctAnswer: 2,
  explanation: "The kidneys filter waste from the blood.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest by land area?",
  options: ["USA", "China", "Russia", "Canada"],
  correctAnswer: 2,
  explanation: "Russia is the largest country by land area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does DNA stand for?",
  options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Dioxyribonucleic Acid", "Deoxynucleic Acid"],
  correctAnswer: 0,
  explanation: "DNA stands for Deoxyribonucleic Acid.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument measures temperature?",
  options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "Thermometer measures temperature.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Japan?",
  options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
  correctAnswer: 1,
  explanation: "Tokyo is the capital of Japan.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of 'The Odyssey'?",
  options: ["Homer", "Virgil", "Dante", "Sophocles"],
  correctAnswer: 0,
  explanation: "'The Odyssey' was written by Homer.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is used in balloons to make them float?",
  options: ["Oxygen", "Helium", "Nitrogen", "Carbon Dioxide"],
  correctAnswer: 1,
  explanation: "Helium is lighter than air and makes balloons float.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Au", "Ag", "Fe", "Pb"],
  correctAnswer: 0,
  explanation: "The symbol for gold is Au.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent is known as the 'Dark Continent'?",
  options: ["Asia", "Africa", "Europe", "Australia"],
  correctAnswer: 1,
  explanation: "Africa was historically called the Dark Continent.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest organ in the human body?",
  options: ["Skin", "Heart", "Liver", "Lung"],
  correctAnswer: 0,
  explanation: "Skin is the largest organ.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  correctAnswer: 2,
  explanation: "Paris is the capital of France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do you call a shape with eight sides?",
  options: ["Hexagon", "Octagon", "Heptagon", "Decagon"],
  correctAnswer: 1,
  explanation: "An eight-sided shape is called an octagon.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first woman to win a Nobel Prize?",
  options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Ada Lovelace"],
  correctAnswer: 0,
  explanation: "Marie Curie was the first woman Nobel laureate.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which blood type is known as the universal donor?",
  options: ["A", "B", "AB", "O negative"],
  correctAnswer: 3,
  explanation: "O negative blood is the universal donor type.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest planet in our solar system?",
  options: ["Mercury", "Mars", "Venus", "Pluto"],
  correctAnswer: 0,
  explanation: "Mercury is the smallest planet in the solar system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is used as the primary fuel in nuclear reactors?",
  options: ["Uranium", "Plutonium", "Thorium", "Hydrogen"],
  correctAnswer: 0,
  explanation: "Uranium is the main fuel used in nuclear reactors.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Fahrenheit?",
  options: ["0°F", "32°F", "100°F", "212°F"],
  correctAnswer: 1,
  explanation: "Water freezes at 32 degrees Fahrenheit.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the term for animals that eat both plants and meat?",
  options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
  correctAnswer: 2,
  explanation: "Omnivores eat both plants and animals.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city is known as the 'Big Apple'?",
  options: ["Los Angeles", "New York City", "Chicago", "Miami"],
  correctAnswer: 1,
  explanation: "New York City is nicknamed the Big Apple.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the currency of Japan?",
  options: ["Yen", "Dollar", "Euro", "Won"],
  correctAnswer: 0,
  explanation: "The currency of Japan is Yen.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which sport is known as the 'king of sports'?",
  options: ["Basketball", "Cricket", "Soccer", "Tennis"],
  correctAnswer: 2,
  explanation: "Soccer (football) is often called the king of sports.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which famous scientist developed the theory of relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
  correctAnswer: 1,
  explanation: "Albert Einstein developed the theory of relativity.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main language spoken in Canada?",
  options: ["English", "French", "Both English and French", "Spanish"],
  correctAnswer: 2,
  explanation: "Both English and French are official languages of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the largest desert on Earth?",
  options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
  correctAnswer: 0,
  explanation: "The Sahara is the largest hot desert.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
  correctAnswer: 1,
  explanation: "Mitochondria produce energy for the cell.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country gifted the Statue of Liberty to the USA?",
  options: ["France", "England", "Spain", "Italy"],
  correctAnswer: 0,
  explanation: "France gifted the Statue of Liberty to the USA.",
  topic: "history",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in the Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Nitrogen makes up about 78% of the Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the smallest unit of life?",
  options: ["Organ", "Cell", "Tissue", "Organism"],
  correctAnswer: 1,
  explanation: "The cell is the basic structural and functional unit of life.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the Mona Lisa?",
  options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
  correctAnswer: 1,
  explanation: "Leonardo da Vinci painted the Mona Lisa.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematical term describes the longest side of a right triangle?",
  options: ["Hypotenuse", "Adjacent", "Opposite", "Base"],
  correctAnswer: 0,
  explanation: "The hypotenuse is the longest side opposite the right angle.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital city of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the atomic number 1?",
  options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
  correctAnswer: 1,
  explanation: "Hydrogen has the atomic number 1.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the 'Father of the Indian Constitution'?",
  options: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Sardar Patel", "Mahatma Gandhi"],
  correctAnswer: 1,
  explanation: "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  correctAnswer: 0,
  explanation: "Jupiter has the most moons in our solar system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the square root of 144?",
  options: ["10", "11", "12", "13"],
  correctAnswer: 2,
  explanation: "The square root of 144 is 12.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is primarily used for Android app development?",
  options: ["Python", "Java", "C++", "Swift"],
  correctAnswer: 1,
  explanation: "Java is a primary language for Android app development.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian festival is known as the 'Festival of Lights'?",
  options: ["Holi", "Diwali", "Navratri", "Eid"],
  correctAnswer: 1,
  explanation: "Diwali is known as the Festival of Lights.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the value of Pi (π) up to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  correctAnswer: 1,
  explanation: "Pi (π) is approximately 3.14.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device is used to convert analog signals to digital?",
  options: ["Modulator", "Demodulator", "Analog-to-Digital Converter", "Digital-to-Analog Converter"],
  correctAnswer: 2,
  explanation: "Analog-to-Digital Converter (ADC) converts analog signals to digital.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Uttar Pradesh?",
  options: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  correctAnswer: 0,
  explanation: "Lucknow is the capital of Uttar Pradesh.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered penicillin?",
  options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
  correctAnswer: 1,
  explanation: "Alexander Fleming discovered penicillin.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is called the Land of the Rising Sun?",
  options: ["China", "Japan", "South Korea", "Thailand"],
  correctAnswer: 1,
  explanation: "Japan is called the Land of the Rising Sun.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile is traditionally considered the longest river.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the process plants use to make food?",
  options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
  correctAnswer: 1,
  explanation: "Photosynthesis is how plants make food using sunlight.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first Prime Minister of India?",
  options: ["Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi", "Rajendra Prasad"],
  correctAnswer: 0,
  explanation: "Jawaharlal Nehru was the first Prime Minister of India.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is produced when a person is exposed to sunlight?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is produced by the skin when exposed to sunlight.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which sport is the term 'love' used for zero score?",
  options: ["Cricket", "Football", "Tennis", "Basketball"],
  correctAnswer: 2,
  explanation: "'Love' means zero in tennis scoring.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main ingredient in traditional Japanese miso soup?",
  options: ["Soybeans", "Wheat", "Rice", "Fish"],
  correctAnswer: 0,
  explanation: "Miso soup is made primarily with fermented soybeans.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process of cell division called?",
  options: ["Meiosis", "Mitosis", "Fusion", "Osmosis"],
  correctAnswer: 1,
  explanation: "Mitosis is the process of cell division for growth and repair.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the sun?",
  options: ["Venus", "Mercury", "Earth", "Mars"],
  correctAnswer: 1,
  explanation: "Mercury is the closest planet to the Sun.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian city is known as the 'Pink City'?",
  options: ["Jaipur", "Delhi", "Mumbai", "Kolkata"],
  correctAnswer: 0,
  explanation: "Jaipur is called the Pink City due to its distinct building colors.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of Canada?",
  options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
  correctAnswer: 1,
  explanation: "Ottawa is the capital of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which computer component is considered the 'brain' of the computer?",
  options: ["RAM", "Hard Drive", "CPU", "GPU"],
  correctAnswer: 2,
  explanation: "The CPU (Central Processing Unit) is the computer's brain.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first woman Prime Minister of India?",
  options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Mamata Banerjee"],
  correctAnswer: 0,
  explanation: "Indira Gandhi was India's first woman Prime Minister.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas responsible for global warming?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
  correctAnswer: 2,
  explanation: "Carbon dioxide is the primary greenhouse gas responsible for global warming.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest planet in our solar system?",
  options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  correctAnswer: 1,
  explanation: "Jupiter is the largest planet in the solar system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the World Wide Web?",
  options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
  correctAnswer: 1,
  explanation: "Tim Berners-Lee invented the World Wide Web.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian state is the largest by area?",
  options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Bihar"],
  correctAnswer: 1,
  explanation: "Rajasthan is the largest Indian state by area.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which city hosted the 2012 Summer Olympics?",
  options: ["Beijing", "London", "Rio de Janeiro", "Tokyo"],
  correctAnswer: 1,
  explanation: "London hosted the 2012 Summer Olympics.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do plants absorb from the atmosphere for photosynthesis?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Plants absorb carbon dioxide for photosynthesis.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the primary language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "English"],
  correctAnswer: 1,
  explanation: "Portuguese is the primary language spoken in Brazil.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Au", "Ag", "Gd", "Ga"],
  correctAnswer: 0,
  explanation: "The chemical symbol for gold is Au.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ in the human body produces insulin?",
  options: ["Liver", "Pancreas", "Kidney", "Heart"],
  correctAnswer: 1,
  explanation: "The pancreas produces insulin to regulate blood sugar.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Jane Austen"],
  correctAnswer: 0,
  explanation: "'Romeo and Juliet' was written by William Shakespeare.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is primarily used for iOS app development?",
  options: ["Java", "Swift", "Python", "C#"],
  correctAnswer: 1,
  explanation: "Swift is primarily used for iOS app development.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest desert in the world?",
  options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
  correctAnswer: 3,
  explanation: "The Antarctic Desert is the largest desert by area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first President of the United States?",
  options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
  correctAnswer: 2,
  explanation: "George Washington was the first U.S. president.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country has the highest population in the world?",
  options: ["India", "United States", "China", "Russia"],
  correctAnswer: 2,
  explanation: "China has the highest population in the world.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does HTTP stand for in internet technology?",
  options: ["HyperText Transfer Protocol", "Hyperlink Transfer Protocol", "HyperText Transmission Protocol", "Hyperlink Transmission Protocol"],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which year did India gain independence?",
  options: ["1947", "1950", "1945", "1942"],
  correctAnswer: 0,
  explanation: "India gained independence in 1947.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the Red Planet?",
  options: ["Mars", "Jupiter", "Venus", "Saturn"],
  correctAnswer: 0,
  explanation: "Mars is known as the Red Planet due to its iron oxide surface.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
  correctAnswer: 1,
  explanation: "Mitochondria generate the energy cells need.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who composed the famous classical piece 'Für Elise'?",
  options: ["Mozart", "Beethoven", "Bach", "Chopin"],
  correctAnswer: 1,
  explanation: "'Für Elise' was composed by Beethoven.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian city is famous for the Taj Mahal?",
  options: ["Delhi", "Agra", "Mumbai", "Jaipur"],
  correctAnswer: 1,
  explanation: "The Taj Mahal is located in Agra.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main function of white blood cells?",
  options: ["Carry oxygen", "Fight infection", "Clot blood", "Provide energy"],
  correctAnswer: 1,
  explanation: "White blood cells fight infection.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which software is used for version control in programming?",
  options: ["Git", "Photoshop", "Excel", "PowerPoint"],
  correctAnswer: 0,
  explanation: "Git is a popular version control system.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest continent by land area?",
  options: ["Europe", "Australia", "Antarctica", "South America"],
  correctAnswer: 1,
  explanation: "Australia is the smallest continent.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water in Fahrenheit?",
  options: ["32°F", "0°F", "100°F", "212°F"],
  correctAnswer: 0,
  explanation: "Water freezes at 32°F.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of the novel '1984'?",
  options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"],
  correctAnswer: 0,
  explanation: "'1984' was written by George Orwell.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is liquid at room temperature?",
  options: ["Mercury", "Iron", "Gold", "Silver"],
  correctAnswer: 0,
  explanation: "Mercury is liquid at room temperature.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does CPU stand for in computing?",
  options: ["Central Processing Unit", "Computer Processing Unit", "Central Performance Unit", "Computer Power Unit"],
  correctAnswer: 0,
  explanation: "CPU stands for Central Processing Unit.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first woman to win a Nobel Prize?",
  options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
  correctAnswer: 0,
  explanation: "Marie Curie was the first woman Nobel laureate.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which animal is known as the 'King of the Jungle'?",
  options: ["Tiger", "Elephant", "Lion", "Cheetah"],
  correctAnswer: 2,
  explanation: "Lion is called the King of the Jungle.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country gifted the Statue of Liberty to the USA?",
  options: ["England", "France", "Germany", "Italy"],
  correctAnswer: 1,
  explanation: "France gifted the Statue of Liberty.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do humans need to breathe?",
  options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Humans need oxygen to breathe.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Rome", "Paris"],
  correctAnswer: 3,
  explanation: "Paris is the capital of France.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which sport is known as 'The Beautiful Game'?",
  options: ["Cricket", "Basketball", "Football (Soccer)", "Tennis"],
  correctAnswer: 2,
  explanation: "Football (soccer) is known as 'The Beautiful Game'.",
  topic: "sports",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does DNA stand for?",
  options: ["Deoxyribonucleic Acid", "Deoxyribonuclear Acid", "Deoxyribonucleic Agent", "Deoxynucleic Acid"],
  correctAnswer: 0,
  explanation: "DNA stands for Deoxyribonucleic Acid.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the galaxy that contains our Solar System?",
  options: ["Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
  correctAnswer: 1,
  explanation: "Our Solar System is in the Milky Way Galaxy.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who invented the telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  correctAnswer: 0,
  explanation: "Alexander Graham Bell invented the telephone.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest organ in the human body?",
  options: ["Liver", "Skin", "Heart", "Lungs"],
  correctAnswer: 1,
  explanation: "The skin is the largest organ.",
  topic: "biology",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the 'Land of the Midnight Sun'?",
  options: ["Norway", "Sweden", "Finland", "Iceland"],
  correctAnswer: 0,
  explanation: "Norway experiences the midnight sun phenomenon.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is essential for blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
  correctAnswer: 2,
  explanation: "Vitamin K is essential for blood clotting.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the formula for water?",
  options: ["CO2", "H2O", "O2", "NaCl"],
  correctAnswer: 1,
  explanation: "Water's chemical formula is H2O.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian leader is known for the Dandi March?",
  options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
  correctAnswer: 1,
  explanation: "Mahatma Gandhi led the Dandi March.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does 'HTTP' stand for in web addresses?",
  options: ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "Hyperlink Text Transfer Protocol", "Hyperlink Transfer Protocol"],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical formula of table salt?",
  options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
  correctAnswer: 0,
  explanation: "Table salt is sodium chloride (NaCl).",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element has the atomic number 1?",
  options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
  correctAnswer: 2,
  explanation: "Hydrogen has the atomic number 1.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: 2,
  explanation: "Canberra is the capital city of Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who developed the theory of relativity?",
  options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
  correctAnswer: 2,
  explanation: "Albert Einstein developed the theory of relativity.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level in Celsius?",
  options: ["90°C", "100°C", "110°C", "120°C"],
  correctAnswer: 1,
  explanation: "Water boils at 100°C at sea level.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian festival is also called the Festival of Lights?",
  options: ["Holi", "Diwali", "Eid", "Navratri"],
  correctAnswer: 1,
  explanation: "Diwali is known as the Festival of Lights.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  correctAnswer: 2,
  explanation: "2 is the smallest prime number.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has the most moons?",
  options: ["Saturn", "Jupiter", "Mars", "Neptune"],
  correctAnswer: 1,
  explanation: "Jupiter has the most moons.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In computing, what does 'RAM' stand for?",
  options: ["Random Access Memory", "Read Access Memory", "Run All Memory", "Read And Modify"],
  correctAnswer: 0,
  explanation: "RAM stands for Random Access Memory.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country hosted the 2016 Summer Olympics?",
  options: ["China", "Brazil", "UK", "Russia"],
  correctAnswer: 1,
  explanation: "Brazil hosted the 2016 Summer Olympics in Rio de Janeiro.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main gas responsible for global warming?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
  correctAnswer: 1,
  explanation: "Carbon dioxide is a major greenhouse gas causing global warming.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is known as the Land of the Rising Sun?",
  options: ["China", "Japan", "South Korea", "Thailand"],
  correctAnswer: 1,
  explanation: "Japan is known as the Land of the Rising Sun.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile is considered the longest river in the world.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the value of Pi (π) to two decimal places?",
  options: ["3.14", "3.15", "3.13", "3.16"],
  correctAnswer: 0,
  explanation: "Pi (π) is approximately 3.14.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does 'HTML' stand for?",
  options: ["HyperText Markup Language", "Hyperlink Text Markup Language", "HyperText Machine Language", "Hyperlink Transfer Markup Language"],
  correctAnswer: 0,
  explanation: "HTML stands for HyperText Markup Language.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first man to step on the Moon?",
  options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
  correctAnswer: 1,
  explanation: "Neil Armstrong was the first man to step on the Moon in 1969.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument measures atmospheric pressure?",
  options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  correctAnswer: 0,
  explanation: "A barometer measures atmospheric pressure.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is primarily obtained from sunlight?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctAnswer: 3,
  explanation: "Vitamin D is synthesized in the skin when exposed to sunlight.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of Canada?",
  options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  correctAnswer: 2,
  explanation: "Ottawa is the capital city of Canada.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "English", "French"],
  correctAnswer: 1,
  explanation: "Portuguese is the official language of Brazil.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the Sun?",
  options: ["Venus", "Earth", "Mercury", "Mars"],
  correctAnswer: 2,
  explanation: "Mercury is the closest planet to the Sun.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who painted the Mona Lisa?",
  options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
  correctAnswer: 1,
  explanation: "Leonardo da Vinci painted the Mona Lisa.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the SI unit of force?",
  options: ["Newton", "Pascal", "Joule", "Watt"],
  correctAnswer: 0,
  explanation: "The SI unit of force is Newton (N).",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas is most abundant in the Earth's atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "In which year did World War II end?",
  options: ["1945", "1944", "1939", "1950"],
  correctAnswer: 0,
  explanation: "World War II ended in 1945.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is the largest by land area?",
  options: ["USA", "Russia", "China", "Canada"],
  correctAnswer: 1,
  explanation: "Russia is the largest country by land area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the hardest natural substance on Earth?",
  options: ["Gold", "Diamond", "Quartz", "Iron"],
  correctAnswer: 1,
  explanation: "Diamond is the hardest natural substance.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which continent is the Sahara Desert located on?",
  options: ["Asia", "Africa", "Australia", "South America"],
  correctAnswer: 1,
  explanation: "The Sahara Desert is in Africa.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is known as the Father of Computers?",
  options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
  correctAnswer: 0,
  explanation: "Charles Babbage is considered the Father of Computers.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin helps in blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
  correctAnswer: 2,
  explanation: "Vitamin K helps in blood clotting.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  correctAnswer: 3,
  explanation: "The Pacific Ocean is the largest ocean.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known for its rings?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  correctAnswer: 1,
  explanation: "Saturn is famous for its rings.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which Indian city is known as the Silicon Valley of India?",
  options: ["Hyderabad", "Pune", "Bangalore", "Chennai"],
  correctAnswer: 2,
  explanation: "Bangalore is known as the Silicon Valley of India.",
  topic: "india special",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the speed of light?",
  options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
  correctAnswer: 0,
  explanation: "The speed of light is approximately 300,000 kilometers per second.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who discovered penicillin?",
  options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
  correctAnswer: 1,
  explanation: "Alexander Fleming discovered penicillin.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest planet in our solar system?",
  options: ["Saturn", "Jupiter", "Earth", "Neptune"],
  correctAnswer: 1,
  explanation: "Jupiter is the largest planet in our solar system.",
  topic: "astronomy",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},{
  id: uuidv4(),
  text: "Which scientist is known for the laws of motion?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Isaac Newton formulated the three laws of motion.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for gold?",
  options: ["Au", "Ag", "Gd", "Go"],
  correctAnswer: 0,
  explanation: "The chemical symbol for gold is Au.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is primarily spoken in the Canadian province of Quebec?",
  options: ["English", "French", "Spanish", "German"],
  correctAnswer: 1,
  explanation: "French is the primary language spoken in Quebec.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest internal organ in the human body?",
  options: ["Liver", "Heart", "Lung", "Kidney"],
  correctAnswer: 0,
  explanation: "The liver is the largest internal organ.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who wrote the play 'Romeo and Juliet'?",
  options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  correctAnswer: 0,
  explanation: "'Romeo and Juliet' was written by William Shakespeare.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main ingredient in traditional Japanese miso soup?",
  options: ["Rice", "Soybeans", "Seaweed", "Fish"],
  correctAnswer: 1,
  explanation: "Soybeans are the main ingredient in miso paste.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematical constant is approximately equal to 2.718?",
  options: ["Pi (π)", "Euler's number (e)", "Golden ratio (φ)", "Square root of 2"],
  correctAnswer: 1,
  explanation: "Euler's number (e) is approximately 2.718.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ is responsible for filtering blood in the human body?",
  options: ["Liver", "Kidney", "Heart", "Lung"],
  correctAnswer: 1,
  explanation: "Kidneys filter waste and excess substances from blood.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the currency of Japan?",
  options: ["Yuan", "Yen", "Won", "Dollar"],
  correctAnswer: 1,
  explanation: "The Japanese currency is Yen.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first President of the United States?",
  options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
  correctAnswer: 2,
  explanation: "George Washington was the first US president.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organelle is known as the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  correctAnswer: 1,
  explanation: "Mitochondria produce energy for the cell.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country gifted the Statue of Liberty to the USA?",
  options: ["France", "England", "Germany", "Italy"],
  correctAnswer: 0,
  explanation: "France gifted the Statue of Liberty.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the process by which plants make their food?",
  options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
  correctAnswer: 1,
  explanation: "Photosynthesis is how plants make food using sunlight.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which element is a noble gas?",
  options: ["Nitrogen", "Oxygen", "Neon", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Neon is a noble gas.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which country is home to the Great Barrier Reef?",
  options: ["Australia", "South Africa", "USA", "India"],
  correctAnswer: 0,
  explanation: "The Great Barrier Reef is in Australia.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which metal is liquid at room temperature?",
  options: ["Mercury", "Gold", "Silver", "Copper"],
  correctAnswer: 0,
  explanation: "Mercury is liquid at room temperature.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does CPU stand for in computers?",
  options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
  correctAnswer: 1,
  explanation: "CPU stands for Central Processing Unit.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the smallest country in the world by area?",
  options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
  correctAnswer: 1,
  explanation: "Vatican City is the smallest country by area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who composed the Four Seasons?",
  options: ["Ludwig van Beethoven", "Antonio Vivaldi", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart"],
  correctAnswer: 1,
  explanation: "Antonio Vivaldi composed the Four Seasons.",
  topic: "entertainment",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which language is the most widely spoken worldwide?",
  options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
  correctAnswer: 2,
  explanation: "Mandarin Chinese is the most spoken language by number of native speakers.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ produces insulin?",
  options: ["Liver", "Kidney", "Pancreas", "Spleen"],
  correctAnswer: 2,
  explanation: "The pancreas produces insulin.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the largest desert in the world?",
  options: ["Sahara", "Arabian", "Gobi", "Antarctic Desert"],
  correctAnswer: 3,
  explanation: "The Antarctic Desert is the largest desert by area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which mathematician is known for the Pythagorean theorem?",
  options: ["Euclid", "Pythagoras", "Archimedes", "Newton"],
  correctAnswer: 1,
  explanation: "Pythagoras is credited with the Pythagorean theorem.",
  topic: "math",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the first artificial Earth satellite?",
  options: ["Sputnik 1", "Explorer 1", "Apollo 11", "Vostok 1"],
  correctAnswer: 0,
  explanation: "Sputnik 1 was the first artificial Earth satellite.",
  topic: "technology & computers",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do plants absorb from the atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
  correctAnswer: 2,
  explanation: "Plants absorb carbon dioxide for photosynthesis.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest continent by land area?",
  options: ["Africa", "Asia", "Europe", "North America"],
  correctAnswer: 1,
  explanation: "Asia is the largest continent by land area.",
  topic: "geography",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main ingredient in traditional Italian pizza dough?",
  options: ["Corn flour", "Rice flour", "Wheat flour", "Oat flour"],
  correctAnswer: 2,
  explanation: "Wheat flour is the main ingredient in pizza dough.",
  topic: "general knowledge",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which scientist discovered the law of gravity?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1,
  explanation: "Isaac Newton formulated the law of gravity.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who is the author of 'The Origin of Species'?",
  options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"],
  correctAnswer: 0,
  explanation: "Charles Darwin authored 'The Origin of Species'.",
  topic: "science",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
}


];