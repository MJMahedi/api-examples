const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data =>displayBuddies(data))
}
loadBuddies();
const displayBuddies = (data) =>{
    console.log(data);
    const buddies =data.results;
    const buddiesDiv= document.getElementById('buddies');
for(const buddy of buddies){
    const p = document.createElement('p');
    p.innerText = `Name : ${buddy.name.first} ${buddy.name.last}
     Email : ${buddy.email}`;
    buddiesDiv.appendChild(p);

}
}