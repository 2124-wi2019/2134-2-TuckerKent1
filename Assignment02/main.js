window.addEventListener("load", (event) => { //added event listener to window on load

    const mealForm = document.getElementById("meal"); //assigned div element to constant
    const mealOptionsHolder = document.getElementById("mealOptionsHolder");//assigned div element to constant
    const breakfast = document.getElementById("breakfastOptions");//assigned form radio element to constant
    const lunch = document.getElementById("lunchOptions");//assigned form radio element to constant
    const dinner = document.getElementById("dinnerOptions");//assigned form radio element to constant
    const mealOptionsArray = [breakfast, lunch, dinner];//assigned radio elements to array for use with loop
    const mealOptions = document.getElementsByName("mealOptions");//assigned mealOptions element to constant so I could use their index for validation
    const firstName = document.getElementById("firstName");//assigned input form element to constant
    const lastName = document.getElementById("lastName");//assigned input form element to constant
    const age = document.getElementById("age");//assigned input form element to constant
    const myForm = document.getElementById("contactForm");//assigned form location to constant
    const email = document.getElementById("emailAddress");//assigned input form element to constant
    const rating = document.getElementById("mealRating");//assigned select element to constant
    const errorDiv = document.getElementById("errorHolder");//assigned div element to constant
    const commentBox = document.getElementById("commentsHolder");//assigned div element to constant
    let errorUL = document.createElement("ul"); //created ul element for the errorDiv
    let errorHeader = document.createElement("p"); //created paragraph element to use with errorDiv

    myForm.addEventListener("submit", (event) => { //event listener added on form submit
        let errorFlag = false; //declared and initialized boolean var to set upon blank form values
        errorUL.innerHTML = ""; //setting ul element back to blank
        errorHeader.innerHTML = ""; //setting p element back to blank
        if(errorDiv.getAttribute("class") === "visible"){ //checking if errorDiv has assigned class "visible"
            errorDiv.classList.remove("visible"); //remove visible class    
            errorDiv.innerHTML = ""; //removing innerHTML from errorDiv
            errorDiv.classList.add("hidden"); //adding hidden class to errorDiv
        } 
        if(checkValue(firstName.value)){ //checkValue method called to validate input of firstName
            createListItem("First name cannot be left blank"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(checkValue(lastName.value)){ //checkValue method called to validate input of lastName
            createListItem("Last name cannot be left blank"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(checkValue(email.value)){ //checkValue method called to validate input of email
            createListItem("Email cannot be left blank"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(checkValue(age.value)){ //checkValue method called to validate input of age
            createListItem("Age cannot be left blank"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(checkValue(mealForm.value)){ //checkValue method called to validate input of meal selection
            createListItem("Meal must be selected - Breakfast, Lunch, or Dinner"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(mealForm.value === "breakfast"){ //if statement to check if breakfast meal was selected
            if(mealOptions[0].checked === false && mealOptions[1].checked === false && mealOptions[2].checked === false){ //if statement to check if any breakfast options were checked
                createListItem("Breakfast choice must be selected"); //calling method to create li for errorDiv
                errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
            }
        } else if (mealForm.value === "lunch"){ //if statement to check if lunch meal was selected
            if(mealOptions[3].checked === false && mealOptions[4].checked === false && mealOptions[5].checked === false){ // if statement to check if any lunch options were checked
                createListItem("Lunch choice must be selected"); //calling method to create li for errorDiv
                errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
            }
        } else if(mealForm.value === "dinner"){ //if statement to check if dinner meal was selected
            if(mealOptions[6].checked === false && mealOptions[7].checked === false && mealOptions[8].checked === false){ // if statement to check if any dinner options were checked
                createListItem("Dinner choice must be selected"); //calling method to create li for errorDiv
                errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
            }
        }
        if(checkValue(rating.value)){ //checkValue method called to validate input of meal rating
            createListItem("You must select a meal rating"); //calling method to create li for errorDiv
            errorFlag = true; //setting boolean value to true to prevent default and create errorDiv in case of blank value
        }
        if(errorFlag == true){ //if statement checking whether errorFlag bool value was changed to true
            event.preventDefault(); //preventing form submit
            errorHeader.innerHTML = "The following errors must be fixed prior to submitting:"; //adding error message to header
            errorDiv.appendChild(errorHeader); //appending errorHeader to errorDiv
            errorDiv.appendChild(errorUL); //appending errUL to errorDiv
            errorDiv.classList.add("errorBox"); //adding errorBox class to errorDiv
            errorDiv.classList.add("visible"); //adding visible class to errorDiv
        }
    });
    
    mealForm.addEventListener("change", (e) => { //added event listener for change event on meal selection
        makeHidden(mealOptionsArray); //setting meal choices for each respective meal selection to hidden
        mealOptionsHolder.setAttribute("class", "visible"); //setting meal options div to visible
        switch(mealForm.value){ //switch statement for mealForm value
            case "breakfast": //if case is breakfast
                        breakfast.setAttribute("class", "visible"); //setting breakfast options to visible
                        break; //break out of switch
            case "lunch": //if case is lunch
                        lunch.setAttribute("class", "visible"); //setting lunch options to visible
                        break; //break out of switch
            case "dinner": //if case is dinner
                        dinner.setAttribute("class", "visible"); //setting dinner options to visible
                        break; //break out of switch
            default: // default case for the options
                        mealOptionsHolder.setAttribute("class", "hidden"); //div is set to hidden
                        break; //break out of switch
        }   
    });

    firstName.addEventListener("blur", () => { //on blur event of firstName input
        let formatString = firstName.value; //setting value of firstName user entry to variable
        let stringLength = formatString.length; //setting length to variable to use for slice method end index
        let firstLetter = formatString[0].toUpperCase(); //capitalizing first letter of input and setting to variable
        let restName = formatString.slice(1, stringLength); //slicing the rest of the userEntry after the first letter
        formatString = firstLetter + restName.toLowerCase(); //concatenating the uppercase first letter and the rest of the entry
        firstName.value = formatString; //setting form input value to formatted string
    });
    
    lastName.addEventListener("blur", () => { //on blur event of lastName input
        let formatString = lastName.value; //setting value of firstName user entry to variable
        let stringLength = formatString.length; //setting length to variable to use for slice method end index
        let firstLetter = formatString[0].toUpperCase(); //capitalizing first letter of input and setting to variable
        let restName = formatString.slice(1, stringLength); //slicing the rest of the userEntry after the first letter
        formatString = firstLetter + restName.toLowerCase(); //concatenating the uppercase first letter and the rest of the entry
        lastName.value = formatString; //setting form input value to formatted string
    });

    age.addEventListener("blur", () => { //on blur event of age input
        let ageEntered = parseInt(age.value); //converting string value to integer
        if(Number.isInteger(ageEntered) == false){ //checking if entry value is not a number
            alert("Please input only a number for age!"); //alerting user that they must enter an integer
            age.value = 0; //setting age value in the form to 0 -- this is the only way I could stop an endless loop of alerts for the event
            age.focus(); //setting cursor focus to age input field
        }
    });

    rating.addEventListener("change", () => { //event listener added to check value of meal rating upon a change
        switch(rating.value){ //switch statement based on value of meal rating selection
            case "": //case that there was no entry
                if(commentBox.getAttribute("class") === "visible"){ //checking if commentBox is visible
                    commentBox.classList.remove("visible"); //removing visible class
                    commentBox.classList.add("hidden"); //adding hidden class
                }
                commentBox.innerHTML = ""; //resetting commentBox to blank
                break; // breaking out of switch
            case "0": //if user selects zero stars
                commentBox.innerHTML = ""; //resetting commentBox inner HTML to blank
                let commentLabel = document.createElement("label"); //creating label element
                commentLabel.innerHTML = "You rated us zero stars! Please let us know why:"; //setting text inside label element
                let commentBreak = document.createElement("br");//creating line break element
                let commentText = document.createElement("textarea"); //creating textarea  element
                commentText.setAttribute("id", "userComments"); //setting textarea id 
                commentText.setAttribute("name", "userComments"); //setting textarea name 
                commentText.setAttribute("rows", "5"); //setting textarea rows
                commentText.setAttribute("cols", "33"); //setting textarea columns
                commentBox.appendChild(commentLabel); //appending label element to commentBox div
                commentBox.appendChild(commentBreak); //appending linebreak element to commentBox div
                commentBox.appendChild(commentText); //appending textarea element to commentBox div
                commentBox.setAttribute("class", "visible"); //setting div to visible
                break; //break out of switch statement
            case "1": //case 1
            case "2": //case 2 ***** all cases 1-4 will be executing case 4 code
            case "3": //case 3
            case "4": //case 4
                if(commentBox.getAttribute("class") === "visible"){ //if commentBox class is visible
                    commentBox.classList.remove("visible"); //removes visible class
                    commentBox.classList.add("hidden"); //adds hidden class
                }
                commentBox.innerHTML = ""; //resets innerHTML vlaue of commentBOx
                break; // breaks out of switch statement
        }
       
    });

    myForm.addEventListener("reset", () => { // event listener add for reset event of form
            errorDiv.classList.remove("visible"); //remove visible class of errordiv
            errorDiv.innerHTML = ""; //reset innerHtml of errorDiv
            errorDiv.classList.add("hidden"); //add hidden class to errorDiv
            commentBox.setAttribute("class", "hidden"); //set commentBox div to hidden also
    });

    function makeHidden(mealArray){ //function sets all classes of meal selection to hidden
        for(option of mealArray){ //for each loop to iterate each selection --breakfast lunch dinner -- added the objects to an array for simplicity
            if(option.getAttribute("class") == "visible"){ // if class is visible
                option.setAttribute("class", "hidden"); //sets class to hidden
            }
        }
    };

    function createListItem(errorMessage){ //function to create and append an li to the error ul
        let errorElement = document.createElement("li"); //creates li element
        let errorNode = document.createTextNode(errorMessage); //creates textNode with passed errorMessage from specific value creating it
        errorElement.appendChild(errorNode); //appending textNode to li
        errorUL.appendChild(errorElement); //appending li to ul
    };

    function checkValue(userEntry) { //checkValue funtion for ease of validating input values
        if(userEntry == ""){ //if passed value is blank
            return true; //returns true to denote blank entry
        } else { //else statement
            return false; //returns false to validate that user entered some data
        }
    };


});