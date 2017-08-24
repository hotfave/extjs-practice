Ext.define("MyApp.view.header.HeaderView", {
    extend: "Ext.container.Container",
    alias: "widget.headerview",
    id:"myPanel2",
    layout:'hbox',
    width:"100%",
 //   xtype:'container',
    height:60,
    //cls:'bgcolor_2',
    defaults:{
        border:false,
        outline:false,
        
    },
    items:[{
        width: 180,
        height: "100%",
        id:"navlist-1012-body",
     //   cls:'bgcolor_2',
        xtype: "container",
        html: `<h2 class="one">ESSNET</h2>`
    },{
        flex:2,
        height: "100%",
        id:"navlist-1012-body_1",
       // cls:'bgcolor_1',
        xtype:'container',
        html: '<h2 class="fontstyle"><span class="header header-LiveView"></span>Live View</h2>',
      listeners:{
        click:{
            element:'el',
            fn:function(){
                var navList = document.getElementsByClassName('fontstyle');
                for(var i=0;i<navList.length;i++){
                    navList[i].className = navList[i].className.split(' active')[0]
                };
                this.dom.getElementsByClassName('fontstyle')[0].className += ' active';


                Ext.getCmp("myPanel1").setActiveItem(0);
               
        
            }
        },
        afterrender: function(){
            Ext.getDom("navlist-1012-body_1").getElementsByClassName('fontstyle')[0].className += ' active';
        }
        
       
    }
    }, {
        flex:2,
        height: "100%",
        id:"navlist-1012-body_2",
       // cls:'bgcolor_1',
        xtype:'container',
        html: `<h2 class="fontstyle"><span class="header header_PlayBack"></span>PlayBack</h2>
        `,

       // iconCls:'free_1',
       listeners:{
        click:{
            element:'el',
            fn:function(){
                var navList = document.getElementsByClassName('fontstyle');
                for(var i=0;i<navList.length;i++){
                    navList[i].className = navList[i].className.split(' active')[0]
                };
                this.dom.getElementsByClassName('fontstyle')[0].className += ' active';
                Ext.getCmp("myPanel1").setActiveItem(1);}
            }
        //handler:function(){Ext.getCmp("myPanel1").setActiveItem(0)}
        
    }
    }, {
        flex:3,
        height: "100%",
        id:"navlist-1012-body_3",
      //  cls:'bgcolor_1',
        xtype:'container',
        html: `<h2 class="fontstyle"><span class="header header_Setting"></span>DeviceManagement</h2>
        `,
       listeners:{
        click:{
            element:'el',
            fn:function(){
                var navList = document.getElementsByClassName('fontstyle');
                for(var i=0;i<navList.length;i++){
                    navList[i].className = navList[i].className.split(' active')[0]
                };
                this.dom.getElementsByClassName('fontstyle')[0].className += ' active';
                Ext.getCmp("myPanel1").setActiveItem(2);}
            }
        
    }
       
    }, {
        flex:2,
        height: "100%",
        id:"navlist-1012-body_4",
       // cls:'bgcolor_1',
        xtype:'container',
        html: `<h2 class="fontstyle"><span class="header header_Backup"></span>Backup</h2>
        `,

       listeners:{
        click:{
            element:'el',
            fn:function(){
                var navList = document.getElementsByClassName('fontstyle');
                for(var i=0;i<navList.length;i++){
                    navList[i].className = navList[i].className.split(' active')[0]
                };
                this.dom.getElementsByClassName('fontstyle')[0].className += ' active';
                Ext.getCmp("myPanel1").setActiveItem(3);}
            }
        
    }
    },  {
        flex:5,
        height: "100%",
        id:"navlist-1012-body_5",
       // cls:'bgcolor_2',
        xtype: "container",
        html:'<h1 class="two"></h1>',
    }, {
        flex:1,
        height: "100%",
        xtype: 'container',
      //  cls:'bgcolor_1',
        id:"navlist-1012-body_6",
        html: `<span class="fa fa-caret-right huanfu" style:></span>
        `,
        
        listeners:{
            click:{
            element:'el',
            fn:function(event,target){
                if(target.nodeName == 'SPAN'){
                    var skinStyle = document.getElementById('skinStyle')

                    if(skinStyle.href.indexOf('header') !== -1){
                        skinStyle.href = './css/skinchange.css'
                    }else{
                        skinStyle.href = './css/header.css'
                    }
                         Ext.fly('myPanel2').toggleCls("bgcolor_4");
                }
           /* Ext.fly('navlist-1012-body').toggleCls("bgcolor_4");
            Ext.fly('navlist-1012-body_1').toggleCls("bgcolor_3");
            Ext.fly('navlist-1012-body_2').toggleCls("bgcolor_3");
            Ext.fly('navlist-1012-body_3').toggleCls("bgcolor_3");
            Ext.fly('navlist-1012-body_4').toggleCls("bgcolor_3");
            Ext.fly('navlist-1012-body_5').toggleCls("bgcolor_4");
            Ext.fly('navlist-1012-body_6').toggleCls("bgcolor_3");
            Ext.fly('navlist-1012-body_7').toggleCls("bgcolor_6");
            */
           }}

        }
            
        
},{
    flex:1,
    height: "100%",
    xtype: "container",
    html:'<h1 class="three"></h1>',

}




    ],
    


});
