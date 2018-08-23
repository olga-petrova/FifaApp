Ext.define('FifaApp.view.matches.MatchesView',{
	extend: 'Ext.grid.Grid',
	xtype: 'matchesview',
	cls: 'matchesview',
	requires: [],
	controller: {type: 'matchesviewcontroller'},
	bind: {
		store: '{matchesstore}'
	},
	selectable: { mode: 'single' },
	listeners: {
		select: 'onItemSelected'
	},
	columns: [
		{ 
			text: 'Year',
			dataIndex: 'year',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{
			text: 'Team 1',
			dataIndex: 'home_team_name',
			width: 230
		},
		{
			text: 'Team 2',
			dataIndex: 'away_team_name',
			width: 230
		},
	]
});
