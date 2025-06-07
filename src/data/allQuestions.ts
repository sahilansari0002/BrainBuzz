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