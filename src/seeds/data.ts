const firstNames = [
    "John",
    "Jane",
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
    "Kevin",
    "Linda",
    "Michael",
    "Nancy",
    "Oliver",
    "Pamela",
    "Quincy",
    "Rachel",
    "Steve",
    "Tina",
    "Ursula",
    "Victor",
    "Wendy",
    "Xavier",
    "Yvonne",
    "Zachary",
]

const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
]

const thoughts = [
    "I love pizza!",
    "I'm learning so much!",
    "I'm so tired...",
    "I'm so hungry...",
    "I'm so thirsty...",
    "I'm so bored...",
    "I'm so excited!",
    "I'm so happy!",
    "I'm so sad...",
    "I'm so angry...",
    "I'm so frustrated...",
    "I'm so confused...",
    "I'm so scared...",
    "I'm so anxious...",
    "I'm so stressed...",
    "I'm so overwhelmed...",
    "I'm so grateful!",
    "I'm so proud!",
    "I'm so inspired!",
    "I'm so motivated!",
    "I'm so determined!",
    "I'm so hopeful!",
    "I'm so optimistic!",
    "I'm so pessimistic...",
    "I'm so skeptical...",
    "I'm so cynical...",
    "I'm so naive...",
]

const reactions = [
    "I agree!",
    "I disagree...",
    "I like this!",
    "I love this!",
    "I hate this...",
]

export const getRandomUser = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    return {
        username: firstName + " " + lastName,
        email: firstName + "." + lastName +
            "@example.com",
    }
}

export const getRandomThought = () => {
    return thoughts[Math.floor(Math.random() * thoughts.length)]
}

export const getRandomReaction = () => {
    return reactions[Math.floor(Math.random() * reactions.length)]
}