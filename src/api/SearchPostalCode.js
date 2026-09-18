import axios from "axios"

export function searchPostalCode({keyword, page}) {

  return axios.get(
    "http://localhost:8080/road-name/postal-code",{
      params: {
        keyword: keyword,
        page: page
      }
    }
  )
}