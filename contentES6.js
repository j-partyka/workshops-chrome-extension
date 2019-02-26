// pętla for(let i of y) iteruje po elementach tablicy lub stringu a nie po liczniku (iteratorze)


// import dictionary from './dictionary.js';



const elements = document.getElementsByTagName('*');
// const dictionary = window.ourDictionary;
const dictionary = {
        "gira": "gwóźdź",
        "dupa": "siedzisko",
        "pizda": "konstantynopolitańczykiewiczówna",
        "kurwa": "pani pani"
}

console.log(dictionary);

// function changeWords(message){
    // if (message) {
    //     dictionary.push({
    //         key: message.negative,
    //         value: message.positive
    //     })
    // }   
    for(let element of elements) {
        for(let node of element.childNodes) {
            if (node.nodeType === 3) {
                const text = node.nodeValue.toLowerCase();

                Object.keys(dictionary).forEach(word => {
                    const replacedText = text.replace(word, match => dictionary[match]);
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                });
            }
        }
    }
// }

// changeWords();


// chrome.runtime.sendMessage({
//     changed_words: changedWords // or whatever you want to send
//   });

// chrome.runtime.onMessage.removeListener(changeWords);  //optional