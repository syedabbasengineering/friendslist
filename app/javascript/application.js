import Rails from "@rails/ujs";
import "@hotwired/turbo-rails";
import "controllers";

Rails.start();


// Ensure DOM content is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    var deleteModal = document.getElementById("deleteModal");
    var confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

    if (deleteModal) {
        document.querySelectorAll(".delete-btn").forEach(function (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent page reload or link default behavior

                var friendId = this.getAttribute("data-friend_id");

                if (friendId) {
                    console.log("Setting delete button for Friend ID:", friendId); // Debugging
                    confirmDeleteBtn.setAttribute("href", "/friends/" + friendId);
                    confirmDeleteBtn.setAttribute("data-method", "delete");
                    confirmDeleteBtn.setAttribute("data-confirm", "Are you sure?");
                } else {
                    console.error("Friend ID is missing!");
                }
            });
        });
    }
});