export interface NewMessageFormValues {
    title: string;
    content: string;
    user: string;
    urgency: number;
    viewed: boolean;
}

export interface Message {
    title: string;
    content: string;
    user: string;
    urgency: number;
    viewed: boolean;
}

