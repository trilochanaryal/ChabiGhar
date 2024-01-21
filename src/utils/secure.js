import crypto from "crypto";
import { getEncryptionKey } from "../helper/encryptKey.js";

export const encrypt = async (text) => {
  const iv = crypto.randomBytes(16);
  const key = await getEncryptionKey();
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(key, "hex"),
    iv
  );
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), encryptedText: encrypted };
};
export const decrypt = async (encryptedObject) => {
  const key = await getEncryptionKey();
  try {
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(key, "hex"),
      Buffer.from(encryptedObject.iv, "hex")
    );

    let decrypted = decipher.update(
      encryptedObject.encryptedText,
      "hex",
      "utf-8"
    );
    decrypted += decipher.final("utf-8");

    return decrypted;
  } catch (error) {
    console.error("Error during decryption:", error.message);
    throw error;
  }
};
