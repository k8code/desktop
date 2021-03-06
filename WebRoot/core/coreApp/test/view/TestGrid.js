Ext.define("core.test.view.TestGrid",{
	extend:"core.app.base.BaseGrid",
	alias:"widget.testgrid",
	funCode:"testmodule_main",
	itemId:"testmodule_main_basegrid",
	columns:[{
		text:"名称",
		dataIndex:"name",
		field:{
			xtype:"textfield"
		}
	},{
		text:"编码",
		dataIndex:"code",
		field:{
			xtype:"textfield"
		}
	},{
		text:"出生日期",
		dataIndex:"birthday",
		field:{
			xtype:"datetimefield"
		}		
	}],
	store:Ext.create("Ext.data.Store",{
		fields:[
			{name:"name",type:"string"},
			{name:"code",type:"string"},
			{name:"birthday",type:"string"}
			]
	})
});