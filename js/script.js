"use strict";
var cover = document.getElementsByTagName("main")[0];
var Page = /** @class */ (function () {
    function Page(color, content) {
        this.color = color;
        this.content = content;
    }
    Page.prototype.render = function () {
        // Append the content of the page to the cover
        cover.innerHTML = "";
        cover.appendChild(this.content);
    };
    return Page;
}());
var beginStudy = function () {
    var newPageContent = document.createElement("div");
    newPageContent.className = "pageContent";
    newPageContent.innerHTML = "<h2>CHAPTER 1: NUMBERS</h2>";
    // Create a new instance of the Page class for each page
    var newPage = new Page("yourColor", newPageContent);
    // Apply styles or perform any other actions on the new page if needed
    // Render the new page
    newPage.render();
};
