document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("redirectBtn").onclick = function() {
        window.location.href = "https://www.instagram.com/rafael.teixeira06/";
    };
});

document.addEventListener("DOMContentLoaded", function () {
    let followBtn = document.getElementById("followBtn");
    let followerCountEl = document.getElementById("followerCount");

    // Load follower count from localStorage
    let followerCount = localStorage.getItem("followerCount") || 0;
    let hasFollowed = localStorage.getItem("hasFollowed") === "true";

    followerCountEl.textContent = followerCount;

    // If already followed, disable button
    if (hasFollowed) {
        followBtn.textContent = "Following";
        followBtn.disabled = true;
    }

    followBtn.addEventListener("click", function () {
        if (!hasFollowed) {
            followerCount++;
            followerCountEl.textContent = followerCount;
            localStorage.setItem("followerCount", followerCount);
            localStorage.setItem("hasFollowed", "true");

            followBtn.textContent = "Following";
            followBtn.disabled = true; // Prevent multiple clicks
        }
    });
});


