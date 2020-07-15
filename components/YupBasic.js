import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
});

const YupBasic = () => {
  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values));
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };
  
  const formJsx = (formikProps) => {
    return (
      <View>
        {formikProps.isSubmitting ? (
          <ActivityIndicator color="green" />
        ) : (
          <Button title="Submit" onPress={formikProps.handleSubmit} />
        )}
      </View>
    );
  };

  const errorJsx = (formikProps) => {
    return <Text style={{ color: 'red' }}>{formikProps.errors.name}</Text>;
  };

  return (
    <SafeAreaView style={{ marginTop: 90 }}>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {(formikProps) => (
          <React.Fragment>
            <TextInput
              style={styles.formStyle}
              onChangeText={formikProps.handleChange('name')}
            />
            {errorJsx(formikProps)}
            {formJsx(formikProps)}
          </React.Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
  },
});

export default YupBasic;
