const getImageStorageUrl = (uid, imageType) => {
  return `https://storage.googleapis.com/gorku-bucket/${uid}.${imageType}`
}

const getUploadImageUrl = (uid, imageType) => {
  return `https://storage.googleapis.com/upload/storage/v1/b/gorku-bucket/o?uploadType=media&name=${uid}.${imageType}`
}

export { getImageStorageUrl, getUploadImageUrl }
