Certainly! I've updated the README to reflect that TryLow is a CLI tool. Additionally, I've included information on how to use the CLI.

```markdown
# TryLow - Node.js Password Manager

## Overview

Welcome to TryLow, a simple and secure password manager CLI tool built with Node.js. This project is part of the Frontend Master course on Node.js, and it focuses on creating a password manager that securely stores and retrieves passwords using the AES 256 algorithm.

## Key Features

- **AES 256 Encryption:** TryLow employs the robust AES 256 algorithm for encrypting and decrypting passwords, ensuring strong security measures.
  
- **Initialization Vector (IV) Buffer:** The implementation utilizes IV buffers to add an additional layer of security to the encryption process, making it more resistant to certain types of attacks.

- **Password Storage:** TryLow securely stores passwords, allowing users to save and retrieve their credentials with confidence.

## Getting Started

To get started with TryLow, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/trylow10/PasswordxManager/
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Generate Encryption Key:**
   Before using TryLow, generate a strong encryption key and place it in the `helper` folder. This key will be used for encrypting and decrypting passwords.
   
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

TryLow is a command-line tool for managing passwords. Here are some basic commands:

1. **Save Password:**
   ```bash
   trylow gen pass
   ```
2. **Retrieve Password:**
   ```bash
   trylow prev pass
   ```

## Contributing

If you'd like to contribute to TryLow, feel free to submit issues or pull requests on the [GitHub repository](https://github.com/your-username/TryLow). Your feedback and contributions are highly appreciated!
