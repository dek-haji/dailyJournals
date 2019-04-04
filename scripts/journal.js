const journalEntry1 = {
    date: "01/01/2019",
    concepts: "Daily journal day two",
    journalEntry: "first week of NSS again",
    mood: "Happy"
}
const journalEntry2 = {
    date: "01/01/2018",
    concepts: "Daily journal day three",
    journalEntry: "first week of NSS again",
    mood: "sad"
}
const journalEntry3 = {
    date: "01/01/2020",
    concepts: "Daily journal day three",
    journalEntry: "first week of NSS again",
    mood: "Good"
}
console.log(journalEntry1)
/*Eventually, you will have multiple journal entries, so you need to define an 
appropriately named variable that will have the value of an array. */
let journalEntries = [];
/* Once you define that variable and give it a default value of a blank array,
 use the push() method to add the journalEntry object you defined above to the array.
 */
journalEntries.push(journalEntry1)
console.log("journal 1", journalEntries.length)
journalEntries.push(journalEntry2)
console.log("journal2", journalEntries.length)
journalEntries.push(journalEntry3)


console.log("all journals", journalEntries.length)


1