import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 .header {
    background: #fff !important;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    display: flex;
}

.margin-left-20 {
    margin-left: 20px !important;
}

.margin-right-20 {
    margin-right: 20px !important;
}

.margin-right-8 {
    margin-right: 8px !important;
}
.padding-10 {
    padding: 10px !important;
}

.font-size-16 {
    font-size: 16px;
}

.font-size-20 {
    font-size: 20px !important;


}.font-size-30 {
    font-size: 30px !important;
}

.margin-left-auto {
    margin-left: auto !important;
}

.margin-bottom-20 {
    margin-bottom: 20px !important;
}

.margin0{
    margin: 0!important;
}.margin-10{
    margin: 10px!important;
}
.padding0{
    padding: 0px!important;
}

.menu-divider {
    margin-top: -5px;
    margin-bottom: 0;
}

.inline-display {
    display: inline-block;
}

.text-center {
    text-align: center !important;
}

.text-right {
    text-align: right !important;
}

.text-left {
    text-align: left !important;
}
.side-bar-fixed-height,.layout-fixed-height{
    min-height: 100vh;
}

.bolder{
    font-weight: bolder;
}
.bold{
    font-weight: bold;
}


.float-right{
    float: right!important;
}
.float-left{
    float:left!important;
}
.clear{
    clear: both;
}
.floor-select{
    width: 100px!important;
}

`;

export default GlobalStyle;
