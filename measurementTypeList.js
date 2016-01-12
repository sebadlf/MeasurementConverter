/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    Text,
    View,
    ListView,
} = React;

var styles = require('./styles');

var list = [{
    id: 'distance',
    title: 'Discance'
},{
    id: 'weight',
    title: 'Weight'
}];

var MeasurementTypeList = React.createClass({
    getInitialState: function() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
      return {
        dataSource: ds.cloneWithRows(list),
      };
    },
 

    render: function() {
        return (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData.title}</Text>}
            />
        );
    }
});

module.exports = MeasurementTypeList;