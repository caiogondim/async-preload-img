export default function preloadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onabort = reject
    img.onerror = reject
    img.src = url;
  })
}
