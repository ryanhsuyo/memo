const  content = document.getElementById('content')
const  date = document.getElementById('date')
const  time = document.getElementById('time')
const  add = document.getElementById('add')
const  del = document.getElementById('del')
const  list = document.getElementById('list')


let listContent = []
function render(){
    let htmlStr = ''

    listContent.forEach(function(e){
        
        htmlStr = htmlStr + `
            <div>
                <p>事項:${e.content}</p>
                <p>時間:${e.date} ${e.time}</p>
            </div>
            `
        })
    list.innerHTML = htmlStr
}
add.addEventListener('click', function(){
    if(content.value == ''){
        alert('還沒填寫事項');
    }
    console.log(content.value);
    console.log(date.value);
    console.log(time.value);
    
    listContent.unshift({
        content: content.value,
        date : date.value,
        time : time.value
    })
    
    render()
    
})

del.addEventListener('click', function(){
    listContent.shift()
    
    render()
})