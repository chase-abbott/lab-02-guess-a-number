## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML elements
1) Text to explain rules
2) Input field
    -Why? Provide an argument to compare to the random number
    -How? <input>
3) A button
    - Why?  On click compare input to random number
    - How? addEventListener to html <button>
4) Div that says how many guesses left/if the number is too high/low
    -Why?
    -How?
5) Div that is  with a correct or incorrect answer
### Stretch
               1) Button to reset the game
    -How? addEventListener to html <button>


## Initialize state
let clicks = 5;

## JS functionality
1) Generate random number
    -How? Math.round(Math.random * 20)
2) What happens when user clicks?
    -Change the number of clicks left
        -How?
    -Compare input to random number
        -How?
    -Increment guesses left
        -How? 'clicks--'
