const crypto = require("crypto");
function SHA256Hash(input) {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

console.log(SHA256Hash("Rahul"));
