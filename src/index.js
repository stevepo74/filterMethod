// .filter()
// creates a new array

// const shows = ["Lupin", "Cobra Kai", "24", "Mr. Robot"];

// const displayShows = shows.filter((word) => word.length <= 5);

// console.log(displayShows);

// const showsDisplay = document.querySelector(".display");

// showsDisplay.innerHTML = displayShows;

const shows = [
  {
    name: "Lupin",
    series: 1,
    episodes: 5
  },
  {
    name: "Cobra Kai",
    series: 3,
    episodes: 30
  },
  {
    name: "24",
    series: 5,
    episodes: 50
  },
  {
    name: "Mr. Robot",
    series: 3,
    episodes: 24
  }
];

const displayShows = shows.filter((show) => show.series > 2);
console.log(displayShows);

const showsDisplay = document.querySelector(".display");
