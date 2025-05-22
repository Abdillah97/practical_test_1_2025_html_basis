// main.js - Custom Search + Column Sorting
    $(document).ready(function () {
      $('#mytable').DataTable({
        paging: true,
        lengthChange: true,
        searching: true,
        ordering: true,
        info: true,
        autoWidth: false,
        responsive: true
      });
    });
