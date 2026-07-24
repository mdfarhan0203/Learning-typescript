

interface Image {
    src: string
}

interface User {
    username: string
}

function logOutput(value: Image | User) {
    if ("src" in value) {
        console.log(value.src)
    }
    else {
        console.log(value.username)
    }
}

const data: Image = {
    src: "43242.png"
}

const value: User = {
    username: "mohallal"
}

logOutput(data);  // Prints: 43242.png
logOutput(value); // Prints: mohallal



