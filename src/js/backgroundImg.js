export async function getBackgroundImage() {
  const url =
    'https://api.unsplash.com/photos/random?client_id=O2i326sq5rbgynSMb0RNvC4EbApEpopFiPYeyPJzWx4&query=night-sky&orientation=landscape&count=1';
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data[0].urls.full;
      const imageAuthor = data[0].user.name;

      let bgImg = new Image();
      bgImg.onload = function () {
        document.body.style.backgroundImage = `url(${bgImg.src})`;
        document.getElementById(
          'photoCredit'
        ).innerText = `Photo: ${imageAuthor}`;
      };
      bgImg.src = imageUrl;
    })
    .catch((error) => {
      let bgImg = new Image();
      bgImg.onload = function () {
        document.body.style.backgroundImage = `url(${bgImg.src})`;
        document.getElementById(
          'photoCredit'
        ).innerText = `Photo: Vincentiu Solomon`;
      };
      bgImg.src =
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2113&q=80';
    });
}
