document.getElementById('chatbutton').addEventListener('click',
function()
{
    document.querySelector('.modal-bg').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function()
{
    document.querySelector('.modal-bg').style.display = 'none';
});

document.getElementById('cancelbutton').addEventListener('click',
function()
{
    document.querySelector('.modal-bg').style.display = 'none';
});