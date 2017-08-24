Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires:[ 'MyApp.view.header.HeaderView','MyApp.view.body.contentView','MyApp.view.body.sideDataView'],
    layout: "border",
    style:"background:white",
    items: [{
        xtype: "headerview",
        height: 60,
        width: "100%",
        region:'north',
    },{
    	width:"80%",
        border:false,
        region:'west',
        xtype:'contentview',
    },{
        width:"20%",
        region:'east',
        layout:'vbox',
        border:false,
        background:'white',
        items:[{
            height:35,
            width:"100%",
            id:'navlist-1012-body_7',
            html:'<h2 class="dataviewtitle">remote</h2>',
            xtype:'container',    
            },{
            width:"100%",
            xtype:'sidedataview',
            store:'sideDataStore',
            }
        ] 
    }

    ]


});
