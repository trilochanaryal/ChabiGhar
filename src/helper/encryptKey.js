// .trylow/encryptionKey.js
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const trylowDir = path.resolve(new URL(".", import.meta.url).pathname);
const keyFilePath = path.join(trylowDir, "encryptionKey.txt");

const generateAndSaveKey = async () => {
  try {
    const encryptionKey = crypto.randomBytes(32).toString("hex");
    await fs.writeFile(keyFilePath, encryptionKey, "utf-8");
  } catch (error) {
    console.error("Error generating and saving encryption key:", error.message);
    throw error;
  }
};

export const getEncryptionKey = async () => {
  try {
    const key = await fs.readFile(keyFilePath, "utf-8");
    return key.trim(); // Remove leading/trailing whitespaces
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, generate and save the key
      await generateAndSaveKey();
      // Retry reading the key
      return getEncryptionKey();
    } else {
      console.error("Error reading encryption key:", error.message);
      throw error;
    }
  }
};
