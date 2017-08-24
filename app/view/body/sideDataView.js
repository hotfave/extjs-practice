Ext.define('MyApp.view.body.sideDataView', {  
    extend: 'Ext.view.View',
    xtype: 'sidedataview',
    itemTpl:`
        <div class="container">
            <div class="information">
                <span class="fa fa-caret-right arrow"></span>
                <span class="title">{title}</span>
                <span class="ip">{ip}</span>
                <span class="list_right"></span>
            </div> 
            <ul class="items">
                <tpl for="itemPath">
                    <li ><img id="img_{id}" src="{path}" /></li>
                </tpl>
            </ul>
        </div>
        `,
    listeners:{
    	click:{
    		element:'el',
    		fn:function(event, target, o){
    			if (target.nodeName == 'IMG') {
    				var parent = event.item.querySelector('.title').innerText
    				var item = target.id.split('img_')[1]
    				console.log('%cparent:' + parent + '; item: ' + item , 'text-shadow:0 1px 0 #ccc;font-size: 14px;color: red;')
    			}
    			if (target.nodeName == 'UL' || target.nodeName == 'IMG' || target.nodeName == 'LI') return;
    			
    			var items = event.item.querySelector('.items')
    			var height = items.style.height
    			if(height == '0px'){
    				event.item.querySelector('.fa-caret-right').style.transform = 'rotate(90deg)'
    				//items.style.height = items.currentHeight + 'px' 
    				items.style.height = items.currentHeight + 'px'  				
    				//items.style.height =  '100px'
    			}else{
    				event.item.querySelector('.fa-caret-right').style.transform = 'rotate(0deg)'
    				items.style.height = '0px'
    				
    			}

    		}
    	},
        afterrender: function(){
			window.onload = function(){
					var elements = this.all.elements
					for(var i=0;i<elements.length;i++){
						var items = elements[i].querySelector('.items')
						items.currentHeight = items.clientHeight
						items.style.height = '0px'
					}
				}.bind(this)
		}
    }


});
