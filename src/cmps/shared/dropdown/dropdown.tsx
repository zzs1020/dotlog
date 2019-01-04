import React, { RefObject } from 'react';
import Button from '../button/button';
import './dropdown.scss';
import { ISelectOption } from '../../../models/select-option.model';
import withClickOutside from '../with-click-outside/with-click-outside';

type Props = {
    options: ISelectOption[],
    placeholder?: string,
    hideSelected?: boolean, // some cases (nav dropdown) don't need to show selected value
    btnType?: string
    onSelect: (ISelectOption) => void,
    domRef: RefObject<HTMLDivElement>,
    addClickListener: () => void,
	removeClickListener: () => void
};

type State = {
    closed: boolean,
    selected: ISelectOption
};

// dropdown can have more custom styles and it's more extensive, but advantage of using <select>: can have mobile native support
class Dropdown extends React.Component<Props, State> {
    public static defaultProps = {
        btnType: 'outline-primary'
    };

    constructor(props) {
        super(props);

        this.state = {
            closed: true,
            selected: null
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        this.props.addClickListener();
    }

    componentWillUnmount() {
        this.props.removeClickListener();
    }

    // withClickOutside hooks, child cmp have to implement its logic itself
	handleClickOutside() {
		this.setState({
            closed: true
        });
	}

    toggleDropdown() {
        this.setState((prev) => ({
            closed: !prev.closed
        }));
    }

    selectItem(option: ISelectOption) {
        // maintain local state
        this.setState({
            selected: option
        });
        // leverage specific handle logic to outside
        this.props.onSelect(option);
        this.toggleDropdown();
    }

    render() {
        const { options, placeholder, hideSelected, btnType, domRef } = this.props;
        const { selected, closed } = this.state;
        return (
            <div ref={domRef} className="dropdown">
                <Button btnType={btnType} className="dropdown-toggle" onClick={this.toggleDropdown}>
                    {(hideSelected ? 0 : selected && selected.label) || placeholder || 'Select'}
                </Button>
                {closed ? null :
                    <div className="dropdown-menu">
                        {options.map(op => (
                            <button key={op.value} className={`dropdown-item ${selected === op ? 'active' : ''}`} onClick={() => this.selectItem(op)}>
                                {op.label}
                            </button>
                        ))}
                    </div>
                }
            </div>
        );
    }
}

export default withClickOutside(Dropdown);
