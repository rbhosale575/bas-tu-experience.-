body{
perspective:1000px;
overflow:hidden;
}

.kiss{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%) scale(0.1);
font-size:40px;
animation:zoomKiss 2s linear forwards;
}

@keyframes zoomKiss{
0%{
transform:translate(-50%,-50%) scale(0.1);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translate(-50%,-50%) scale(4);
opacity:0;
}
  }
