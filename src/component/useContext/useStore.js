import React from "react";
import { StoreContext } from "../../component/useContext/store";

export const SomeComponent = () => {
    // dữ liệu dùng chung
    const { sharing } = React.useContext(StoreContext);
    const { help } = React.useContext(StoreContext);
    const { pairing } = React.useContext(StoreContext);
    // sharing[1](1000)
    console.log(sharing[0])
    console.log(help)
    console.log(pairing)

    return (
        <>
        {console.log("render")}
        <StoreContext.Consumer>
  {store=>console.log(store)}
</StoreContext.Consumer>
            <h1>Đoàn Văn hiệp</h1>
        </>
    )
};