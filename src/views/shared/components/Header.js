import { connect } from "react-redux"

import {
    SearchProduct
} from '../../../store/actions/SearchActions'

const Header = (props) => {
    const {
        searchQuery
    } = props.search
    const {
        SearchProduct
    } = props
    return (
        <header className="main-header">
            <div className="header-navigation sticky-nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-sm-2">
                            <div className="logo">
                                <a href="index.html"><img style={{ height: 50 }} src="assets/images/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-10">
                            <div className="header_account_area">
                                <div className="header_account_list search_list">
                                    {/* <a href="javascript:void(0)"><i className="ion-ios-search-strong"></i></a> */}
                                    <div className="dropdown_search">
                                        <form action="#">
                                            <input
                                                value={searchQuery}
                                                onChange={(e) => {
                                                    SearchProduct(e.target.value)
                                                }}
                                                placeholder="Search your products here ..."
                                                type="text"
                                            />
                                        </form>
                                    </div>
                                </div>
                                <div className="contact-link">
                                    <div className="phone">
                                        <p>Call me:</p>
                                        <a href="tel:+923379912147">+923379912147</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = ({ product, search, }) => ({
    product, search,
})

export default connect(mapStateToProps, {
    SearchProduct,
})(Header)