export default{
  getImage(img){
    return new URL(img,import.meta.url).href
  },
}