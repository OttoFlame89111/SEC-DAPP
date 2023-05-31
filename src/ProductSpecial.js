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
				關注領養狗狗最新消息介紹
				<td></td>

歡迎加入我們的領養狗狗社群！我們致力於為流浪狗提供安全、溫暖和永久的家庭，並通過定期分享最新消息和資訊，讓您緊跟我們的領養活動。


				</span>
			</div>
		</div>
	);
}

export default ProductSpecial;