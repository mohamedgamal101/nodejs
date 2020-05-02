const { program } = require("commander"); ////npm i commander
program.version("0.0.1");
const fs = require("fs");

////////////////////////1- read data from created file////////////////

program.command("list").action(options => {
  const list = fs.readFileSync("./lists.json", { encoding: "utf8" });
  console.log(list);
});

////////////////////////// 2- add data to the created file//////////////////
program
  .command("add")
  .option("-t, --title <title>")
  .action(option => {
    const notes = JSON.parse(readFile("./lists.json") || "[]");
    var id;
    if (notes.length === 0) {
      id = 0;
    } else {
      id = notes[notes.length - 1].id + 1;
    }
    const newNote = {
      id: id,
      title: option.title,
      status: "to-do"
    };
    const newNotesArray = notes.concat(newNote);
    writeFile("./lists.json", newNotesArray);
  });
////////////////////////3- edit the created file/////////////////
program
  .command("edit")
  .option("-t, --title <title>")
  .option("-id, --id <id>")
  .action(option => {
    const notes = JSON.parse(readFile("./lists.json") || "[]");
    const note = notes.find(n => n.id === parseInt(option.id));
    if (note.title != undefined) {
      note.title = option.title;
    }
    option.status ? (note.status = option.status) : 0;
    writeFile("./lists.json", notes);
  });
///////////////////////4- delete data from created file///////////////
program
  .command("delete")
  .option("-id, --id <id>")
  .action(option => {
    const notes = JSON.parse(readFile("./lists.json") || "[]");
    const note = notes.find(n => n.id === parseInt(option.id));
    const index = notes.indexOf(note);
    notes.splice(index, 1);
    writeFile("./lists.json", notes);
  });
//////////////////////

program.parse(process.argv);

////////////////////aiding functions (avoid redundancy)////////////
function readFile(path) {
  return fs.readFileSync(path);
}
function writeFile(path, newNotesArray) {
  return fs.writeFileSync(path, JSON.stringify(newNotesArray), {
    encoding: "utf8"
  });
}
