
export const POST_INITIAL_STATE = {
    id: 1,
    title: "How can I remove a specific item from an array?",
    date: "2011-04-23",
    votes: 8965,
    tags: [
        "javascript",
        "arrays"
    ],
    body: `I have an array of numbers and I'm using the .push() method to add elements to it.
    Is there a simple way to remove a specific element from an array?`,
    by: {
        avatar: "https://www.gravatar.com/avatar/79e7cefc9e7deb0e0bf422baa1a38a2c?s=32&d=identicon&r=PG",
        name: "Walker"
    },
    bookmarks: 1376,
    answers: [
        {
            id: 2,
            body: `var value = 3
            var arr = [1, 2, 3, 4, 5, 3]
            arr = arr.filter(function(item) {
                return item !== value
            })
            console.log(arr)
            // [ 1, 2, 4, 5 ]`,
            by: {
                avatar: "https://www.gravatar.com/avatar/79e7cefc9e7deb0e0bf422baa1a38a2c?s=32&d=identicon&r=PG",
                name: "ujeenator"
            },
            date: "2013-12-19",
            votes: 1440
        },
        {
            id: 3,
            body: `I don't know how you are expecting array.remove(int) to behave. There are three possibilities I can think of that you might want.
            To remove an element of an array at an index i:
            array.splice(i, 1);`,
            by: {
                avatar: "https://www.gravatar.com/avatar/79e7cefc9e7deb0e0bf422baa1a38a2c?s=32&d=identicon&r=PG",
                name: "Peter Olsson"
            },
            date: "2010-11-14",
            votes: 505
        }
    ]
};