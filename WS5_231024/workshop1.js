function capitalizeWords(text) {
    // Split the text into words based on spaces
    const words = text.split(' ');
    // console.log(words);
    // Capitalize the first letter of each word   //?   ****
    const capitalizedWords = words.map(word => {
    if (word.length > 0) {
    // return word[0].toUpperCase();              //?   ***
    return word[0].toUpperCase() + word.slice(1);
    } else {
    return ''; // Handle empty words (e.g., multiple spaces)
    }
    });
    // Join the capitalized words back into a single string
    const capitalizedText = capitalizedWords.join(' '); 
    return capitalizedText;
    }
    const inputText = `There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour, or
    randomised words which don't look even slightly believable. If you are going to use
    a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
    hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making this the first true generator on
    the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
    of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
    generated Lorem Ipsum is therefore always free from repetition, injected humour, or
    non-characteristic words etc.`;
    const result = capitalizeWords(inputText);
    console.log(result);