let table_html = `
<div class="relative overflow-x-auto" id="tableBlockId" style="display: none">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    execution time
                </th>
                <th scope="col" class="px-6 py-3">
                    arrival time
                </th>
            </tr>
        </thead>
        <tbody id="tableId">
        </tbody>
    </table>
</div>
`
document.getElementById('tableDiv').innerHTML = table_html;
