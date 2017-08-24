Ext.define('MyApp.view.body.contentView', {
    extend: 'Ext.container.Container',
    //requires: ['CMS.view.user.UserGridController'],
    xtype: 'contentview',
    //controller: 'usergrid',//控制器
    id:"myPanel1",
    
    activeItem:0,
    layout: 'card',
    defaults: {
        border: true,
    },
    // the panels (or "cards") within the layout
    items: [{
        id: 'card-0',
        html: '<h1 style="padding-left:20px">Live View </h1><p style="padding-left:20px;font-size:17px">this is live view !</p>'
    },{
        id: 'card-1',
        html: '<h1 style="padding-left:20px">PlayBack </h1><p style="padding-left:20px">this is playback !</p>'
    },{
        id: 'card-2',
        html: '<h1 style="padding-left:20px">DeviceManagement </h1><p style="padding-left:20px">this is devicemanagement !</p>'
    },{
        id: 'card-3',
        html: '<h1 style="padding-left:20px">Backup </h1><p style="padding-left:20px">this is backup !</p>'
    }],
});