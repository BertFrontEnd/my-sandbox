const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabs = document.querySelectorAll('.tabs__item');

const onTabClick = (currentBtn) => {
  currentBtn.addEventListener('click', () => {
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (
      !currentBtn.classList.contains('active') &&
      !currentTab.classList.contains('active')
    ) {
      tabsBtn.forEach((item) => item.classList.remove('active'));
      tabs.forEach((item) => item.classList.remove('active'));

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
};

tabsBtn.forEach(onTabClick);

document.querySelector('.tabs__nav-btn').click();
