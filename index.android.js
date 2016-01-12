/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var styles = require('./styles');

var MeasurementTypeList = require('./measurementTypeList');

var MeasurementConverter = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
  <Navigator
    initialRoute={{name: 'My First Scene', index: 0}}
    renderScene={(route, navigator) =>
      <MeasurementTypeList
        name={route.name}
        onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    }
  />
      </View>
    );
  }
});

AppRegistry.registerComponent('MeasurementConverter', () => MeasurementConverter);
