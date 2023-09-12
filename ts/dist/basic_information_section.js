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
    var body = document.querySelector('body');
    var emailTexts = document.querySelectorAll(".email");
    var alertCopy = document.getElementById("alertCopy");
    var infoLi = document.querySelectorAll(".info_list > li");
    var blueCover = document.querySelector(".img_blue_cover");
    var myPic = document.querySelector(".my_pic");
    var infoLiObserver = new IntersectionObserver(function (e) {
        e.forEach(function (item) {
            if (item.target instanceof HTMLElement) {
                if (item.isIntersecting) {
                    item.target.style.opacity = '1';
                    item.target.style.top = '0px';
                }
                else {
                    item.target.style.opacity = '0';
                    item.target.style.top = '-100px';
                }
            }
        });
    });
    for (var _i = 0, infoLi_1 = infoLi; _i < infoLi_1.length; _i++) {
        var item = infoLi_1[_i];
        infoLiObserver.observe(item);
    }
    var blueCoverObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof HTMLElement) {
                if (entry.isIntersecting) {
                    entry.target.style.height = '40.22vw';
                    entry.target.style.top = '1.3vw';
                }
                else {
                    entry.target.style.height = '0';
                    entry.target.style.top = '10vw';
                }
            }
        });
    });
    blueCoverObserver.observe(blueCover);
    if (!alertCopy) {
        console.error('Unable to find element with id "alertCopy".');
        return;
    }
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
                        alertCopy.style.opacity = "1";
                        alertCopy.innerText = "이메일을 복사했습니다.";
                        setTimeout(function () {
                            alertCopy.style.opacity = "0";
                            // alertCopy.innerText = "";
                        }, 1200);
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
    for (var _a = 0, emailTexts_1 = emailTexts; _a < emailTexts_1.length; _a++) {
        var item = emailTexts_1[_a];
        _loop_1(item);
    }
    if (myPic) {
        myPic.addEventListener('mousemove', heartAni);
    }
    function heartAni(e) {
        var heart = document.createElement('span');
        heart.classList.add('heart');
        if (heart instanceof HTMLElement) {
            var x = e.offsetX;
            var y = e.offsetY;
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
            var size = Math.random() * 80;
            heart.style.width = 20 + size + 'px';
            heart.style.height = 20 + size + 'px';
            var transformValue = Math.random() * 360;
            heart.style.transform = 'rotate(' + transformValue + 'deg)';
            myPic === null || myPic === void 0 ? void 0 : myPic.appendChild(heart);
            setTimeout(function () {
                heart.remove();
            }, 1000);
        }
    }
});
