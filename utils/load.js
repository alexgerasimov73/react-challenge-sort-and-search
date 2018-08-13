const request = new XMLHttpRequest();
request.open("GET", "data.json", true);

request.addEventListener("load", () => {
    if (request.status >= 200 && request.status < 400) {
        const response = request.responseText;
        console.log(response);
    }
});

request.send();