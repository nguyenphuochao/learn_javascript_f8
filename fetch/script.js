var postUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(postUrl)
    .then(function (response) {
        return response.json(); // JSON.parse: JSON -> javascript types
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `
                <li>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </li>
            `;
        });

        var html = htmls.join('');
        document.querySelector("#post-block").innerHTML = html;
    })