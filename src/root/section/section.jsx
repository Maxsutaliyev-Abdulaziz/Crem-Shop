import React, { Component } from "react";
import data from "../Mock/data";
import { Header, H1, SS, SSS, ZZZ, PP, Sss, Pp, Mini, H2, Hr, Img, Mbox, Pbox, Btn, H3, Sticke, Div } from './../styled'
import icon from "../../img/icon.png"
import H from "../../img/H.png"


class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: data,
            selected: null,
        }
    }
    render() {
        // const onEdit = (selected) => {
        //     this.setState({ selected })
        // };
        // const onNameFilter = ({ target: { value } }) => {
        //     let res = data.filter((vl) => vl.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        //     this.setState({ list: res, });
        // };
        // const del = (id) => {
        //     let res = this.state.list.filter(value => value.id !== id)
        //     this.setState({ list: res, });
        //     console.log(id);
        // };

        // const onClick = () => {
        //     let res = this.state.list.map((value) => value.id === this.state.selected.id ? this.state.selected : value)
        //     this.setState({ list: res, selected: null });
        //     console.log(this.state.selected.id);
        // };
        // const onChangee = ({ target: { value, name } }) => {
        //     this.setState((state) => { return { selected: { ...state.selected, [name]: value } } })
        // };
        return (
            <div>
                <Sticke><img src={icon} alt="" /></Sticke>
                <Header className="img">
                    <div>
                        <H1>Free Shipping for all orders over $100</H1>
                        <Hr />
                        <Div>
                            <Mbox>
                                <H2>Shop</H2>
                                <H2>About</H2>
                                <H2>Suncare 101</H2>
                            </Mbox>
                            <Img src={H} alt="" />
                            <Mbox>
                                <H2>Account</H2>
                                <H2>Search</H2>
                                <H2>Cart (0)</H2>
                            </Mbox>
                        </Div>
                    </div>
                    <Pbox>
                        <H2>At vero eoset</H2>
                        <H3>Lorem ipsum de dolor amet</H3>
                        <Btn>SHOP NOW</Btn>
                    </Pbox>
                </Header>
                <ZZZ>
                    <SS>
                    {this.state.list.map((value, id) => (
                        <Mini key={id}>
                            <h1>
                                <img src={value.img} width="343px" height="366px" alt="" />
                            </h1>
                            <Hr/>
                            <Sss><Pp>+</Pp><Pp>Quick ShoP</Pp></Sss >
                            <SSS>
                                <PP>{value.name}</PP>
                                <PP >${value.narx}.00</PP>
                            </SSS>
                        </Mini>
                    ))}
                    </SS>
                </ZZZ>
            </div>
        )
    }
}

export default Section;
