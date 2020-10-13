var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is the title of this project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide the description:",
      default:
        "Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.",
      name: "description",
    },
    {
      type: "input",
      message: "What is the installation method?",
      default: "npm i",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },

    {
      type: "list",
      message: "License: choose from the pulldown",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License(GPL)",
        'GNU Library or "Lesser" General Public License (LGPL)',
        "MIT",
        "Mozilla Public License 2.0",
        "Other",
      ],
    },
    {
      type: "input",
      message: "Enter your message for contributions",
      default:
        "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Also, please make sure to update tests as appropriate.",
      name: "contributing",
    },

    {
      type: "input",
      message: "tests",
      name: "tests",
    },
  ])
  .then(function (response) {
    console.log(response);

    const textFile = `
# ${response.title}

## Table of Contents
- [Description](#description)
- [How to Install Dependencies](#how-to-install-dependencies)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing) 
- [Tests](#tests)
- [Questions](#questions)

## Description
${response.description}

## How to install dependencies
Please use: ${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
[Email Address](mailto:${response.email})  

[Link to my GitHub](www.github.com/${response.github})


`;

    fs.writeFile("readme.md", textFile, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Successfully created a ReadMe!");
    });
  });
