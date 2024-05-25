document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
        reviewCount = 1;
    } else {
        reviewCount++;
    }

    document.getElementById("reviewCounter").textContent = reviewCount;
    localStorage.setItem("reviewCount", reviewCount.toString());
});