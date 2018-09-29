$(document).ready(function() {
    var canvas = document.getElementById("canvas");
var woman = ["https://img.huffingtonpost.com/asset/5788dcb01b00002600f6e12b.jpeg?ops=scalefit_600_noupscale", "https://img.huffingtonpost.com/asset/5788dcb01a000024006fa953.jpeg?ops=scalefit_600_noupscale","https://pbs.twimg.com/media/CmIb-LCVEAAFStL.jpg", "https://img.huffingtonpost.com/asset/5788dcb01b00002700f6e12a.jpeg?ops=scalefit_600_noupscale", "https://img.huffingtonpost.com/asset/5788dcaf1a000023006fa952.jpeg?ops=scalefit_600_noupscale", "https://img.huffingtonpost.com/asset/scalefit_600_noupscale/5788dcaf1b00002700f6e127.jpeg", "https://img.huffingtonpost.com/asset/5788dcb01a00002600dd186b.jpeg?ops=scalefit_600_noupscale", "https://img.huffingtonpost.com/asset/5788dcb01b00002700f6e12a.jpeg?ops=scalefit_600_noupscale","https://img.huffingtonpost.com/asset/5788dcaf1a00002700dd1869.jpeg?ops=scalefit_600_noupscale","http://trendalert.me/wp-content/uploads/2016/12/trendalert-mefotografa-propo%CC%83e-nova-visa%CC%83o-da-beleza-feminina-1.jpg", "http://womo.ua/wp-content/uploads/2016/07/5788dcaf1a00002700dd1868.jpeg"];
var instrument = ["http://www.pngall.com/wp-content/uploads/2016/06/Saxophone-PNG-Image.png","https://ubisafe.org/images/cello-drawing-design-5.png", "http://pngimg.com/uploads/violin/violin_PNG12826.png", "https://cdn4.iconfinder.com/data/icons/BRILLIANT/musical_instruments/png/400/cornet.png", "https://i1.wp.com/freepngimages.com/wp-content/uploads/2017/02/maracas.png", "http://www.kanstul.com/wp-content/uploads/2017/03/390-Bb-Baritone.png" ]
function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
var img1 = imgRandom(woman);
var img2 = imgRandom(instrument);
image1 = new MarvinImage();
image1.load(img1, imageLoaded);
image2 = new MarvinImage();
image2.load(img2, imageLoaded);
var loaded=0;
function imageLoaded(){
  if(++loaded == 2){
    var image = new MarvinImage(image1.getWidth(), image1.getHeight());
    Marvin.combineByAlpha(image1, image, image, 0, 0);
    Marvin.combineByAlpha(image, image2, image, 120, 100);
    image.draw(canvas);
  }
}
});
