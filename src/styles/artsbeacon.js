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
  }
  .btn-primary:hover {
    background-color: #4f0294;
    border-color: #4f0294;
  }
  .btn-lg {
    font-size: 1.1rem;
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
    #facebook-frame {
      display: none;
    }
  }
`

export default artsbeacon
