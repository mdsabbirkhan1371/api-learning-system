const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displyBuddy(data))
}
loadBuddies()
const displyBuddy = (data) => {
    /* console.log(data) */
    const buddies = data.results;
    /* console.log(buddies) */
    const buddesDive = document.getElementById('buddyes')
    for (buddy of buddies) {
        console.log(buddy.name.first, buddy.name.last)
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title}  ${buddy.name.first} ${buddy.name.last} email:${buddy.email}`
        buddesDive.appendChild(p);
    }
}