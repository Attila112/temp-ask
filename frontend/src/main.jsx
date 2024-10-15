import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import AllQuestions from "./pages/AllQuestions.jsx";
import Users from "./pages/Users.jsx";
import AnswersByQuestion from "./pages/AnswersByQuestion.jsx";
import CreateQuestion from "./pages/CreateQuestion.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/questions',
                element: <AllQuestions/>,
            },
            {
                path: '/users',
                element: <Users/>,
            },
            {
                path: '/questions/:id',
                element: <AnswersByQuestion />,
            },
            {
                path: '/create-question/',
                element: <CreateQuestion/>,
            },
        ]

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
