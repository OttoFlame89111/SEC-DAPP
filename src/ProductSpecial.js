import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ProductSpecial.css";
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function ProductSpecial(){
	useTranslation();
	return(
		<div className="Container5">
			<span className="Container5-title">
				<Trans i18nKey='description.container5_first_title'/>
			</span>
			<br/>
			<div className="Container5-center">
				<div className="Container5-pic1"></div>
				<div className="Container5-pic2"></div>
				<div className="Container5-pic3"></div>
			</div>
			<span className="Container5-title">
				<Trans i18nKey='description.container5_second_title'/>
			</span>
			<br/>
			<div className="Container5-bottom">
				<div className="Container5-picture"></div>
				<span className="Container5-text">
				Lorern lpsum is simply dummy text of the printing and typeset-
				ting industry. Lorern lpsum has been the industry's standard
				dummy text ever since the 1500s, when an unknown printer
				took a galley of type and scrambled it to make a type speci-
				men book. It has survived not only five centuries, but also the
				leap into electronic typesetting, remaining essentially un-
				changed. It was popularised in the 1960s with the release of 
				Letraset sheets containing Lorern lpsum passages, and more 
				recently with desktop publishing software like Aldus Page-
				Maker including versions of Lorern lpsum.
				</span>
			</div>
		</div>
	);
}

export default ProductSpecial;