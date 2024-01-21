import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import enquirer from "enquirer";
import { encrypt, decrypt } from "./utils/secure.js";
import { savePassword, readPassword } from "./utils/core.js";
yargs(hideBin(process.argv))
  .command("gen <pass>", "Creates new passwords", async () => {
    let validInput = false;
    let length;

    while (!validInput) {
      const { inputValue } = await enquirer.prompt({
        type: "input",
        name: "inputValue",
        message: "Enter the number of characters for the password:",
      });

      length = parseInt(inputValue, 10);

      if (!isNaN(length) && length > 0 && length <= 20) {
        validInput = true;
      } else {
        console.log("Please enter a valid number between 1 and 20.");
      }
    }

    // Function to generate a random password
    const generatePassword = (length) => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";

      return Array.from({ length }, () => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
      }).join("");
    };

    const generatedPassword = generatePassword(length);
    console.log(`Generated password: ${generatedPassword}`);

    // Encrypt and save the password to persistent storage
    const encryptedPassword = await encrypt(generatedPassword);
    await savePassword(encryptedPassword);
  })
  .command("prev", "Shows the last created password", async () => {
    // Retrieve the encrypted password from persistent storage
    const encryptedPassword = await readPassword();

    if (encryptedPassword) {
      // Decrypt the password before displaying
      const storedPassword = await decrypt(encryptedPassword);
      console.log(`Last created password: ${storedPassword}`);
    } else {
      console.log("No password generated yet.");
    }
  })
  .demandCommand(1)
  .parse();
