// IFFE to change the status of habit to "Done", "Not Done", "Not Started"
$('.habit-status-dropdown').on('change',function(){
    let id=this.id;
    let status=$(this).val();
    window.location.href = `/habits/toggleStatus?id=${id}&status=${status}`;
});