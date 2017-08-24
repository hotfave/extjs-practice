Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',//继承Ext.app.Application
    
    name: 'MyApp',//命名空间

   stores: [
        'sideDataStore'//引入需要的store
    ],
    launch: function () {

    }
});
