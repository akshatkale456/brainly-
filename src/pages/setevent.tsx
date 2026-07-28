import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Calendar as CalendarIcon, Clock, Sparkles } from "lucide-react";
import { Badge } from "../components/ui/badge";

export const SetEvent = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [priority, setPriority] = useState("medium");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Event set: ${title} on ${date} at ${time}`);
    };

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-3xl mx-auto space-y-8">
            <div className="border-b border-ui-border pb-6">
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-ui-border">
                        <Sparkles className="w-3 h-3 mr-1.5 text-secondary" />
                        Schedule Manager
                    </Badge>
                </div>
                <h1 className="headline-xl md:text-5xl text-on-surface">
                    Set Event
                </h1>
                <p className="body-md text-zinc-400 mt-2">
                    Schedule and configure upcoming technical sessions, reminders, or deadlines.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="tech-card bg-surface-1 border border-ui-border p-6 md:p-8 rounded-2xl space-y-6 shadow-xl">
                <div className="space-y-2">
                    <Label htmlFor="event-title" className="label-caps text-zinc-400">Event Title</Label>
                    <Input
                        id="event-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Architecture Review Meeting"
                        className="bg-surface-2 border-ui-border h-11"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="event-date" className="label-caps text-zinc-400">Date</Label>
                        <div className="relative">
                            <Input
                                id="event-date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-surface-2 border-ui-border h-11 pl-10"
                                required
                            />
                            <CalendarIcon className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="event-time" className="label-caps text-zinc-400">Time</Label>
                        <div className="relative">
                            <Input
                                id="event-time"
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-surface-2 border-ui-border h-11 pl-10"
                                required
                            />
                            <Clock className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="event-priority" className="label-caps text-zinc-400">Priority Level</Label>
                    <Select
                        id="event-priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="bg-surface-2 border-ui-border h-11"
                    >
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="event-description" className="label-caps text-zinc-400">Description / Agenda (Optional)</Label>
                    <Textarea
                        id="event-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter key discussion points or notes for this event..."
                        className="bg-surface-2 border-ui-border min-h-[100px]"
                    />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => { setTitle(""); setDate(""); setTime(""); setDescription(""); }}
                        className="btn-secondary cursor-pointer"
                    >
                        Clear
                    </Button>
                    <Button
                        type="submit"
                        className="btn-primary px-6 shadow-md cursor-pointer flex items-center gap-2"
                    >
                        <CalendarIcon className="w-4 h-4" />
                        <span>Schedule Event</span>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SetEvent;
