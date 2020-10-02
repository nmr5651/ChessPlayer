/* 
         * Global variables that are used throughout the project
         * --------------------------------------------------------------
         * jsonValues - Javascript Formatted Array (JSON) for less typing
         * jsonLength - length of the array
         * peopleObjects - prototype array of people objects
         * pArr - acutal array of people, used later in the project
         * array - used to hold the select statements
         * --------------------------------------------------------------
         */
        const jsonValues = jsonData.values;
        const jsonLength = Object.keys(jsonValues).length;
        const peopleObjects = [];
        var pArr;
        let array = [];

        /*
         * Creates the Top header for the website; appends to body
         */

        const title = document.createElement('h1');
        title.id = "title";
        title.textContent = "Which Famous Chess Player Are You?";
        document.body.append(title);

        /*
         * Function call to create the login features of the website
         * Create function to make code have more readability
         */
        createLoginBox();


        /*
         * Next three sections are creating the divs needed to support for styling options
         */
        const container = document.createElement('div');
        container.id = "container";
        document.body.append(container);

        const inner = document.createElement('div');
        inner.id = "inner";
        container.append(inner);

        const personDiv = document.createElement("div");
        personDiv.id = "personDiv";
        container.append(personDiv);

        /*
         * Runs the main method for creating the selects and options
         * parameter - String that is assoicated to the key value within the JSON array
         */

        createSelectList("Main");

        function createSelectList(datakey){
            for (let i = 0; i < jsonLength; i++) {
                
                // If the key doesn't match the parameter, continue with the code
                if(jsonValues[i].key != datakey)
                    continue;

                // If the depth of the current index is 3, it will run the method below
                // This will also break from the loop, since no more select statement will need to be created
                if(jsonValues[i].depth == 3){
                    createChessPlayer(jsonValues[i]);
                    break;
                }
                
                /*
                 * An important part of this code is that I make the className for each select
                 * the depth of the index. This is used so I can keep track of which depth I am currently
                 * on, and whether or not I need to delete prior selects. More of this code will be talked about
                 * as we get closer to the deletion portion of the code.
                 */

                // This Chunk creates the select statement ad appends to a div

                selectList = document.createElement('select');
                selectList.id = jsonValues[i].key;
                selectList.name = jsonValues[i].desc;
                selectList.className = jsonValues[i].depth;
                inner.append(selectList);

                // First option create will always be disabled, as the user will not be able to select it
                var nullOption = document.createElement('option');
                nullOption.text = jsonValues[i].desc;
                nullOption.selected = this;
                nullOption.disabled = true;
                selectList.appendChild(nullOption);

                // Create first selectable option
                var option1 = document.createElement('option');
                option1.value = jsonValues[i].option1;
                option1.text = jsonValues[i].option1;
                selectList.appendChild(option1);
        
                // Creates second selectable option
                var option2 = document.createElement('option');
                option2.value = jsonValues[i].option2;
                option2.text = jsonValues[i].option2;
                selectList.appendChild(option2);

                /*
                 * Create third selectable option
                 * This might be null, depending on the format of the JSON file.
                 * If it is null, it will still be created with a blank text and be disabled
                 */
                var option3 = document.createElement('option');
                if(jsonValues[i].option3 == ""){
                    option3.text = "";
                    option3.disabled = true;
                }
                else{
                    option3.value = jsonValues[i].option3;
                    option3.text = jsonValues[i].option3;
                }
                selectList.appendChild(option3);

                // Creates a local prototype of all the selects present
                // With that, it create a real array from that prototype
                const items = document.querySelectorAll('select');
                array = Array.from(items);

                // Event listener for whener the select has some sort of change
                selectList.addEventListener("change", (event) => {

                    // The depth of the targeted option
                    var newListDepth = event.target.className;
                
                    array.forEach(element => {
                        /*
                         * Hardest part of the code is here. Within the forEach loop we check if the element within
                         * the array's classname is greater than the new list depth. This is possible since I made
                         * the className = depth, which is an integar.
                         * Then, checked if the element within the for loop is not equal to 0
                         * (This is done becuase the first option should never be deleted)
                         */
                        if((element.className > newListDepth) && (element.className != "0")){
                            // This will remove the child of the parent nodes
                            element.parentNode.removeChild(element);
                            // Runs a method to delete the person section (name, board, desc) if any are present
                            clearPerson(pArr);
                        }

                    });
                    // Re-run this method with the new select, continueing the process
                    createSelectList(event.target.value);
            }
                )};
        }

        /*
         * Function that will create the person section of the website.
         * Person section consists of the professional chess players name, the board of the opening, and a brief desc of the person
         */
        function createChessPlayer(person){

            // Create an object of the person base of the json file
            var person = { name : person.name, desc : person.desc, board : person.board };

            // Add object to prototype, then create a functioning array from said prototype
            peopleObjects.push(person);
            pArr = Array.from(peopleObjects)

            // Since there can be only one person visible at a time, if the length is greater than 1,
            // it will clear that person from the screen.
            if(pArr.length > 1){
              clearPerson(pArr);
            }

            // These blocks create html elements needed to show information onto the screen
            var title = document.createElement("h1");
            var titleNode = document.createTextNode(person.name);
            title.append(titleNode);
            personDiv.append(title);

            var game_board = document.createElement("img");
            game_board.id = "game_board";
            game_board.src = person.board;
            personDiv.append(game_board);

            var desc = document.createElement('p');
            var descNode = document.createTextNode(person.desc);
            desc.append(descNode);
            personDiv.append(desc);
        }

        /*
         * Function to clear the person seciton off the screen
         */
        function clearPerson(pArr){
            // Grabs the element based on the ID given
            var del = document.getElementById('personDiv');
                
            // While loop to continully remove the firstchild of the array
            while(del.firstChild) { 
                del.removeChild(del.firstChild); 
            } 
            // This method shifts the index's, which is need in order to visually show the correct person
            pArr.shift();
        }

        /*
         * Function to create the login box for the website.
         * This holds function holds:
         * - input box for user's name
         * - submit button to save name to local storage
         * - delete local storage button to delete local storage
         */
        function createLoginBox(){

            // Creates div needed for styling
            var loginDiv = document.createElement('div');
            loginDiv.id = "loginDiv";
            document.body.append(loginDiv);

            // Creates a small header based upon if there is a named stored within the local storage
            var login = document.createElement("h3");
            var loginNode;
            if(localStorage.length != 0){
                loginNode = document.createTextNode("Hello Again, " + localStorage.getItem("1"));
                login.append(loginNode);
            }
            else{
                loginNode = document.createTextNode("Hello new user!");
                login.append(loginNode);
            }
            loginDiv.append(login);

            // Creates the other buttons needs for the login support / delete storage features
            var loginInput = document.createElement("input");
            loginInput.placeholder = "Enter your first name";
            loginInput.id = "loginInput";
            loginDiv.append(loginInput);

            var loginBtn = document.createElement("button");
            loginBtn.id = "loginBtn";
            var loginBtnNode = document.createTextNode("Submit");
            loginBtn.append(loginBtnNode);
            loginDiv.append(loginBtn);

            // Whenever user clicks on the login button, it will delete from storage if value if already there
            // then, set the new name and reload the page
            loginBtn.addEventListener("click", () => {
                var txt = document.getElementById("loginInput");
                if(localStorage.length > 1){
                    localStorage.clear();
                }
                localStorage.setItem("1", txt.value);
                location.reload();


            })

            var delStorage = document.createElement("button");
            var delStorageNode = document.createTextNode("Delete Local Storage");
            delStorage.append(delStorageNode);
            delStorage.id = "delStorage";
            loginDiv.append(delStorage);

            // Event listener for whenever it is clicked, it will delete everything within the local storage
            // and reload the webpage
            delStorage.addEventListener("click", () => {
                localStorage.clear();
                location.reload();
            })
        }