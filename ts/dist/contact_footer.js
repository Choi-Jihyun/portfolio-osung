document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var modal = document.getElementById("modal");
    var content = document.getElementById('content');
    var closeBtn = document.getElementById('close');
    // The HTML to display when each item is clicked
    var emailHtml = "\n    <div>\n        <p class=\"text\">\n            <span class=\"email\" id=\"email_1\">osungcjh@gmail.com</span><br/>\n            <span class=\"email\" id=\"email_2\">osungcjh@naver.com</span>\n        </p>\n    <div>\n    ";
    var bankHtml = "\n    <div>\n        <p>\uAE30\uBD84\uC774 \uC88B\uC544\uC838\uC11C \uCEE4\uD53C \uD55C \uC794 \uC120\uBB3C\uD558\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694?</p>\n        <p>67591034946707 \uD558\uB098\uC740\uD589</p>\n        <p>\uBC8C\uC368 \uAC00\uC2B4\uC774 \uB450\uADFC\uAC70\uB9BD\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4.</p>\n    </div>\n    ";
    (_a = document.getElementById('email')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        if (content) {
            content.innerHTML = emailHtml;
        }
        if (modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            document.body.style.overflowY = 'hidden';
        }
    });
    (_b = document.getElementById('bank')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        if (content) {
            content.innerHTML = bankHtml;
        }
        if (modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            document.body.style.overflowY = 'hidden';
        }
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (modal) {
                modal.style.display = "none";
                modal.style.opacity = "0";
                document.body.style.overflowY = 'auto';
            }
        });
    }
});
