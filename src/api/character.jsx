import api from "./api"

export const getCharacters = async () => {
    const response = await api.get('/character')

    if(response.status !== 200) {
        return []  //throw new error('')  << a forma correta
    }

    console.log('response do AXIOS ', response)
    return response.data.results
}