const subBtn = document.getElementById("sign-up-btn")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const logBtn = document.getElementById("sign-in-btn")
const addBtn = document.getElementById("add-btn")
const editBtn = document.getElementById("edit-btn")
const removeBtn = document.getElementById("remove-btn")


// register an Email and password
subBtn.addEventListener('click', () => {
    
    // document.getElementById('load').innerHTML="Loading..."
    fetch(`http://192.168.5.76:3011/register?email=${inputEmail.value}&password=${inputPassword.value}`, {mode: "no-cors"});
    console.log('button clicked')

    
    
})
//sign in
logBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/pull?Email=${email}`, {mode: "no-cors"});
    let data = await response.json();
    console.log(date[0].ID)
    // return {
    //     setData(ID)
    //     inner.HTML = data.Content,
    //     inner.HTML = data.CA
    // }
})
// add a reminder
addBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/reminder?reminder=${email}&id=${id}&dueDate=${dueDate}`, {mode: "no-cors"});
    let data = await response.json();
})
// edit a reminder
editBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/edit?edit=${edit}&id=${id}&rId=${rId}`, {mode: "no-cors"});
})
// delete a reminder
removeBtn.addEventListener('click', async () => {
    
    let response = await fetch(`http://192.168.5.76:3011/delete?rId=${rId}`, {mode: "no-cors"});
})


if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("id", `${id}`);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem(`${id}`);
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

  window.addEventListener('storage', (id) => {
    console.log(`${id}`)
  });

  const setData = (id) => {
    console.log('SET');
    window.sessionStorage.setItem('id', `${id}`);
}
 

  const clearData = () => {
      console.log('CLEAR');
      window.sessionStorage.clear()
  }