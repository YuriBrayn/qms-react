import { userState } from 'react';

function button () {
$('button').hover(function(){
    var $this = $(this);
    var $prevAll = $(this).prevAll();
    
    var className = $this.attr("class") + "-hover";
    
    $this.addClass(className);
    $prevAll.addClass(className);
 }, function() {
    var $this = $(this);
    var $prevAll = $(this).prevAll();
    
    $this.removeClass("detractor-hover passive-hover promoter-hover");
    $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
 });
}

function Home () {
    return <div class="container">
   <div class="title">
        <h1>Altitude | Enghouse</h1> 
        <h2>Quality Management Suite (Net Promoter Score)</h2>   
</div>
   <div class="widget">
      <button class="detractor">1</button>
      <button class="detractor">2</button>
      <button class="detractor">3</button>
      <button class="detractor">4</button>
      <button class="detractor">5</button>
      <button class="passive">6</button>
      <button class="passive">7</button>
      <button class="passive">8</button>
      <button class="promoter">9</button>
      <button class="promoter">10</button>
   </div>
     <style jsx>{`
     body {
        font-family: "Helvetica Neue", Helvetica, sans-serif;
      }
      
      .container {
        margin: 80px auto;
        width: 80%;
      }
      .container .widget span {
        color: #aaa;
        font-size: 12px;
      }
      .container .widget button {
        /* padding: 5px 10px; */
        font-size: 16px;
        white-space: nowrap;
        vertical-align: middle;
        display: inline-block;
        background: none;
        border: none;
        box-shadow: none;
        cursor: pointer;
        text-align: center;
        font-weight: 500;
        border-radius: 100%;
        margin: 0;
        outline: none;
        margin-left: -1px;
        width: 40px;
        height: 40px;
        border: 3px solid #eee;
        transform: scale(1);
        transition: background 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in, transform 0.2s cubic-bezier(0.5, 2, 0.5, 0.75);
      }
      .container .widget button.detractor-hover {
        background: #F44336;
        color: white;
        border-color: #f55a4e;
        transform: scale(1.05);
      }
      .container .widget button.passive-hover {
        background: #F57C00;
        color: white;
        border-color: #ff8910;
        transform: scale(1.05);
      }
      .container .widget button.promoter-hover {
        background: #4CAF50;
        color: white;
        border-color: #5cb860;
        transform: scale(1.05);
      }
      .container .widget.widget-sm {
        width: 315px;
        background: #eee;
        border: 2px solid #ccc;
        padding: 15px;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 30px;
      }
      .container .widget.widget-sm .positive-text, .container .widget.widget-sm .negative-text {
        position: absolute;
      }
      .container .widget.widget-sm .positive-text {
        right: 20px;
        bottom: 10px;
        text-align: right;
      }
      .container .widget.widget-sm .negative-text {
        left: 20px;
        bottom: 10px;
        text-align: left;
      }
      .container .widget.widget-sm button {
        border: none;
        margin-left: -3px;
        width: 27px;
        height: 27px;
        font-size: 12px;
        font-weight: normal;
        transform: scale(1) !important;
        /* background-color: #ccc; */
        border-radius: none;
        text-align: center;
        display: inline-block;
      }
   `}</style></div>
}

export default Home