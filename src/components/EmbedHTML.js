import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<style>
.tech-slideshow {
  height: 100px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border:0px solid black;
}

.mover-1 {
  height: 100px !important;
  width: 10000px;
  
  position: absolute;
  overflow-x:hidden;
  top: 0;
  left: 0;

  animation: moveSlideshow 3s linear infinite;
}

.mover-1 img {
  display:inline-block;
  vertical-align:middle;
  width:100px;
  margin:0;
  padding-left: 150px;
  height: 100px !important;
}

@keyframes moveSlideshow {
  100% { 
    transform: translateX(-520px);  
  }
}
</style>
<div class="tech-slideshow">
  <div class="mover-1">
    <img src="https://static.tildacdn.com/tild6566-3632-4635-b261-623861326630/11app.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3730-6166-4664-b937-663966316663/12G.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3334-6366-4730-b632-366635326563/14vis.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild6338-3665-4333-b230-343966666562/15ms.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3536-3035-4831-a566-623165313564/16am.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3232-6366-4565-b930-616338633063/17jsb.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3866-6365-4437-b033-663030316236/7giro.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild3764-3537-4136-a463-333037366636/8eps.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild6362-3566-4562-b565-623133356361/9cb.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild6130-3935-4534-b935-646233663131/10banc.jpg" style="height:150px;">
    <img src="https://static.tildacdn.com/tild6430-3665-4436-a133-666636656666/13ali.jpg" style="height:150px;">
 </div>
 </div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});