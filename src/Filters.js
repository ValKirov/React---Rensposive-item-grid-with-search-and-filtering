import React from 'react'

export default class Filters extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            radio: 0
        } 
    }

    changeRadio(id, e) {
        this.setState({ radio: id });
        this.props.tagSelected(e.target.value)
    }

    render() {

        return (
            <div className="page-filters">
                <input onChange={this.changeRadio.bind(this, 0)} type="radio" id="tag-all" value="all" name="game-tags" checked={this.state.radio === 0} />
                <label htmlFor="tag-all" className="tag-label"><span className="icon-all"></span><p>All</p></label>
                <input onChange={this.changeRadio.bind(this, 1)} type="radio" id="tag-new" value="new" name="game-tags" checked={this.state.radio === 1} />
                <label htmlFor="tag-new" className="tag-label"><span className="icon-new"></span><p>New</p></label>
                <input onChange={this.changeRadio.bind(this, 2)} type="radio" id="tag-top" value="top" name="game-tags" checked={this.state.radio === 2} />
                <label htmlFor="tag-top" className="tag-label"><span className="icon-top"></span><p>Top</p></label>
            </div>
        )
    }
}
