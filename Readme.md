# Discord Bot YouTube Music Integration

## Overview

This Discord bot is designed to provide a seamless integration of YouTube Music for music playback. With a variety of commands, users can enjoy music playback directly from YouTube.

## Features

- **Music Integration:** Enjoy a wide range of music from YouTube with commands such as `play`, `stop`, `pause`, `resume`, `info`, `quit`, `shuffle`, `skip`, and `skip to`.

## Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Yeasir-Hossain/discord-bot-music-chatgpt
    ```

2. **Install Dependencies:**

    ```bash
    cd discord-bot
    yarn install
    ```

3. **Configure Tokens:**
   - Create a `.env` file in the project root.
   - Add your Discord Bot token:

    ```env
    BOT_TOKEN=""
    ```

4. **Start the Bot:**

    ```bash
    yarn dev-load // to load register the commands and start the bot with nodemon
    yarn dev // to start the bot with nodemon
    ```


### Commands:

- **Play:**

    ```
    /play [song name or URL]
    ```

- **Stop:**

    ```
    /stop
    ```

- **Pause:**

    ```
    /pause
    ```

- **Resume:**

    ```
    /resume
    ```

- **Info:**

    ```
    /info
    ```

- **Quit:**

    ```
    /quit
    ```

- **Shuffle:**

    ```
    /shuffle
    ```

- **Skip:**

    ```
    /skip
    ```

- **Skip To:**

    ```
    /skip to [song number]
    ```

## Contributing

Contributions are welcome/ If you have any improvements or new features to suggest, feel free to open an issue or submit a pull request.
