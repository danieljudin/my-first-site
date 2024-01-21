window.onload = function() {
    window.setInterval(function() {
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock;
    }
    );
}

document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("commentForm");
    const commentSection = document.getElementById("commentSection");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const commentTextInput = document.getElementById("commentText");

        const name = nameInput.value;
        const commentText = commentTextInput.value;

        if (name && commentText) {
            const comment = document.createElement("div");
            comment.className = "comment";
            comment.innerHTML = `<strong>${name}:</strong> ${commentText}`;
            
            commentSection.appendChild(comment);

            // Очистка полей ввода
            nameInput.value = "";
            commentTextInput.value = "";
        }
    });
});