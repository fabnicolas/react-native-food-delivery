import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PopupDialog, {DialogTitle, SlideAnimation} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({slideFrom: 'bottom'});

class GeneralDialog extends Component {
    render() {
      return (
        <PopupDialog
          dialogTitle={<DialogTitle title={this.props.title}/>}
          ref={(popupDialog) => this.slideAnimationDialog = popupDialog}
          dialogAnimation={slideAnimation}
          show={this.props.show}
          onDismissed={this.props.onDismissed}
        >
          <View style={styles.dialogContentView}>
            {this.props.children}
          </View>
        </PopupDialog>
      );
    }
}

const styles = StyleSheet.create({
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GeneralDialog;