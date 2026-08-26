import { useState } from "react";
import ConversationSidebar from "../components/ConversationSidebar";
import ConversationPanel from "../components/ConversationPanel";

export const ChatPage = () => {

    const [selectedConversation, setSelectedConversation] =
        useState(null);

    return (
        <div className="min-vh-100 bg-light">

            <div className="container-fluid p-3">

                <div
                    className="card border-0 shadow-sm overflow-hidden"
                    style={{
                        height: "calc(100vh - 1.5rem)",
                    }}
                >

                    <div className="row g-0 h-100">

                        {/* Left sidebar */}
                        <div className="col-12 col-md-4 col-lg-3 h-100 border-end">
                            <ConversationSidebar
                                selectedConversation={selectedConversation}
                                onSelectConversation={
                                    setSelectedConversation
                                }
                            />
                        </div>

                        {/* Right conversation */}
                        <div className="col h-100">
                            <ConversationPanel
                                conversation={selectedConversation}
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};