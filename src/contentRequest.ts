const reqSender = new XMLHttpRequest();

reqSender.onreadystatechange = apiHandler;

// onreadystatechange function States with id

// 0    |   UNSENT  |   Client has been created. open() not called yet.
// 1	|   OPENED	|   open() has been called.
// 2	|   HEADERS_RECEIVED    |	send() has been called, and headers and status are available.
// 3	|   LOADING	|   Downloading; responseText holds partial data.
// 4	|   DONE	|   The operation is complete.

function apiHandler(response) {
  if (reqSender.readyState === 4 && reqSender.status === 200) {
    console.log(response.target.response);
  }
}

// Third parameter (true) is for async func
reqSender.open("GET", "https://api.github.com/users/peter", true);
reqSender.send();

// For multiple api call and to avoid overwritten we must use false so it worked as sync func
// reqSender.open("GET", "https://api.github.com/users/peter", false);
// reqSender.send();

// reqSender.open("GET", "https://api.github.com/users/thomas", false);
// reqSender.send();
