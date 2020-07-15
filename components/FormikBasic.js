import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import { Formik } from 'formik';

const FormikBasic = () => {
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

  return (
    <SafeAreaView style={{ marginTop: 90 }}>
      <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
        {(formikProps) => (
          <React.Fragment>
            <TextInput
              style={styles.formStyle}
              onChangeText={formikProps.handleChange('name')}
            />
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

export default FormikBasic;
