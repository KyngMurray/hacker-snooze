const newsContainer = document.querySelector("#news-container");
const storyList = document.createElement("ol");
storyList.className = "storyList";
newsContainer.appendChild(storyList);

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(function (httpResponse){
        return httpResponse.json();
    })
    .then(function (data) {
        return data;
    })
    .then(function(storyId) {
        for (let i = 0; i < 500; i++) {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId[i]}.json?print=pretty`)
                .then(function (httpResponse) {
                    return httpResponse.json();
                })
                .then(function (data) {
                    console.log(data);
                   
                    const story = document.createElement("li");
                    story.className = "story"

                    storyList.appendChild(story);

                    story.innerHTML = `<a href="${data.url}">${data.title}</a> <br /> ${data.score} points, by ${data.by} | ${data.descendants} comments` ;
                })
        }
    })