const axios = require('axios')
const baseUrl = 'https://como-fazer-dev-pleno-9ef0f.firebaseio.com/'
const extension = '.json'
const auth = 'Hb9j66hAMPgpYqMbFXJYmkCQBPhd2a2Y7OM6rA8G'

const list = async key => {
    const content = await axios.get(`${baseUrl}${key}${extension}?auth=${auth}`)
    if (content.data){
        const objects = Object.keys(content.data).map(key => {
            return {id: key, ...content.data[key]}
        })
        return objects
    }
    return []
}

const apagar = async (key, id) => {
    await axios.delete(`${baseUrl}${key}/${id}${extension}?auth=${auth}`)
}

const get = async (key, id) => {
    const content = await axios.get(`${baseUrl}${key}/${id}${extension}?auth=${auth}`)
    return {
        id: id,
        ...content.data
    }
}

const update = async (key, id, data) => {
    await axios.put(`${baseUrl}${key}/${id}${extension}?auth=${auth}`, data)
    return true
}

const add = async (key, data) => {
    await axios.post(`${baseUrl}${key}${extension}?auth=${auth}`, data)
    return true
}

module.exports = {
    add, update, apagar, get, list
}