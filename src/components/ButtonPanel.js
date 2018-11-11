import React, {Component} from 'react';
import Button from 'grommet/components/Button';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

class ButtonPanel extends Component {


    createButtonPanel = () => {

        const buttonPanelRow1 = this.createbuttonPanelRow(
            ['C', '<-', '√', 'x²']
        );

        const buttonPanelRow2 = this.createbuttonPanelRow(['7', '8', '9', '/']);
        const buttonPanelRow3 = this.createbuttonPanelRow(['4', '5', '6', '*']);
        const buttonPanelRow4 = this.createbuttonPanelRow(['1', '2', '3', '-']);
        const buttonPanelRow5 = this.createbuttonPanelRow(['0', '.', '=', '+']);

        return (
            <Table responsive={true}>
                <tbody>{buttonPanelRow1}
                    {buttonPanelRow2}
                    {buttonPanelRow3}{buttonPanelRow4}{buttonPanelRow5}</tbody>
            </Table>
        );
    }

    createbuttonPanelRow = (arr) => {
        let buttonColumns = [];
        arr.forEach((element, index) => {
            buttonColumns.push(
                <td key={index}>
                    <Button
                    id={element}
                    label={element}
                    primary={true}
                    className='button'
                    onClick={(e) => this.props.buttonHandler(e)}/>
                </td>
            );
        });

        return <TableRow>{buttonColumns}</TableRow>;
    }

    render() {
        let buttonPanel = this.createButtonPanel();
        return buttonPanel;
    }
}

export default ButtonPanel;