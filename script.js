document.addEventListener("DOMContentLoaded", () => {
    // Load saved data from local storage
    const loadStories = () => {
        const stories = JSON.parse(localStorage.getItem("stories")) || [];
        stories.forEach(story => {
            const storyDiv = document.createElement("div");
            storyDiv.textContent = story;
            storyList.appendChild(storyDiv);
        });
    };

    const loadPhotos = () => {
        const photos = JSON.parse(localStorage.getItem("photos")) || [];
        photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo;
            photoList.appendChild(img);
        });
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.forEach(message => {
            const messageDiv = document.createElement("div");
            messageDiv.textContent = message;
            messageList.appendChild(messageDiv);
        });
    };

    // Friendship Stories
    const storyForm = document.getElementById("storyForm");
    const storyInput = document.getElementById("storyInput");
    const storyList = document.getElementById("storyList");

    storyForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const story = storyInput.value;
        const stories = JSON.parse(localStorage.getItem("stories")) || [];
        stories.push(story);
        localStorage.setItem("stories", JSON.stringify(stories));

        const storyDiv = document.createElement("div");
        storyDiv.textContent = story;
        storyList.appendChild(storyDiv);
        storyInput.value = "";
    });

    // Photo Gallery
    const photoInput = document.getElementById("photoInput");
    const photoList = document.getElementById("photoList");

    photoInput.addEventListener("change", () => {
        const file = photoInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;

            const photos = JSON.parse(localStorage.getItem("photos")) || [];
            photos.push(e.target.result);
            localStorage.setItem("photos", JSON.stringify(photos));

            photoList.appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    // Friendship Quiz
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const q1 = document.getElementById("q1").value;
        const q2 = document.getElementById("q2").value;
        quizResult.textContent = `Your answers: ${q1}, ${q2}`;
    });

    // Message Board
    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const messageList = document.getElementById("messageList");

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = messageInput.value;
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(message);
        localStorage.setItem("messages", JSON.stringify(messages));

        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageList.appendChild(messageDiv);
        messageInput.value = "";
    });

    // Load initial data
    loadStories();
    loadPhotos();
    loadMessages();
});
