document.addEventListener("DOMContentLoaded", () => {
  const emailTexts = document.querySelectorAll(".email");
  const alertCopy = document.getElementById("alertCopy");

  if (!alertCopy) {
    console.error('Unable to find element with id "alertCopy".');
    return;
  }

  for (const item of emailTexts) {
    item.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item.textContent || '');
        alertCopy.style.opacity = "1";
        alertCopy.innerText = "이메일을 복사했습니다.";
        setTimeout(() => {
            alertCopy.style.opacity = "0";
            // alertCopy.innerText = "";
        }, 1200);
      } catch (error) {
          console.error("Failed to copy to clipboard:", error);
      }
    });
  }
});
