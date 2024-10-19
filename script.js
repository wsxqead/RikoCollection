function openPopup(videoUrl) {
  const width = 560;
  const height = 315;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  window.open(
    videoUrl,
    "popup",
    `width=${width},height=${height},top=${top},left=${left},scrollbars=no,resizable=no`
  );
}
