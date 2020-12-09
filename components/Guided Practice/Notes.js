//Warm Up Notes:
/*Components:
- A part or element of a larger whole
- Singular Modulat Peices of code
- Usually consists of HTML, CSS, an JS
- Reusable
- D.R.Y
- Can Stand Alone

*Example: For 1 Button:
  let button = document.querySelector ('.button');

  button.addEventListener('click', (event)=>{
    alert(`The button clicked says: ${event.target.textContent}`)
  })

    *Example 2: Using the same event listener for different buttons:
      let button = document.querySelectorAll ('.button');

      button.forEach(b => {
        b.addEventListener('click', (event)=>{
        alert(`The button clicked says: ${event.target.textContent}`)}
      })

***JS that will build a component:
- You can't add CSS from JS; but you can add inline styles to JS

⭐ Create a brand new element in JS *///:
//-----------------------------------------------------------------------------------------------------------------------
  //This is D.R.Y ONLY if you plan to create just ONE button
  document.createElement('h1'); //currently floating in browser

  const button = document.createElement('button'); //creates a button (will not appear yet)
  button.textContent = 'THIS IS A BUTTON COMPONENT';  //The text inside the button
  button.classList.add('button'); //This adds a class to the button that you originally would write in HTML
  button.classList.add('large-button'); //This adds another class to that one button. 
      //***in HTML it would look like this: (<button class="button large-button"> </button>)

  //in order to add button to appear on the page...
    const container = document.querySelector('container'); //grab the parent that you want the element to appear in
    container.appendChild(button); //.appendChild will be created in the element you want it in

    container.prepend(button); //This will create the Button at the top of the document

  //Add functionality to the button
  let button = document.querySelectorAll ('.button');

  button.addEventListener('click', (event)=>{
    alert(`The button clicked says: ${event.target.textContent}`)
  })

  //Creates another button BUT its a mess bc ^^^ + below is ALOT of code
      const button2 = document.createElement('button');
      button2.textContent = 'THIS IS A BUTTON COMPONENT';
      button2.classList.add('button'); 
      button2.classList.add('large-button'); 

      button2.addEventListener('click', (event)=>{
        alert(`The button clicked says: ${event.target.textContent}`)
      })

      const container = document.querySelector('container'); //grab the parent that you want the element to appear in
      container.appendChild(button2);

//-----------------------------------------------------------------------------------------------------------------------
//D.R.Y Code:
  //In order to make cleaner code: Create a function that does the process of creating another button
      function buttonCreator(text){
        const button = document.createElement('button'); //creates a button (will not appear yet)
        button.textContent = text;  //Add text inside the button

        button.classList.add('button'); //This adds a class to the button that you originally would write in HTML
        button.classList.add('large-button'); //This adds another class to that one button. 

        button.addEventListener('click', (event)=>{ //Adds an eventListener aka Functionality to the button
          alert(`The button clicked says: ${event.target.textContent}`)
        })

        return button; //have to return it in order to use this function outside of its scope
      }

        const button1 = buttonCreator('THIS IS A BUTTON COMPONENT'); //Your able to use the word button again, bc the button in that function can't be called out. So you 
                                        //have to call the function outside in order to use the function
                                        //inside the () you are substituting the parameter
        console.log('The product of the buttonCreator function', button1)
        //That console.log will output: "The product of the buttonCreator funtion" "<button class='button large-button'>THIS IS A BUTTON COMPONENT</button>"

      //***^^^That won't show up on the page yet */
        const container = document.querySelector('container'); //grab the parent that you want the element to appear in
        container.appendChild(button1); //.appendChild will be created in the element you want it in

  //Create an additional button...
    const button2 = buttonCreator('THIS IS A SECOND COMPONENT'); //will look identical to the first button
    container.appendChild(button2); //in order to add to page
  
  //Additional one:
  container.appendChild(buttonCreator('THIRD ONE HERE'));

//^^^ By making a button like this in JS, you don't need to create a button in the HTML

//In order to change a buttons text color:
button1.style.color = 'green';

//-----------------------------------------------------------------------------------------------------------------------
//Pull Information from the server/an array: This is NOT D.R.Y

const fakeData = [
'Button One',
'Button Two',
'Button Three',
'Button Four',
]

const button1 = buttonCreator(fakeData[0]);
const button2 = buttonCreator(fakeData[1]);
const button3 = buttonCreator(fakeData[2]);
const button4 = buttonCreator(fakeData[3]);

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(button4);

//Easier Way:

for(let i = 0; i < fakeData.length; i++){ //this creates a button for each item in the array
  let button = buttonCreator(fakeData[i])
}

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(button4); //Still trying to add each individual button...You wont get anything bc for loop is block scope and you cant access it from the outside

    //Solve ^^^: ***Rarely see an for loop, most likely will see a array method... Below
    for(let i = 0; i < fakeData.length; i++){ //this creates a button for each item in the array
      let button = buttonCreator(fakeData[i])
      container.appendChild(button);
    }

        //Array Method instead: If want to iterate Data and immediate send to DOM

        fakeData.forEach((item) => { 
          let button = buttonCreator(item);
          container.appendChild(button);
        })

        //OR

        let buttonsArray = fakeData.map ((item) => {
          //return a new array, with the new item, after being manipulated by the callback function
          let button = buttonCreator(item);
          return button;
        })
        console.log('Here are the Buttons', buttonsArray); //buttons won't appear on screen yet, your only creating the array
        //then...
        buttonsArray.forEach(button => {
          container.appendChild(button)
        })

//-------------------------------------------------------------------------------------------------------------------------
/*HTML for the Guided Practice:
<body>
<div class="home">
<header>
  <nav class="main-nav">
    <a href="#" class="nav-item">Home</a>
    <a href="#" class="nav-item">About</a>
    <a href="#" class="nav-item">Blog</a>
    <a href="#" class="nav-item">Contact</a>
  </nav>
</header>
<section class="main-content">
  <h2 class="first-heading">HTML, CSS, or JS</h2>
  <p class="testing">No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be
    destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an ideal and if
    they can't stop you then you become something
    else entirely. Legend, Mr Wayne.
  </p>
</section>
<section class="container secondary">
  <div class="accordion">
    <!-- Remove this -->
    <div class="panel">
      <div class="panel-bar">
        <h3>Title of Panel</h3>
        <div class="panel-buttons">
          <button class="panel-btn-open">&#9660</button>
          <button class="panel-btn-close hide-btn">Close</button>
        </div>
      </div>
      <div class="panel-content toggle-on">
        Content of panel
      </div>
    </div>
    <!-- Remove this -->
  </div>
</section>
</div>
</body>

</html>
*/

//-------------------------------------------------------------------------------------------------------------------------
// TASK 0- Motivate demoing a small makeImage component
//  that takes an Object: { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
{ imageURL: "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg",},
{ imageURL: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg" },
{ imageURL: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg" },
];

// the component is an taking a image URL and creating an image element:

function makeImage({ imageURL }) { //using {} your entering the parameter and the object at the same time

  const imgElement = document.createElement("img"); // making an image element
    //Setting styles for that image (bc goal is to not have it in html & css but all in JS)
  imgElement.style.width = "10em"; // set the width property
    //Adding the images attribute
  imgElement.src = imageURL; // forming the image layout. Needs to add the src in order to add the link the image is coming from

  return imgElement; // Need to return in order to access the img outside of this functions scope
}

    // iterate over the data created in the function makeImage thats pulling information from imageData array:

    imageData.forEach((imgObj) => { //imgObj will represent each imageURL in the imageData Array
      // 1 - make an image
        const img = makeImage(imgObj); // invoke component maker
      // 2 - attach it to the DOM // to see on the page
        document.body.prepend(img); //added to the top of the page
    });
    
//-------------------------------------------------------------------------------------------------------------------------
// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

    //bringing data from another js file into this data (keeps data organize and seperate)
import panelData from "./data/panelData"; // ./ =going into source file... data/ =opens the folders... panelData =the js file wanted
import arrows from "./data/constants";
    //looks like:
    {
      open: '\u25bc',
      close: '\u25b2'
    }

//-------------------------------------------------------------------------------------------------------------------------
// TASK 2- Verify our imports using log statements
console.log(panelData); // log the panelData
console.log(arrows.open); // log the open arrow
console.log(arrows.close); // log the close arrow

//-------------------------------------------------------------------------------------------------------------------------
// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.

const accordion = document.querySelector(".accordion"); //.accordion is a class name for the overall div that has the panel inside

//-------------------------------------------------------------------------------------------------------------------------
// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.

function makePanel({ title, content } /* what data does the panel need? */) { //***information is from Task 4 to Task 9

//-------------------------------------------------------------
// TASK 5- Instantiate all the elements needed for a panel
const panel = document.createElement("div");
const panelBar = document.createElement("div");
const panelContent = document.createElement("div");
const panelTitle = document.createElement("h3");
const panelButtons = document.createElement("div");
const openButton = document.createElement("button");
const closeButton = document.createElement("button");

  //-------------------------------------------------------------
  // TASK 6- Setup the structure of our elements
  panel.appendChild(panelBar);
  panel.appendChild(panelContent); //these 2 are divs inside the panel, the rest is within another div
  panelBar.appendChild(panelTitle); //the panelTitle will be created inside of the panelBar
  panelBar.appendChild(panelButtons); //the panelButtons is created inside of the panelBar
  panelButtons.appendChild(openButton); //Now openButton is created inside of panelButtons
  panelButtons.appendChild(closeButton);

  /*
    <div>                   // panel

      <div>                    // panelBar
        <h3></h3>                // panelTitle
        <div>                    // panelButtons 
          <button></button>        // openButton
          <button></button>        // closeButton
        </div>
      </div> //end of panelBar

      <div></div>           // panelContent

    </div>
  */

    //-------------------------------------------------------------
    // TASK 7- Add proper class names to our elements (See index.html for reference)
      // paying attention to the elements that need to start out hidden
    panel.classList.add("panel");
    panelBar.classList.add("panel-bar");
    panelContent.classList.add("panel-content");
    panelButtons.classList.add("panel-buttons");
    openButton.classList.add("panel-btn-open");
    closeButton.classList.add("panel-btn-close", "hide-btn");

      //-------------------------------------------------------------
      // TASK 8- Set text content using arguments as raw material
      //  and also using the open and close arrows imported at the top of the file
      panelTitle.textContent = title; //the string for this title, is the parameter in makePanel, and the arguement is below where makePanel is invoked
      panelContent.textContent = content; //^^^
      openButton.textContent = arrows.open; //the string txt is defined in the "./data/constants" file
      closeButton.textContent = arrows.close; //^^^

        //-------------------------------------------------------------
        // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
        //  - the open button needs to go away (the 'hide-btn' class name controls this)
        //  - the close button needs to show (the 'hide-btn' class name controls this)
        //  - the contents need to show (the 'toggle-on' class name controls this)
      
        panelButtons.addEventListener("click", (event) => {
          openButton.classList.toggle("hide-btn");
          closeButton.classList.toggle("hide-btn");
          panelContent.classList.toggle("toggle-on");
        });
        // don't forget to return the panel!
        return panel;
      }
      const test = makePanel({ title: "test title", content: "test content" }); //invoking the makePanel function (still floating/won't show up yet)
      accordion.appendChild(test); //allowing it to show up on the page
      //everything created in the makePanel function will be triggered when the variable "test" is used.
      //now in the accordion div that was created ontop the document (line 263)
          //whatever is inside the .appendChild( ), in this case "test" 
               //everything in the function of makePanel that will be triggered with "Test", will be created on the page (.appendChild()) inside the accordion div

//-------------------------------------------------------------------------------------------------------------------------
// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.

const panelElement = panelData.map((panelData) => { //panelData is what we imported in, were creating a new array with the panelData, calling it panelElement
return makePanel(panelData); //when the panelElement is invoked, your returning the function makePanel, with the panelData array 
});

panelElement.forEach((panelElement) => { //your looping thru the new array (panelElement) and for each index in panelData, your creating (.appendChild()) to the accordian div
accordion.appendChild(panelElement);
});
// so forth, for each individual index in panelData, that index is going thru makePanel function and being created inside the accordion div, then the next index repeats
// until all the index's in panelElement-->panelData has gone thru the function of makePanel and been created inside the accordion div

//-------------------------------------------------------------------------------------------------------------------------
// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
