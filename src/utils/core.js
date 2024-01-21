import path from "path";
import os from "os";
import fs from "fs/promises";

const getDefaultPersistenceDir = async () => {
  const homeDir = os.homedir();
  const platform = os.platform();
  let baseDir;

  switch (platform) {
    case "win32":
      baseDir = path.join(homeDir, "AppData", "Roaming");
      break;
    case "darwin":
      baseDir = path.join(homeDir, "Library", "Application Support");
      break;
    default:
      baseDir = homeDir;
  }

  const dirPath = path.join(baseDir, ".trylow");

  try {
    // Ensure the .trylow directory exists, creating it if necessary
    await fs.mkdir(dirPath, { recursive: true });
    return dirPath;
  } catch (error) {
    console.error("Error creating directory:", error.message);
    throw error;
  }
};

const getPasswordFilePath = async () => {
  const dirPath = await getDefaultPersistenceDir();
  return path.join(dirPath, "password.json");
};

export const savePassword = async (encryptedPassword) => {
  try {
    const filePath = await getPasswordFilePath();

    // Wait for the promise to resolve
    const resolvedEncryptedPassword = await encryptedPassword;

    const content = JSON.stringify(resolvedEncryptedPassword, null, 2);
    await fs.writeFile(filePath, content);
  } catch (error) {
    console.error("Error saving password:", error.message);
    throw error; // Rethrow the error to indicate failure
  }
};

export const readPassword = async () => {
  try {
    const filePath = await getPasswordFilePath();
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return {};
  }
};

export { getDefaultPersistenceDir };
