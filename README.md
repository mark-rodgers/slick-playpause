```html
<html>
  <head>
    <title>slick-playpause demo</title>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/mark-rodgers/slick-playpause/slick-playpause.css" />
  </head>
  <body>

  <div class="slick">
    <img src="//placehold.it/500x500?text=1" />
    <img src="//placehold.it/500x500?text=2" />
    <img src="//placehold.it/500x500?text=3" />
  </div>

  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/gh/mark-rodgers/slick-playpause/slick-playpause.js"></script>

  <script type="text/javascript">
    $(document).ready(function(){
      $(".slick").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true
      });
    });
  </script>

  </body>
</html>
```
