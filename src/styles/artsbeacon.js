import { css } from '@emotion/core'

const artsbeacon = css`
  .btn-danger {
    color: #fff;
    background-color: #d645d2;
    border-color: #d645d2;
    font-size: 1rem;
  }
  .btn-danger:hover {
    background-color: #4f0294;
    border-color: #4f0294;
  }
  .btn-primary {
    color: #fff;
    background-color: #de02d8;
    border-color: #de02d8;
    font-size: 1.1rem;
  }
  .btn-primary:hover {
    background-color: #4f0294;
    border-color: #4f0294;
  }

  body {
    font: 400 19px Lato, sans-serif;
    line-height: 1.8;
    color: #818181;
  }
  h2 {
    font-size: 26px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
  }
  h3 {
    color: #303030;
  }
  h4 {
    font-size: 20px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
  }
  .jumbotron {
    padding: 150px 25px;
    padding-bottom: 10px;
    padding-bottom: 200px;
  }

  .jumbotron.hands {
    background-color: #fff;
    color: #fff;
    background-image: url(img/hands.jpg);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .jumbotron.hands h1 {
    background-color: #de02d8;
    display: inline-block;
  }
  .jumbotron.hands .info p {
    background-color: rgba(214, 69, 210, 0.7);
  }

  .jumbotron.wall {
    background-color: #fff;
    color: #fff;
    background-image: url(img/wall.jpg);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .jumbotron.wall h1 {
    background-color: #de02d8;
    display: inline-block;
  }
  .jumbotron.wall .info p {
    background-color: rgba(214, 69, 210, 0.7);
  }

  .jumbotron.fuji {
    background-color: #fff;
    color: #000;
    background-image: url(img/fuji.jpg);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .jumbotron.fuji p {
    font-weight: 400;
  }

  .jumbotron h1 {
    /* background-color: #de02d8;
display: inline-block; */
    padding: 2px 15px;
  }
  .jumbotron p {
    font-size: 26px;
    margin: 40px auto;
  }
  .jumbotron .info p {
    /* background-color: rgba(214, 69, 210, 0.7);  */
    display: inline;
    padding: 7px 10px;
  }
  .jumbotron img {
    display: none;
    width: 300px;
    margin-bottom: 40px;
  }
  .container-fluid {
    padding: 60px 50px;
  }
  .bg-grey {
    background-color: #f6f6f6;
  }
  .bg-black {
    background-color: #000000;
    color: #fff;
  }
  .logo-small {
    color: #d645d2;
    font-size: 50px;
  }
  .logo {
    color: #d645d2;
    font-size: 200px;
  }
  .thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
  }
  .thumbnail img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .carousel-control.right,
  .carousel-control.left {
    background-image: none;
    color: #d645d2;
  }
  .carousel-indicators li {
    border-color: #d645d2;
  }
  .carousel-indicators li.active {
    background-color: #d645d2;
  }
  .item h4 {
    font-size: 22px;
    line-height: 1.375em;
    font-weight: 400;
    font-style: italic;
    margin: 30px 0 90px 0;
  }
  .item span {
    font-style: normal;
  }
  .panel {
    border: 1px solid #d645d2;
    border-radius: 0 !important;
    transition: box-shadow 0.5s;
  }
  .panel:hover {
    box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);
  }
  .panel-footer .btn:hover {
    border: 1px solid #d645d2;
    background-color: #fff !important;
    color: #d645d2;
  }
  .panel-heading {
    color: #fff !important;
    background-color: #d645d2 !important;
    padding: 25px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .panel-footer {
    background-color: white !important;
  }
  .panel-footer h3 {
    font-size: 32px;
  }
  .panel-footer h4 {
    color: #aaa;
    font-size: 14px;
  }
  .panel-footer .btn {
    margin: 15px 0;
    background-color: #d645d2;
    color: #fff;
  }
  footer .glyphicon {
    font-size: 20px;
    margin-bottom: 20px;
    color: #d645d2;
  }
  .slideanim {
    visibility: hidden;
  }
  .slide {
    animation-name: slide;
    -webkit-animation-name: slide;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
  }

  .announcement p {
    margin: 0 0 30px;
    line-height: 1.5em;
    font-size: 22px;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }

  #classListDropdown {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
      width: 100%;
      margin-bottom: 35px;
    }
    #classDetails .nav.nav-pills {
      display: none;
    }
    #classListDropdown {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    .jumbotron h1 {
      font-size: 54px;
    }
    .logo {
      font-size: 150px;
    }
    #facebook-frame {
      display: none;
    }
  }
  /* cards */
  .card {
    background-color: #ffffff;
    padding: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }
  .card:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(0, 0, 0, 0.3);
    color: black;
  }
  .card img {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .card h4 {
    margin: 20px;
  }
  .card p {
    margin: 20px 0;
    opacity: 0.65;
  }
  .card p:last-child {
    padding-bottom: 20px;
    opacity: 1;
  }

  #registerForm {
    margin-top: 50px;
  }

  .nav-pills > li.active > a,
  .nav-pills > li.active > a:focus,
  .nav-pills > li.active > a:hover {
    background-color: #d645d2;
  }
`

export default artsbeacon
