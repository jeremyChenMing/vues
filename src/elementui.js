/**
 * 需要多少引入多好组件，减少打包后文件的大小
 *
 */


import Vue from 'vue';
import { 
	Row,
	Col,
	Button,
	Input, 
	Select, 
	Carousel,
	CarouselItem,
	Collapse,
	CollapseItem,
	Dialog,
	Progress,
	Card, 
} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';



export default function elementui() {
	Vue.use(Row);
	Vue.use(Col);
	Vue.use(Input);
	Vue.use(Button);
	Vue.use(Select);
	Vue.use(Carousel);
	Vue.use(CarouselItem);
	Vue.use(Collapse);
	Vue.use(CollapseItem);
	Vue.use(Dialog);
	Vue.use(Progress);
	Vue.use(Card);

}




