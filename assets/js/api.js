
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Rayannecristinar/DIO-JavaScript-Portfolio.Profissional/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
