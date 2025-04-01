import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SignupinPage } from './components/ui/SignupinPage'
import { RecoilRoot } from 'recoil'
import { HomePage } from './components/ui/HomePage'
import { AppLayout } from './components/ui/AppLayout'
import { AddTask } from './components/ui/AddTask'
import { InboxPage } from './components/ui/Inbox'
import { ProtectedRoute } from './components/ui/ProtectedRoute'

function App() {

    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/signin" />} />
                    <Route path="signup" element={<SignupinPage page="Sign up" />} />
                    <Route path="signin" element={<SignupinPage page="Sign in" />} />

                    <Route path='/app' element={<ProtectedRoute />}>
                        <Route path="/app" element={<AppLayout><HomePage /></AppLayout>} />
                        <Route path="/app/addtask" element={<AppLayout><AddTask /></AppLayout>} />
                        <Route path="/app/inbox" element={<AppLayout><InboxPage /></AppLayout>} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App
