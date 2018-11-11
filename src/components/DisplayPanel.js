import React, {Component} from 'react';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Section from 'grommet/components/Section';
import TextInput from 'grommet/components/TextInput';

class DisplayPanel extends Component {

    render() {
        return (
            <Header fixed={true} splash={false} size='small'>
                <Box flex={true} pad='medium' justify='end'  responsive={false}>
                    <Section pad='none' separator='bottom'><TextInput className='disableInput' align='end' value={this.props.expressionValue}/></Section>
                    <Section pad='none' separator='none'><TextInput className='input' align='end' value={this.props.ioValue}/></Section>
                </Box>
            </Header>

        );
    }
}

export default DisplayPanel;