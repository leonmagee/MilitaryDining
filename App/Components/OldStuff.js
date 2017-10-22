<Picker style={styles.pickerInput} selectedValue='Male' onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
  <Picker.Item label="Male" value="male"/>
  <Picker.Item label="Female" value="female"/>
</Picker>
