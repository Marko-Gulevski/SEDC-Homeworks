class Books {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus
    }
    hasRead() {
        if (this.readingStatus == "Yes") {
            console.log(`Already read "${this.title}" by ${this.author}.`);
        } else if (this.readingStatus == "No") {
            console.log(`You still need to read "${this.title}" by ${this.author}.`);
        } else {
            alert("Please answer with Yes or No")
        }
    }
}

export default Books;