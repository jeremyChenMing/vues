/**
 * 需要多少引入多好组件，减少打包后文件的大小
 *
 */


import Vue from 'vue';
import { 
	Button, 
	Select, 
	Carousel,
} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';



export default function elementui() {
	Vue.component(Button.name, Button);
	Vue.component(Carousel.name, Carousel);

}