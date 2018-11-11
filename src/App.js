import React, {Component} from 'react';
import DisplayPanel from './components/DisplayPanel';
import ButtonPanel from './components/ButtonPanel';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Layer from 'grommet/components/Layer';
import Article from 'grommet/components/Article';

const operatorList = ['+', '-', '/', '*'];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expressionValue: '',
            ioValue: '0',
            isEvaluationPending: true
        }
    }
    buttonHandler = (x) => {
        //alert("hi");
        const input = x.currentTarget.id;
        switch (input) {
            case '0':
                this.zeroHandler();
                break;
            case '.':
                this.decimaHandler();
                break;
            case 'C':
                this.resetCalculation();
                break;
            case '<-':
                this.removeLastInput();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case 'x²':
            case '√':
            case '=':
                this.operatorHandler(input);
                break;
            default:
                this.numberHandler(input);
                break;
        }
    }

    resetCalculation = () => {
        this.setState({expressionValue: '', ioValue: '0'});
    }

    removeLastInput = (num) => {
        var str = this.state.ioValue;
        str = str.substring(0, str.length - 1);
        if (str !== '') {
            this.setState({ioValue: str});
        } else {
            this.setState({ioValue: '0'});
        }
    }

    numberHandler = (num) => {
        if (this.state.isEvaluationPending) {
            if (Number(this.state.ioValue) !== 0) {
                if ((this.state.ioValue).slice(-1) === '0' && (operatorList.includes(this.state.ioValue.slice(-2)))) {
                    let str = (this.state.ioValue).slice(0, this.state.ioValue.length - 2);
                    this.setState({
                        ioValue: (str + num)
                    });
                }else
                {
                    this.setState({
                        ioValue: (this.state.ioValue + num)
                    });
                }
            } else {
                this.setState({ioValue: num});
            }
        } else {
            this.setState({
                ioValue: +num,
                isEvaluationPending: true
            });

        }
    }

    zeroHandler = () => {
        if (this.state.isEvaluationPending) {
            if (Number(this.state.ioValue) !== 0) {
                this.setState({
                    ioValue: `${this.state.ioValue + '0'}`
                });
            } else {
                this.setState({
                    ioValue: +'0'
                });
            }
        } else {
            this.setState({
                ioValue: +'0',
                isEvaluationPending: true
            });
        }
    }

    decimaHandler = () => {}

    operatorHandler = (input) => {

        let result;
        switch (input) {
            case '√':
                result = Math.sqrt(this.state.ioValue);
                this.setState({expressionValue: this.state.ioValue});
                this.updateResult(result, input);
                break;
            case 'x²':
                result = Math.pow(this.state.ioValue, 2);
                this.setState({expressionValue: this.state.ioValue});
                this.updateResult(result, input);
                break;
            case '*':
                result = eval(this.state.ioValue);
                this.setState({
                    ioValue: (this.state.ioValue + '*')
                });
                this.setState({
                    expressionValue: this.state.ioValue + '*'
                });
                break;
            case '/':
                this.setState({
                    ioValue: (this.state.ioValue + '/')
                });
                break;
            case '=':
                result = eval(this.state.ioValue);
                this.setState({expressionValue: this.state.ioValue});
                this.updateResult(result, input);
                break
        }

    }

    updateResult(result, input) {
        if (isNaN(result)) 
            result = `wrong input ${this.state.ioValue} for ${input}`;
        this.setState({ioValue: result, isEvaluationPending: false});

    }
    render() {
        return (
            <Article>
                <Card>
                    <Box colorIndex='neutral-1' justify="center" pad='small'>
                        <DisplayPanel
                            expressionValue={this.state.expressionValue}
                            ioValue={this.state.ioValue}/>
                        <ButtonPanel
                            buttonHandler={this
                                .buttonHandler
                                .bind(this)}/>
                    </Box>
                </Card>
            </Article>

        );
    }
}

export default App;
