 var selectElement = '<option value="#value#">#text#</option>';

function populateAccounts(accounts)
{
    $("#selAccounts").empty();

    $.each(accounts, function (key, value) {
        var newElement = selectElement;
        $("#selAccounts").append(newElement.replace("#value#",value.id).replace("#text#",value.name));
    });
 }

function populateProperties(profiles)
{
    $("#selProperties").empty();

    $.each(profiles, function (key, value) {
        var newElement = selectElement;
        $("#selProperties").append(newElement.replace("#value#",value.id).replace("#text#",value.name + " - " + value.websiteUrl  ));
    });
    
}

function populateViews(views)
{
    $("#selPViews").empty();

    $.each(views, function (key, value) {
        var newElement = selectElement;
        $("#selViews").append(newElement.replace("#value#",value.id).replace("#text#",value.name));
    });
    
}

function populateTable(result)
{
    $("#tblReport tbody").empty();

    $.each(result.rows, function (key, value) { 
        $("#tblReport tbody").append("<tr><td>" + value[0] + "</td><td>" + value[1] + "</td><td>" + value[2] + "</td></tr>");
    });
    
}