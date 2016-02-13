import React    from 'react';
import factory  from '../PropertyFactory';
import style    from 'PVWStyle/ReactProperties/PropertyPanel.mcss';

export default React.createClass({

    displayName: 'PropertyPanel',

    propTypes: {
        className: React.PropTypes.string,
        input: React.PropTypes.array,
        labels: React.PropTypes.object,
        onChange: React.PropTypes.func,
        viewData: React.PropTypes.object,
    },

    getDefaultProps() {
        return {
            className: '',
            input: [],
        };
    },

    valueChange(newVal) {
        if (this.props.onChange) {
            this.props.onChange(newVal);
        }
    },

    render() {
        var viewData = this.props.viewData,
            uiContents = (content) => factory(content, viewData, this.valueChange),
            uiContainer = (property) => {
                return (<div key={property.title}>
                    <div className={ style.propertyHeader }>
                        <strong>
                            {property.title}
                        </strong>
                    </div>
                    {property.contents.map(uiContents)}
                </div>);
            };

        return (
            <section className={ [this.props.className, style.propertyPanel].join(' ') }>
                {this.props.input.map(uiContainer)}
            </section>
        );
    },
});
