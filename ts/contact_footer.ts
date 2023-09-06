document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#modal") as HTMLElement;
    const content = document.querySelector('#content') as HTMLElement;
    const closeBtn = document.querySelector('#close') as HTMLElement;
    const cf_emailTexts = document.querySelectorAll(".cf_email");
    const cf_bankNum = document.querySelector(".c_banknum") as HTMLElement;
    const cf_alertCopy = document.querySelector("#cf_alertCopy") as HTMLElement;
    const cf_alertCopy2 = document.querySelector("#cf_alertCopy2") as HTMLElement;
    const emailIcon = document.querySelector('#email') as HTMLElement;
    const bankIcon = document.querySelector('#bank') as HTMLElement;

    let emailDiv: HTMLDivElement | null = null;
    let bankDiv: HTMLDivElement | null = null;

    if (content.children) {
        emailDiv = content.children[0] as HTMLDivElement; // First child is the email info
        bankDiv  = content.children[1] as HTMLDivElement; // Second child is the bank info
        // Initially hide both
        emailDiv.style.display ='none';
        bankDiv.style.display ='none';
    }

    function closeModalWindow() {
        modal.style.display ="none";
        modal.style.opacity ="0";
        // Hide both when closing the modal window
        if(emailDiv) {emailDiv.style.display ='none';}
        if(bankDiv) {bankDiv.style.display ='none';}
    }

    emailIcon?.addEventListener('click', () => {
        if(emailDiv && bankDiv) {
            emailDiv.style.display ='block';
            bankDiv.style.display ='none';
            modal?.style.setProperty('display', 'block');
            modal?.style.setProperty('opacity', '1');
        }
    });


    bankIcon?.addEventListener('click', () => {
        if(emailDiv && bankDiv) {
            emailDiv.style.display ='none';
            bankDiv.style.display ='block';
            modal?.style.setProperty('display', 'block');
            modal?.style.setProperty('opacity', '1');
        }
    });

    // if(modal) {modal.addEventListener('click', closeModalWindow);}
    closeBtn.addEventListener('click', closeModalWindow);


    // 이메일 복사하기
    for (const item of cf_emailTexts) {
        item.addEventListener("click", async() => {
            try {
                await navigator.clipboard.writeText(item.textContent || '');
                cf_alertCopy.style.opacity = "1";
                cf_alertCopy.innerText = "이메일을 복사했습니다.";
                setTimeout(() => {
                    cf_alertCopy.style.opacity = "1";
                    cf_alertCopy.innerText = "이메일을 클릭하여 복사하세요.";
                }, 4000);
            } catch (error) {
                console.error("Failed to copy to clipboard:", error);
            }
        });
    }

    //계좌번호 복사하기
    cf_bankNum.addEventListener("click", async() => {
        try {
            await navigator.clipboard.writeText(cf_bankNum.textContent || '');
            cf_alertCopy2.style.opacity = "1";
            cf_alertCopy2.innerText = "계좌번호를 복사했습니다.";
            setTimeout(() => {
                cf_alertCopy2.style.opacity = "1";
                cf_alertCopy2.innerText = "계좌번호를 클릭하여 복사하세요.";
            }, 4000);
        } catch (error) {
            console.error("Failed to copy to clipboard:", error);
        }
    });


});