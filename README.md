# CryptoPriceBot

Welcome to the CryptoPriceBot! This Telegram bot allows you to retrieve the latest price and other information about various cryptocurrencies using the CoinGecko API.

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
    - [Creating a Telegram Bot and Obtaining BOT_TOKEN](#creating-a-telegram-bot-and-obtaining-bot_token)
    - [Installing Dependencies](#installing-dependencies)
    - [Running the Bot](#running-the-bot)
4. [Usage](#usage)
5. [Commands](#commands)
6. [Example](#example)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
The CryptoPriceBot is a simple Node.js application that utilizes the CoinGecko API to fetch and display the latest prices, price changes, market cap, volume, and more for various cryptocurrencies. The bot is designed to provide easy access to cryptocurrency data directly within your Telegram chat.

## Prerequisites
Before running the CryptoPriceBot, make sure you have the following installed on your machine:

1. Node.js: You can download and install Node.js from the official website: https://nodejs.org
2. npm: npm is bundled with Node.js. It is the package manager for JavaScript and comes with Node.js by default.

## Getting Started

### Creating a Telegram Bot and Obtaining BOT_TOKEN
To use the CryptoPriceBot, you'll need to create a Telegram bot and obtain a BOT_TOKEN. Follow these steps:

1. Open the Telegram app and search for the "BotFather" (https://t.me/botfather).
2. Start a chat with the BotFather and use the `/newbot` command to create a new bot.
3. Follow the instructions from the BotFather to choose a name and username for your bot.
4. Once the bot is created, the BotFather will provide you with a BOT_TOKEN. This token is essential to authenticate your bot with Telegram.

### Installing Dependencies
Before running the bot, you need to install the required dependencies. Open your terminal and navigate to the project directory and run the following command:

```bash
npm ci
```

## Running the Bot
After installing the dependencies, you have to create an .env file that includes the BOT_TOKEN generated from Telegram Bot Father.

The .env file should look like this:

```
BOT_TOKEN=<YOUR_BOT_TOKEN>
```

With .env file set up, you can now start the bot using the following command:

```bash
npx nodemon src/app.js
```

Alternatively, you can start the bot if you have Docker installed on your system. Please follow the guide here if you wish to get your hands on [Docker](https://docs.docker.com/get-docker/).

```bash
docker compose up
```

The bot will now be up and running, ready to process your commands.

## Usage
To interact with the CryptoPriceBot, open your Telegram app and search for your bot by its username. Once you find it, start a chat with the bot and use the following commands:

1. `/btc`: Get the latest information about Bitcoin (BTC) including its price, price changes, market cap, volume, and more.

You can use the above command as an example and replace "btc" with the cryptocurrency code of any other coin you want to inquire about.

## Example
When you send the command `/btc` to the bot, you will receive a response like this:

```
Bitcoin | BTC

USD: $30,230

Price Change:
1hr: -0.32%
24hr: -0.26%
7d: 0.20%
30d: 14.82%
1y: 42.64%

Market Cap: $587,654,557,795
24h Volume: $4,905,955,795
1 Year High: $31,446.01
1 Year Low: $15,742.44
```

## Contributing
Contributions to the CryptoPriceBot are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---

Happy crypto-trading with CryptoPriceBot! If you have any questions or need further assistance, don't hesitate to reach out to the bot creator. Enjoy exploring the world of cryptocurrencies!