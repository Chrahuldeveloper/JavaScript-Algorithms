// you can use stack to implement SearchHistory on your webapp
class SearchHistory {
  constructor() {
    this.Searches = [];
  }

  Push(Searchitem) {
    return this.Searches.push(Searchitem);
  }

  Pop() {
    return this.Searches.pop();
  }

  RecentSearch() {
    return this.Searches;
  }
}

// const search = new SearchHistory();

// search.Push("Country");
// search.Push("How are you");
// search.Push("wassup!");

// console.log(search);
