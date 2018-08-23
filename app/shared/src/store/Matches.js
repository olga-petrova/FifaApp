Ext.define('FifaApp.store.Matches', {
	extend: 'Ext.data.Store',
	alias: 'store.matches',
	storeId: 'matches',
	model: 'FifaApp.model.Match',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'resources/shared/data/fifa_matches.json',
		reader: {
			type: 'json'
		}
	}
});
