const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
mainNav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
const coverage=document.getElementById("coverage");
const coverageValue=document.getElementById("coverageValue");
const uncoveredValue=document.getElementById("uncoveredValue");
const dustLayer=document.getElementById("dustLayer");
function updateCoverage(){if(!coverage)return;const amount=Number(coverage.value);coverageValue.textContent=`${amount}%`;uncoveredValue.textContent=`${100-amount}%`;dustLayer.style.clipPath=`inset(0 ${100-amount}% 0 0)`;}
coverage?.addEventListener("input",updateCoverage);updateCoverage();
document.querySelectorAll("[data-placeholder]").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();alert("This research document has not been added yet. Replace this placeholder with your verified file link when it is ready.");}));
