# Basic Authentication in MERN

## Setting Up React App (Vite)

1.  To set up a new React App using Vite, run the following command in your terminal:

    ```bash
    npm create vite@latest mern_auth --template react
    ```

    ```bash
    cd mern_auth
    ```

    ```bash
    npm install
    ```

    ```bash
    npm run dev
    ```

2.  Install the necessary dependencies::

    ```bash
    npm install react-router-dom bootstrap react-bootstrap bootstrap-icons
    ```

3.  Import Bootstrap CSS/JS/Icons in `src/main.jsx`:

    ```javascript
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap/dist/js/bootstrap.bundle.min.js";
    import "bootstrap-icons/font/bootstrap-icons.css";
    ```

4.  Create following Pages in `src/pages/` directory:

    -   `Home.jsx`
    -   `Login.jsx`
    -   `Register.jsx`

5.  Add Code to each page as in the code files.
6.  Edit App.jsx to include routing:

    ```javascript
    import React from "react";
    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import "./App.css";
    import Home from "./pages/Home";
    import Login from "./pages/Login";
    import Register from "./pages/Register";

    function App() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }

    export default App;
    ```

7.  **[Bonus]** Add Custom styles to the App.css file:

    ```css
    .home-card,
    a,
    .btn {
        transition: all 0.2s ease-in-out;
    }

    .home-card:hover,
    .btn:hover {
        transform: scale(1.03) rotate(2deg);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.75);
    }

    .home-card:active,
    a:active,
    .btn:active {
        box-shadow: inset 0 3px 18px rgba(0, 0, 0, 0.65), inset 0 2px 6px rgba(0, 0, 0, 0.45);
    }
    ```

8.  **[Bonus]** Add Custom styles to the index.css file:

    ```css
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
    #root {
        --heading-font: "Bebas Neue";
        --body-font: "Inter";
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--heading-font);
    }
    p,
    a,
    button,
    input,
    label,
    span,
    div,
    li,
    td,
    th {
        font-family: var(--body-font);
    }
    ```

_More Information Coming Soon..._
