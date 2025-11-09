const args = process.argv.slice(2); // Get command-line arguments starting from index 2

if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
