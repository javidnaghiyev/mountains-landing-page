const tabsContainer = document.querySelector('.tabs');
const tabImage = document.querySelector('.tabImage');
const scheduleElements = document.querySelectorAll('.dates, .text');
const accordion = document.querySelector('.accordions')
const arrow = document.querySelector('.arrow')
const footer = document.querySelector('footer')
const stickyLogo = document.querySelector('.sticky > div')

function handleTabClick(event) {
  const clickedTab = event.target.closest('.tab');
  if (!clickedTab) return;

  const tabs = tabsContainer.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  clickedTab.classList.add('active');

  const tabNumber = clickedTab.classList.contains('tab1') ? 1 : 2;
  const datesElement = document.querySelector(`.dates${tabNumber}`);
  const textElement = document.querySelector(`.text${tabNumber}`);

  tabImage.classList.toggle('active', tabNumber === 2);

  scheduleElements.forEach(element => {
    element.style.display = element === datesElement || element === textElement ? 'block' : 'none';
  });
}

tabsContainer.addEventListener('click', handleTabClick);

function handleAccordionClick(event){
  const clickedAccordion = event.target.closest('.accordion');
  if (!clickedAccordion) return;
  clickedAccordion.classList.toggle('active')
  arrow.classList.toggle('active')

  footer.style.top = document.body.scrollHeight + 'px'

}

accordion.addEventListener('click', handleAccordionClick)


function scrollToTop(){
  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

stickyLogo.addEventListener('click', scrollToTop)