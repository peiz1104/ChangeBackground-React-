//进行换肤组件的构建
var ChangeBackground=React.createClass({
	//进行默认状态的创建
	getInitialState:function(){
		return{
			data:[]
		}
	},
	//定义换背景图
	changeBg:function(e){
		// console.log(13)
		//点击谁就是谁相当于this
       var li=e.currentTarget;
        var id=li.getAttribute('data-id');
        document.body.style.backgroundImage='url(img/skin/big_'+id+'.jpg)';
	},
	//进行createList方法创建
	createList:function(){
		var slef=this;
		// console.log(this.state.data)
      return this.state.data.map(function(value,index){
          return (<li key={index} data-id={value.id} onClick={slef.changeBg}>
          	<img src={"img/skin/"+value.src} alt=""/>
          	<p>{value.title}</p>
          </li>)
      })
	},
	//渲染页面
	render:function(){
		//渲染虚拟dom
		return (
             <div className="skin">
             	<div className="container">
             		<ul>{this.createList()}</ul>
             	</div>
             </div>
			)
	},
    //当组件构建完成请求数据
    componentDidMount:function(){
     //用jQuery的$进行请求数据
     var self=this;
     $.get('data/skin.json',function(res){
         if(res && res.errno==0){
         	//dang请求完成进行将数据储存在默认状态中
         	self.setState({
         		data:res.data
         	})
         	
         }
     })
    }
})
//创建组件
//对于jsx写的组件进行创建组件时只需将组建名称以标签的形式写出；单标签或标签对都是可以的
ReactDOM.render(<ChangeBackground></ChangeBackground>,app)