import moment from "moment";
import { useState } from "react";
import { connect } from "react-redux"
import {
    Button,
    Label,
    FormGroup,
    Input,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

import {
    SaveProduct,
    DeleteProduct,
} from '../../store/actions/ProductActions'

const ProductList = (props) => {
    const [showNewProductModal, ChangeShowNewProductModal] = useState(false)
    const [productName, ChangeProductName] = useState(false)
    const [price, ChangePrice] = useState(false)
    const [description, ChangeDescription] = useState(false)

    const {
        products,
    } = props.product
    const {
        searchQuery,
    } = props.search
    const {
        SaveProduct,
        DeleteProduct,
    } = props

    const RenderProducts = () => {
        return products
            .filter(obj => (
                obj.name.toLowerCase().includes(searchQuery) ||
                obj.price.toLowerCase().includes(searchQuery) ||
                obj.description.toLowerCase().includes(searchQuery)
            ))
            .map((item, key) => {
                const { id, image, name, description, price, inventoryDate } = item
                return (
                    <tr key={key}>
                        <td className="product-thumbnail">
                            <img
                                alt=""
                                src={image}
                                style={{ height: 120 }}
                            />
                        </td>
                        <td className="product-name"><a href="#">{name}</a></td>
                        <td className="product-price-cart">
                            <p>
                                {description}
                            </p>
                        </td>
                        <td className="product-quantity">
                            <span style={{ fontWeight: 'bold' }}>{price}</span>
                        </td>
                        <td className="product-subtotal">{moment(inventoryDate).format('Do, MMM YYYY')}</td>
                        <td className="product-remove">
                            <i
                                style={{ cursor: 'pointer' }}
                                className="fa fa-times"
                                onClick={() => DeleteProduct(id)}
                            >
                            </i>
                        </td>
                    </tr>
                )
            })
    }
    return (
        <>
            <Row>
                <Col>
                    <div className="cart-shiping-update-wrapper">
                        <Button color="success" onClick={() => ChangeShowNewProductModal(true)}>Add New Product</Button>
                    </div>
                </Col>
            </Row>
            <h3 className="cart-page-title">Your products</h3>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="table-content table-responsive cart-table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RenderProducts()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal isOpen={showNewProductModal} toggle={() => ChangeShowNewProductModal(false)} className="">
                <ModalHeader toggle={() => ChangeShowNewProductModal(false)}>Add New Product</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label>Product Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter product name"
                                    onChange={e => ChangeProductName(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label>Price</Label>
                                <Input
                                    type="number"
                                    placeholder="Product Price in pkr"
                                    onChange={e => ChangePrice(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="12">
                            <FormGroup>
                                <Label>Description</Label>
                                <Input
                                    type="textarea"
                                    placeholder="Describe your product"
                                    onChange={e => ChangeDescription(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <div className="cart-clear">
                        <Button
                            color="success"
                            onClick={() => {
                                SaveProduct(productName, price, description)
                                ChangeShowNewProductModal(false)
                                ChangeDescription('')
                                ChangePrice('')
                                ChangeProductName('')
                            }}>
                            {"Save"}
                        </Button>
                        {' '}
                        <Button color="danger" onClick={() => ChangeShowNewProductModal(false)}>Cancel</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}

const mapStateToProps = ({ product, search, }) => ({
    product, search,
})

export default connect(mapStateToProps, {
    SaveProduct,
    DeleteProduct,
})(ProductList)