function alphaSort(str) {
   
    const characters = str.split('');
  
   
    const sortedCharacters = characters.sort();
  

    const sortedString = sortedCharacters.join('');

    return sortedString;
  }