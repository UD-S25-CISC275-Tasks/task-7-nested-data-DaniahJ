import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Cupcake from "./cupcakeIMG.jpg";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>My website</h1>
            <p> Shellie Velasquez</p>
            <p>Hello World</p>
            Unordered List:
            <ul>
                <li>do laundry</li>
                <li>clean room</li>
                <li>complete homework</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <img
                style={{ width: "20%" }}
                src={Cupcake}
                alt="A picture of a cupcake"
            />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 4,
                                height: 7,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 4,
                                height: 7,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
