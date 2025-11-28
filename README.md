# Chrome Dino Code

A JavaScript code snippet to automate and hack the Chrome Dinosaur game.

<p align="left">
  <img src="https://lh3.googleusercontent.com/YPSZ9e1wW1z7cIyjkpQUqAdMzlgaPprj3_1n9tKesPfYR8U1nlxcsHFk8Dd-1XWa-ymskRLekQ=w640-h400-e365" />
</p>

## Description

This project provides a simple JavaScript hack for the Chrome Dinosaur game (the offline T-Rex runner game). It allows you to disable the game over function and control the game speed, making the dinosaur run indefinitely without dying. Perfect for learning about browser console manipulation and JavaScript prototypes.

## Features

- Disable game over - run indefinitely without dying
- Adjustable speed control - set custom running speed
- Easy to start and stop - toggle the hack on/off anytime
- No installation required - runs directly in browser console

## Technologies Used

- JavaScript (ES5)
- Chrome Browser Developer Console
- Chrome Dinosaur Game API manipulation

## Installation

No installation required! This code runs directly in your browser's developer console.

```bash
# If you want to clone the repository
git clone https://github.com/bryanseah234/chrome-dino-code.git

# Navigate to project directory
cd chrome-dino-code
```

## Usage

1. Open Chrome browser and go to `chrome://dino` or disconnect from the internet
2. Start the dinosaur game
3. Open Chrome Developer Tools (Press `F12` or `Ctrl+Shift+I`)
4. Go to the Console tab
5. Copy and paste the following code:

```javascript
// To start (disable game over):
var original = Runner.prototype.gameOver
Runner.prototype.gameOver = function(){}

// To stop (restore game over):
Runner.prototype.gameOver = original

// To set speed (optional):
Runner.instance_.setSpeed(1000)
```

## Demo

Play the Chrome Dinosaur game at: `chrome://dino` (type this in your Chrome browser address bar)

## Disclaimer

1. FOR EDUCATIONAL PURPOSES ONLY
2. USE AT YOUR OWN DISCRETION

## License

MIT License

---

**Author:** <a href="https://github.com/bryanseah234">bryanseah234</a>
