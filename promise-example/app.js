const users = [
    {
        id: 1,
        name: "HaoNP"
    },
    {
        id: 2,
        name: "GiangDT"
    },
    {
        id: 3,
        name: "HoangVH"
    },
    {
        id: 4,
        name: "BaoNC"
    }
]

const comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh yêu em"
    },
    {
        id: 2,
        user_id: 2,
        content: "Em cũng yêu anh"
    },
    {
        id: 3,
        user_id: 3,
        content: "Good job"
    },
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng

// Fake API
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            var result = users.filter(function (user) {
                return userIds.includes(user.id)
            });
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            });
    })
    .then(function (data) {
        
        console.log(data);

        const blockComment = document.querySelector('.block-comment');

        var html = '';
        data.comments.forEach(comment => {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            });
            html += `
                <li>
                    <strong>${user.name}</strong>
                    <p>${comment.content}</p>
                </li>
            `;
        });

        blockComment.innerHTML = html;
    })

