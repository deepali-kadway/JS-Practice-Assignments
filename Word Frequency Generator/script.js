function wordCount(){
    const inputText = document.getElementById('inputText').value;
    const displaycount = document.getElementById('displaycount');

    const words = inputText.match(/\b\w+\b/g);
    const result = {};

    words.forEach(element => {
        result[element] = words.filter(word => word === element).length;
    });
      displaycount.textContent = JSON.stringify(result, null, 2);
      return result;
}
document.getElementById('inputText').addEventListener('input', wordCount);