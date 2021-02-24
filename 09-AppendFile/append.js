//As always, we grab the fs package to handle read/write

const fs= require('fs');

//Next, we store the text given to us from the command line

const text= process.argv[2];


//Next, we append the text into the "sample.txt" file.
//if the file didn't exist, then itgets created on the fly

fs.appendFile("sample.txt", "text", function(err) {
    if (err) {
        console.log (err)

        console.log("Content Added");
    }

else {
    console.log("Content Added")
}

});

//If an error was experienced we will log it

//If no error is epxerience, we'll log the phrase "Content "