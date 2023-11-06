# Bot-Battlr
# Bot Army - React Project

Welcome to the " Bot Army" project, a React application for managing a collection of bots. In this application, users can view available bots, add them to their army, release bots from their army, and even discharge bots from service permanently. This README provides an overview of the project, how to set it up, and key functionalities.

## Project Overview

The "Your Bot Army" project is a web application built with React, allowing users to interact with a list of bots. The project consists of two main components:

- **BotCollection:** Displays a list of available bots.
- **YourBotArmy:** Shows the user's enlisted bot army and provides options to release or discharge bots.

The project also includes a backend server powered by `json-server`, which serves bot data from a `db.json` file.

## Setup Instructions

Follow these steps to set up the project on your local machine:

1. Clone the repository:

2. Navigate to the project directory:

3. Install project dependencies:

4. Start the JSON server (for the backend) using the provided `db.json` file:

5. Start the React application:

6. Open your web browser and visit `http://localhost:3000` to access the application.

## Features

The core deliverables of the "Your Bot Army" project include the following features:

- View profiles of all available bots in `BotCollection`.
- Add an individual bot to your army by clicking on it (bots can be enlisted only once).
- Release a bot from your army by clicking on it.
- Discharge a bot from service forever by clicking the red "x" button (deletes the bot from both the backend and your army).

## Folder Structure

The project structure includes the following main directories and files:

- `src/`: Contains the React application source code.
- `components/`: Houses React components for rendering bot data.
- `App.js`: The main application component.
- `db.json`: The database file used by the JSON server to serve bot data.
- `README.md`: This README file.

## Contribution

If you want to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code passes linting and testing.
4. Submit a pull request to the main repository for review.

## Acknowledgments

- The "Your Bot Army" project is a fictional project created for educational and demonstration purposes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy building and managing your bot army with the "Your Bot Army" application! If you have any questions or encounter issues, feel free to reach out to the project contributors.
