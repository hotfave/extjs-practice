Ext.define('MyApp.store.sideDataStore',{
	extend: 'Ext.data.Store',
	model: 'MyApp.model.sideDataModel',
	data:[
        {       
            title:'我的办公室',
            ip:'101.101.195.154',
            itemPath:[
                {id:'0',path:'./img/itemImg1.png'},
                {id:'1',path:'./img/itemImg2.png'},
                {id:'2',path:'./img/itemImg1.png'},
                {id:'3',path:'./img/itemImg1.png'}]
        },         
        {
            title:'会议室',
            ip:'10.20.852.8',
            itemPath:[
                {id:'0',path:'./img/itemImg1.png'},
                {id:'1',path:'./img/itemImg2.png'},
                {id:'2',path:'./img/itemImg1.png'}]
            },
        {
            title:'休息室',
            ip:'101.191.801.50',
            itemPath:[
                {id:'0',path:'./img/itemImg1.png'},
                {id:'1',path:'./img/itemImg2.png'},
                {id:'2',path:'./img/itemImg2.png'},
                {id:'3',path:'./img/itemImg1.png'},
                {id:'4',path:'./img/itemImg1.png'}]
            },
        {
            title:'茶水室',
            ip:'1014.19.801.741',
            itemPath:[
                {id:'0',path:'./img/itemImg1.png'},
                {id:'1',path:'./img/itemImg2.png'},]
            }
            ]
	
})