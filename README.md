# Carrot clicker game
![responsive](assets/images/readme/responsive.jpg)

[LIVE PAGE](https://sarune95.github.io/carrot/)

# Table of content

* [Design](#design)
  * [Colors](#colors)
  * [Fonts](#fonts)
* [Features](#features)
  * [Favicon](#favicon)
  * [Logo](#logo)
  * [Welcome message](#wellcome-message)
  * [Information](#information)
  * [Goals](#goals)
  * [404](#404)
  * [Main game panel](#main-game-panel)
  * [Game button](#game-button)
  * [Upgrades](#upgrades)
  * [Friends](#friends)
  * [Footer](#footer)
  * [Error message](#error)
  * [End game goal](#end-game-goal)
* [Automated testing](#automated-testing)
  * [HTML](#html)
  * [CSS](#css)
  * [JavaScript](#javascript)
  * [Lighthouse](#lighthouse)
    * [Starter page](#starter-page)
    * [Game page](#game-page)
    * [404](#404-1)
* [Manual testing](#manual-testing)
  * [Web site](#web-site)
    * [Home page](#home-page)
    * [Game page](#game-page-1)
    * [404 page](#404-page)
* [Bugs](#bugs)
* [Unfixed bugs](#unfixed-bugs)
* [Technologies](#technologies)
  * [Languages](#languages)
  * [Validators](#validators)
  * [Programs](#programs)
* [Deployment](#deployment)
* [Credits](#credits)

# Design

Carrot clicker game is designed for any age group of people, simple looking and easy to understand. In this game you have to keep clicking till unlock upgrades and collect your goals in order to win the game. You can play this game at any time, anywhere, as there is no time limit.

## Colors

![colors](assets/images/readme/colors.jpg)

The colors were chosen in order to obtain the best possible contrast performance. Also having a nice view for user, and best performance to navigate through content.

Vivid sky blue - background

Indigo dye - text

Pumpkin - buttons

![text_color](assets/images/readme/text_color.jpg)

Chosen colors giving triple A contrast between text and background.

## Fonts

Font style was selected as the browser's default to keep performance in mind.

# Features

Carrot web game has basic clicker game features. Main button increase value and goes together with other multipliers, like upgrades and helpers.

## Favicon

![favicon](assets/images/readme/favicon.jpg)

Nice logo picture gives user, easy way to distinct web site in browser's tabs.

## Logo

![logo](assets/images/readme/logo.jpg)

Shows web site name and picture, describing the game theme and what about it to the user.

## Welcome message

![welcome](assets/images/readme/welcome.jpg)

Web site meets user with a nice welcome message, and clear directions to start the game.

## Information

![information](assets/images/readme/information.jpg)

Describes how to play game. Clearly indicates available options in the game.

## Goals

![goals](assets/images/readme/goals.jpg)

Represents in game existing goals, and what takes to obtain them, also mentioning about end game goal requirement.

## 404

![404](assets/images/readme/404.jpg)

Also included 404 page in files directory with Carrot game theme and colors, which contains message and return link to website start page.

## Main game panel

![panel](assets/images/readme/main_game_panel.jpg)

In this panel on the left side is represented 3 game goals, after gathering required amount, they change from Unlock into achievement name. Right side representing game statistics which are obtained by user and personally chosen upgrades.

## Game button

![game button](assets/images/readme/game_button.jpg)

Main game button which provides main game function to increase carrots count.

## Upgrades

![upgrades](assets/images/readme/upgrades.jpg)

Upgrades section includes three individual items. On the left show visual appearance, leading by details for individual upgraded and following to button to buy or upgrade.

## Friends

![friends](assets/images/readme/friends.jpg)

In this section represented all your available helpers. On left shows they'r personal picture, middle shows details and follows by button to hire them and upgrade, but best part friend brings carrots to user without pressing main game button, but good things came at pretty steep price,  then other upgrades.

## Footer

![footer](assets/images/readme/footer.jpg)

Footer are simple contains only major social links.

## Error

![error](assets/images/readme/error.jpg)

This error message alert only when user try upgrade or hire friend with insufficient goods.

## End game goal

![end game](assets/images/readme/end_goal.jpg)

This message waiting everyone, but only shows up to mostly devoted users, which are chosen to gain enough carrots to reach end game.

# Automated testing

## HTML

HTML was validated using [https://validator.w3.org/](https://validator.w3.org/)

index.html ![html](assets/images/readme/html.jpg)

game.html ![html](assets/images/readme/html.jpg)

404.html ![html](assets/images/readme/html.jpg)

## CSS

CSS was validated using [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

![css](assets/images/readme/css.jpg)

## JavaScript

JavaScript was validated using [https://jshint.com](https://jshint.com)

Return no errors

was tested with enabled setting (New JavaScript features (ES6)) in configure option.

![java](assets/images/readme/java.jpg)

## Lighthouse

### Starter page

Desktop

![index_desktop](assets/images/readme/index_desktop.jpg)

Mobile

![index_mobile](assets/images/readme/index_mobile.jpg)

### Game page

Desktop

![game_desktop](assets/images/readme/game_desktop.jpg)

Mobile

![game_mobile](assets/images/readme/game_mobile.jpg)

### 404

Desktop

![404_desktop](assets/images/readme/404_desktop.jpg)

Mobile

![404_mobile](assets/images/readme/404_mobile.jpg)

# Manual testing

## Web site

### Home Page

| Feature | Test | Result |
| --- | --- | --- |
| Logo text | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Logo image | Testing with multiple resolutions stays responsive | Stays responsive |
| Welcome message | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Start game button | When clicked should enter game | Redirecting to the game |
| Start game button | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Information text | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable | 
| Goal text | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Facebook link | When clicked should open facebook in new tab | Opens in new tab |
| Twitter link | When clicked should open twitter in new tab | Opens in new tab |
| Instagram link | When clicked should open instagram in new tab | Opens in new tab |
| Discord link | When clicked should open discord in new tab | Opens in new tab |

### Game page

| Feature | Test | Result |
| --- | --- | --- |
| Logo text | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Logo image | Testing with multiple resolutions stays responsive | Stays responsive |
| Goal list | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Goal list | Records all goals on right amount goods | Records all goals|
| Info list | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Info list | Records all statistics right | Shows right amount goods, records per click, records per second |
| Hit button | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Hit button | Check if increase right amount goods | Increase correct amount |
| Upgrade item image | Testing with multiple resolutions stays responsive | Stays responsive |
| Upgrade item statistics | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Upgrade item statistics | Records correct levels and prices after upgrade | Shows right levels and price |
| Upgrade item button | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Upgrade item button | Increase upgrade item levels and prices | Increase levels and prices |
| Friends item image | Testing with multiple resolutions stays responsive | Stays responsive |
| Friends item statistics | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Friends item statistics | Records correct levels and prices after upgrade | Shows right levels and price |
| Friends item button | Testing with multiple resolutions stays responsive and readable | Stays responsive, readable |
| Friends item button | Increase upgrade item levels and prices | Increase levels and prices |
| Facebook link | When clicked should open facebook in new tab | Opens in new tab |
| Twitter link | When clicked should open twitter in new tab | Opens in new tab |
| Instagram link | When clicked should open instagram in new tab | Opens in new tab |
| Discord link | When clicked should open discord in new tab | Opens in new tab |

### 404 page

| Feature | Test | Result |
| --- | --- | --- |
| Logo text | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Logo image | Testing with multiple resolutions stays responsive | Stays responsive |
| Message | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Return button | Testing with multiple resolution stays responsive and readable | Stays responsive, readable |
| Return button | Returns to home page | Redirects to home page |
| Facebook link | When clicked should open facebook in new tab | Opens in new tab |
| Twitter link | When clicked should open twitter in new tab | Opens in new tab |
| Instagram link | When clicked should open instagram in new tab | Opens in new tab |
| Discord link | When clicked should open discord in new tab | Opens in new tab |

# Bugs

| Issue | Fix |
| --- | --- |
| Wrong picture format leading to poor performance of web site | Change format from jpg to webp |
| Links missing attributes leading to open sites inside of web site | Added target, rel and aria-label |
| Multiple typing errors in javascript leading to console errors | Removed typing errors |
| Multiple div tags without closing tags | Added closing tags |
| Css file filed with unused classes | Removed unused classes |
| Wrong font size in few media queries leading bad responsiveness | Corrected font sizes |

# Unfixed bugs

Under Goals section, after unlocking achievement its return in primary position UNLOCK when your goods depleted or used, than required amount of a achievement.

# Technologies

## Languages

[HTML](https://en.wikipedia.org/wiki/HTML) for content and structure

[CSS3](https://en.wikipedia.org/wiki/CSS) for styling

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) for logic and functions

## Validators

[W3C HTML](https://validator.w3.org/) validate HTML

[W3C CSS](https://jigsaw.w3.org/css-validator/) validate CSS

[Jshint](https://jshint.com) validate JavaScript

## Programs

[Github](https://github.com/) to save and store the files for the website

[Favicon.io](https://favicon.io/) to create the favicon

[Am I Responsive?](https://ui.dev/amiresponsive) to show web site image on different devices

[Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) to troubleshoot and test features

[Lighthouse](https://developer.chrome.com/en/docs/lighthouse/) to check web site performance

# Deployment

This site was deployed via GitHub pages using the following steps:

- From the GitHub repository, navigate to Settings
- In the left-hand navigation section select Pages
- From the source section drop-down menu change Branch from none to main and click the Save
- After several minutes the website is live and will be automatically refreshed with each Git push command.

[LIVE PAGE](https://sarune95.github.io/carrot/)

To run locally:

- Log into GitHub and click on repository to download [Carrot Clicker](https://github.com/Sarune95/carrot)
- Select Code and click "Download the Zip file.
- Once download is completed, extract ZIP file and use in your local environment.

Alternatively you can Clone or Fork this repository into your GitHub account.

# Credits

[Freepik](https://www.freepik.com/) for images

[W3schools](https://www.w3schools.com/) for html, css and javascript help

[Stack Overflow](https://stackoverflow.com) for advanced javascript

Special thanks Code Institute mentor Derek Mcauley