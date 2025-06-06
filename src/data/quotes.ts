export const levelCompleteQuotes = [
{
  quote: "Knowledge is power, and you're getting stronger!",
  author: "Quiz Odyssey"
},
{
  quote: "Every question answered is a step toward wisdom.",
  author: "Ancient Proverb"
},
{
  quote: "Success is not final, learning is not fatal: it is the courage to continue that counts.",
  author: "Winston Churchill"
},
{
  quote: "The more you learn, the more you realize how much you don't know.",
  author: "Albert Einstein"
},
{
  quote: "Your mind is like a parachute - it only works when it's open.",
  author: "Frank Zappa"
},
{
  quote: "Education is the most powerful weapon which you can use to change the world.",
  author: "Nelson Mandela"
},
{
  quote: "The beautiful thing about learning is that no one can take it away from you.",
  author: "B.B. King"
},
{
  quote: "Don't limit a child to your own learning, for they were born in another time.",
  author: "Rabindranath Tagore"
},
{
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  author: "Mahatma Gandhi"
},
{
  quote: "Intellectual growth should commence at birth and cease only at death.",
  author: "Albert Einstein"
},
{
  quote: "Learning never exhausts the mind.",
  author: "Leonardo da Vinci"
},
{
  quote: "The expert in anything was once a beginner.",
  author: "Helen Hayes"
},
{
  quote: "An investment in knowledge pays the best interest.",
  author: "Benjamin Franklin"
},
{
  quote: "Curiosity is the wick in the candle of learning.",
  author: "William Arthur Ward"
},
{
  quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  author: "Benjamin Franklin"
},
{
  quote: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
  author: "Dr. Seuss"
},
{
  quote: "Education is not preparation for life; education is life itself.",
  author: "John Dewey"
},
{
  quote: "Learning is a treasure that will follow its owner everywhere.",
  author: "Chinese Proverb"
},
{
  quote: "The mind is not a vessel to be filled but a fire to be kindled.",
  author: "Plutarch"
},
{
  quote: "Wisdom begins in wonder.",
  author: "Socrates"
},
{
  quote: "The roots of education are bitter, but the fruit is sweet.",
  author: "Aristotle"
},
{
  quote: "Develop a passion for learning. If you do, you will never cease to grow.",
  author: "Anthony J. D'Angelo"
},
{
  quote: "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
  author: "Leonardo da Vinci"
},
{
  quote: "Success is the result of preparation, hard work, and learning from failure.",
  author: "Colin Powell"
},
{
  quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  author: "Malcolm X"
},
{
  quote: "Learning without thought is labor lost; thought without learning is perilous.",
  author: "Confucius"
},
{
  quote: "The more I read, the more I acquire, the more certain I am that I know nothing.",
  author: "Voltaire"
},
{
  quote: "You don't learn to walk by following rules. You learn by doing, and by falling over.",
  author: "Richard Branson"
},
{
  quote: "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds.",
  author: "Plato"
},
{
  quote: "Education is the key to unlocking the world, a passport to freedom.",
  author: "Oprah Winfrey"
},
{
  quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
  author: "Brian Herbert"
},
{
  quote: "It is not that I'm so smart. But I stay with the questions much longer.",
  author: "Albert Einstein"
},
{
  quote: "Mistakes are proof that you are trying and learning.",
  author: "Unknown"
},
{
  quote: "Learning is a journey, not a destination.",
  author: "Unknown"
},
{
  quote: "You are always a student, never a master. You have to keep moving forward.",
  author: "Conrad Hall"
},
{
  quote: "A good education is a foundation for a better future.",
  author: "Elizabeth Warren"
},
{
  quote: "Knowledge comes, but wisdom lingers.",
  author: "Alfred Lord Tennyson"
},
{
  quote: "Learning is not attained by chance, it must be sought for with ardor and diligence.",
  author: "Abigail Adams"
},
{
  quote: "The only true wisdom is in knowing you know nothing.",
  author: "Socrates"
}

];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * levelCompleteQuotes.length);
  return levelCompleteQuotes[randomIndex];
};