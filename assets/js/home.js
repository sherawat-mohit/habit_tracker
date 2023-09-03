// IFFE to change the status of habit to "Done", "Not Done", "Not Sta"
$('.habit-status-dropdown').on('change',function(){
    let id=this.id;
    let status=$(this).val();
    window.location.href = `http://localhost:3000/habits/toggleStatus?id=${id}&status=${status}`;
});