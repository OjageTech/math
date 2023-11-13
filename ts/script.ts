const cover = document.getElementsByTagName("main")[0];

class Page {
    color: string;
    content: HTMLElement;

    constructor(color: string, content: HTMLElement) {
        this.color = color;
        this.content = content;
    }

    render(): void {
        // Append the content of the page to the cover
        cover.innerHTML = "";
        cover.appendChild(this.content);
    }
}

const beginStudy = () => {
    const newPageContent = document.createElement("div");
    newPageContent.className = "pageContent";
    newPageContent.innerHTML = "<h2>CHAPTER 1: NUMBERS</h2>";

    // Create a new instance of the Page class for each page
    const newPage = new Page("yourColor", newPageContent);

    // Apply styles or perform any other actions on the new page if needed

    // Render the new page
    newPage.render();
};
