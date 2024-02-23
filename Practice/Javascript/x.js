class BrowserHistoryClass {
  constructor(homePage) {
    this.currentPageIndex = 0;
    this.currentHistory = [
      homePage,
    ];
  }
  

  // visits a url, clears forward history
  // doesnt return anything
  visit = visitedUrl => {
    console.log("visiting " + visitedUrl)
    // clears forward history
    this.currentHistory = this.currentHistory.slice(0, this.currentPageIndex+1)
    // visit a url
    this.currentHistory.push(visitedUrl);
    this.currentPageIndex += 1;
  }

  // moves numOfSteps back in history, returns current url
  // if steps in history does not exist, go furthest back
  back = numOfSteps => {
    const changedCurrentPageIndex = this.currentPageIndex - numOfSteps
    this.currentPageIndex = Math.max(0, changedCurrentPageIndex)
    return this.currentHistory[this.currentPageIndex]
  }

  // moves numOFStep forward in history, returns current url
  // if steps in history does not exist, go furthest forward
  forward = numOfSteps => {
    const changedCurrentPageIndex = this.currentPageIndex + numOfSteps
    const maxIndex = this.currentHistory.length - 1
    this.currentPageIndex = Math.min(maxIndex, changedCurrentPageIndex)
    return this.currentHistory[this.currentPageIndex]
  }
};

// example:
// initialize with leetcode.com, visit google.com, visit facebook.com, visit spotify.com, back 2, visit twitch.com, back 2, forward 2
const bh = new BrowserHistoryClass("leetcode.com");
bh.visit("google.com");
bh.visit("facebook.com");
bh.visit("spotify.com");
a1 = bh.back(2);
console.log(a1)
bh.visit("twitch.com");
a2 = bh.back(2);
console.log(a2)
a3 = bh.forward(3);
console.log(a3)