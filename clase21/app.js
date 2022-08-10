

const imgGitHub = async () => {
    const nameJson = await fetch("user.json")
    const user = await nameJson.json()
    const dataGit = await fetch(`https://api.github.com/users/${user.name}`)
    const imgAvatar = await dataGit.json()
    let img = document.createElement("img")
    img.src = imgAvatar.avatar_url
    document.body.appendChild(img)
}

imgGitHub()
