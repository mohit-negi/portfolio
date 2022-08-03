import "./styles/index.css";
import scroll from "./modules/scroll";
import { toggleTheme, addThemeClass } from "./modules/toggleTheme";
import displayList from "./modules/displayList";

const btnHamburger = document.querySelector(".fa-bars");
const btnTheme = document.querySelector(".fa-moon");

btnHamburger.addEventListener("click", displayList);
btnTheme.addEventListener("click", toggleTheme);
document.addEventListener("scroll", scroll.scrollUp);

const getBodyClass = localStorage.getItem("class-body-theme");
const getBtnClass = localStorage.getItem("class-btn-theme");

addThemeClass(getBodyClass, getBtnClass);

//For testimonial slider

// $(document).ready(function(){
//     pagenum = 1;
//     function AutoRotate() {
//        var myele = null;
//        var allElements = document.getElementsByTagName('label');
//        for (var i = 0, n = allElements.length; i < n; i++) {
//            var myfor = allElements[i].getAttribute('for');
//            if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {
//                allElements[i].click();
//                break;
//            }
//        }
//        if (pagenum == 4) {
//            pagenum = 1;
//        } else {
//            pagenum++;
//        }
//     }
//     setInterval(AutoRotate, 5000);
// });
