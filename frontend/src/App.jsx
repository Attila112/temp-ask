import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import AllQuestions from "./pages/AllQuestions.jsx";
import Users from "./pages/Users.jsx";
import AnswersByQuestion from "./pages/AnswersByQuestion.jsx";
import AnswersByQuestionLogOut from "./pages/AnswersByQuestionLogOut.jsx"
import CreateQuestion from "./pages/CreateQuestion.jsx";
import {useEffect, useState} from "react";
import Login from "./pages/Login.jsx";
import HomLogOut from "./pages/HomLogOut.jsx";
import LayoutLogOut from "./layout/LayOutLogOut.jsx";

async function fetchUserLogIn() {
    const user = await fetch("/api/users/user");
    const data = await user.json();
    return data
}

export default function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetchUserLogIn().then((res) => {
            setUser(res)
        });
    }, [])

    if (user != null) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/questions" element={<AllQuestions/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="questions/:id" element={<AnswersByQuestion/>}/>
                        <Route path="create-question/" element={<CreateQuestion/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutLogOut/>}>
                        <Route path="/" element={<HomLogOut/>}/>
                        <Route path="questions" element={<AllQuestions/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="questions/:id" element={<AnswersByQuestionLogOut/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}