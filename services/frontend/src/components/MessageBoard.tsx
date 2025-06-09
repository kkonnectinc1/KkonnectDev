import { useState, useEffect } from 'react';
import './MessageBoard.css';

interface Message {
    id: number;
    text: string;
}

export function MessageBoard() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/messages');
            const data = await response.json();
            setMessages(data.messages);
        } catch {
            setError('Failed to load messages');
        }
    };

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            const response = await fetch('http://localhost:8000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newMessage }),
            });

            if (response.ok) {
                const message = await response.json();
                setMessages(prev => [...prev, message]);
                setNewMessage('');
            }
        } catch {
            setError('Failed to send message');
        }
    };

    return (
        <div className="message-board">
            <h2>Message Board</h2>
            {error && <p className="error">{error}</p>}
            
            <div className="messages">
                {messages.map(message => (
                    <div key={message.id} className="message">
                        {message.text}
                    </div>
                ))}
            </div>

            <form onSubmit={sendMessage} className="message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
