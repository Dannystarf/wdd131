document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);

    document.getElementById("counter").textContent = `You have submitted ${count} review(s).`;
});
