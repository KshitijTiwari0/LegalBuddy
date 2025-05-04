import { ChatMessage } from '../types';

const API_URL = 'https://kst165.app.n8n.cloud/webhook/9b5f57c2-7d56-410b-9869-832e1111107e';

export async function sendMessage(message: string): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      console.error('Raw response status:', response.status);
      const rawResponse = await response.text();
      console.error('Raw response text:', rawResponse);
      throw new Error(`Error: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data.response || '';
    } else {
      const textData = await response.text();
      return textData;
    }
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}