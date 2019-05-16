$('#count-sum').click(function() {
    let salary = $('div').find('span.salary');
    let value = 0;
    for (let i = 0; i < salary.length; i++) {
        let allSalary = $('span.salary').eq(i).text();
        let allSalarys = Number(allSalary);
        value += allSalarys;
    }
    $('#sum').html(value);
});