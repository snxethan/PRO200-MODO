"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ConversationCardProps {
    id: string;
    title: string;
    description: string;
}

export default function ConversationCard({ id, title, description }: ConversationCardProps) {
    const router = useRouter();

    return (
        <Card
            className="cursor-pointer shadow-md hover:shadow-lg transition-all"
            onClick={() => router.push(`/chat/${id}`)}
        >
            <CardHeader>
                <CardTitle className="text-[#202C39]">{title}</CardTitle>
            </CardHeader>
            <CardContent className="bg-[#68B3DF] text-[#202C39] p-4 rounded-b-lg">
                <p>{description}</p>
            </CardContent>
        </Card>
    );
}
