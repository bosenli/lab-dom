let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();
  
  //Questions refer to README.md

  // Part 1
  document.querySelector("#main-title").textContent = "Welcome to my homepage";
  // document.querySelector("#main-title").textContent = "I am the Captain now";
  //document.title = "playground";
  // Part 2
  document.body.style.backgroundColor = "red";

  // Part 3
  document.querySelector('#favorite-things li:last-child').remove();
  //   const listItems = document.querySelector("#favorite-things")
  //   listItems.removeChild(listItems.childNodes[11]);
  // Part 4
  // let adventures = document.querySelector(".special-title")
  // for (let i = 0; i < adventures.length; i++) {
  //   adventures[i].style.fontSize = "1rem";  
  // }
  //   const biggerFontSize = () => {
  //     let special = document.querySelectorAll('.special-title');

  //     for (item of special) {
  //       item.style.fontSize = "2rem";
  //     }
  //   }

  //   biggerFontSize();
  let adventures = document.querySelector('.special-title')
  for (let i = 0; i< adventures.length; i++){
    adventures[i].style.fontSize= "1px";
  }
  // Part 5
  let race = document.querySelector("#past-races")
  race.removeChild(race.childNodes[7])      //child node is 2*n - 1
  
  // let race = document.querySelector("#past-races")
  //  race.removeChild(race.childNodes[7])
  //   const noChicago = () => {
  //     let pastRaces = document.querySelector("#past-races").querySelectorAll("li")
  //     for (item of pastRaces) {
  //       if (item.textContent === 'Chicago') {
  //         item.remove();
  //       }
  //     }
  //   }
  // noChicago()
  // Part 6
  let node = document.createElement("li");
  node.innerText = "Detroit"
  document.querySelector("#past-races").appendChild(node)

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h1> with text, and a new <p> with some text. Make the new element consistent with the other posts. Think about what order you want to create the elements, and what order you want to append them in.
  const blogPost = document.createElement("div");
  blogPost.className = "blog-post";
  document.querySelector(".blog-post").createElement('h1').innerText = "added H1"
  document.querySelector(".blog-post").createElement('p').innerText = "added para"
  //appendChild
  document.querySelector(".blog-post").appendChild(blogPost)
  

//   let newBlog = document.createElement("div")  //element is to createElement
//   newBlog.classList.add("blog-post");      //add to inside of div element as class <div class=blog-post>
//   newBlog.classList.add("purple");
//   let newH1 = document.createElement('h1');
//   let paragraph = document.createElement('p');
//   newH1.textContent = "Detroit"
//   paragraph.textContent = "Racing along the long road"
//   newBlog.appendChild(newH1)     //inside <div>, newH1 which is h1 is child relationship of <div> is child relationship 
//   newBlog.appendChild(paragraph)
//   document.querySelector(".main").appendChild(newBlog)   

  


}
//standard solutions

// let quotes = [
//   `I live my life a quarter mile at a time`,
//   `I said a ten-second car, not a ten-minute car`,
//   `You can have any brew you want... as long as it's a Corona.`,
//   `You almost had me? You never had me - you never had your car!`,
//   `I don't have friends. I have family.`,
//   `It don't matter if you win by an inch or a mile. Winning's winning.`,
// ];

// window.onload =  function(event) {
  
//   // Random quote of the day generator
//   const randomQuote = function() {
//     document.querySelector('#quote-of-the-day').textContent = `"${
//       quotes[Math.floor(Math.random() * quotes.length)]
//     }"`;
//   };
//   randomQuote();

//   // Do all of your work inside the window.onload function (in other words, here!)

//   // Part 1
//   document.querySelector("#main-title").textContent = "I am the Captain now";
//   // Part 2
//   document.body.style.backgroundColor = "yellow";
//   // Part 3
//   const listItems = document.querySelector("#favorite-things")
//   listItems.removeChild(listItems.childNodes[11]);
//   // Part 4
//   // let adventures = document.querySelector(".special-title")
//   // for (let i = 0; i < adventures.length; i++) {
//   //   adventures[i].style.fontSize = "1rem"; 
//   // }
//   const biggerFontSize = () => {
//     let special = document.querySelectorAll('.special-title');

//     for (item of special) {
//       item.style.fontSize = "2rem";
//     }
//   }

//   biggerFontSize();

//   // Part 5
//   // let race = document.querySelector("#past-races")
//   // race.removeChild(race.childNodes[7])

//   const noChicago = () => {
//     let pastRaces = document.querySelector("#past-races").querySelectorAll("li")

//     for (item of pastRaces) {
//       if (item.textContent === 'Chicago') {
//         item.remove();
//       }
//     }
//   }
// noChicago()
//   // Part 6
//   let node = document.createElement("li");
//   node.innerText = "Detroit"
//   document.querySelector("#past-races").appendChild(node)

//   // Part 7

//   let newBlog = document.createElement("div")
//   newBlog.classList.add("blog-post");
//   newBlog.classList.add("purple");
//   let newH1 = document.createElement('h1');
//   let paragraph = document.createElement('p');
//   newH1.textContent = "Detroit"
//   paragraph.textContent = "Racing along the long road"
//   newBlog.appendChild(newH1)
//   newBlog.appendChild(paragraph)
//   document.querySelector(".main").appendChild(newBlog)



// }
