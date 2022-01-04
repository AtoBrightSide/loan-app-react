import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Button } from "../styles/Button.styled";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Results() {


    return (
        <>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000} //3 secs
            />



        </>
    );

}
