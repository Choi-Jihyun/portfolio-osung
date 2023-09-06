document.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementById("modal");
    let content = document.getElementById('content');
    let closeBtn = document.getElementById('close');

    // The HTML to display when each item is clicked
    let emailHtml = `
    <div>
        <p class="text">
            <span class="email" id="email_1">osungcjh@gmail.com</span><br/>
            <span class="email" id="email_2">osungcjh@naver.com</span>
        </p>
    <div>
    `;
    let bankHtml = `
    <div>
        <p>기분이 좋아져서 커피 한 잔 선물하고 싶으신가요?</p>
        <p>67591034946707 하나은행</p>
        <p>벌써 가슴이 두근거립니다. 감사합니다.</p>
    </div>
    `;

    document.getElementById('email')?.addEventListener('click', function() {
        if(content) {
            content.innerHTML = emailHtml;
        }
        if(modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            document.body.style.overflowY = 'hidden';
        }
    });

    document.getElementById('bank')?.addEventListener('click', function() {
        if(content) {
            content.innerHTML = bankHtml;
        }
        if(modal) {
            modal.style.display = "block";
            modal.style.opacity = "1";
            document.body.style.overflowY = 'hidden';
        }
    });

    if(closeBtn){
        closeBtn.addEventListener('click', function() {
            if(modal) {
                modal.style.display = "none";
                modal.style.opacity = "0";
                document.body.style.overflowY = 'auto';
            }
        });
    }

});