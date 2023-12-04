function displayStatistic(averageWaitingTime, meanTurnaroundTime)
{
    document.getElementById('statisticDiv').innerHTML = `
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Statistics</h5>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">averageWaitingTime</div>
                <div class="-mt-1 font-sans text-sm font-semibold">${averageWaitingTime}</div>
              </div>
            </a>
            <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">meanTurnaroundTime</div>
                <div class="-mt-1 font-sans text-sm font-semibold">${meanTurnaroundTime}</div>
              </div>
            </a>
          </div>
        </div>
    `
}