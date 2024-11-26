// Fetch the status of the lab from the server and display it.
// Thank you modern javascript for making this so easy!
fetch("https://foulab.org/status/")
    .then(response => response.json())
    .then(data => {
        if (data["status"] === "OPEN") {
            document.querySelector("#status").style.visibility = "visible";
        }
    });
