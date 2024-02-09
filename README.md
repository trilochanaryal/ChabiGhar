# ChabiGhar - Node.js Password Manager CLI

## Overview

Welcome to ChabiGhar, a simple and secure password manager CLI tool built with Node.js. This project is part of the Frontend Master course on Node.js, and it focuses on creating a password manager that securely stores and retrieves passwords using the AES 256 algorithm.

## Key Features

- **AES 256 Encryption:** ChabiGhar employs the robust AES 256 algorithm for encrypting and decrypting passwords, ensuring strong security measures.
  
- **Initialization Vector (IV) Buffer:** The implementation utilizes IV buffers to add an additional layer of security to the encryption process, making it more resistant to certain types of attacks.

- **Password Storage:** ChabiGhar securely stores passwords, allowing users to save and retrieve their credentials with confidence.

## Getting Started

To get started with ChabiGhar, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ChabiGhar/
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Generate Encryption Key:**
   Before using ChabiGhar, generate a strong encryption key and place it in the `helper` folder. This key will be used for encrypting and decrypting passwords.
   
   ```javascript
   // helper/key.js

   const encryptionKey = Buffer.from('your-secret-key-here', 'hex');
   module.exports = encryptionKey;
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```

## Usage

ChabiGhar is a command-line tool for managing passwords. Here are some basic commands:

1. **Save Password:**
   ```bash
   chabighar save
   ```
   Save a password with a specified heading, e.g., `chabighar save fb` to save a Facebook password.

2. **Retrieve Password:**
   ```bash
   chabighar retrieve
   ```
   Retrieve a previously saved password. If a heading is provided, it will retrieve the password associated with that heading, e.g., `chabighar retrieve fb` to retrieve the Facebook password.

## Contributing

If you'd like to contribute to ChabiGhar, feel free to submit issues or pull requests on the [GitHub repository](https://github.com/your-username/ChabiGhar). Your feedback and contributions are highly appreciated!

## TODOs

- Implement functionality to save passwords with headings for different platforms (e.g., social media).
- Implement functionality to display a list of saved passwords and allow the user to choose which one to retrieve.
- Implement functionality to save passwords on the web and provide functions to view, copy, and update passwords.
- Add beautifying tools like chalk for a better CLI interface.
- Write developer TODOs in proper format within the project files.

Feel free to adjust or expand upon this further as needed!
