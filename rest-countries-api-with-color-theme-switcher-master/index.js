document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) => {
      const dataContainer = document.getElementById("dataContainer");
      jsonData.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add(
          "item",
          "flex-col",
          "bg-white",
          "rounded-md",
          "shadow-md",
          "mx-10",
          'mt-5',
          'dark:bg-[#2B3743]'
        );

        div.innerHTML = `
          <img src="${item.flag}"  class="rounded-t-md h-52" />
          <div class="px-6 pt-6 pb-12">
            <p class="font-bold text-md dark:text-white">${item.name}</p>
            <div class="flex">
              <p class="font-semibold text-xs mt-4 dark:text-white">Population:</p>
              <p class="text-xs ml-1 mt-4 dark:text-white">${item.population}</p>
            </div>
            <div class="flex">
              <p class="font-semibold text-xs mt-1 dark:text-white">Region:</p>
              <p class="text-xs ml-1 mt-1 dark:text-white">${item.region}</p>
            </div>
            <div class="flex">
              <p class="font-semibold text-xs mt-1 dark:text-white">Capital:</p>
              <p class="text-xs ml-1 mt-1 dark:text-white">${item.capital}</p>
            </div>
          </div>
        `;

        dataContainer.appendChild(div);
      });
    }).catch(error => console.error('Error fetching data:', error));

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark");
  });
});
