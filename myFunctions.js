function ctof()
{
    let c = document.getElementById('tempc').value;
    let f = ((c*9)/5)+32;
    document.getElementById('tempf').value=f;
}
function ftoc()
{
    let f = document.getElementById('tempf').value;
    let c = ((f-32)*5)/9;
    document.getElementById('tempc').value=c;
}