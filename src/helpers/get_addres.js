const link = "https://geo.ipify.org/api/v2/country,city?apiKey=at_68qe8wiL5J2rpJfSzYrneOmi3YsCq&ipAddress=";
export async function getAddress(ip = "8.8.8.8") {
    const respons =  await fetch(`${link}${ip}`)
    return await respons.json()
}