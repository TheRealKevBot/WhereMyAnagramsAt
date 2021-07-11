// What is an anagram? Well, two words are anagrams of each 
// other if they both contain the same letters.


function anagrams(word, words) {
    let answer = []
    let sortedWord = word.split('').sort().join('')
    words.forEach(newWord => {
        let sortedNW = newWord.split('').sort().join('')
        sortedNW === sortedWord ? answer.push(newWord) : null
    })
    return answer
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']),  ['aabb', 'bbaa'])
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']), [])