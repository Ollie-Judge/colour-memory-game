---------
## User Requirements
* Game must be fun and enjoyable
* Game must be responsive
---------
## Owner Goals
* I want the user to enjoy the game
---------
## Wire Frames
![Wire Frame for the memory game](assets/img/memory-game-wireframe.png)
---------
## Features
* Interactive buttons that respond on user inputs
* Spongebob themed, each colour represents a character; pink = patrick, yellow = Spongebob, blue = Squidword, brown = Mr crabs

---------
## Technologies Used
* HTML
* CSS
* JavaScript
* Jquery
* Google Fonts

---------
## Testing

### HTML validation
![]()

### CSS Validation

### JavaScript Validation

---------
## Deployment

### Deploying to GitHub Pages

1. Log in to GitHub and find the GitHub repository
2. At the top of the repository, click on the "Settings" button in the menu.
3. In the Settings page scroll down until you find the "Pages" area.
4. Click on the link in the "Pages" section, which will send you to the dedicated tab.
5. then, in the "Source" area, click the dropdown called "None" then select "Master Branch".
6. The page will automatically refresh.
7. Finally, scroll down the page to locate the newly published site in the "GitHub Pages" section.

## Forking the Repositiory

Forking the GitHub repository makes a copy of the original repository on your GitHUb account, which allows you to make changes to the document wihtout changing the original repository. If you wish to make a clone, follow these steps on how ot do it:

1. Log in to your GitHub account and find the repository.
2. At the top of the repository above the "Settings" button on the menu, find and click the "Fork" button.
3. After clicking the "Fork" button, You will now have a copy of the original repository in your GitHub account.

## Making a Local Clone of the Repository

1. Log in to GitHub and find the GitHub repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and paste the URL that you copied in Step 3.
    * Your code should look like this: $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
7. Press Enter and then your local clone will be created.
---------
## What To Improve Or Add

---------
## Issues when making the project
* Connecting the background image to the project - (FIXED) the code was fine, only problem was that i needed to clear my cache, once i did a hard reset by clicking reload in the dev-tools window i found that everything loaded.

* The level will not advance past level 1 - (FIXED) the id selector was missing the hashtag which stopped it from working

* No instructions and therefore not easy to understand what to do - (FIXED) Added instructions to the page

* Doesnt work on phone as it requires a keyboard button to be pushed which cant be done on a phone or tablet- (FIXED) changed the keypress function to a .click function which makes it friendly to mobile and tablet users as well as computer users.

* Colours appear in their own seperate columns which doesnt make it easy for the user to see or play the game - (FIXED) changed the height and width measurement units from rem to vh and vw to make the project more responsive to different devices.

* when you loose the game the game jumps to level 1 instead of showing the game over message - (FIXED) the level display text was in the wrong place, stopping the if else statement from displaying correctly, due to the level text overriding the else part.
---------
## Credits
* https://wallpapercave.com/spongebob-underwater-wallpapers - for the background image
* https://fonts.google.com/
* https://stackoverflow.com/questions/14304473/jquery-fadein-delay-fadeout - for fading in and out divs
* https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/ - used for understanding what unit of measurement to use to be the most responsive.