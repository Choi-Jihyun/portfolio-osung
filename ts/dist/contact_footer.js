var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector("#modal");
    var content = document.querySelector('#content');
    var closeBtn = document.querySelector('#close');
    var cf_emailTexts = document.querySelectorAll(".cf_email");
    var cf_alertCopy = document.querySelector("#cf_alertCopy");
    var emailIcon = document.querySelector('#email');
    var bankIcon = document.querySelector('#bank');
    var emailDiv = null;
    var bankDiv = null;
    if (content.children) {
        emailDiv = content.children[0]; // First child is the email info
        bankDiv = content.children[1]; // Second child is the bank info
        // Initially hide both
        emailDiv.style.display = 'none';
        bankDiv.style.display = 'none';
    }
    function closeModalWindow() {
        modal.style.display = "none";
        modal.style.opacity = "0";
        // Hide both when closing the modal window
        if (emailDiv) {
            emailDiv.style.display = 'none';
        }
        if (bankDiv) {
            bankDiv.style.display = 'none';
        }
    }
    emailIcon === null || emailIcon === void 0 ? void 0 : emailIcon.addEventListener('click', function () {
        if (emailDiv && bankDiv) {
            emailDiv.style.display = 'block';
            bankDiv.style.display = 'none';
            modal === null || modal === void 0 ? void 0 : modal.style.setProperty('display', 'block');
            modal === null || modal === void 0 ? void 0 : modal.style.setProperty('opacity', '1');
        }
    });
    bankIcon === null || bankIcon === void 0 ? void 0 : bankIcon.addEventListener('click', function () {
        if (emailDiv && bankDiv) {
            emailDiv.style.display = 'none';
            bankDiv.style.display = 'block';
            modal === null || modal === void 0 ? void 0 : modal.style.setProperty('display', 'block');
            modal === null || modal === void 0 ? void 0 : modal.style.setProperty('opacity', '1');
        }
    });
    // if(modal) {modal.addEventListener('click', closeModalWindow);}
    closeBtn.addEventListener('click', closeModalWindow);
    var _loop_1 = function (item) {
        item.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(item.textContent || '')];
                    case 1:
                        _a.sent();
                        cf_alertCopy.style.opacity = "1";
                        cf_alertCopy.innerText = "이메일을 복사했습니다.";
                        setTimeout(function () {
                            cf_alertCopy.style.opacity = "1";
                            cf_alertCopy.innerText = "이메일을 클릭하여 복사하세요.";
                        }, 2000);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Failed to copy to clipboard:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    // 이메일 복사하기
    for (var _i = 0, cf_emailTexts_1 = cf_emailTexts; _i < cf_emailTexts_1.length; _i++) {
        var item = cf_emailTexts_1[_i];
        _loop_1(item);
    }
});
