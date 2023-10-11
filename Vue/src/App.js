improt MyButton from "./components/MyButton.js";
//vue 的根组件
const template = `<div>
<h1>APP组件</h1>
<MyButton />
</div>
`;

export default {
    components:{MyButton,},template,};