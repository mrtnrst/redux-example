import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    actions as personActions,
    selectors as personSelectors,
    types as PersonTypes
} from '../../state/person';

const mapStateToProps = (state) => {
  return {
    people: personSelectors.selectPeople((state))
  };
};

const mapActionCreators = (dispatch) => {
  return bindActionCreators({
    fetchData: personActions.fetchUsers
  }, dispatch);
}

const App = ({ fetchData, people }) => {
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={people}
            renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontSize: 32 }}>
                            {item.firstName} {item.lastName}
                        </Text>
                    </View>
                )
            }
            keyExtractor={(item: PersonTypes.Person) => item.id}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapActionCreators)(App);