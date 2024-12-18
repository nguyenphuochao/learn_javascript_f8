

var courseApi = 'https://675dac6463b05ed07978840a.mockapi.io/api/v1/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// -- Functions

// fetch lấy danh sách
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// fetch lấy chi tiết
function getCourse(id, callback) {
    fetch(courseApi + '/' + id)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// fetch thêm mới
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(data),
    };
    fetch(courseApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

// fetch xóa
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            getCourses(renderCourses);
        });
}

// fetch sửa
function updateCourse(data, id, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(data),
    };
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}


function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onClick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onClick="handleUpdateForm(${course.id})">Sửa</button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // gửi yêu cầu
        var formData = {
            name: name,
            description: description,
        };
        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    }

}

function handleUpdateForm(id) {
    getCourse(id, function (course) {
        document.querySelector('input[name="name"]').value = course.name;
        document.querySelector('input[name="description"]').value = course.description;
    });

    var createBtn = document.querySelector('#create');
    createBtn.style.display = 'none';
    var btnSave = document.querySelector('#save');
    btnSave.style.display = 'block';
    btnSave.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        // gửi yêu cầu
        var formData = {
            name: name,
            description: description,
        };
        updateCourse(formData, id, function () {
            getCourses(renderCourses);
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
        });
    }
}
